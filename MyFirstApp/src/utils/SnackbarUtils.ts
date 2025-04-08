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
    public snackbarIcon = new MyObservableValueModel(undefined as MyIcons | undefined);
    public snackbarText = new MyObservableValueModel("");

    public showSnackbar({
        icon,
        text,
    }: {
        icon?: MyIcons,
        text: string,
    }) {
        this.snackbarIcon.setValue(icon);
        this.snackbarText.setValue(text);
        this.isSnackbarVisible.setValue(true);
    };

    public hideSnackbar() {
        this.isSnackbarVisible.setValue(false);
        this.snackbarIcon.setValue(undefined);
        this.snackbarText.setValue("");
    };
};

export default MySnackbarUtils.getInstance();
