import { MyColors } from "../../enums/Colors";
import MyProgressIndicator from "../indicators/ProgressIndicator";
import MyTransparentModal from "./TransparentModal";

const MyProgressModal: React.FC = () => {
    return <MyTransparentModal>
        <MyProgressIndicator
            color={MyColors.White} />
    </MyTransparentModal>;
};

export default MyProgressModal;
