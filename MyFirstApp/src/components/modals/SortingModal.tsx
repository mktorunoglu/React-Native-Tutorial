import {MySortingTypes} from '../../enums/SortingTypes';
import MyModalSelectionButtonDataModel from '../../models/ModalSelectionButtonDataModel';
import MyLocalizationUtils from '../../utils/LocalizationUtils';
import MyModalUtils from '../../utils/ModalUtils';
import MySortingUtils from '../../utils/SortingUtils';
import MyModalSelectionButton from '../buttons/ModalSelectionButton';
import MyModalHeader from '../headers/ModalHeader';
import MyCardModalScaffold from '../scaffolds/CardModalScaffold';

const MySortingModal = () => (
  <MyCardModalScaffold>
    <MyModalHeader titleText={MyLocalizationUtils.getLocalizedSortText()} />
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
        isSelected={MySortingUtils.sortingType.value == buttonData.value}
        text={buttonData.text}
        onPress={async () => {
          MyModalUtils.showProgressModal();
          await MySortingUtils.setSortingType(buttonData.value);
          MyModalUtils.hideProgressModal();
          MyModalUtils.hideModal();
        }}
      />
    ))}
  </MyCardModalScaffold>
);

export default MySortingModal;
