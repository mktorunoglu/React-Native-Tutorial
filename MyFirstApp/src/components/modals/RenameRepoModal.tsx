import {observer} from 'mobx-react-lite';
import {MyTextCapitalizes} from '../../enums/TextCapitalizes';
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
import MyTextInput from '../texts/TextInput';
import MyScrollView from '../views/ScrollView';
import MyView from '../views/View';

const MyRenameRepoModal = ({
  refreshContentFunctionList,
  repo,
}: {
  refreshContentFunctionList: (() => void)[];
  repo: MyRepoModel;
}) => {
  const repoName = new MyObservableValueModel(repo.repoName ?? '');
  const RepoNameTextInput_ = observer(() => (
    <MyTextInput
      labelText={MyLocalizationUtils.getLocalizedRepoNameText()}
      isAutoFocused
      textCapitalize={MyTextCapitalizes.Words}
      value={repoName.value}
      onChangeText={text => repoName.setValue(text)}
    />
  ));
  const ActionButton_ = observer(() => (
    <MyButton
      text={MyLocalizationUtils.getLocalizedSaveText()}
      isDisable={repoName.value.trim() == ''}
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
        MyModalUtils.showProgressModal();
        const response = await MyFileService.renameRepo({
          repoId: repo.repoId!,
          repoName: repoName.value,
        });
        MyModalUtils.hideProgressModal();
        if (response.isSuccessful) {
          MyModalUtils.hideLastModal();
          MySnackbarUtils.showSnackbar({
            text: MyLocalizationUtils.getLocalizedRepoRenamedText({
              variableTextList: [repo.repoName!, repoName.value],
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
        titleText={MyLocalizationUtils.getLocalizedRenameRepoText()}
        messageText={repo.repoName}
      />
      <MyDivider />
      <MyScrollView padding={15}>
        <RepoNameTextInput_ />
        <MyView height={15} />
        <ActionButton_ />
        <MyView height={5} />
      </MyScrollView>
    </MyCardModalScaffold>
  );
};

export default MyRenameRepoModal;
