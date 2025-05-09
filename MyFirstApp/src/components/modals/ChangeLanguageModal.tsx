import {StackNavigationProp} from '@react-navigation/stack';
import {MyRouteProps} from '../../constants/RouteProps';
import {MyLocalizations} from '../../enums/Localizations';
import {MyNavigationBarRoutes} from '../../enums/NavigationBarRoutes';
import {MyRoutes} from '../../enums/Routes';
import MyModalSelectionButtonDataModel from '../../models/ModalSelectionButtonDataModel';
import MyLocalizationUtils from '../../utils/LocalizationUtils';
import MyModalUtils from '../../utils/ModalUtils';
import MyModalSelectionButton from '../buttons/ModalSelectionButton';
import MyModalHeader from '../headers/ModalHeader';
import MyCardModalScaffold from '../scaffolds/CardModalScaffold';
import MyProgressModal from './ProgressModal';

const MyChangeLanguageModal = ({
  navigation,
  isLoginScreen,
}: {
  navigation: StackNavigationProp<MyRouteProps>;
  isLoginScreen: boolean;
}) => (
  <MyCardModalScaffold>
    <MyModalHeader
      titleText={MyLocalizationUtils.getLocalizedChangeLanguageText()}
    />
    {[
      new MyModalSelectionButtonDataModel({
        value: MyLocalizations.English,
        text: MyLocalizationUtils.getLocalizedEnglishText(),
      }),
      new MyModalSelectionButtonDataModel({
        value: MyLocalizations.Turkish,
        text: MyLocalizationUtils.getLocalizedTurkishText(),
      }),
    ].map(buttonData => (
      <MyModalSelectionButton
        key={buttonData.value}
        isSelected={MyLocalizationUtils.localization == buttonData.value}
        text={buttonData.text}
        onPress={async () => {
          MyModalUtils.showModal({modal: <MyProgressModal />});
          await MyLocalizationUtils.setLocalization(buttonData.value);
          MyModalUtils.hideModal();
          if (isLoginScreen) {
            navigation.replace(MyRoutes.Login);
          } else {
            navigation.replace(MyRoutes.Home, {
              initialRoute: MyNavigationBarRoutes.Profile,
            });
          }
        }}
      />
    ))}
  </MyCardModalScaffold>
);

export default MyChangeLanguageModal;
