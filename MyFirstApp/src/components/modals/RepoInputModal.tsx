import {observer} from 'mobx-react-lite';
import {MyColors} from '../../enums/Colors';
import {MyIcons} from '../../enums/Icons';
import {MySizes} from '../../enums/Sizes';
import {MyTextCapitalizes} from '../../enums/TextCapitalizes';
import MyObservableValueModel from '../../models/ObservableValueModel';
import MyColorUtils from '../../utils/ColorUtils';
import MyLocalizationUtils from '../../utils/LocalizationUtils';
import MyButton from '../buttons/Button';
import MyDivider from '../dividers/Divider';
import MyModalHeader from '../headers/ModalHeader';
import MyIcon from '../icons/Icon';
import MyCardModalScaffold from '../scaffolds/CardModalScaffold';
import MyPasswordTextInput from '../texts/PasswordTextInput';
import MyText from '../texts/Text';
import MyTextInput from '../texts/TextInput';
import MySwitchTile from '../tiles/SwitchTile';
import MyScrollView from '../views/ScrollView';
import MyView from '../views/View';

const MyRepoInputModal = () => {
  const isEncryptionActive = new MyObservableValueModel(false);
  const isPasswordVisible = new MyObservableValueModel(false);
  const isPasswordAgainVisible = new MyObservableValueModel(false);
  const repoName = new MyObservableValueModel('');
  const password = new MyObservableValueModel('');
  const passwordAgain = new MyObservableValueModel('');
  const RepoNameTextInput_ = observer(() => (
    <MyTextInput
      labelText={MyLocalizationUtils.getLocalizedRepoNameText()}
      isAutoFocused
      textCapitalize={MyTextCapitalizes.Words}
      value={repoName.value}
      onChangeText={text => repoName.setValue(text)}
    />
  ));
  const SetPasswordArea_ = observer(() => {
    if (isEncryptionActive.value) {
      return (
        <MyView isColumn>
          <MyView
            isRow
            backgroundColor={MyColorUtils.getColorWithOpacity(
              MyColors.Red,
              0.1,
            )}
            padding={10}
            borderRadius={5}>
            <MyIcon icon={MyIcons.AlertCircle} color={MyColors.Red} />
            <MyView width={10} />
            <MyView isExpanded width={MySizes.Auto}>
              <MyText
                text={MyLocalizationUtils.getLocalizedDontForgetPasswordDescriptionText()}
                color={MyColors.Red}
              />
            </MyView>
          </MyView>
          <MyView height={15} />
          <MyPasswordTextInput
            isPasswordVisible={isPasswordVisible}
            password={password}
            isAutoFocused
          />
          <MyView height={15} />
          <MyPasswordTextInput
            labelText={MyLocalizationUtils.getLocalizedPasswordAgainText()}
            isPasswordVisible={isPasswordAgainVisible}
            password={passwordAgain}
          />
          <MyView height={20} />
        </MyView>
      );
    }
    return <MyView />;
  });
  const AddButton_ = observer(() => (
    <MyButton
      text={MyLocalizationUtils.getLocalizedAddText()}
      isDisable={
        repoName.value.trim() == '' ||
        (isEncryptionActive.value
          ? password.value.trim() == '' || passwordAgain.value.trim() == ''
          : false)
      }
      onPress={() => {}}
    />
  ));
  return (
    <MyCardModalScaffold>
      <MyModalHeader
        titleText={MyLocalizationUtils.getLocalizedAddNewRepoText()}
      />
      <MyDivider />
      <MyScrollView padding={15}>
        <RepoNameTextInput_ />
        <MyView height={15} />
        <MySwitchTile
          text={MyLocalizationUtils.getLocalizedSetPasswordText()}
          value={isEncryptionActive}
          onChange={() => {
            password.setValue('');
            passwordAgain.setValue('');
          }}
        />
        <MyView height={15} />
        <SetPasswordArea_ />
        <AddButton_ />
        <MyView height={5} />
      </MyScrollView>
    </MyCardModalScaffold>
  );
};

export default MyRepoInputModal;
