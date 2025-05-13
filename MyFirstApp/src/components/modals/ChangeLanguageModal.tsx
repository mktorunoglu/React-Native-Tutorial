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
    ].map(item => (
      <MyModalSelectionButton
        key={item.value}
        isSelected={MyLocalizationUtils.localization == item.value}
        text={item.text}
        onPress={async () => {
          MyModalUtils.showProgressModal();
          await MyLocalizationUtils.setLocalization(item.value);
          MyModalUtils.hideProgressModal();
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
