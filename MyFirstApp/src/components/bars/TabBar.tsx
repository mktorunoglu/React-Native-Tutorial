import {observer} from 'mobx-react-lite';
import {MyColors} from '../../enums/Colors';
import {MyFontWeights} from '../../enums/FontWeights';
import {MySizes} from '../../enums/Sizes';
import MyObservableValueModel from '../../models/ObservableValueModel';
import MyRawButton from '../buttons/RawButton';
import MyDivider from '../dividers/Divider';
import MyText from '../texts/Text';
import MyScrollView from '../views/ScrollView';
import MyView from '../views/View';

const MyTabBar = ({
  tabNameList,
  selectedTabName,
}: {
  tabNameList: string[];
  selectedTabName: MyObservableValueModel<string>;
}) => {
  const TabBarButton_ = observer(({tabName}: {tabName: string}) => {
    const isSelected = tabName == selectedTabName.value;
    const color = isSelected ? MyColors.Theme : undefined;
    return (
      <MyRawButton
        color={color}
        onPress={
          isSelected ? undefined : () => selectedTabName.setValue(tabName)
        }>
        <MyView isColumn>
          <MyView
            width={MySizes.Auto}
            paddingVertical={10}
            paddingHorizontal={15}>
            <MyText
              text={tabName}
              color={color}
              fontWeight={isSelected ? MyFontWeights.Bold : undefined}
            />
          </MyView>
          <MyDivider
            color={isSelected ? MyColors.Theme : MyColors.Transparent}
            thickness={isSelected ? 2 : undefined}
          />
        </MyView>
      </MyRawButton>
    );
  });
  return (
    <MyView isColumn>
      <MyScrollView isHorizontal paddingHorizontal={10}>
        {tabNameList.map(item => (
          <TabBarButton_ key={item} tabName={item} />
        ))}
      </MyScrollView>
      <MyDivider />
    </MyView>
  );
};

export default MyTabBar;
