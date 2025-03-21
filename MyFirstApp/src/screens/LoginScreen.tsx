import { observer } from "mobx-react-lite";
import MyButton from '../components/buttons/Button';
import MyDivider from '../components/dividers/Divider';
import MyImage from '../components/images/Image';
import MyText from '../components/texts/Text';
import MyTextInput from '../components/texts/TextInput';
import MySafeAreaView from '../components/views/SafeAreaView';
import MyScrollView from '../components/views/ScrollView';
import MyView from '../components/views/View';
import { MyAligns } from '../enums/Aligns';
import { MyColors } from '../enums/Colors';
import { MyFontWeights } from '../enums/FontWeights';
import { MyIcons } from '../enums/Icons';
import { MyKeyboardTypes } from '../enums/KeyboardTypes';
import { MyTextAligns } from '../enums/TextAligns';
import ObservableValueModel from '../models/ObservableValueModel';
import ColorUtils from '../utils/ColorUtils';

const isPasswordVisible = new ObservableValueModel(false);

const LoginScreen: React.FC = () => {
    return (
        <MySafeAreaView>
            <MyView
                isColumn={true}
                isExpanded={true}>
                <MyView
                    isCenterItems={true}
                    height="30%">
                    <MyImage
                        path={require("../../assets/logos/logo_kdpp.png")}
                        height="100%"
                        width="70%" />
                </MyView>
                <MyDivider />
                <MyView
                    isExpanded={true}
                    isColumn={true}
                    paddingHorizontal={20}
                    alignItems={MyAligns.Center}
                    backgroundColor={ColorUtils.getColorWithOpacity(MyColors.Theme, 0.2)}>
                    <MyView
                        height={20} />
                    <MyText
                        text="Kurumsal Dosya Paylaşım Platformu"
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
                            borderColor={ColorUtils.getColorWithOpacity(MyColors.Grey, 0.3)}
                            backgroundColor={MyColors.White}>
                            <MyScrollView
                                padding={20}>
                                <MyTextInput
                                    keyboardType={MyKeyboardTypes.Url}
                                    labelText="Sunucu Adresi"
                                    rightIcon={MyIcons.Web} />
                                <MyView
                                    height={10} />
                                <MyTextInput
                                    labelText="Kullanıcı Kimliği"
                                    rightIcon={MyIcons.AccountOutlined} />
                                <MyView
                                    height={10} />
                                <PasswordTextInput_ />
                                <MyView
                                    height={20} />
                                <MyButton
                                    icon={MyIcons.Login}
                                    text="Giriş Yap"
                                    onPress={() => { }} />
                            </MyScrollView>
                        </MyView>
                    </MyView>
                    <MyView
                        height={20} />
                    <MyText
                        text="Copyright © 2023, Tüm Hakları Saklıdır"
                        fontSize={12}
                        color={ColorUtils.getColorWithOpacity(MyColors.Black, 0.5)}
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
        labelText="Şifre"
        rightIcon={isPasswordVisible.value ? MyIcons.EyeOffOutlined : MyIcons.EyeOutlined}
        onPressRightIcon={() => isPasswordVisible.setValue(!isPasswordVisible.value)} />;
});

export default LoginScreen;
