import {observer} from 'mobx-react-lite';
import {MyColors} from '../../enums/Colors';
import {MyFontWeights} from '../../enums/FontWeights';
import {MyNavigationBarRoutes} from '../../enums/NavigationBarRoutes';
import {MySizes} from '../../enums/Sizes';
import MyNavigationBarButtonDataModel from '../../models/NavigationBarButtonDataModel';
import MyObservableValueModel from '../../models/ObservableValueModel';
import MyRawButton from '../buttons/RawButton';
import MyDivider from '../dividers/Divider';
import MyIcon from '../icons/Icon';
import MyText from '../texts/Text';
import MyView from '../views/View';

const MyNavigationBar = ({
  buttonDataList,
  selectedRoute,
}: {
  buttonDataList: MyNavigationBarButtonDataModel[];
  selectedRoute: MyObservableValueModel<MyNavigationBarRoutes>;
}) => {
  const NavigationBarButton_ = observer(
    ({buttonData}: {buttonData: MyNavigationBarButtonDataModel}) => {
      const isSelected = selectedRoute.value == buttonData.route;
      const color = isSelected ? MyColors.Theme : undefined;
      return (
        <MyRawButton
          onPress={
            isSelected
              ? undefined
              : () => selectedRoute.setValue(buttonData.route)
          }>
          <MyView isColumn isCenterItems paddingVertical={10}>
            <MyView
              width={MySizes.Auto}
              backgroundColor={color}
              paddingHorizontal={15}
              paddingVertical={2}
              borderRadius={isSelected ? 100 : 0}>
              <MyIcon
                icon={isSelected ? buttonData.activeIcon : buttonData.icon}
                color={isSelected ? MyColors.White : undefined}
              />
            </MyView>
            <MyText
              text={buttonData.text}
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
        {buttonDataList.map(item => (
          <MyView key={item.route} isExpanded>
            <NavigationBarButton_ buttonData={item} />
          </MyView>
        ))}
      </MyView>
    </MyView>
  );
};

export default MyNavigationBar;
