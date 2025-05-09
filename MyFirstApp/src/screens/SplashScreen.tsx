import {StackNavigationProp} from '@react-navigation/stack';
import {useEffect} from 'react';
import MyImage from '../components/images/Image';
import MyProgressIndicator from '../components/indicators/ProgressIndicator';
import MyText from '../components/texts/Text';
import MySafeAreaView from '../components/views/SafeAreaView';
import MyView from '../components/views/View';
import {MyRouteProps} from '../constants/RouteProps';
import {MyColors} from '../enums/Colors';
import {MyFontWeights} from '../enums/FontWeights';
import {MyTextAligns} from '../enums/TextAligns';
import MyAuthenticationUtils from '../utils/AuthenticationUtils';
import MyColorUtils from '../utils/ColorUtils';
import MyKeyboardUtils from '../utils/KeyboardUtils';
import MyLocalizationUtils from '../utils/LocalizationUtils';
import MySortingUtils from '../utils/SortingUtils';

const MySplashScreen = ({
  navigation,
}: {
  navigation: StackNavigationProp<MyRouteProps>;
}) => {
  const onInit = async () => {
    await MyKeyboardUtils.initialize();
    await MyLocalizationUtils.initialize();
    await MySortingUtils.initialize();
    await MyAuthenticationUtils.autoLogin({
      navigation: navigation,
    });
  };
  useEffect(() => {
    onInit();
  }, []);
  return (
    <MyView isColumn isExpanded backgroundColor={MyColors.White}>
      <MySafeAreaView safeOnlyTop />
      <MyView isColumn isExpanded isCenterItems>
        <MyImage
          path={require('../../assets/logos/logo_kdpp.png')}
          height={100}
          width="70%"
        />
        <MyView height={100} />
        <MyProgressIndicator />
        <MyView isColumn zIndex={1} bottom={0}>
          <MyText
            text={MyLocalizationUtils.getLocalizedAppCopyrightDescriptionText()}
            fontSize={12}
            color={MyColorUtils.getColorWithOpacity(MyColors.Black, 0.5)}
            fontWeight={MyFontWeights.W300}
            textAlign={MyTextAligns.Center}
          />
          <MyView height={10} />
          <MyImage
            path={require('../../assets/logos/logo_turksat.png')}
            height={25}
            width="100%"
          />
          <MyView height={20} />
        </MyView>
      </MyView>
      <MySafeAreaView safeOnlyBottom />
    </MyView>
  );
};

export default MySplashScreen;
