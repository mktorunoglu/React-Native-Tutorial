import {observer} from 'mobx-react-lite';
import {MyColors} from '../../enums/Colors';
import {MyIcons} from '../../enums/Icons';
import {MySizes} from '../../enums/Sizes';
import {MyTextCapitalizes} from '../../enums/TextCapitalizes';
import MyObservableValueModel from '../../models/ObservableValueModel';
import MyFileService from '../../services/FileService';
import MyColorUtils from '../../utils/ColorUtils';
import MyLocalizationUtils from '../../utils/LocalizationUtils';
import MyModalUtils from '../../utils/ModalUtils';
import MySnackbarUtils from '../../utils/SnackbarUtils';
import MyValidationUtils from '../../utils/ValidationUtils';
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

const MyAddRepoModal = ({
  refreshContentFunctionList,
}: {
  refreshContentFunctionList: (() => void)[];
}) => {
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
  const ActionButton_ = observer(() => (
    <MyButton
      text={MyLocalizationUtils.getLocalizedAddText()}
      isDisable={
        repoName.value.trim() == '' ||
        (isEncryptionActive.value
          ? password.value.trim() == '' || passwordAgain.value.trim() == ''
          : false)
      }
      onPress={async () => {
        const validateNameResponse = MyValidationUtils.validateName({
          name: repoName.value,
        });
        if (validateNameResponse != null) {
          MySnackbarUtils.showSnackbar({
            text: validateNameResponse,
          });
          return;
        }
        if (isEncryptionActive.value) {
          const validatePasswordsResponse = MyValidationUtils.validatePasswords(
            {
              password: password.value,
              passwordAgain: passwordAgain.value,
            },
          );
          if (validatePasswordsResponse != null) {
            MySnackbarUtils.showSnackbar({
              text: validatePasswordsResponse,
            });
            return;
          }
        }
        MyModalUtils.showProgressModal();
        const response = await MyFileService.createRepo({
          repoName: repoName.value,
          repoPass: isEncryptionActive.value ? password.value : undefined,
        });
        MyModalUtils.hideProgressModal();
        MyModalUtils.hideModal();
        if (response.isSuccessful) {
          MySnackbarUtils.showSnackbar({
            text: MyLocalizationUtils.getLocalizedRepoAddedText({
              variableTextList: [repoName.value],
            }),
            isSuccessful: true,
          });
          for (const refreshContentFunction of [
            ...refreshContentFunctionList,
          ].reverse()) {
            refreshContentFunction();
          }
          return;
        }
        MySnackbarUtils.showErrorSnackbar();
      }}
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
        <ActionButton_ />
        <MyView height={5} />
      </MyScrollView>
    </MyCardModalScaffold>
  );
};

export default MyAddRepoModal;
