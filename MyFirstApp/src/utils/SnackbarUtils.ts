import {MyColors} from '../enums/Colors';
import {MyIcons} from '../enums/Icons';
import MyObservableValueModel from '../models/ObservableValueModel';
import TimerUtils from './TimerUtils';

class MySnackbarUtils {
  private static instance: MySnackbarUtils;

  private constructor() {}

  public static getInstance(): MySnackbarUtils {
    if (!MySnackbarUtils.instance) {
      MySnackbarUtils.instance = new MySnackbarUtils();
    }
    return MySnackbarUtils.instance;
  }

  public isSnackbarVisible = new MyObservableValueModel(false);
  public snackbarIcon = new MyObservableValueModel<MyIcons | null>(null);
  public snackbarText = new MyObservableValueModel('');
  public snackbarDurationMilliseconds = new MyObservableValueModel<
    number | null
  >(null);
  public snackbarBackgroundColor = new MyObservableValueModel<string | null>(
    null,
  );
  public snackbarForegroundColor = new MyObservableValueModel<string | null>(
    null,
  );

  public showSnackbar({
    icon = MyIcons.Information,
    text,
    durationMilliseconds = 3000,
    backgroundColor = MyColors.Theme,
    foregroundColor = MyColors.White,
    isSuccessful = false,
  }: {
    icon?: MyIcons;
    text: string;
    durationMilliseconds?: number;
    backgroundColor?: string;
    foregroundColor?: string;
    isSuccessful?: boolean;
  }) {
    this.hideSnackbar();
    this.snackbarIcon.setValue(isSuccessful ? MyIcons.CheckCircle : icon);
    this.snackbarText.setValue(text);
    this.snackbarDurationMilliseconds.setValue(durationMilliseconds);
    this.snackbarBackgroundColor.setValue(
      isSuccessful ? MyColors.Green : backgroundColor,
    );
    this.snackbarForegroundColor.setValue(foregroundColor);
    TimerUtils.setTimer({
      durationMilliseconds: 150,
      onFinished: () => this.isSnackbarVisible.setValue(true),
    });
  }

  public hideSnackbar() {
    this.isSnackbarVisible.setValue(false);
  }
}

export default MySnackbarUtils.getInstance();
