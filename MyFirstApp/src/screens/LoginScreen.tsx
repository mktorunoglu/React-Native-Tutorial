import { StackNavigationProp } from '@react-navigation/stack';
import { observer } from 'mobx-react-lite';
import MyButton from '../components/buttons/Button';
import MyIconButton from '../components/buttons/IconButton';
import MyDivider from '../components/dividers/Divider';
import MyImage from '../components/images/Image';
import MyText from '../components/texts/Text';
import MyTextInput from '../components/texts/TextInput';
import MySafeAreaView from '../components/views/SafeAreaView';
import MyScrollView from '../components/views/ScrollView';
import MyView from '../components/views/View';
import { MyRouteProps } from '../constants/RouteProps';
import { MyAligns } from '../enums/Aligns';
import { MyColors } from '../enums/Colors';
import { MyFontWeights } from '../enums/FontWeights';
import { MyIcons } from '../enums/Icons';
import { MyKeyboardTypes } from '../enums/KeyboardTypes';
import { MyLocalizationTextKeys } from '../enums/LocalizationTextKeys';
import { MyRoutes } from '../enums/Routes';
import { MyTextAligns } from '../enums/TextAligns';
import MyObservableValueModel from '../models/ObservableValueModel';
import MyColorUtils from '../utils/ColorUtils';
import LocalizationUtils from '../utils/LocalizationUtils';

const isPasswordVisible = new MyObservableValueModel(false);

const MyLoginScreen: React.FC<{
    navigation: StackNavigationProp<MyRouteProps, MyRoutes.Login>,
}> = ({
    navigation,
}) => {
        return (
            <MySafeAreaView>
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
                                tooltip={LocalizationUtils.getLocalizedText(MyLocalizationTextKeys.Options)}
                                onPress={() => { }} />
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
                            text={LocalizationUtils.getLocalizedText(MyLocalizationTextKeys.AppNameFull)}
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
                                    <MyTextInput
                                        keyboardType={MyKeyboardTypes.Url}
                                        labelText={LocalizationUtils.getLocalizedText(MyLocalizationTextKeys.ServerAddress)}
                                        rightIcon={MyIcons.Web} />
                                    <MyView
                                        height={10} />
                                    <MyTextInput
                                        labelText={LocalizationUtils.getLocalizedText(MyLocalizationTextKeys.UserId)}
                                        rightIcon={MyIcons.AccountOutlined} />
                                    <MyView
                                        height={10} />
                                    <PasswordTextInput_ />
                                    <MyView
                                        height={20} />
                                    <MyButton
                                        icon={MyIcons.Login}
                                        text={LocalizationUtils.getLocalizedText(MyLocalizationTextKeys.Login)}
                                        onPress={() => navigation.replace(MyRoutes.Login)} />
                                </MyScrollView>
                            </MyView>
                        </MyView>
                        <MyView
                            height={20} />
                        <MyText
                            text={LocalizationUtils.getLocalizedText(MyLocalizationTextKeys.AppCopyrightDescription)}
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
            </MySafeAreaView >
        );
    };

const PasswordTextInput_ = observer(() => {
    return <MyTextInput
        isTextObscured={!isPasswordVisible.value}
        labelText={LocalizationUtils.getLocalizedText(MyLocalizationTextKeys.Password)}
        rightIcon={isPasswordVisible.value ? MyIcons.EyeOffOutlined : MyIcons.EyeOutlined}
        onPressRightIcon={() => isPasswordVisible.setValue(!isPasswordVisible.value)} />;
});

export default MyLoginScreen;
