import {observer} from 'mobx-react-lite';
import MyObservableValueModel from '../../models/ObservableValueModel';
import MyRepoModel from '../../models/RepoModel';
import MyFileService from '../../services/FileService';
import MyLocalizationUtils from '../../utils/LocalizationUtils';
import MyModalUtils from '../../utils/ModalUtils';
import MySnackbarUtils from '../../utils/SnackbarUtils';
import MyValidationUtils from '../../utils/ValidationUtils';
import MyButton from '../buttons/Button';
import MyDivider from '../dividers/Divider';
import MyModalHeader from '../headers/ModalHeader';
import MyCardModalScaffold from '../scaffolds/CardModalScaffold';
import MyPasswordTextInput from '../texts/PasswordTextInput';
import MyScrollView from '../views/ScrollView';
import MyView from '../views/View';
import MyDontForgetPasswordAlertIndicator from '../indicators/DontForgetPasswordAlertIndicator';

const MyChangeRepoPasswordModal = ({
  refreshContentFunctionList,
  repo,
}: {
  refreshContentFunctionList: (() => void)[];
  repo: MyRepoModel;
}) => {
  const isCurrentPasswordVisible = new MyObservableValueModel(false);
  const isNewPasswordVisible = new MyObservableValueModel(false);
  const isNewPasswordAgainVisible = new MyObservableValueModel(false);
  const currentPassword = new MyObservableValueModel('');
  const newPassword = new MyObservableValueModel('');
  const newPasswordAgain = new MyObservableValueModel('');
  const ActionButton_ = observer(() => (
    <MyButton
      text={MyLocalizationUtils.getLocalizedSaveText()}
      isDisable={
        currentPassword.value.trim() == '' ||
        newPassword.value.trim() == '' ||
        newPasswordAgain.value.trim() == ''
      }
      onPress={async () => {
        // const validateNameResponse = MyValidationUtils.validateName({
        //   name: repoName.value,
        // });
        // if (validateNameResponse != null) {
        //   MySnackbarUtils.showSnackbar({
        //     text: validateNameResponse,
        //   });
        //   return;
        // }
        // if (isEncryptionActive.value) {
        //   const validatePasswordsResponse = MyValidationUtils.validatePasswords(
        //     {
        //       password: password.value,
        //       passwordAgain: passwordAgain.value,
        //     },
        //   );
        //   if (validatePasswordsResponse != null) {
        //     MySnackbarUtils.showSnackbar({
        //       text: validatePasswordsResponse,
        //     });
        //     return;
        //   }
        // }
        // MyModalUtils.showProgressModal();
        // const response = await MyFileService.createRepo({
        //   repoName: repoName.value,
        //   repoPass: isEncryptionActive.value ? password.value : undefined,
        // });
        // MyModalUtils.hideProgressModal();
        // MyModalUtils.hideModal();
        // if (response.isSuccessful) {
        //   MySnackbarUtils.showSnackbar({
        //     text: MyLocalizationUtils.getLocalizedRepoAddedText({
        //       variableTextList: [repoName.value],
        //     }),
        //     isSuccessful: true,
        //   });
        //   for (const refreshContentFunction of [
        //     ...refreshContentFunctionList,
        //   ].reverse()) {
        //     refreshContentFunction();
        //   }
        //   return;
        // }
        // MySnackbarUtils.showErrorSnackbar();
      }}
    />
  ));
  return (
    <MyCardModalScaffold>
      <MyModalHeader
        titleText={MyLocalizationUtils.getLocalizedChangeRepoPasswordText()}
        messageText={repo?.repoName}
      />
      <MyDivider />
      <MyScrollView padding={15}>
        <MyDontForgetPasswordAlertIndicator />
        <MyView height={15} />
        <MyPasswordTextInput
          labelText={MyLocalizationUtils.getLocalizedCurrentPasswordText()}
          isPasswordVisible={isCurrentPasswordVisible}
          password={currentPassword}
          isAutoFocused
        />
        <MyView height={15} />
        <MyPasswordTextInput
          labelText={MyLocalizationUtils.getLocalizedNewPasswordText()}
          isPasswordVisible={isNewPasswordVisible}
          password={newPassword}
        />
        <MyView height={15} />
        <MyPasswordTextInput
          labelText={MyLocalizationUtils.getLocalizedNewPasswordAgainText()}
          isPasswordVisible={isNewPasswordAgainVisible}
          password={newPasswordAgain}
        />
        <MyView height={20} />
        <ActionButton_ />
        <MyView height={5} />
      </MyScrollView>
    </MyCardModalScaffold>
  );
};

export default MyChangeRepoPasswordModal;
