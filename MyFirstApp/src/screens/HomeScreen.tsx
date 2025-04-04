import { StackNavigationProp } from "@react-navigation/stack";
import MyText from "../components/texts/Text";
import MyView from "../components/views/View";
import { MyRouteProps } from "../constants/RouteProps";
import { MyRoutes } from "../enums/Routes";

const MyHomeScreen: React.FC<{
    navigation: StackNavigationProp<MyRouteProps, MyRoutes.Home>,
}> = ({
    navigation,
}) => {
        return <MyView>
            <MyText
                text="Home Screen" />
        </MyView>;
    };

export default MyHomeScreen;
