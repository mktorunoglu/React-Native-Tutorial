import {observer} from 'mobx-react-lite';
import MyObservableValueModel from '../../models/ObservableValueModel';
import MyRepoModel from '../../models/RepoModel';
import MyLocalizationUtils from '../../utils/LocalizationUtils';
import MyDataPickerButton from '../buttons/DataPickerButton';
import MyView from '../views/View';

const MyShareRepoWithUserBodyModal = ({repo}: {repo: MyRepoModel}) => {
  const selectedUserId = new MyObservableValueModel('');
  const selectedPermission = new MyObservableValueModel('');
  const UserPicker_ = observer(() => (
    <MyDataPickerButton
      labelText={MyLocalizationUtils.getLocalizedSelectUserText()}
      labelTextOnSelect={MyLocalizationUtils.getLocalizedUserText()}
      valueText={selectedUserId.value}
      onPress={() => {}}
    />
  ));
  const PermissionPicker_ = observer(() => (
    <MyDataPickerButton
      labelText={MyLocalizationUtils.getLocalizedPermissionText()}
      labelTextOnSelect={MyLocalizationUtils.getLocalizedPermissionText()}
      valueText={selectedPermission.value}
      onPress={() => {}}
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
