import { StackNavigationProp } from "@react-navigation/stack";
import MyIconButton from "../components/buttons/IconButton";
import MySafeAreaView from "../components/views/SafeAreaView";
import MyView from "../components/views/View";
import { MyRouteProps } from "../constants/RouteProps";
import { MyIcons } from "../enums/Icons";
import { MyLocalizationTextKeys } from "../enums/LocalizationTextKeys";
import { MyRoutes } from "../enums/Routes";
import MyAuthenticationUtils from "../utils/AuthenticationUtils";
import MyLocalizationUtils from "../utils/LocalizationUtils";
import MyModalUtils from "../utils/ModalUtils";

const MyProfileScreen: React.FC<{
    navigation: StackNavigationProp<MyRouteProps, MyRoutes.Home>,
}> = ({
    navigation,
}) => {
        return <MySafeAreaView>
            <MyView
                isExpanded={true}
                isColumn={true}
                isCenterItems={true}>
                <MyIconButton
                    icon={MyIcons.Logout}
                    tooltip={MyLocalizationUtils.getLocalizedText(MyLocalizationTextKeys.Logout)}
                    onPress={async () => {
                        MyModalUtils.showProgressModal();
                        await MyAuthenticationUtils.logout({
                            navigateToLoginScreen: () => navigation.replace(MyRoutes.Login),
                        });
                        MyModalUtils.hideModal();
                    }} />
            </MyView>
        </MySafeAreaView>;
    };

export default MyProfileScreen;
