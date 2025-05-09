import {observer} from 'mobx-react-lite';
import {MyIcons} from '../../enums/Icons';
import MyObservableValueModel from '../../models/ObservableValueModel';
import MyLocalizationUtils from '../../utils/LocalizationUtils';
import MyTextInput from './TextInput';

const MyPasswordTextInput = ({
  labelText = MyLocalizationUtils.getLocalizedPasswordText(),
  isPasswordVisible,
  password,
  isAutoFocused = false,
}: {
  labelText?: string;
  isPasswordVisible: MyObservableValueModel<boolean>;
  password: MyObservableValueModel<string>;
  isAutoFocused?: boolean;
}) => {
  const PasswordTextInput_ = observer(() => (
    <MyTextInput
      isTextObscured={!isPasswordVisible.value}
      isAutoFocused={isAutoFocused}
      labelText={labelText}
      rightIcon={
        isPasswordVisible.value ? MyIcons.EyeOffOutlined : MyIcons.EyeOutlined
      }
      onPressRightIcon={() =>
        isPasswordVisible.setValue(!isPasswordVisible.value)
      }
      onChangeText={text => password.setValue(text)}
    />
  ));
  return <PasswordTextInput_ />;
};

export default MyPasswordTextInput;
