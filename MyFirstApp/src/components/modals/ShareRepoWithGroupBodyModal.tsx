import {observer} from 'mobx-react-lite';
import {MyPermissions} from '../../enums/Permissions';
import MyGroupModel from '../../models/GroupModel';
import MyObservableValueModel from '../../models/ObservableValueModel';
import MyRepoModel from '../../models/RepoModel';
import MyLocalizationUtils from '../../utils/LocalizationUtils';
import MyModalUtils from '../../utils/ModalUtils';
import MyPermissionUtils from '../../utils/PermissionUtils';
import MyDataPickerButton from '../buttons/DataPickerButton';
import MyView from '../views/View';
import MyGroupPickerModal from './GroupPickerModal';
import MyPermissionPickerModal from './PermissionPickerModal';

const MyShareRepoWithGroupBodyModal = ({repo}: {repo: MyRepoModel}) => {
  const selectedGroup = new MyObservableValueModel(new MyGroupModel({}));
  const selectedPermission = new MyObservableValueModel(MyPermissions.ReadOnly);
  const UserPicker_ = observer(() => (
    <MyDataPickerButton
      labelText={MyLocalizationUtils.getLocalizedSelectGroupText()}
      labelTextOnSelect={MyLocalizationUtils.getLocalizedUserText()}
      valueText={selectedGroup.value.groupName ?? ''}
      onPress={() =>
        MyModalUtils.showModal({
          modal: <MyGroupPickerModal selectedGroup={selectedGroup} />,
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
            <MyPermissionPickerModal selectedPermission={selectedPermission} />
          ),
        })
      }
    />
  ));
  return (
    <MyView isColumn>
      <UserPicker_ />
      <PermissionPicker_ />
    </MyView>
  );
};

export default MyShareRepoWithGroupBodyModal;
