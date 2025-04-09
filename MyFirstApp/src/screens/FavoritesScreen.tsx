import { StackNavigationProp } from "@react-navigation/stack";
import MyText from "../components/texts/Text";
import MySafeAreaView from "../components/views/SafeAreaView";
import MyView from "../components/views/View";
import { MyRouteProps } from "../constants/RouteProps";
import { MyRoutes } from "../enums/Routes";

const MyFavoritesScreen: React.FC<{
    navigation: StackNavigationProp<MyRouteProps, MyRoutes.Home>,
}> = ({
    navigation,
}) => {
        return <MySafeAreaView>
            <MyView
                isExpanded={true}
                isColumn={true}
                isCenterItems={true}>
                <MyText
                    text="Favorites" />
            </MyView>
        </MySafeAreaView>;
    };

export default MyFavoritesScreen;
