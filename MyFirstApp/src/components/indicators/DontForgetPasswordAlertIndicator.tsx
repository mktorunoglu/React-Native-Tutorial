import {MyColors} from '../../enums/Colors';
import {MyIcons} from '../../enums/Icons';
import {MySizes} from '../../enums/Sizes';
import MyColorUtils from '../../utils/ColorUtils';
import MyLocalizationUtils from '../../utils/LocalizationUtils';
import MyIcon from '../icons/Icon';
import MyText from '../texts/Text';
import MyView from '../views/View';

const MyDontForgetPasswordAlertIndicator = () => (
  <MyView
    isRow
    backgroundColor={MyColorUtils.getColorWithOpacity(MyColors.Red, 0.1)}
    padding={10}
    borderRadius={5}>
    <MyIcon icon={MyIcons.AlertCircle} color={MyColors.Red} />
    <MyView width={10} />
    <MyView isExpanded width={MySizes.Auto}>
      <MyText
        text={MyLocalizationUtils.getLocalizedDontForgetPasswordDescriptionText()}
        color={MyColors.Red}
      />
    </MyView>
  </MyView>
);

export default MyDontForgetPasswordAlertIndicator;
