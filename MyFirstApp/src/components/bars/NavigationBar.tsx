import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {MyRouteProps} from '../../constants/RouteProps';
import {MyColors} from '../../enums/Colors';
import {MyFontWeights} from '../../enums/FontWeights';
import {MyRoutes} from '../../enums/Routes';
import MyNavigationBarButtonModel from '../../models/NavigationBarButtonModel';
import MyRawButton from '../buttons/RawButton';
import MyDivider from '../dividers/Divider';
import MyIcon from '../icons/Icon';
import MyText from '../texts/Text';
import MySafeAreaView from '../views/SafeAreaView';
import MyView from '../views/View';

const MyNavigationBar = ({
  buttonList,
  currentRoute,
}: {
  buttonList: MyNavigationBarButtonModel[];
  currentRoute: MyRoutes;
}) => {
  const navigation = useNavigation<StackNavigationProp<MyRouteProps>>();
  return (
    <MyView isColumn backgroundColor={MyColors.White}>
      <MyDivider />
      <MyView isRow>
        {buttonList.map(button => {
          const isSelected = currentRoute == button.route;
          const color = isSelected ? MyColors.Theme : undefined;
          return (
            <MyView key={button.text} isExpanded>
              <MyRawButton
                onPress={
                  isSelected
                    ? undefined
                    : () => navigation.replace(button.route)
                }>
                <MyView isColumn isCenterItems paddingVertical={10}>
                  <MyView
                    width="auto"
                    backgroundColor={color}
                    paddingHorizontal={15}
                    paddingVertical={2}
                    borderRadius={100}>
                    <MyIcon
                      icon={isSelected ? button.activeIcon : button.icon}
                      color={isSelected ? MyColors.White : undefined}
                    />
                  </MyView>
                  <MyText
                    text={button.text}
                    color={color}
                    fontWeight={isSelected ? MyFontWeights.Bold : undefined}
                  />
                </MyView>
              </MyRawButton>
            </MyView>
          );
        })}
      </MyView>
      <MySafeAreaView safeOnlyBottom />
    </MyView>
  );
};

export default MyNavigationBar;
