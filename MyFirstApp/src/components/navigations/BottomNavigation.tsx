// import {ReactNode} from 'react';
// import {BottomNavigation} from 'react-native-paper';
// import {MyColors} from '../../enums/Colors';
// import {MyIcons} from '../../enums/Icons';
// import {MyRoutes} from '../../enums/Routes';
// import MyColorUtils from '../../utils/ColorUtils';

// const MyBottomNavigation = ({
//   selectedIndex,
//   onIndexChange,
//   routeList,
//   screenList,
// }: {
//   selectedIndex: number;
//   onIndexChange: (selectedIndex: number) => void;
//   routeList: {
//     key: MyRoutes;
//     title: string;
//     focusedIcon: MyIcons;
//     unfocusedIcon: MyIcons;
//   }[];
//   screenList: {[key: string]: () => ReactNode};
// }) => {
//   return (
//     <BottomNavigation
//       barStyle={{
//         backgroundColor: MyColors.White,
//       }}
//       activeIndicatorStyle={{
//         backgroundColor: MyColorUtils.getColorWithOpacity(MyColors.Theme, 0.2),
//       }}
//       activeColor={MyColors.Theme}
//       navigationState={{
//         index: selectedIndex,
//         routes: routeList,
//       }}
//       onIndexChange={onIndexChange}
//       renderScene={BottomNavigation.SceneMap(screenList)}
//     />
//   );
// };

// export default MyBottomNavigation;
