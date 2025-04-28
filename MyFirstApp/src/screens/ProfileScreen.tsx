import {StackNavigationProp} from '@react-navigation/stack';
import MyStatusBar from '../components/bars/StatusBar';
import MyIconButton from '../components/buttons/IconButton';
import MyView from '../components/views/View';
import {MyRouteProps} from '../constants/RouteProps';
import {MyColors} from '../enums/Colors';
import {MyIcons} from '../enums/Icons';
import {MyLocalizationTextKeys} from '../enums/LocalizationTextKeys';
import {MyRoutes} from '../enums/Routes';
import MyAuthenticationUtils from '../utils/AuthenticationUtils';
import MyColorUtils from '../utils/ColorUtils';
import MyLocalizationUtils from '../utils/LocalizationUtils';
import MyModalUtils from '../utils/ModalUtils';

const MyProfileScreen = ({
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
      <MyIconButton
        icon={MyIcons.Logout}
        tooltip={MyLocalizationUtils.getLocalizedText(
          MyLocalizationTextKeys.Logout,
        )}
        onPress={async () => {
          MyModalUtils.showProgressModal();
          await MyAuthenticationUtils.logout({
            navigateToLoginScreen: () => navigation.replace(MyRoutes.Login),
          });
          MyModalUtils.hideModal();
        }}
      />
    </MyView>
  );
};

export default MyProfileScreen;
