import {MySortingTypes} from '../../enums/SortingTypes';
import MyModalSelectionButtonDataModel from '../../models/ModalSelectionButtonDataModel';
import MyLocalizationUtils from '../../utils/LocalizationUtils';
import MyModalSelectionButton from '../buttons/ModalSelectionButton';
import MyModalHeader from '../headers/ModalHeader';
import MyModal from './Modal';

const MySortingModal = () => {
  return (
    <MyModal>
      <MyModalHeader text={MyLocalizationUtils.getLocalizedSortText()} />
      {[
        new MyModalSelectionButtonDataModel({
          value: MySortingTypes.AlphabeticalAscending,
          text: MyLocalizationUtils.getLocalizedAlphabeticalAscendingText(),
        }),
        new MyModalSelectionButtonDataModel({
          value: MySortingTypes.AlphabeticalDescending,
          text: MyLocalizationUtils.getLocalizedAlphabeticalDescendingText(),
        }),
        new MyModalSelectionButtonDataModel({
          value: MySortingTypes.LastUpdateAscending,
          text: MyLocalizationUtils.getLocalizedLastUpdateAscendingText(),
        }),
        new MyModalSelectionButtonDataModel({
          value: MySortingTypes.LastUpdateDescending,
          text: MyLocalizationUtils.getLocalizedLastUpdateDescendingText(),
        }),
        new MyModalSelectionButtonDataModel({
          value: MySortingTypes.SizeAscending,
          text: MyLocalizationUtils.getLocalizedSizeAscendingText(),
        }),
        new MyModalSelectionButtonDataModel({
          value: MySortingTypes.SizeDescending,
          text: MyLocalizationUtils.getLocalizedSizeDescendingText(),
        }),
      ].map(buttonData => (
        <MyModalSelectionButton
          key={buttonData.value}
          isSelected={'test' == buttonData.value}
          text={buttonData.text}
          onPress={() => {}}
        />
      ))}
    </MyModal>
  );
};

export default MySortingModal;
