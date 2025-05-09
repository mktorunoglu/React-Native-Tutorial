import MyObservableValueModel from '../../models/ObservableValueModel';
import MyLocalizationUtils from '../../utils/LocalizationUtils';
import MyDivider from '../dividers/Divider';
import MyModalHeader from '../headers/ModalHeader';
import MyCardModalScaffold from '../scaffolds/CardModalScaffold';
import MyTextInput from '../texts/TextInput';
import MySwitchTile from '../tiles/SwitchTile';
import MyScrollView from '../views/ScrollView';
import MyView from '../views/View';

const MyRepoInputModal = () => {
  const isEncryptionActive = new MyObservableValueModel(false);
  return (
    <MyCardModalScaffold>
      <MyModalHeader
        titleText={MyLocalizationUtils.getLocalizedAddNewRepoText()}
      />
      <MyDivider />
      <MyScrollView padding={15}>
        <MyTextInput
          labelText={MyLocalizationUtils.getLocalizedRepoNameText()}
          isAutoFocused
        />
        <MyView height={15} />
        <MySwitchTile
          text={MyLocalizationUtils.getLocalizedSetPasswordText()}
          observableValue={isEncryptionActive}
        />
      </MyScrollView>
    </MyCardModalScaffold>
  );
};

export default MyRepoInputModal;
