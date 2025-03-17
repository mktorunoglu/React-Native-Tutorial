import React from 'react';
import MyImage from '../components/images/Image';
import MyText from '../components/texts/Text';
import MyView from '../components/views/View';
import { MyColors } from '../enums/Colors';

const LoginScreen: React.FC = () => {
    return (
        <MyView
            isColumn={true}
            isExpanded={true}>
            <MyView
                height={100}
                backgroundColor={MyColors.Transparent}>
                <MyText
                    text="1" />
            </MyView>
            <MyView
                backgroundColor={MyColors.Theme}>
                <MyText
                    text="2" />
            </MyView>
            <MyView
                isExpanded={true}
                backgroundColor={MyColors.Grey}>
                <MyImage
                    path={require("../../assets/logos/logo_kdpp.png")}
                    height={100} />
            </MyView>
            <MyView
                backgroundColor={MyColors.Theme}>
                <MyText
                    text="4" />
            </MyView>
        </MyView >
    );
};

export default LoginScreen;
