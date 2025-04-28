import {StackNavigationProp} from '@react-navigation/stack';
import MyStatusBar from '../components/bars/StatusBar';
import MyResponseBuilder from '../components/builders/ResponseBuilder';
import MyText from '../components/texts/Text';
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
      isExpanded={true}
      isColumn={true}
      isCenterItems={true}
      backgroundColor={MyColorUtils.getColorWithOpacity(MyColors.Theme, 0.2)}>
      <MyStatusBar />
      <MyResponseBuilder
        response={MyFileService.listOwnedRepo}
        builder={response => {
          return <MyText text="Repos" />;
        }}
      />
    </MyView>
  );
};

export default MyReposScreen;
