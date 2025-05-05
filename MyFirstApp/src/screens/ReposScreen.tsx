import {StackNavigationProp} from '@react-navigation/stack';
import {observer} from 'mobx-react-lite';
import MyHomeAppBar from '../components/bars/HomeAppBar';
import MyHomeNavigationBar from '../components/bars/HomeNavigationBar';
import MyResponseBuilder from '../components/builders/ResponseBuilder';
import MyDivider from '../components/dividers/Divider';
import MyRepoItem from '../components/items/RepoItem';
import MyFlatList from '../components/lists/FlatList';
import MySearchTextInput from '../components/texts/SearchTextInput';
import MyView from '../components/views/View';
import {MyRouteProps} from '../constants/RouteProps';
import {MyColors} from '../enums/Colors';
import {MyRoutes} from '../enums/Routes';
import MyObservableValueModel from '../models/ObservableValueModel';
import MyRepoModel from '../models/RepoModel';
import MyFileService from '../services/FileService';
import MyColorUtils from '../utils/ColorUtils';
import MyFilterUtils from '../utils/FilterUtils';

const searchText = new MyObservableValueModel('');

const MyReposScreen = ({
  navigation,
}: {
  navigation: StackNavigationProp<MyRouteProps>;
}) => {
  return (
    <MyView isColumn isExpanded>
      <MyHomeAppBar />
      <MySearchTextInput onChangeText={text => searchText.setValue(text)} />
      <MyDivider />
      <MyView
        isExpanded
        backgroundColor={MyColorUtils.getColorWithOpacity(MyColors.Theme, 0.2)}>
        <MyResponseBuilder
          response={MyFileService.listOwnedRepo}
          builder={response => {
            return <RepoItemList_ repoList={response.data} />;
          }}
        />
      </MyView>
      <MyHomeNavigationBar currentRoute={MyRoutes.Repos} />
    </MyView>
  );
};

const RepoItemList_ = observer(({repoList}: {repoList: MyRepoModel[]}) => {
  const filteredRepoList = repoList.filter(repo =>
    MyFilterUtils.isTextListContainsSearchText({
      textList: [repo.repoName],
      searchText: searchText.getValue(),
    }),
  );
  return (
    <MyFlatList
      data={filteredRepoList}
      keyExtractor={(item, index) => item.repoId ?? index}
      renderItem={({item}) => <MyRepoItem repo={item} />}
      padding={5}
    />
  );
});

export default MyReposScreen;
