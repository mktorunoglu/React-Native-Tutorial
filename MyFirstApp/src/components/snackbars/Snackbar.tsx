import { observer } from "mobx-react-lite";
import { Snackbar } from "react-native-paper";
import { MyLocalizationTextKeys } from "../../enums/LocalizationTextKeys";
import MyLocalizationUtils from "../../utils/LocalizationUtils";
import MySnackbarUtils from "../../utils/SnackbarUtils";
import MyButton from "../buttons/Button";
import MyIcon from "../icons/Icon";
import MyText from "../texts/Text";
import MyView from "../views/View";

const MySnackbar: React.FC = () => {
    return <Snackbar_ />;
};

const Snackbar_ = observer(() => {
    return <Snackbar
        visible={MySnackbarUtils.isSnackbarVisible.value}
        onDismiss={() => MySnackbarUtils.hideSnackbar()}
        icon={MySnackbarUtils.snackbarIcon.value}
        duration={MySnackbarUtils.snackbarDurationMilliseconds.value}
        style={{
            borderRadius: 5,
            backgroundColor: MySnackbarUtils.snackbarBackgroundColor.value,
            margin: 10,
        }}>
        <MyView
            isRow={true}
            isCenterItems={true}>
            <MyIcon
                icon={MySnackbarUtils.snackbarIcon.value}
                color={MySnackbarUtils.snackbarForegroundColor.value} />
            <MyView
                width={15} />
            <MyView
                isExpanded={true}>
                <MyText
                    text={MySnackbarUtils.snackbarText.value}
                    color={MySnackbarUtils.snackbarForegroundColor.value}
                    fontSize={16} />
            </MyView>
            <MyView
                width={10} />
            <MyButton
                isTextButton={true}
                foregroundColor={MySnackbarUtils.snackbarForegroundColor.value}
                text={MyLocalizationUtils.getLocalizedText(MyLocalizationTextKeys.Okey)}
                onPress={() => MySnackbarUtils.hideSnackbar()} />
        </MyView>
    </Snackbar>;
});

export default MySnackbar;
