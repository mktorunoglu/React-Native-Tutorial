import {observer} from 'mobx-react-lite';
import {ReactNode} from 'react';
import {Modal} from 'react-native-paper';
import {MyColors} from '../../enums/Colors';
import MyColorUtils from '../../utils/ColorUtils';
import MyModalUtils from '../../utils/ModalUtils';

const MyTransparentModal = ({children}: {children?: ReactNode}) => {
  const Modal_ = observer(() => {
    return (
      <Modal
        visible={MyModalUtils.isModalVisible.value}
        onDismiss={() => {
          MyModalUtils.hideModal();
        }}
        style={{
          backgroundColor: MyColorUtils.getColorWithOpacity(
            MyColors.Black,
            0.4,
          ),
        }}>
        {children}
      </Modal>
    );
  });
  return <Modal_ />;
};

export default MyTransparentModal;
