import {MyColors} from '../../enums/Colors';
import {MyIcons} from '../../enums/Icons';
import MyLocalizationUtils from '../../utils/LocalizationUtils';
import MyTextInput from './TextInput';

const MySearchTextInput = ({
  onChangeText,
}: {
  onChangeText?: (text: string) => void;
}) => (
  <MyTextInput
    outlineColor={MyColors.Transparent}
    activeOutlineColor={MyColors.Transparent}
    hintText={MyLocalizationUtils.getLocalizedSearchText()}
    hintTextColor={MyColors.Grey}
    leftIcon={MyIcons.Search}
    onChangeText={onChangeText}
  />
);

export default MySearchTextInput;
