import {StackNavigationProp} from '@react-navigation/stack';
import {MyRouteProps} from '../../constants/RouteProps';
import {MyColors} from '../../enums/Colors';
import {MyIcons} from '../../enums/Icons';
import MyAuthenticationUtils from '../../utils/AuthenticationUtils';
import MyLocalizationUtils from '../../utils/LocalizationUtils';
import MyModalUtils from '../../utils/ModalUtils';
import MyModalSelectionButton from '../buttons/ModalSelectionButton';
import MyModalHeader from '../headers/ModalHeader';
import MyCardModalScaffold from '../scaffolds/CardModalScaffold';
import MyAlertModal from './AlertModal';
import MyChangeLanguageModal from './ChangeLanguageModal';

const MyOptionsModal = ({
  navigation,
  isLoginScreen = false,
}: {
  navigation: StackNavigationProp<MyRouteProps>;
  isLoginScreen?: boolean;
}) => (
  <MyCardModalScaffold>
    <MyModalHeader titleText={MyLocalizationUtils.getLocalizedOptionsText()} />
    <MyModalSelectionButton
      icon={MyIcons.Earth}
      text={MyLocalizationUtils.getLocalizedChangeLanguageText()}
      onPress={() => {
        MyModalUtils.hideLastModal();
        MyModalUtils.showModal({
          modal: (
            <MyChangeLanguageModal
              navigation={navigation}
              isLoginScreen={isLoginScreen}
            />
          ),
        });
      }}
    />
    {!isLoginScreen && (
      <MyModalSelectionButton
        icon={MyIcons.Logout}
        text={MyLocalizationUtils.getLocalizedLogoutText()}
        color={MyColors.Red}
        onPress={() => {
          MyModalUtils.hideLastModal();
          MyModalUtils.showModal({
            modal: (
              <MyAlertModal
                titleText={MyLocalizationUtils.getLocalizedAccountWillBeLoggedOutText()}
                messageText={MyLocalizationUtils.getLocalizedAreYouSureText()}
                buttonText={MyLocalizationUtils.getLocalizedLogoutText()}
                buttonColor={MyColors.Red}
                buttonOnPress={async () => {
                  MyModalUtils.showProgressModal();
                  await MyAuthenticationUtils.logout({
                    navigation: navigation,
                  });
                  MyModalUtils.hideProgressModal();
                  MyModalUtils.hideLastModal();
                }}
              />
            ),
          });
        }}
      />
    )}
  </MyCardModalScaffold>
);

export default MyOptionsModal;
