import {MyColors} from '../../enums/Colors';
import {MyIcons} from '../../enums/Icons';
import MyLocalizationUtils from '../../utils/LocalizationUtils';
import MyIconButton from '../buttons/IconButton';
import MyDivider from '../dividers/Divider';
import MyImage from '../images/Image';
import MySafeAreaView from '../views/SafeAreaView';
import MyView from '../views/View';

const MyHomeAppBar = () => (
  <MyView isColumn backgroundColor={MyColors.White}>
    <MySafeAreaView safeOnlyTop />
    <MyView isRow>
      <MyIconButton
        icon={MyIcons.List}
        tooltip={MyLocalizationUtils.getLocalizedActionsText()}
        onPress={() => {}}
      />
      <MyIconButton icon={MyIcons.Null} />
      <MyView isRow isExpanded isCenterItems>
        <MyImage
          path={require('../../../assets/logos/logo_kdpp.png')}
          height="70%"
          width="100%"
        />
      </MyView>
      <MyIconButton
        icon={MyIcons.BellOutlined}
        tooltip={MyLocalizationUtils.getLocalizedNotificationsText()}
        onPress={() => {}}
      />
      <MyIconButton
        icon={MyIcons.MessageOutlined}
        tooltip={MyLocalizationUtils.getLocalizedMessagesText()}
        onPress={() => {}}
      />
    </MyView>
    <MyDivider />
  </MyView>
);
export default MyHomeAppBar;
