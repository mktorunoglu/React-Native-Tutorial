import { StackNavigationProp } from "@react-navigation/stack";
import MyIconButton from "../components/buttons/IconButton";
import MyView from "../components/views/View";
import { MyRouteProps } from "../constants/RouteProps";
import { MyIcons } from "../enums/Icons";
import { MyLocalizationTextKeys } from '../enums/LocalizationTextKeys';
import { MyRoutes } from "../enums/Routes";
import AuthenticationUtils from "../utils/AuthenticationUtils";
import MyLocalizationUtils from "../utils/LocalizationUtils";
import MyModalUtils from '../utils/ModalUtils';

const MyHomeScreen: React.FC<{
    navigation: StackNavigationProp<MyRouteProps, MyRoutes.Home>,
}> = ({
    navigation,
}) => {
        return <MyView
            isExpanded={true}
            isColumn={true}
            isCenterItems={true}>
            <MyIconButton
                icon={MyIcons.Logout}
                tooltip={MyLocalizationUtils.getLocalizedText(MyLocalizationTextKeys.Logout)}
                onPress={async () => {
                    MyModalUtils.showProgressModal();
                    await AuthenticationUtils.logout({
                        navigateToLoginScreen: () => navigation.replace(MyRoutes.Login),
                    });
                    MyModalUtils.hideModal();
                }}
            />
        </MyView>;
    };

export default MyHomeScreen;
