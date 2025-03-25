import { StackNavigationProp } from "@react-navigation/stack";
import { useEffect } from "react";
import MyView from "../components/views/View";
import { MyRouteProps } from "../constants/RouteProps";
import { MyRoutes } from "../enums/Routes";
import MyLocalizationUtils from "../utils/LocalizationUtils";

const onInit = async ({
    navigateFunction,
}: {
    navigateFunction: () => void,
}) => {
    await MyLocalizationUtils.initialize();
    navigateFunction();
};

const MySplashScreen: React.FC<{
    navigation: StackNavigationProp<MyRouteProps, MyRoutes.Splash>,
}> = ({
    navigation,
}) => {
        useEffect(() => {
            onInit({
                navigateFunction: () => navigation.replace(MyRoutes.Login),
            });
        }, []);
        return <MyView />;
    };

export default MySplashScreen;
