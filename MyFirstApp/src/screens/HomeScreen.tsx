import { StackNavigationProp } from "@react-navigation/stack";
import { useState } from "react";
import { BottomNavigation } from "react-native-paper";
import { MyRouteProps } from "../constants/RouteProps";
import { MyRoutes } from "../enums/Routes";
import MyDashboardScreen from "./DashboardScreen";
import MyFavoritesScreen from "./FavoritesScreen";
import MyProfileScreen from "./ProfileScreen";
import MyReposScreen from "./ReposScreen";
import MySharingScreen from "./SharingScreen";

const MyHomeScreen: React.FC<{
    navigation: StackNavigationProp<MyRouteProps, MyRoutes.Home>,
}> = ({
    navigation,
}) => {
        const [index, setIndex] = useState(0);
        const [routes] = useState([
            {
                key: MyRoutes.Dashboard,
                title: "Home",
                focusedIcon: "home",
                unfocusedIcon: "home-outline",
            },
            {
                key: MyRoutes.Repos,
                title: "Repos",
                focusedIcon: "folder",
                unfocusedIcon: "folder-outline",
            },
            {
                key: MyRoutes.Sharing,
                title: "Sharing",
                focusedIcon: "share-variant",
                unfocusedIcon: "share-variant-outline",
            },
            {
                key: MyRoutes.Favorites,
                title: "Favorites",
                focusedIcon: "star",
                unfocusedIcon: "star-outline",
            },
            {
                key: MyRoutes.Profile,
                title: "Profile",
                focusedIcon: "account",
                unfocusedIcon: "account-outline",
            },
        ]);
        return <BottomNavigation
            navigationState={{ index, routes }}
            onIndexChange={setIndex}
            renderScene={BottomNavigation.SceneMap({
                [MyRoutes.Dashboard]: () => <MyDashboardScreen
                    navigation={navigation} />,
                [MyRoutes.Repos]: () => <MyReposScreen
                    navigation={navigation} />,
                [MyRoutes.Sharing]: () => <MySharingScreen
                    navigation={navigation} />,
                [MyRoutes.Favorites]: () => <MyFavoritesScreen
                    navigation={navigation} />,
                [MyRoutes.Profile]: () => <MyProfileScreen
                    navigation={navigation} />,
            })} />;
    };

export default MyHomeScreen;
