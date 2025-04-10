import { MyColors } from "../enums/Colors";
import { MyIcons } from "../enums/Icons";
import MyObservableValueModel from "../models/ObservableValueModel";
import TimerUtils from "./TimerUtils";

class MySnackbarUtils {
    private static instance: MySnackbarUtils;

    private constructor() { };

    public static getInstance(): MySnackbarUtils {
        if (!MySnackbarUtils.instance) {
            MySnackbarUtils.instance = new MySnackbarUtils();
        }
        return MySnackbarUtils.instance;
    };

    public isSnackbarVisible = new MyObservableValueModel(false);
    public snackbarIcon = new MyObservableValueModel<MyIcons | null>(null);
    public snackbarText = new MyObservableValueModel("");
    public snackbarDurationMilliseconds = new MyObservableValueModel<number | null>(null);
    public snackbarBackgroundColor = new MyObservableValueModel<MyColors | null>(null);
    public snackbarForegroundColor = new MyObservableValueModel<MyColors | null>(null);

    public showSnackbar({
        icon = MyIcons.Information,
        text,
        durationMilliseconds = 3000,
        backgroundColor = MyColors.Theme,
        foregroundColor = MyColors.White,
        isSuccessful = false,
    }: {
        icon?: MyIcons,
        text: string,
        durationMilliseconds?: number,
        backgroundColor?: MyColors,
        foregroundColor?: MyColors,
        isSuccessful?: boolean,
    }) {
        this.hideSnackbar();
        this.snackbarIcon.value = isSuccessful ? MyIcons.CheckCircle : icon;
        this.snackbarText.value = text;
        this.snackbarDurationMilliseconds.value = durationMilliseconds;
        this.snackbarBackgroundColor.value = isSuccessful ? MyColors.Green : backgroundColor;
        this.snackbarForegroundColor.value = foregroundColor;
        TimerUtils.setTimer({
            durationMilliseconds: 100,
            onFinished: () => this.isSnackbarVisible.value = true,
        });
    };

    public hideSnackbar() {
        this.isSnackbarVisible.value = false;
    };
};

export default MySnackbarUtils.getInstance();
