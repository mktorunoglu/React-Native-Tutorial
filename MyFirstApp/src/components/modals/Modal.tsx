import { observer } from "mobx-react-lite";
import { ReactNode } from "react";
import { Modal } from "react-native-paper";
import { MyColors } from "../../enums/Colors";
import { MyPositions } from "../../enums/Positions";
import MyColorUtils from "../../utils/ColorUtils";
import MyModalUtils from "../../utils/ModalUtils";

const MyModal = ({
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
        contentContainerStyle={{
            backgroundColor: MyColors.White,
            width: "100%",
            position: MyPositions.Absolute,
            bottom: 0,
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
        }}
        style={{
            backgroundColor: MyColorUtils.getColorWithOpacity(MyColors.Black, 0.4),
        }}>
        {children}
    </Modal>;
});

export default MyModal;
