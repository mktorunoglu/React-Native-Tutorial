import { StackNavigationProp } from "@react-navigation/stack";
import { useEffect } from "react";
import MyImage from "../components/images/Image";
import MyProgressIndicator from "../components/indicators/ProgressIndicator";
import MyText from "../components/texts/Text";
import MyView from "../components/views/View";
import { MyRouteProps } from "../constants/RouteProps";
import { MyColors } from "../enums/Colors";
import { MyFontWeights } from "../enums/FontWeights";
import { MyLocalizationTextKeys } from "../enums/LocalizationTextKeys";
import { MyRoutes } from "../enums/Routes";
import { MyTextAligns } from "../enums/TextAligns";
import MyColorUtils from "../utils/ColorUtils";
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
        return <MyView
            isColumn={true}
            isExpanded={true}
            isCenterItems={true}>
            <MyImage
                path={require("../../assets/logos/logo_kdpp.png")}
                height={100}
                width="70%" />
            <MyView
                height={100} />
            <MyProgressIndicator />
            <MyView
                isColumn={true}
                zIndex={1}
                bottom={0}>
                <MyText
                    text={MyLocalizationUtils.getLocalizedText(MyLocalizationTextKeys.AppCopyrightDescription)}
                    fontSize={12}
                    color={MyColorUtils.getColorWithOpacity(MyColors.Black, 0.5)}
                    fontWeight={MyFontWeights.W300}
                    textAlign={MyTextAligns.Center} />
                <MyView
                    height={10} />
                <MyImage
                    path={require("../../assets/logos/logo_turksat.png")}
                    height={25}
                    width="100%" />
                <MyView
                    height={20} />
            </MyView>
        </MyView>;
    };

export default MySplashScreen;
