import {MyIcons} from '../../enums/Icons';
import MyLocalizationUtils from '../../utils/LocalizationUtils';
import MyIconButton from './IconButton';

const MySortingIconButton = () => {
  return (
    <MyIconButton
      icon={MyIcons.Sort}
      tooltip={MyLocalizationUtils.getLocalizedSortText()}
      onPress={() => {}}
    />
  );
};

export default MySortingIconButton;
