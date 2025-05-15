import {observer} from 'mobx-react-lite';
import MyObservableValueModel from '../../models/ObservableValueModel';
import MyRepoModel from '../../models/RepoModel';
import MyLocalizationUtils from '../../utils/LocalizationUtils';
import MyTabBar from '../bars/TabBar';
import MyDivider from '../dividers/Divider';
import MyModalHeader from '../headers/ModalHeader';
import MyCardModalScaffold from '../scaffolds/CardModalScaffold';
import MyScrollView from '../views/ScrollView';
import MyShareRepoWithGroupBodyModal from './ShareRepoWithGroupBodyModal';
import MyShareRepoWithUserBodyModal from './ShareRepoWithUserBodyModal';

const MyShareRepoModal = ({repo}: {repo: MyRepoModel}) => {
  const tabNameList = [
    MyLocalizationUtils.getLocalizedShareWithUserText(),
    MyLocalizationUtils.getLocalizedShareWithGroupText(),
  ];
  const selectedTabName = new MyObservableValueModel(tabNameList[0]);
  const _Body = observer(() => {
    if (selectedTabName.value == tabNameList[0]) {
      return <MyShareRepoWithUserBodyModal repo={repo} />;
    }
    return <MyShareRepoWithGroupBodyModal repo={repo} />;
  });
  return (
    <MyCardModalScaffold>
      <MyModalHeader
        titleText={MyLocalizationUtils.getLocalizedShareRepoText()}
        messageText={repo.repoName}
      />
      <MyDivider />
      <MyScrollView>
        <MyTabBar tabNameList={tabNameList} selectedTabName={selectedTabName} />
        <_Body />
      </MyScrollView>
    </MyCardModalScaffold>
  );
};

export default MyShareRepoModal;
