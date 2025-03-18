import React from 'react';
import MyImage from '../components/images/Image';
import MyText from '../components/texts/Text';
import MySafeAreaView from '../components/views/SafeAreaView';
import MyView from '../components/views/View';
import { MyColors } from '../enums/Colors';

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
                <MyView
                    isExpanded={true}
                    backgroundColor={MyColors.Theme}>
                    <MyText
                        text="4" />
                </MyView>
            </MyView >
        </MySafeAreaView >
    );
};

export default LoginScreen;
