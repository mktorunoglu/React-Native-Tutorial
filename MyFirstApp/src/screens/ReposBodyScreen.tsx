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
