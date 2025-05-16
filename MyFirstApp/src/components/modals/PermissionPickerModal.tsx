import {MyPermissions} from '../../enums/Permissions';
import MyModalSelectionButtonDataModel from '../../models/ModalSelectionButtonDataModel';
import MyObservableValueModel from '../../models/ObservableValueModel';
import MyLocalizationUtils from '../../utils/LocalizationUtils';
import MyModalUtils from '../../utils/ModalUtils';
import MyPermissionUtils from '../../utils/PermissionUtils';
import MyModalSelectionButton from '../buttons/ModalSelectionButton';
import MyModalHeader from '../headers/ModalHeader';
import MyCardModalScaffold from '../scaffolds/CardModalScaffold';

const MyPermissionPickerModal = ({
  message,
  selectedPermission,
  isWriteOnlyPermissionIncluded = false,
}: {
  message?: string;
  selectedPermission: MyObservableValueModel<string>;
  isWriteOnlyPermissionIncluded?: boolean;
}) => (
  <MyCardModalScaffold>
    <MyModalHeader
      titleText={MyLocalizationUtils.getLocalizedSelectPermissionText()}
      messageText={message}
    />
    {isWriteOnlyPermissionIncluded
      ? [
          MyPermissions.ReadOnly,
          MyPermissions.ReadWrite,
          MyPermissions.WriteOnly,
        ]
      : [MyPermissions.ReadOnly, MyPermissions.ReadWrite]
          .map(
            item =>
              new MyModalSelectionButtonDataModel({
                value: item,
                text:
                  MyPermissionUtils.getPermissionText({permission: item}) ?? '',
              }),
          )
          .map(item => (
            <MyModalSelectionButton
              key={item.value}
              isSelected={selectedPermission.value == item.value}
              text={item.text}
              onPress={() => {
                selectedPermission.setValue(item.value);
                MyModalUtils.hideLastModal();
              }}
            />
          ))}
  </MyCardModalScaffold>
);

export default MyPermissionPickerModal;
