import { observer } from 'mobx-react-lite';
import { Modal } from 'react-native-paper';
import { MyColors } from '../../enums/Colors';
import MyDialogUtils from '../../utils/DialogUtils';

const MyModal: React.FC = () => {
    return <Modal_ />;
};

const Modal_ = observer(() => {
    return <Modal
        visible={MyDialogUtils.isModalVisible.value}
        onDismiss={MyDialogUtils.onDismissModal.value}
        contentContainerStyle={{
            backgroundColor: MyColors.White,
            padding: 20,
        }}>
        {MyDialogUtils.modalView.value}
    </Modal>;
});

export default MyModal;
