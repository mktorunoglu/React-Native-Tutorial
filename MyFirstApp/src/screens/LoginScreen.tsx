import {StackNavigationProp} from '@react-navigation/stack';
import {observer} from 'mobx-react-lite';
import MyButton from '../components/buttons/Button';
import MyIconButton from '../components/buttons/IconButton';
import MyCard from '../components/cards/Card';
import MyDivider from '../components/dividers/Divider';
import MyImage from '../components/images/Image';
import MyOptionsModal from '../components/modals/OptionsModal';
import MyProgressModal from '../components/modals/ProgressModal';
import MyText from '../components/texts/Text';
import MyTextInput from '../components/texts/TextInput';
import MySafeAreaView from '../components/views/SafeAreaView';
import MyScrollView from '../components/views/ScrollView';
import MyView from '../components/views/View';
import {MyRouteProps} from '../constants/RouteProps';
import {MyAligns} from '../enums/Aligns';
import {MyColors} from '../enums/Colors';
import {MyFontWeights} from '../enums/FontWeights';
import {MyIcons} from '../enums/Icons';
import {MyKeyboardTypes} from '../enums/KeyboardTypes';
import {MyRoutes} from '../enums/Routes';
import {MyTextAligns} from '../enums/TextAligns';
import {MyUrls} from '../enums/Urls';
import MyObservableValueModel from '../models/ObservableValueModel';
import MyAuthenticationUtils from '../utils/AuthenticationUtils';
import MyColorUtils from '../utils/ColorUtils';
import MyLocalizationUtils from '../utils/LocalizationUtils';
import MyModalUtils from '../utils/ModalUtils';
import MySnackbarUtils from '../utils/SnackbarUtils';

const serverAddress = new MyObservableValueModel<string>(
  MyUrls.DefaultServerAddress,
);
const userId = new MyObservableValueModel('');
const password = new MyObservableValueModel('');
const isPasswordVisible = new MyObservableValueModel(false);

const MyLoginScreen = ({
  navigation,
}: {
  navigation: StackNavigationProp<MyRouteProps>;
}) => {
  return (
    <MyView isColumn isExpanded>
      <MySafeAreaView safeOnlyTop />
      <MyView height="30%">
        <MyView isCenterItems>
          <MyImage
            path={require('../../assets/logos/logo_kdpp.png')}
            height="100%"
            width="70%"
          />
        </MyView>
        <MyView zIndex={1} alignItems={MyAligns.FlexEnd}>
          <MyIconButton
            icon={MyIcons.MoreVertical}
            tooltip={MyLocalizationUtils.getLocalizedOptionsText()}
            onPress={() =>
              MyModalUtils.showModal({
                modal: <MyOptionsModal isLoginScreen={true} />,
              })
            }
          />
        </MyView>
      </MyView>
      <MyDivider />
      <MyView
        isExpanded
        isColumn
        paddingHorizontal={20}
        alignItems={MyAligns.Center}
        backgroundColor={MyColorUtils.getColorWithOpacity(MyColors.Theme, 0.2)}>
        <MyView height={20} />
        <MyText
          text={MyLocalizationUtils.getLocalizedAppNameFullText()}
          fontSize={16}
          color={MyColors.Theme}
          fontWeight={MyFontWeights.Bold}
          textAlign={MyTextAligns.Center}
        />
        <MyView height={20} />
        <MyView isExpanded>
          <MyCard>
            <MyScrollView padding={20}>
              <ServerAddressTextInput_ />
              <MyView height={10} />
              <MyTextInput
                labelText={MyLocalizationUtils.getLocalizedUserIdText()}
                rightIcon={MyIcons.AccountOutlined}
                onChangeText={text => userId.setValue(text)}
              />
              <MyView height={10} />
              <PasswordTextInput_ />
              <MyView height={20} />
              <LoginButton_ navigation={navigation} />
            </MyScrollView>
          </MyCard>
        </MyView>
        <MyView height={20} />
        <MyText
          text={MyLocalizationUtils.getLocalizedAppCopyrightDescriptionText()}
          fontSize={12}
          color={MyColorUtils.getColorWithOpacity(MyColors.Black, 0.5)}
          fontWeight={MyFontWeights.W300}
          textAlign={MyTextAligns.Center}
        />
        <MyView height={10} />
        <MyImage
          path={require('../../assets/logos/logo_turksat.png')}
          height={20}
          width="100%"
        />
        <MyView height={20} />
      </MyView>
      <MyDivider />
      <MySafeAreaView safeOnlyBottom />
    </MyView>
  );
};

const LoginButton_ = observer(
  ({navigation}: {navigation: StackNavigationProp<MyRouteProps>}) => {
    return (
      <MyButton
        isDisable={
          serverAddress.value.length == 0 ||
          userId.value.length == 0 ||
          password.value.length == 0
        }
        icon={MyIcons.Login}
        text={MyLocalizationUtils.getLocalizedLoginText()}
        onPress={async () => {
          MyModalUtils.showModal({modal: <MyProgressModal />});
          const isLoginSuccessful = await MyAuthenticationUtils.login({
            serverAddress: serverAddress.value,
            userId: userId.value,
            password: password.value,
            navigateToDashboardScreen: () =>
              navigation.replace(MyRoutes.Dashboard),
          });
          MyModalUtils.hideModal();
          if (!isLoginSuccessful) {
            MySnackbarUtils.showSnackbar({
              text: MyLocalizationUtils.getLocalizedCheckLoginInformationText(),
            });
          }
        }}
      />
    );
  },
);

const ServerAddressTextInput_ = observer(() => {
  return (
    <MyTextInput
      keyboardType={MyKeyboardTypes.Url}
      labelText={MyLocalizationUtils.getLocalizedServerAddressText()}
      rightIcon={MyIcons.Web}
      value={serverAddress.value}
      onChangeText={text => serverAddress.setValue(text)}
    />
  );
});

const PasswordTextInput_ = observer(() => {
  return (
    <MyTextInput
      isTextObscured={!isPasswordVisible.value}
      labelText={MyLocalizationUtils.getLocalizedPasswordText()}
      rightIcon={
        isPasswordVisible.value ? MyIcons.EyeOffOutlined : MyIcons.EyeOutlined
      }
      onPressRightIcon={() =>
        isPasswordVisible.setValue(!isPasswordVisible.value)
      }
      onChangeText={text => password.setValue(text)}
    />
  );
});

export default MyLoginScreen;
