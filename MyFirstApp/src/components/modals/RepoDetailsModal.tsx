import MyRepoModel from '../../models/RepoModel';
import MyConverterUtils from '../../utils/ConverterUtils';
import MyDateUtils from '../../utils/DateUtils';
import MyLocalizationUtils from '../../utils/LocalizationUtils';
import MyDivider from '../dividers/Divider';
import MyModalHeader from '../headers/ModalHeader';
import MyCardModalScaffold from '../scaffolds/CardModalScaffold';
import MyModalDataTile from '../tiles/ModalDataTile';

const MyRepoDetailsModal = ({repo}: {repo: MyRepoModel}) => (
  <MyCardModalScaffold>
    <MyModalHeader
      titleText={MyLocalizationUtils.getLocalizedRepoDetailsText()}
      messageText={repo.repoName}
    />
    <MyDivider />
    <MyModalDataTile
      text={MyLocalizationUtils.getLocalizedSizeText()}
      value={MyConverterUtils.convertNumberToSizeText(repo.size ?? 0)}
    />
    <MyModalDataTile
      text={MyLocalizationUtils.getLocalizedLastUpdateText()}
      value={MyDateUtils.getHistoryTextFromMillisecondsSinceEpoch({
        millisecondsSinceEpoch: repo.lastModified,
      })}
      isLastItem
    />
  </MyCardModalScaffold>
);

export default MyRepoDetailsModal;
