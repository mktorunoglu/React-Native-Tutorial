import { observer } from "mobx-react-lite";
import { ReactNode } from "react";
import { Modal } from "react-native-paper";
import { MyColors } from "../../enums/Colors";
import MyColorUtils from "../../utils/ColorUtils";
import MyModalUtils from "../../utils/ModalUtils";

const MyTransparentModal = ({
    children,
}: {
    children: ReactNode,
}) => {
    return <Modal_
        children={children} />;
};

const Modal_ = observer(({
    children,
}: {
    children: ReactNode,
}) => {
    return <Modal
        visible={MyModalUtils.isModalVisible.value}
        onDismiss={() => MyModalUtils.hideModal()}
        style={{
            backgroundColor: MyColorUtils.getColorWithOpacity(MyColors.Black, 0.4),
        }}>
        {children}
    </Modal>;
});

export default MyTransparentModal;
