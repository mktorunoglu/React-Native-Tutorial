import {MyColors} from '../../enums/Colors';
import {MyIcons} from '../../enums/Icons';
import MyAuthenticationUtils from '../../utils/AuthenticationUtils';
import MyLocalizationUtils from '../../utils/LocalizationUtils';
import MyModalUtils from '../../utils/ModalUtils';
import MyModalSelectionButton from '../buttons/ModalSelectionButton';
import MyModalHeader from '../headers/ModalHeader';
import MyChangeLanguageModal from './ChangeLanguageModal';
import MyModal from './Modal';
import MyProgressModal from './ProgressModal';

const MyOptionsModal = ({
  onChangeLanguage,
  onLogout,
  isLoginScreen = false,
}: {
  onChangeLanguage: () => void;
  onLogout?: () => void;
  isLoginScreen?: boolean;
}) => {
  return (
    <MyModal>
      <MyModalHeader text={MyLocalizationUtils.getLocalizedOptionsText()} />
      <MyModalSelectionButton
        icon={MyIcons.Earth}
        text={MyLocalizationUtils.getLocalizedChangeLanguageText()}
        onPress={() =>
          MyModalUtils.showModal({
            modal: <MyChangeLanguageModal onChange={onChangeLanguage} />,
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
              navigateToLoginScreen: onLogout!,
            });
            MyModalUtils.hideModal();
          }}
        />
      )}
    </MyModal>
  );
};

export default MyOptionsModal;
