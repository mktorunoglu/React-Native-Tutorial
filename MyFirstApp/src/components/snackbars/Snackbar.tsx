import { observer } from 'mobx-react-lite';
import { Snackbar } from 'react-native-paper';
import SnackbarUtils from '../../utils/SnackbarUtils';
import MyText from '../texts/Text';

const MySnackbar: React.FC = () => {
    return <Snackbar_ />;
};

const Snackbar_ = observer(() => {
    return <Snackbar
        visible={SnackbarUtils.isSnackbarVisible.value}
        onDismiss={() => SnackbarUtils.hideSnackbar()}
        icon={SnackbarUtils.snackbarIcon.value}>
        <MyText
            text={SnackbarUtils.snackbarText.value} />
    </Snackbar>;
});

export default MySnackbar;
