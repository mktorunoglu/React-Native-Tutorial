import {MyLocalizations} from '../../enums/Localizations';
import MyLocalizationUtils from '../../utils/LocalizationUtils';
import MyModalUtils from '../../utils/ModalUtils';
import MyModalSelectionButton from '../buttons/ModalSelectionButton';
import MyModalHeader from '../headers/ModalHeader';
import MyModal from './Modal';
import MyProgressModal from './ProgressModal';

const MyChangeLanguageModal = ({onChange}: {onChange: () => void}) => {
  return (
    <MyModal>
      <MyModalHeader
        text={MyLocalizationUtils.getLocalizedChangeLanguageText()}
      />
      {Object.values(MyLocalizations).map(localization => (
        <MyModalSelectionButton
          key={localization}
          isSelected={MyLocalizationUtils.localization == localization}
          text={
            {
              [MyLocalizations.English]:
                MyLocalizationUtils.getLocalizedEnglishText(),
              [MyLocalizations.Turkish]:
                MyLocalizationUtils.getLocalizedTurkishText(),
            }[localization]
          }
          onPress={async () => {
            MyModalUtils.showModal({modal: <MyProgressModal />});
            await MyLocalizationUtils.setLocalization(localization);
            MyModalUtils.hideModal();
            onChange();
          }}
        />
      ))}
    </MyModal>
  );
};

export default MyChangeLanguageModal;
