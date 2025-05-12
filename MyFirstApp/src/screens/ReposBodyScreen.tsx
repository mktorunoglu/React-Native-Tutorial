import {observer} from 'mobx-react-lite';
import MyAlertBody from '../components/bodies/AlertBody';
import MyResponseBuilder from '../components/builders/ResponseBuilder';
import MyIconButton from '../components/buttons/IconButton';
import MySortingIconButton from '../components/buttons/SortingIconButton';
import MyDivider from '../components/dividers/Divider';
import MyRepoItem from '../components/items/RepoItem';
import MyFlatList from '../components/lists/FlatList';
import MyRepoInputModal from '../components/modals/RepoInputModal';
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
import MyModalUtils from '../utils/ModalUtils';
import MySortingUtils from '../utils/SortingUtils';

const MyReposBodyScreen = ({
  refreshContentFunctionList = [],
}: {
  refreshContentFunctionList?: (() => void)[];
}) => {
  const repoList = new MyObservableValueModel<MyRepoModel[]>([]);
  const getContentFunction = () => MyFileService.listOwnedRepo();
  const refreshContent = async () => {
    const response = await getContentFunction();
    if (response.isSuccessful) {
      repoList.setValue(response.data);
    }
  };
  const getRefreshContentFunctionList = () => [
    ...refreshContentFunctionList,
    refreshContent,
  ];
  const searchText = new MyObservableValueModel('');
  const RepoItemList_ = observer(() => {
    const filteredRepoList = repoList.value.filter(repo =>
      MyFilterUtils.isTextListContainsSearchText({
        textList: [repo.repoName],
        searchText: searchText.value,
      }),
    );
    const isFilteredRepoListEmpty = filteredRepoList.length == 0;
    const isSearchTextEmpty = searchText.value.trim() == '';
    const isRepoListEmpty = isFilteredRepoListEmpty && isSearchTextEmpty;
    filteredRepoList.sort((a, b) =>
      MySortingUtils.compareStrings(a.repoName, b.repoName),
    );
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
                onChangeText={text => searchText.setValue(text)}
              />
            )}
          </MyView>
          <MyIconButton
            icon={MyIcons.Add}
            tooltip={MyLocalizationUtils.getLocalizedAddNewRepoText()}
            onPress={() =>
              MyModalUtils.showModal({
                modal: (
                  <MyRepoInputModal
                    refreshContentFunctionList={getRefreshContentFunctionList()}
                  />
                ),
              })
            }
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
              keyExtractor={(item, index) => item.repoId ?? index}
              renderItem={({item}) => (
                <MyRepoItem
                  refreshContentFunctionList={getRefreshContentFunctionList()}
                  repo={item}
                />
              )}
              padding={5}
              paddingBottom={5}
            />
          </MyView>
        )}
      </MyView>
    );
  });
  return (
    <MyView isExpanded>
      <MyResponseBuilder
        response={getContentFunction}
        builder={response => {
          repoList.setValue(response.data);
          return <RepoItemList_ />;
        }}
      />
    </MyView>
  );
};

export default MyReposBodyScreen;
