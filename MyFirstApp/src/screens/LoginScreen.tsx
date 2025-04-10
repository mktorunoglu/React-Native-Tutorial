import { StackNavigationProp } from "@react-navigation/stack";
import { observer } from "mobx-react-lite";
import MyButton from "../components/buttons/Button";
import MyIconButton from "../components/buttons/IconButton";
import MyDivider from "../components/dividers/Divider";
import MyImage from "../components/images/Image";
import MyOptionsModal from "../components/modals/OptionsModal";
import MyText from "../components/texts/Text";
import MyTextInput from "../components/texts/TextInput";
import MySafeAreaView from "../components/views/SafeAreaView";
import MyScrollView from "../components/views/ScrollView";
import MyView from "../components/views/View";
import { MyRouteProps } from "../constants/RouteProps";
import { MyAligns } from "../enums/Aligns";
import { MyColors } from "../enums/Colors";
import { MyFontWeights } from "../enums/FontWeights";
import { MyIcons } from "../enums/Icons";
import { MyKeyboardTypes } from "../enums/KeyboardTypes";
import { MyLocalizationTextKeys } from "../enums/LocalizationTextKeys";
import { MyRoutes } from "../enums/Routes";
import { MyTextAligns } from "../enums/TextAligns";
import { MyUrls } from "../enums/Urls";
import MyObservableValueModel from "../models/ObservableValueModel";
import MyAuthenticationUtils from "../utils/AuthenticationUtils";
import MyColorUtils from "../utils/ColorUtils";
import MyLocalizationUtils from "../utils/LocalizationUtils";
import MyModalUtils from "../utils/ModalUtils";
import MySnackbarUtils from "../utils/SnackbarUtils";

const serverAddress = new MyObservableValueModel<string>(MyUrls.DefaultServerAddress);
const userId = new MyObservableValueModel("");
const password = new MyObservableValueModel("");
const isPasswordVisible = new MyObservableValueModel(false);

const MyLoginScreen: React.FC<{
    navigation: StackNavigationProp<MyRouteProps, MyRoutes.Login>,
}> = ({
    navigation,
}) => {
        return <MySafeAreaView>
            <MyView
                isColumn={true}
                isExpanded={true}>
                <MyView
                    height="30%">
                    <MyView
                        isCenterItems={true}>
                        <MyImage
                            path={require("../../assets/logos/logo_kdpp.png")}
                            height="100%"
                            width="70%" />
                    </MyView>
                    <MyView
                        zIndex={1}
                        alignItems={MyAligns.FlexEnd}>
                        <MyIconButton
                            icon={MyIcons.MoreVertical}
                            tooltip={MyLocalizationUtils.getLocalizedText(MyLocalizationTextKeys.Options)}
                            onPress={() => MyModalUtils.showModal({
                                modal: <MyOptionsModal
                                    onChangeLanguage={() => navigation.replace(MyRoutes.Login)} />,
                            })} />
                    </MyView>
                </MyView>
                <MyDivider />
                <MyView
                    isExpanded={true}
                    isColumn={true}
                    paddingHorizontal={20}
                    alignItems={MyAligns.Center}
                    backgroundColor={MyColorUtils.getColorWithOpacity(MyColors.Theme, 0.2)}>
                    <MyView
                        height={20} />
                    <MyText
                        text={MyLocalizationUtils.getLocalizedText(MyLocalizationTextKeys.AppNameFull)}
                        fontSize={16}
                        color={MyColors.Theme}
                        fontWeight={MyFontWeights.Bold}
                        textAlign={MyTextAligns.Center} />
                    <MyView
                        height={20} />
                    <MyView
                        isExpanded={true}>
                        <MyView
                            borderRadius={10}
                            borderWidth={1}
                            borderColor={MyColorUtils.getColorWithOpacity(MyColors.Grey, 0.3)}
                            backgroundColor={MyColors.White}>
                            <MyScrollView
                                padding={20}>
                                <ServerAddressTextInput_ />
                                <MyView
                                    height={10} />
                                <MyTextInput
                                    labelText={MyLocalizationUtils.getLocalizedText(MyLocalizationTextKeys.UserId)}
                                    rightIcon={MyIcons.AccountOutlined}
                                    onChangeText={(text) => userId.value = text} />
                                <MyView
                                    height={10} />
                                <PasswordTextInput_ />
                                <MyView
                                    height={20} />
                                <LoginButton_
                                    navigation={navigation} />
                            </MyScrollView>
                        </MyView>
                    </MyView>
                    <MyView
                        height={20} />
                    <MyText
                        text={MyLocalizationUtils.getLocalizedText(MyLocalizationTextKeys.AppCopyrightDescription)}
                        fontSize={12}
                        color={MyColorUtils.getColorWithOpacity(MyColors.Black, 0.5)}
                        fontWeight={MyFontWeights.W300}
                        textAlign={MyTextAligns.Center} />
                    <MyView
                        height={10} />
                    <MyImage
                        path={require("../../assets/logos/logo_turksat.png")}
                        height={20}
                        width="100%" />
                    <MyView
                        height={20} />
                </MyView>
            </MyView>
        </MySafeAreaView>;
    };

const LoginButton_ = observer(({
    navigation,
}: {
    navigation: StackNavigationProp<MyRouteProps, MyRoutes.Login>,
}) => {
    return <MyButton
        isDisable={serverAddress.value.length == 0 || userId.value.length == 0 || password.value.length == 0}
        icon={MyIcons.Login}
        text={MyLocalizationUtils.getLocalizedText(MyLocalizationTextKeys.Login)}
        onPress={async () => {
            MyModalUtils.showProgressModal();
            const isLoginSuccessful = await MyAuthenticationUtils.login({
                serverAddress: serverAddress.value,
                userId: userId.value,
                password: password.value,
                navigateToHomeScreen: () => navigation.replace(MyRoutes.Home),
            });
            MyModalUtils.hideModal();
            if (!isLoginSuccessful) {
                MySnackbarUtils.showSnackbar({
                    text: MyLocalizationUtils.getLocalizedText(MyLocalizationTextKeys.CheckLoginInformation),
                });
            }
        }} />;
});

const ServerAddressTextInput_ = observer(() => {
    return <MyTextInput
        keyboardType={MyKeyboardTypes.Url}
        labelText={MyLocalizationUtils.getLocalizedText(MyLocalizationTextKeys.ServerAddress)}
        rightIcon={MyIcons.Web}
        value={serverAddress.value}
        onChangeText={(text) => serverAddress.value = text} />;
});

const PasswordTextInput_ = observer(() => {
    return <MyTextInput
        isTextObscured={!isPasswordVisible.value}
        labelText={MyLocalizationUtils.getLocalizedText(MyLocalizationTextKeys.Password)}
        rightIcon={isPasswordVisible.value ? MyIcons.EyeOffOutlined : MyIcons.EyeOutlined}
        onPressRightIcon={() => isPasswordVisible.value = !isPasswordVisible.value}
        onChangeText={(text) => password.value = text} />;
});

export default MyLoginScreen;
