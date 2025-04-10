
import { ReactNode } from "react";
import { BottomNavigation } from "react-native-paper";
import { MyIcons } from "../../enums/Icons";
import { MyRoutes } from "../../enums/Routes";

const MyBottomNavigation = ({
  selectedIndex,
  onIndexChange,
  routeList,
  scenes,
}: {
  selectedIndex: number,
  onIndexChange: (selectedIndex: number) => void,
  routeList: {
    key: MyRoutes,
    title: string,
    focusedIcon: MyIcons,
    unfocusedIcon: MyIcons,
  }[],
  scenes: { [key: string]: () => ReactNode },
}) => {
  return <BottomNavigation
    navigationState={{
      index: selectedIndex,
      routes: routeList,
    }}
    onIndexChange={onIndexChange}
    renderScene={BottomNavigation.SceneMap(scenes)} />;
};

export default MyBottomNavigation;
