import React from 'react';
import MyText from '../components/texts/Text';
import MyView from '../components/views/View';

const HomeScreen: React.FC = () => {
    return (
        <MyView>
            <MyText
                text="kamil"
            />
            <MyText
                text="kamil"
            />
        </MyView>
    );
};

export default HomeScreen;
