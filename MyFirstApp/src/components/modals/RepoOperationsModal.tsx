import {MyColors} from '../../enums/Colors';
import {MyIcons} from '../../enums/Icons';
import MyRepoModel from '../../models/RepoModel';
import MyLocalizationUtils from '../../utils/LocalizationUtils';
import MyModalUtils from '../../utils/ModalUtils';
import MyModalSelectionButton from '../buttons/ModalSelectionButton';
import MyModalHeader from '../headers/ModalHeader';
import MyCardModalScaffold from '../scaffolds/CardModalScaffold';
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
      onPress={() => {}}
    />
  </MyCardModalScaffold>
);

export default MyRepoOperationsModal;
