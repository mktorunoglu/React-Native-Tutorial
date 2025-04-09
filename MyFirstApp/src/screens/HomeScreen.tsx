import { StackNavigationProp } from "@react-navigation/stack";
import { useState } from "react";
import { BottomNavigation } from "react-native-paper";
import { MyRouteProps } from "../constants/RouteProps";
import { MyIcons } from "../enums/Icons";
import { MyLocalizationTextKeys } from "../enums/LocalizationTextKeys";
import { MyRoutes } from "../enums/Routes";
import MyLocalizationUtils from "../utils/LocalizationUtils";
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
                title: MyLocalizationUtils.getLocalizedText(MyLocalizationTextKeys.Home),
                focusedIcon: MyIcons.Home,
                unfocusedIcon: MyIcons.HomeOutlined,
            },
            {
                key: MyRoutes.Repos,
                title: MyLocalizationUtils.getLocalizedText(MyLocalizationTextKeys.Repos),
                focusedIcon: MyIcons.Folder,
                unfocusedIcon: MyIcons.FolderOutlined,
            },
            {
                key: MyRoutes.Sharing,
                title: MyLocalizationUtils.getLocalizedText(MyLocalizationTextKeys.Sharing),
                focusedIcon: MyIcons.Share,
                unfocusedIcon: MyIcons.ShareOutlined,
            },
            {
                key: MyRoutes.Favorites,
                title: MyLocalizationUtils.getLocalizedText(MyLocalizationTextKeys.Favorites),
                focusedIcon: MyIcons.Star,
                unfocusedIcon: MyIcons.StarOutlined,
            },
            {
                key: MyRoutes.Profile,
                title: MyLocalizationUtils.getLocalizedText(MyLocalizationTextKeys.Profile),
                focusedIcon: MyIcons.Account,
                unfocusedIcon: MyIcons.AccountOutlined,
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
