import {observer} from 'mobx-react-lite';
import MyAlertBody from '../components/bodies/AlertBody';
import MyResponseBuilder from '../components/builders/ResponseBuilder';
import MyIconButton from '../components/buttons/IconButton';
import MySortingIconButton from '../components/buttons/SortingIconButton';
import MyDivider from '../components/dividers/Divider';
import MyRepoItem from '../components/items/RepoItem';
import MyFlatList from '../components/lists/FlatList';
import MySearchTextInput from '../components/texts/SearchTextInput';
import MyText from '../components/texts/Text';
import MyView from '../components/views/View';
import {MyColors} from '../enums/Colors';
import {MyIcons} from '../enums/Icons';
import {MySortingTypes} from '../enums/SortingTypes';
import MyObservableValueModel from '../models/ObservableValueModel';
import MyRepoModel from '../models/RepoModel';
import MyFileService from '../services/FileService';
import MyFilterUtils from '../utils/FilterUtils';
import MyLocalizationUtils from '../utils/LocalizationUtils';
import MySortingUtils from '../utils/SortingUtils';

const MyReposBodyScreen = () => {
  const searchText = new MyObservableValueModel('');
  const RepoItemList_ = observer(({repoList}: {repoList: MyRepoModel[]}) => {
    const filteredRepoList = repoList.filter(repo => {
      return MyFilterUtils.isTextListContainsSearchText({
        textList: [repo.repoName],
        searchText: searchText.value,
      });
    });
    const isFilteredRepoListEmpty = filteredRepoList.length == 0;
    const isSearchTextEmpty = searchText.value.trim() == '';
    const isRepoListEmpty = isFilteredRepoListEmpty && isSearchTextEmpty;
    filteredRepoList.sort((a, b) => {
      return MySortingUtils.compareStrings(a.repoName, b.repoName);
    });
    if (
      MySortingUtils.sortingType.value != MySortingTypes.AlphabeticalAscending
    ) {
      filteredRepoList.sort((a, b) => {
        switch (MySortingUtils.sortingType.value) {
          case MySortingTypes.AlphabeticalDescending:
            return MySortingUtils.compareStrings(b.repoName, a.repoName);
          case MySortingTypes.LastUpdateAscending:
            return MySortingUtils.compareNumbers(
              a.lastModified,
              b.lastModified,
            );
          case MySortingTypes.LastUpdateDescending:
            return MySortingUtils.compareNumbers(
              b.lastModified,
              a.lastModified,
            );
          case MySortingTypes.SizeAscending:
            return MySortingUtils.compareNumbers(a.size, b.size);
          default:
            return MySortingUtils.compareNumbers(b.size, a.size);
        }
      });
    }
    return (
      <MyView isColumn isExpanded>
        <MyView isRow isCenterItems backgroundColor={MyColors.White}>
          <MyView isExpanded>
            {isRepoListEmpty ? (
              <MyView paddingHorizontal={15}>
                <MyText
                  text={MyLocalizationUtils.getLocalizedAddNewRepoText()}
                />
              </MyView>
            ) : (
              <MySearchTextInput
                onChangeText={text => {
                  searchText.setValue(text);
                }}
              />
            )}
          </MyView>
          <MyIconButton
            icon={MyIcons.Add}
            tooltip={MyLocalizationUtils.getLocalizedAddNewRepoText()}
            onPress={() => {}}
          />
          {!isRepoListEmpty && <MySortingIconButton />}
        </MyView>
        <MyDivider />
        {isFilteredRepoListEmpty ? (
          <MyAlertBody
            text={
              isSearchTextEmpty
                ? MyLocalizationUtils.getLocalizedThereIsNoRepoYetText()
                : MyLocalizationUtils.getLocalizedThereIsNoRepoWithSearchedNameText()
            }
          />
        ) : (
          <MyView isExpanded>
            <MyFlatList
              data={filteredRepoList}
              keyExtractor={(item, index) => {
                return item.repoId ?? index;
              }}
              renderItem={({item}) => {
                return <MyRepoItem repo={item} />;
              }}
              padding={5}
            />
          </MyView>
        )}
      </MyView>
    );
  });
  return (
    <MyView isExpanded>
      <MyResponseBuilder
        response={MyFileService.listOwnedRepo}
        builder={response => {
          return <RepoItemList_ repoList={response.data} />;
        }}
      />
    </MyView>
  );
};

export default MyReposBodyScreen;
