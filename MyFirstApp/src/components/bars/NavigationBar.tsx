import {MyColors} from '../../enums/Colors';
import {MyRoutes} from '../../enums/Routes';
import MyNavigationBarButtonModel from '../../models/NavigationBarButtonModel';
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
  return (
    <MyView isColumn backgroundColor={MyColors.White}>
      <MyDivider />
      <MyView isRow>
        {buttonList.map(button => {
          const isSelected = currentRoute == button.route;
          return (
            <MyView isColumn isExpanded isCenterItems width="auto">
              <MyIcon icon={button.icon} />
              <MyText text={button.text} />
            </MyView>
          );
        })}
      </MyView>
      <MySafeAreaView safeOnlyBottom />
    </MyView>
  );
};

export default MyNavigationBar;
