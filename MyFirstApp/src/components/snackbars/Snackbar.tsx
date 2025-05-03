import {observer} from 'mobx-react-lite';
import {Snackbar} from 'react-native-paper';
import MyLocalizationUtils from '../../utils/LocalizationUtils';
import MySnackbarUtils from '../../utils/SnackbarUtils';
import MyButton from '../buttons/Button';
import MyIcon from '../icons/Icon';
import MyText from '../texts/Text';
import MyView from '../views/View';

const MySnackbar = () => {
  return <Snackbar_ />;
};

const Snackbar_ = observer(() => {
  return (
    <Snackbar
      visible={MySnackbarUtils.isSnackbarVisible.getValue()}
      onDismiss={() => MySnackbarUtils.hideSnackbar()}
      icon={MySnackbarUtils.snackbarIcon.getValue()!}
      duration={MySnackbarUtils.snackbarDurationMilliseconds.getValue()!}
      style={{
        borderRadius: 5,
        backgroundColor: MySnackbarUtils.snackbarBackgroundColor.getValue()!,
        margin: 10,
      }}>
      <MyView isRow isCenterItems>
        <MyIcon
          icon={MySnackbarUtils.snackbarIcon.getValue()!}
          color={MySnackbarUtils.snackbarForegroundColor.getValue()!}
        />
        <MyView width={15} />
        <MyView isExpanded>
          <MyText
            text={MySnackbarUtils.snackbarText.getValue()}
            color={MySnackbarUtils.snackbarForegroundColor.getValue()!}
            fontSize={16}
          />
        </MyView>
        <MyView width={10} />
        <MyButton
          isTextButton
          foregroundColor={MySnackbarUtils.snackbarForegroundColor.getValue()!}
          text={MyLocalizationUtils.getLocalizedOkeyText()}
          onPress={() => MySnackbarUtils.hideSnackbar()}
        />
      </MyView>
    </Snackbar>
  );
});

export default MySnackbar;
