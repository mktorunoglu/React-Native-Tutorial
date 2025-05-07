import {MyIcons} from '../../enums/Icons';
import MyLocalizationUtils from '../../utils/LocalizationUtils';
import MyModalUtils from '../../utils/ModalUtils';
import MySortingModal from '../modals/SortingModal';
import MyIconButton from './IconButton';

const MySortingIconButton = () => {
  return (
    <MyIconButton
      icon={MyIcons.Sort}
      tooltip={MyLocalizationUtils.getLocalizedSortText()}
      onPress={() => {
        MyModalUtils.showModal({
          modal: <MySortingModal />,
        });
      }}
    />
  );
};

export default MySortingIconButton;
