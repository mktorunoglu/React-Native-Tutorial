import MyLocalizationUtils from '../../utils/LocalizationUtils';
import MyDivider from '../dividers/Divider';
import MyModalHeader from '../headers/ModalHeader';
import MyCardModalScaffold from '../scaffolds/CardModalScaffold';
import MyTextInput from '../texts/TextInput';
import MyView from '../views/View';

const MyRepoInputModal = () => (
  <MyCardModalScaffold>
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
  </MyCardModalScaffold>
);

export default MyRepoInputModal;
