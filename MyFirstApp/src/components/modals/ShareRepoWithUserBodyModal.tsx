import {observer} from 'mobx-react-lite';
import {MyPermissions} from '../../enums/Permissions';
import {MySizes} from '../../enums/Sizes';
import MyObservableValueModel from '../../models/ObservableValueModel';
import MyRepoModel from '../../models/RepoModel';
import MyFileService from '../../services/FileService';
import MyLocalizationUtils from '../../utils/LocalizationUtils';
import MyModalUtils from '../../utils/ModalUtils';
import MyPermissionUtils from '../../utils/PermissionUtils';
import MyTabBar from '../bars/TabBar';
import MyResponseBuilder from '../builders/ResponseBuilder';
import MyButton from '../buttons/Button';
import MyDataPickerButton from '../buttons/DataPickerButton';
import MyDivider from '../dividers/Divider';
import MyView from '../views/View';
import MyPermissionPickerModal from './PermissionPickerModal';
import MyUserPickerModal from './UserPickerModal';

const MyShareRepoWithUserBodyModal = ({repo}: {repo: MyRepoModel}) => {
  const selectedUserId = new MyObservableValueModel('');
  const selectedPermission = new MyObservableValueModel(MyPermissions.ReadOnly);
  const UserPicker_ = observer(() => (
    <MyDataPickerButton
      labelText={MyLocalizationUtils.getLocalizedSelectUserText()}
      labelTextOnSelect={MyLocalizationUtils.getLocalizedUserText()}
      valueText={selectedUserId.value}
      onPress={() =>
        MyModalUtils.showModal({
          modal: (
            <MyUserPickerModal
              message={MyLocalizationUtils.getLocalizedSelectPermissionToShareRepoText(
                {variableTextList: [repo.repoName ?? '']},
              )}
              selectedUserId={selectedUserId}
            />
          ),
        })
      }
    />
  ));
  const PermissionPicker_ = observer(() => (
    <MyDataPickerButton
      labelText={MyLocalizationUtils.getLocalizedSelectPermissionText()}
      labelTextOnSelect={MyLocalizationUtils.getLocalizedPermissionText()}
      valueText={
        MyPermissionUtils.getPermissionText({
          permission: selectedPermission.value,
        }) ?? ''
      }
      onPress={() =>
        MyModalUtils.showModal({
          modal: (
            <MyPermissionPickerModal
              message={MyLocalizationUtils.getLocalizedSelectPermissionToShareRepoText(
                {variableTextList: [repo.repoName ?? '']},
              )}
              selectedPermission={selectedPermission}
            />
          ),
        })
      }
    />
  ));
  const tabNameList = [MyLocalizationUtils.getLocalizedUsersSharedWithText()];
  const selectedTabName = new MyObservableValueModel(tabNameList[0]);
  return (
    <MyResponseBuilder
      statePaddingVertical={100}
      response={() =>
        MyFileService.getUsersForSharedRepo({repoId: repo.repoId!})
      }
      builder={response => (
        <MyView isColumn>
          <UserPicker_ />
          <PermissionPicker_ />
          <MyView margin={20} width={MySizes.Auto}>
            <MyButton
              isDisable
              text={MyLocalizationUtils.getLocalizedShareText()}
              onPress={() => {}}
            />
          </MyView>
          <MyDivider />
          <MyTabBar
            tabNameList={tabNameList}
            selectedTabName={selectedTabName}
          />
        </MyView>
      )}
    />
  );
};

export default MyShareRepoWithUserBodyModal;
