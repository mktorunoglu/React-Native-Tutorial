import {observer} from 'mobx-react-lite';
import {Snackbar} from 'react-native-paper';
import MyLocalizationUtils from '../../utils/LocalizationUtils';
import MySnackbarUtils from '../../utils/SnackbarUtils';
import MyButton from '../buttons/Button';
import MyIcon from '../icons/Icon';
import MyText from '../texts/Text';
import MyView from '../views/View';

const MySnackbar = () => {
  const Snackbar_ = observer(() => (
    <Snackbar
      visible={MySnackbarUtils.isSnackbarVisible.value}
      onDismiss={() => MySnackbarUtils.hideSnackbar()}
      icon={MySnackbarUtils.snackbarIcon.value!}
      duration={MySnackbarUtils.snackbarDurationMilliseconds.value!}
      style={{
        borderRadius: 10,
        backgroundColor: MySnackbarUtils.snackbarBackgroundColor.value!,
        margin: 10,
      }}>
      <MyView isRow isCenterItems>
        <MyIcon
          icon={MySnackbarUtils.snackbarIcon.value!}
          color={MySnackbarUtils.snackbarForegroundColor.value!}
        />
        <MyView width={15} />
        <MyView isExpanded>
          <MyText
            text={MySnackbarUtils.snackbarText.value}
            color={MySnackbarUtils.snackbarForegroundColor.value!}
            fontSize={16}
          />
        </MyView>
        <MyView width={10} />
        <MyButton
          isTextButton
          foregroundColor={MySnackbarUtils.snackbarForegroundColor.value!}
          text={MyLocalizationUtils.getLocalizedOkeyText()}
          onPress={() => MySnackbarUtils.hideSnackbar()}
        />
      </MyView>
    </Snackbar>
  ));
  return <Snackbar_ />;
};

export default MySnackbar;
