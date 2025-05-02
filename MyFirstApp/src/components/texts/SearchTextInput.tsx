import {MyColors} from '../../enums/Colors';
import {MyIcons} from '../../enums/Icons';
import {MyLocalizationTextKeys} from '../../enums/LocalizationTextKeys';
import MyLocalizationUtils from '../../utils/LocalizationUtils';
import MyTextInput from './TextInput';

const MySearchTextInput = () => {
  return (
    <MyTextInput
      outlineColor={MyColors.Transparent}
      activeOutlineColor={MyColors.Transparent}
      hintText={MyLocalizationUtils.getLocalizedText(
        MyLocalizationTextKeys.Search,
      )}
      hintTextColor={MyColors.Grey}
      leftIcon={MyIcons.Search}
    />
  );
};

export default MySearchTextInput;
