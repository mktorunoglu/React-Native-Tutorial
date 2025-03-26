import { MyLocalizations } from "../../enums/Localizations";
import { MyLocalizationTextKeys } from "../../enums/LocalizationTextKeys";
import MyLocalizationUtils from "../../utils/LocalizationUtils";
import MyModalUtils from "../../utils/ModalUtils";
import MyModalSelectionButton from "../buttons/ModalSelectionButton";
import MyText from "../texts/Text";
import MyView from "../views/View";
import MyModal from "./Modal";

const MyChangeLanguageModal: React.FC<{
    onChange: () => void,
}> = ({
    onChange,
}) => {
        return <MyModal>
            <MyView
                isColumn={true}
                isCenterItems={true}
                padding={20}>
                <MyText
                    text={MyLocalizationUtils.getLocalizedText(MyLocalizationTextKeys.ChangeLanguage)} />
            </MyView>
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
