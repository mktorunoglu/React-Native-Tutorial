import {observer} from 'mobx-react-lite';
import {MyPermissions} from '../../enums/Permissions';
import MyObservableValueModel from '../../models/ObservableValueModel';
import MyRepoModel from '../../models/RepoModel';
import MyLocalizationUtils from '../../utils/LocalizationUtils';
import MyModalUtils from '../../utils/ModalUtils';
import MyPermissionUtils from '../../utils/PermissionUtils';
import MyDataPickerButton from '../buttons/DataPickerButton';
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
          modal: <MyUserPickerModal selectedUserId={selectedUserId} />,
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
  // return (
  //   <MyResponseBuilder
  //     statePaddingHorizontal={20}
  //     statePaddingVertical={100}
  //     response={function (): Promise<MyResponseModel> {
  //       throw new Error('Function not implemented.');
  //     }}
  //     builder={function (response: MyResponseModel): ReactNode {
  //       throw new Error('Function not implemented.');
  //     }}
  //   />
  // );
};

export default MyShareRepoWithUserBodyModal;
