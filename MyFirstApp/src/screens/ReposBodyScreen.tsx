import {observer} from 'mobx-react-lite';
import MyResponseBuilder from '../components/builders/ResponseBuilder';
import MySortingIconButton from '../components/buttons/SortingIconButton';
import MyDivider from '../components/dividers/Divider';
import MyRepoItem from '../components/items/RepoItem';
import MyFlatList from '../components/lists/FlatList';
import MySearchTextInput from '../components/texts/SearchTextInput';
import MyView from '../components/views/View';
import {MyColors} from '../enums/Colors';
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
    const filteredRepoList = repoList.filter(repo =>
      MyFilterUtils.isTextListContainsSearchText({
        textList: [repo.repoName],
        searchText: searchText.value,
      }),
    );
    filteredRepoList.sort((a, b) =>
      (a.repoName ?? '').localeCompare(
        b.repoName ?? '',
        MyLocalizationUtils.localization,
      ),
    );
    if (
      MySortingUtils.sortingType.value != MySortingTypes.AlphabeticalAscending
    ) {
      filteredRepoList.sort((a, b) => {
        switch (MySortingUtils.sortingType.value) {
          case MySortingTypes.AlphabeticalDescending:
            return (b.repoName ?? '').localeCompare(
              a.repoName ?? '',
              MyLocalizationUtils.localization,
            );
          case MySortingTypes.LastUpdateAscending:
            return (a.lastModified ?? 0) - (b.lastModified ?? 0);
          case MySortingTypes.LastUpdateDescending:
            return (b.lastModified ?? 0) - (a.lastModified ?? 0);
          case MySortingTypes.SizeAscending:
            return (a.size ?? 0) - (b.size ?? 0);
          default:
            return (b.size ?? 0) - (a.size ?? 0);
        }
      });
    }
    return (
      <MyFlatList
        data={filteredRepoList}
        keyExtractor={(item, index) => item.repoId ?? index}
        renderItem={({item}) => <MyRepoItem repo={item} />}
        padding={5}
      />
    );
  });
  return (
    <MyView isColumn isExpanded>
      <MyView isRow backgroundColor={MyColors.White}>
        <MyView isExpanded>
          <MySearchTextInput onChangeText={text => searchText.setValue(text)} />
        </MyView>
        <MySortingIconButton />
      </MyView>
      <MyDivider />
      <MyView isExpanded>
        <MyResponseBuilder
          response={MyFileService.listOwnedRepo}
          builder={response => {
            return <RepoItemList_ repoList={response.data} />;
          }}
        />
      </MyView>
    </MyView>
  );
};

export default MyReposBodyScreen;
