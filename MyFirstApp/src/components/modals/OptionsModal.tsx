import { MyIcons } from "../../enums/Icons";
import { MyLocalizationTextKeys } from "../../enums/LocalizationTextKeys";
import MyLocalizationUtils from "../../utils/LocalizationUtils";
import MyModalUtils from "../../utils/ModalUtils";
import MyModalSelectionButton from "../buttons/ModalSelectionButton";
import MyModalHeader from "../headers/ModalHeader";
import MyChangeLanguageModal from "./ChangeLanguageModal";
import MyModal from "./Modal";

const MyOptionsModal = ({
    onChangeLanguage,
}: {
    onChangeLanguage: () => void,
}) => {
    return <MyModal>
        <MyModalHeader
            text={MyLocalizationUtils.getLocalizedText(MyLocalizationTextKeys.Options)} />
        <MyModalSelectionButton
            icon={MyIcons.Earth}
            text={MyLocalizationUtils.getLocalizedText(MyLocalizationTextKeys.ChangeLanguage)}
            onPress={() => MyModalUtils.showModal({
                modal: <MyChangeLanguageModal
                    onChange={onChangeLanguage} />,
            })} />
    </MyModal>;
};

export default MyOptionsModal;
