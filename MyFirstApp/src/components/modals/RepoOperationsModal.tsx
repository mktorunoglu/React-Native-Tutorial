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
import MyRepoDetailsModal from './RepoDetailsModal';
import MyRepoInputModal from './RepoInputModal';

const MyRepoOperationsModal = ({
  refreshContentFunctionList,
  repo,
}: {
  refreshContentFunctionList: (() => void)[];
  repo: MyRepoModel;
}) => (
  <MyCardModalScaffold>
    <MyModalHeader
      titleText={MyLocalizationUtils.getLocalizedRepoOperationsText()}
      messageText={repo.repoName}
    />
    <MyModalSelectionButton
      icon={MyIcons.InformationOutlined}
      text={MyLocalizationUtils.getLocalizedDetailsText()}
      onPress={() =>
        MyModalUtils.showModal({
          modal: <MyRepoDetailsModal repo={repo} />,
        })
      }
    />
    <MyModalSelectionButton
      icon={MyIcons.EditOutlined}
      text={MyLocalizationUtils.getLocalizedRenameText()}
      onPress={() =>
        MyModalUtils.showModal({
          modal: (
            <MyRepoInputModal
              refreshContentFunctionList={refreshContentFunctionList}
              repo={repo}
            />
          ),
        })
      }
    />
    <MyModalSelectionButton
      icon={MyIcons.ShareOutlined}
      text={MyLocalizationUtils.getLocalizedShareText()}
      onPress={() => {}}
    />
    <MyModalSelectionButton
      icon={MyIcons.DeleteOutlined}
      text={MyLocalizationUtils.getLocalizedDeleteText()}
      color={MyColors.Red}
      onPress={() =>
        MyModalUtils.showModal({
          modal: (
            <MyAlertModal
              titleText={MyLocalizationUtils.getLocalizedRepoWillBeDeletedText({
                variableTextList: [repo.repoName!],
              })}
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
                MyModalUtils.hideModal();
                if (response.isSuccessful) {
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
        })
      }
    />
  </MyCardModalScaffold>
);

export default MyRepoOperationsModal;
