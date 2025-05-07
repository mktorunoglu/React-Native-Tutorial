import {MyColors} from '../../enums/Colors';
import {MyIcons} from '../../enums/Icons';
import MyRepoModel from '../../models/RepoModel';
import MyLocalizationUtils from '../../utils/LocalizationUtils';
import MyModalSelectionButton from '../buttons/ModalSelectionButton';
import MyModalHeader from '../headers/ModalHeader';
import MyModal from './Modal';

const MyRepoOperationsModal = ({repo}: {repo: MyRepoModel}) => {
  return (
    <MyModal>
      <MyModalHeader
        titleText={MyLocalizationUtils.getLocalizedRepoOperationsText()}
        messageText={repo.repoName}
      />
      <MyModalSelectionButton
        icon={MyIcons.InformationOutlined}
        text={MyLocalizationUtils.getLocalizedDetailsText()}
        onPress={() => {}}
      />
      <MyModalSelectionButton
        icon={MyIcons.EditOutlined}
        text={MyLocalizationUtils.getLocalizedRenameText()}
        onPress={() => {}}
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
    </MyModal>
  );
};

export default MyRepoOperationsModal;
