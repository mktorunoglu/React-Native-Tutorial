import {observer} from 'mobx-react-lite';
import {MyColors} from '../../enums/Colors';
import {MyFontWeights} from '../../enums/FontWeights';
import {MyNavigationBarRoutes} from '../../enums/NavigationBarRoutes';
import MyNavigationBarButtonModel from '../../models/NavigationBarButtonModel';
import MyObservableValueModel from '../../models/ObservableValueModel';
import MyRawButton from '../buttons/RawButton';
import MyDivider from '../dividers/Divider';
import MyIcon from '../icons/Icon';
import MyText from '../texts/Text';
import MySafeAreaView from '../views/SafeAreaView';
import MyView from '../views/View';

const MyNavigationBar = ({
  buttonList,
  selectedRoute,
}: {
  buttonList: MyNavigationBarButtonModel[];
  selectedRoute: MyObservableValueModel<MyNavigationBarRoutes>;
}) => {
  const NavigationBarButton_ = observer(
    ({button}: {button: MyNavigationBarButtonModel}) => {
      const isSelected = selectedRoute.value == button.route;
      const color = isSelected ? MyColors.Theme : undefined;
      return (
        <MyRawButton
          onPress={
            isSelected ? undefined : () => selectedRoute.setValue(button.route)
          }>
          <MyView isColumn isCenterItems paddingVertical={10}>
            <MyView
              width="auto"
              backgroundColor={color}
              paddingHorizontal={15}
              paddingVertical={2}
              borderRadius={isSelected ? 100 : 0}>
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
      );
    },
  );
  return (
    <MyView isColumn backgroundColor={MyColors.White}>
      <MyDivider />
      <MyView isRow>
        {buttonList.map(button => (
          <MyView key={button.route} isExpanded>
            <NavigationBarButton_ button={button} />
          </MyView>
        ))}
      </MyView>
      <MySafeAreaView safeOnlyBottom />
    </MyView>
  );
};

export default MyNavigationBar;
