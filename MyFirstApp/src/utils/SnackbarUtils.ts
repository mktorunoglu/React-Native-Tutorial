import { MyColors } from "../enums/Colors";
import { MyIcons } from "../enums/Icons";
import MyObservableValueModel from "../models/ObservableValueModel";

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
    public snackbarIcon = new MyObservableValueModel(MyIcons.Information);
    public snackbarText = new MyObservableValueModel("");
    public snackbarDurationMilliseconds = new MyObservableValueModel(3000);
    public snackbarBackgroundColor = new MyObservableValueModel(MyColors.Theme);
    public snackbarForegroundColor = new MyObservableValueModel(MyColors.White);

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
        this.snackbarIcon.setValue(isSuccessful ? MyIcons.CheckCircle : icon);
        this.snackbarText.setValue(text);
        this.isSnackbarVisible.setValue(true);
        this.snackbarDurationMilliseconds.setValue(durationMilliseconds);
        this.snackbarBackgroundColor.setValue(isSuccessful ? MyColors.Green : backgroundColor);
        this.snackbarForegroundColor.setValue(foregroundColor);
    };

    public hideSnackbar() {
        this.isSnackbarVisible.setValue(false);
    };
};

export default MySnackbarUtils.getInstance();
