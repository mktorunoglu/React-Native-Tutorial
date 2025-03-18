import React from 'react';
import MyDivider from '../components/dividers/Divider';
import MyImage from '../components/images/Image';
import MyText from '../components/texts/Text';
import MySafeAreaView from '../components/views/SafeAreaView';
import MyView from '../components/views/View';
import { MyColors } from '../enums/Colors';
import ColorUtils from '../utils/ColorUtils';

const LoginScreen: React.FC = () => {
    return (
        <MySafeAreaView >
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
                    backgroundColor={ColorUtils.getColorWithOpacity(MyColors.Theme, 0.2)}>
                    <MyText
                        text="4" />
                </MyView>
            </MyView >
        </MySafeAreaView >
    );
};

export default LoginScreen;
