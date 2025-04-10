// import { useState } from "react";
// import { BottomNavigation } from "react-native-paper";
// import { MyRoutes } from "../../enums/Routes";
// import MyDashboardScreen from "../../screens/DashboardScreen";
// import MyFavoritesScreen from "../../screens/FavoritesScreen";
// import MyProfileScreen from "../../screens/ProfileScreen";
// import MyReposScreen from "../../screens/ReposScreen";
// import MySharingScreen from "../../screens/SharingScreen";

// const MyBottomNavigationBar = () => {
//     const [index, setIndex] = useState(0);
//     const [routes] = useState([
//         {
//             key: MyRoutes.Dashboard,
//             title: "Home",
//             focusedIcon: "home",
//             unfocusedIcon: "home-outline",
//         },
//         {
//             key: MyRoutes.Repos,
//             title: "Repos",
//             focusedIcon: "folder",
//             unfocusedIcon: "folder-outline",
//         },
//         {
//             key: MyRoutes.Sharing,
//             title: "Sharing",
//             focusedIcon: "share-variant",
//             unfocusedIcon: "share-variant-outline",
//         },
//         {
//             key: MyRoutes.Favorites,
//             title: "Favorites",
//             focusedIcon: "star",
//             unfocusedIcon: "star-outline",
//         },
//         {
//             key: MyRoutes.Profile,
//             title: "Profile",
//             focusedIcon: "account",
//             unfocusedIcon: "account-outline",
//         },
//     ]);
//     return <BottomNavigation
//         navigationState={{ index, routes }}
//         onIndexChange={setIndex}
//         renderScene={BottomNavigation.SceneMap({
//             [MyRoutes.Dashboard]: MyDashboardScreen,
//             [MyRoutes.Repos]: MyReposScreen,
//             [MyRoutes.Sharing]: MySharingScreen,
//             [MyRoutes.Favorites]: MyFavoritesScreen,
//             [MyRoutes.Profile]: MyProfileScreen,
//         })} />;
// };

// export default MyBottomNavigationBar;
