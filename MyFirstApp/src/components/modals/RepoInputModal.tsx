import MyLocalizationUtils from '../../utils/LocalizationUtils';
import MyDivider from '../dividers/Divider';
import MyModalHeader from '../headers/ModalHeader';
import MyTextInput from '../texts/TextInput';
import MyView from '../views/View';
import MyModal from './Modal';

const MyRepoInputModal = () => (
  <MyModal>
    <MyModalHeader
      titleText={MyLocalizationUtils.getLocalizedAddNewRepoText()}
    />
    <MyDivider />
    <MyView padding={15}>
      <MyTextInput labelText={MyLocalizationUtils.getLocalizedRepoNameText()} />
    </MyView>
    <MyView padding={15}>
      <MyTextInput labelText={MyLocalizationUtils.getLocalizedRepoNameText()} />
    </MyView>
    <MyView padding={15}>
      <MyTextInput labelText={MyLocalizationUtils.getLocalizedRepoNameText()} />
    </MyView>
    <MyView padding={15}>
      <MyTextInput labelText={MyLocalizationUtils.getLocalizedRepoNameText()} />
    </MyView>
    <MyView padding={15}>
      <MyTextInput labelText={MyLocalizationUtils.getLocalizedRepoNameText()} />
    </MyView>
    <MyView padding={15}>
      <MyTextInput labelText={MyLocalizationUtils.getLocalizedRepoNameText()} />
    </MyView>
    <MyView padding={15}>
      <MyTextInput labelText={MyLocalizationUtils.getLocalizedRepoNameText()} />
    </MyView>
    <MyView padding={15}>
      <MyTextInput labelText={MyLocalizationUtils.getLocalizedRepoNameText()} />
    </MyView>
    <MyView padding={15}>
      <MyTextInput labelText={MyLocalizationUtils.getLocalizedRepoNameText()} />
    </MyView>
    <MyView padding={15}>
      <MyTextInput labelText={MyLocalizationUtils.getLocalizedRepoNameText()} />
    </MyView>
    <MyView padding={15}>
      <MyTextInput labelText={MyLocalizationUtils.getLocalizedRepoNameText()} />
    </MyView>
    <MyView padding={15}>
      <MyTextInput labelText={MyLocalizationUtils.getLocalizedRepoNameText()} />
    </MyView>
  </MyModal>
);

export default MyRepoInputModal;
