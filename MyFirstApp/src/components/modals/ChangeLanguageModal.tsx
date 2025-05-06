import {StackNavigationProp} from '@react-navigation/stack';
import {MyRouteProps} from '../../constants/RouteProps';
import {MyLocalizations} from '../../enums/Localizations';
import {MyRoutes} from '../../enums/Routes';
import MyLocalizationUtils from '../../utils/LocalizationUtils';
import MyModalUtils from '../../utils/ModalUtils';
import MyModalSelectionButton from '../buttons/ModalSelectionButton';
import MyModalHeader from '../headers/ModalHeader';
import MyModal from './Modal';
import MyProgressModal from './ProgressModal';

const MyChangeLanguageModal = ({
  navigation,
  isLoginScreen,
}: {
  navigation: StackNavigationProp<MyRouteProps>;
  isLoginScreen: boolean;
}) => {
  return (
    <MyModal>
      <MyModalHeader
        text={MyLocalizationUtils.getLocalizedChangeLanguageText()}
      />
      {Object.values(MyLocalizations).map(localization => (
        <MyModalSelectionButton
          key={localization}
          isSelected={MyLocalizationUtils.localization == localization}
          text={
            {
              [MyLocalizations.English]:
                MyLocalizationUtils.getLocalizedEnglishText(),
              [MyLocalizations.Turkish]:
                MyLocalizationUtils.getLocalizedTurkishText(),
            }[localization]
          }
          onPress={async () => {
            MyModalUtils.showModal({modal: <MyProgressModal />});
            await MyLocalizationUtils.setLocalization(localization);
            MyModalUtils.hideModal();
            navigation.replace(
              isLoginScreen ? MyRoutes.Login : MyRoutes.Profile,
            );
          }}
        />
      ))}
    </MyModal>
  );
};

export default MyChangeLanguageModal;
