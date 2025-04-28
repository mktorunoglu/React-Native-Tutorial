import {StackNavigationProp} from '@react-navigation/stack';
import MyResponseBuilder from '../components/builders/ResponseBuilder';
import MyRepoItem from '../components/items/RepoItem';
import MyFlatList from '../components/lists/FlatList';
import MySafeAreaView from '../components/views/SafeAreaView';
import MyView from '../components/views/View';
import {MyRouteProps} from '../constants/RouteProps';
import {MyColors} from '../enums/Colors';
import {MyRoutes} from '../enums/Routes';
import MyFileService from '../services/FileService';
import MyColorUtils from '../utils/ColorUtils';

const MyReposScreen = ({
  navigation,
}: {
  navigation: StackNavigationProp<MyRouteProps, MyRoutes.Home>;
}) => {
  return (
    <MyView
      isExpanded
      backgroundColor={MyColorUtils.getColorWithOpacity(MyColors.Theme, 0.2)}>
      <MySafeAreaView safeOnlyTop>
        <MyResponseBuilder
          response={MyFileService.listOwnedRepo}
          builder={response => {
            return (
              <MyFlatList
                data={response.data}
                keyExtractor={(item, index) => item.repoId ?? index}
                renderItem={({item}) => <MyRepoItem repo={item} />}
                padding={5}
              />
            );
          }}
        />
      </MySafeAreaView>
    </MyView>
  );
};

export default MyReposScreen;
