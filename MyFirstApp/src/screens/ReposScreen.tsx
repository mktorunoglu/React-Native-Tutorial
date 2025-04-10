import { StackNavigationProp } from "@react-navigation/stack";
import MyResponseBuilder from "../components/builders/ResponseBuilder";
import MyText from "../components/texts/Text";
import MySafeAreaView from "../components/views/SafeAreaView";
import MyView from "../components/views/View";
import { MyRouteProps } from "../constants/RouteProps";
import { MyRoutes } from "../enums/Routes";
import MyFileService from "../services/FileService";

const MyReposScreen: React.FC<{
    navigation: StackNavigationProp<MyRouteProps, MyRoutes.Home>,
}> = ({
    navigation,
}) => {
        return <MySafeAreaView>
            <MyView
                isExpanded={true}
                isColumn={true}
                isCenterItems={true}>
                <MyResponseBuilder
                    response={MyFileService.listOwnedRepo}
                    builder={(response) => {
                        return <MyText
                            text="Repos" />;
                    }} />
            </MyView>
        </MySafeAreaView>;
    };

export default MyReposScreen;
