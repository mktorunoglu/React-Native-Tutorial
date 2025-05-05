import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {MyRouteProps} from '../../constants/RouteProps';
import {MyColors} from '../../enums/Colors';
import {MyIcons} from '../../enums/Icons';
import {MyRoutes} from '../../enums/Routes';
import MyAuthenticationUtils from '../../utils/AuthenticationUtils';
import MyLocalizationUtils from '../../utils/LocalizationUtils';
import MyModalUtils from '../../utils/ModalUtils';
import MyModalSelectionButton from '../buttons/ModalSelectionButton';
import MyModalHeader from '../headers/ModalHeader';
import MyChangeLanguageModal from './ChangeLanguageModal';
import MyModal from './Modal';
import MyProgressModal from './ProgressModal';

const MyOptionsModal = ({isLoginScreen = false}: {isLoginScreen?: boolean}) => {
  const navigation = useNavigation<StackNavigationProp<MyRouteProps>>();
  return (
    <MyModal>
      <MyModalHeader text={MyLocalizationUtils.getLocalizedOptionsText()} />
      <MyModalSelectionButton
        icon={MyIcons.Earth}
        text={MyLocalizationUtils.getLocalizedChangeLanguageText()}
        onPress={() =>
          MyModalUtils.showModal({
            modal: <MyChangeLanguageModal isLoginScreen={isLoginScreen} />,
          })
        }
      />
      {!isLoginScreen && (
        <MyModalSelectionButton
          color={MyColors.Red}
          icon={MyIcons.Logout}
          text={MyLocalizationUtils.getLocalizedLogoutText()}
          onPress={async () => {
            MyModalUtils.showModal({modal: <MyProgressModal />});
            await MyAuthenticationUtils.logout({
              navigateToLoginScreen: () => navigation.replace(MyRoutes.Login),
            });
            MyModalUtils.hideModal();
          }}
        />
      )}
    </MyModal>
  );
};

export default MyOptionsModal;
