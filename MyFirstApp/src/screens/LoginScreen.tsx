import React from 'react';
import MyText from '../components/texts/Text';
import MyView from '../components/views/View';
import { MyColors } from '../enums/Colors';

const LoginScreen: React.FC = () => {
    return (
        <MyView isColumn={true}>
            <MyView height={100} backgroundColor={MyColors.Transparent}>
                <MyText text="1"></MyText>
            </MyView>
            <MyView backgroundColor={MyColors.Theme}>
                <MyText text="2"></MyText>
            </MyView>
            <MyView backgroundColor={MyColors.Grey}>
                <MyText text="3"></MyText>
            </MyView>
        </MyView >
    );
};

export default LoginScreen;
