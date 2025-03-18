import React from 'react';
import MyDivider from '../components/dividers/Divider';
import MyImage from '../components/images/Image';
import MyText from '../components/texts/Text';
import MySafeAreaView from '../components/views/SafeAreaView';
import MyView from '../components/views/View';
import { MyAligns } from '../enums/Aligns';
import { MyColors } from '../enums/Colors';
import { MyFontWeights } from '../enums/FontWeights';
import ColorUtils from '../utils/ColorUtils';

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
                    alignItems={MyAligns.Center}
                    backgroundColor={ColorUtils.getColorWithOpacity(MyColors.Theme, 0.2)}>
                    <MyView
                        isColumn={true}
                        isExpanded={true}>
                        <MyView
                            isExpanded={true}>
                            <MyText
                                text="4" />
                        </MyView>
                    </MyView>
                    <MyView
                        height={20} />
                    <MyText
                        text="Copyright © 2023, Tüm Hakları Saklıdır"
                        fontSize={12}
                        color={ColorUtils.getColorWithOpacity(MyColors.Black, 0.5)}
                        fontWeight={MyFontWeights.W300} />
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
        </MySafeAreaView>
    );
};

export default LoginScreen;
