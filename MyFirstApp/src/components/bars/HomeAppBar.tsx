import {MyIcons} from '../../enums/Icons';
import {MyLocalizationTextKeys} from '../../enums/LocalizationTextKeys';
import MyLocalizationUtils from '../../utils/LocalizationUtils';
import MyIconButton from '../buttons/IconButton';
import MyDivider from '../dividers/Divider';
import MyImage from '../images/Image';
import MySafeAreaView from '../views/SafeAreaView';
import MyView from '../views/View';

const MyHomeAppBar = () => {
  return (
    <MyView isColumn>
      <MySafeAreaView safeOnlyTop />
      <MyView isRow>
        <MyIconButton
          icon={MyIcons.List}
          tooltip={MyLocalizationUtils.getLocalizedText(
            MyLocalizationTextKeys.Actions,
          )}
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
          tooltip={MyLocalizationUtils.getLocalizedText(
            MyLocalizationTextKeys.Notifications,
          )}
          onPress={() => {}}
        />
        <MyIconButton
          icon={MyIcons.MessageOutlined}
          tooltip={MyLocalizationUtils.getLocalizedText(
            MyLocalizationTextKeys.Messages,
          )}
          onPress={() => {}}
        />
      </MyView>
      <MyDivider />
    </MyView>
  );
};

export default MyHomeAppBar;
