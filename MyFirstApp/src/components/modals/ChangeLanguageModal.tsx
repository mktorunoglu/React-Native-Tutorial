import { MyLocalizations } from "../../enums/Localizations";
import { MyLocalizationTextKeys } from "../../enums/LocalizationTextKeys";
import MyLocalizationUtils from "../../utils/LocalizationUtils";
import MyModalUtils from "../../utils/ModalUtils";
import MyModalSelectionButton from "../buttons/ModalSelectionButton";
import MyModalHeader from "../headers/ModalHeader";
import MyModal from "./Modal";

const MyChangeLanguageModal = ({
    onChange,
}: {
    onChange: () => void,
}) => {
    return <MyModal>
        <MyModalHeader
            text={MyLocalizationUtils.getLocalizedText(MyLocalizationTextKeys.ChangeLanguage)} />
        {Object.values(MyLocalizations).map((localization) => <MyModalSelectionButton
            key={localization}
            isSelected={MyLocalizationUtils.localization == localization}
            text={MyLocalizationUtils.getLocalizedText({
                [MyLocalizations.English]: MyLocalizationTextKeys.English,
                [MyLocalizations.Turkish]: MyLocalizationTextKeys.Turkish,
            }[localization])}
            onPress={async () => {
                MyModalUtils.showProgressModal();
                await MyLocalizationUtils.setLocalization(localization);
                MyModalUtils.hideModal();
                onChange();
            }} />)}
    </MyModal>;
};

export default MyChangeLanguageModal;
