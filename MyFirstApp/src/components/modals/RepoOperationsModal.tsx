import {MyColors} from '../../enums/Colors';
import {MyIcons} from '../../enums/Icons';
import MyRepoModel from '../../models/RepoModel';
import MyFileService from '../../services/FileService';
import MyLocalizationUtils from '../../utils/LocalizationUtils';
import MyModalUtils from '../../utils/ModalUtils';
import MySnackbarUtils from '../../utils/SnackbarUtils';
import MyModalSelectionButton from '../buttons/ModalSelectionButton';
import MyModalHeader from '../headers/ModalHeader';
import MyCardModalScaffold from '../scaffolds/CardModalScaffold';
import MyAlertModal from './AlertModal';
import MyChangeRepoPasswordModal from './ChangeRepoPasswordModal';
import MyRenameRepoModal from './RenameRepoModal';
import MyRepoDetailsModal from './RepoDetailsModal';

const MyRepoOperationsModal = ({
  refreshContentFunctionList,
  repo,
}: {
  refreshContentFunctionList: (() => void)[];
  repo: MyRepoModel;
}) => {
  const isRepoEncrypted = repo.encrypted == true;
  return (
    <MyCardModalScaffold>
      <MyModalHeader
        titleText={MyLocalizationUtils.getLocalizedRepoOperationsText()}
        messageText={repo.repoName}
      />
      <MyModalSelectionButton
        icon={MyIcons.InformationOutlined}
        text={MyLocalizationUtils.getLocalizedDetailsText()}
        onPress={() => {
          MyModalUtils.hideLastModal();
          MyModalUtils.showModal({
            modal: <MyRepoDetailsModal repo={repo} />,
          });
        }}
      />
      <MyModalSelectionButton
        icon={MyIcons.EditOutlined}
        text={MyLocalizationUtils.getLocalizedRenameText()}
        onPress={() => {
          MyModalUtils.hideLastModal();
          MyModalUtils.showModal({
            modal: (
              <MyRenameRepoModal
                refreshContentFunctionList={refreshContentFunctionList}
                repo={repo}
              />
            ),
          });
        }}
      />
      {isRepoEncrypted && (
        <MyModalSelectionButton
          icon={MyIcons.KeyOutlined}
          text={MyLocalizationUtils.getLocalizedChangePasswordText()}
          onPress={() => {
            MyModalUtils.hideLastModal();
            MyModalUtils.showModal({
              modal: (
                <MyChangeRepoPasswordModal
                  refreshContentFunctionList={refreshContentFunctionList}
                  repo={repo}
                />
              ),
            });
          }}
        />
      )}
      <MyModalSelectionButton
        icon={MyIcons.ShareOutlined}
        text={MyLocalizationUtils.getLocalizedShareText()}
        onPress={() => {}}
      />
      <MyModalSelectionButton
        icon={MyIcons.DeleteOutlined}
        text={MyLocalizationUtils.getLocalizedDeleteText()}
        color={MyColors.Red}
        onPress={() => {
          MyModalUtils.hideLastModal();
          MyModalUtils.showModal({
            modal: (
              <MyAlertModal
                titleText={MyLocalizationUtils.getLocalizedRepoWillBeDeletedText(
                  {
                    variableTextList: [repo.repoName!],
                  },
                )}
                messageText={MyLocalizationUtils.getLocalizedAreYouSureText()}
                buttonText={MyLocalizationUtils.getLocalizedDeleteText()}
                buttonColor={MyColors.Red}
                buttonOnPress={async () => {
                  MyModalUtils.showProgressModal();
                  const response = await MyFileService.deleteRepo({
                    repoId: repo.repoId!,
                    repoName: repo.repoName!,
                  });
                  MyModalUtils.hideProgressModal();
                  if (response.isSuccessful) {
                    MyModalUtils.hideLastModal();
                    MySnackbarUtils.showSnackbar({
                      text: MyLocalizationUtils.getLocalizedRepoDeletedText({
                        variableTextList: [repo.repoName!],
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
            ),
          });
        }}
      />
    </MyCardModalScaffold>
  );
};

export default MyRepoOperationsModal;
