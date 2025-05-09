import {observer} from 'mobx-react-lite';
import {ReactNode} from 'react';
import {DimensionValue, ScrollView} from 'react-native';
import MyKeyboardUtils from '../../utils/KeyboardUtils';
import MyView from './View';

const MyScrollView = ({
  margin,
  marginVertical,
  marginHorizontal,
  padding,
  paddingVertical,
  paddingHorizontal,
  showScrollBar = false,
  children,
}: {
  margin?: DimensionValue;
  marginVertical?: DimensionValue;
  marginHorizontal?: DimensionValue;
  padding?: DimensionValue;
  paddingVertical?: DimensionValue;
  paddingHorizontal?: DimensionValue;
  showScrollBar?: boolean;
  children?: ReactNode;
}) => {
  const Space_ = observer(() => (
    <MyView height={MyKeyboardUtils.isKeyboardVisible.value ? 40 : 0} />
  ));
  return (
    <ScrollView
      showsVerticalScrollIndicator={showScrollBar}
      showsHorizontalScrollIndicator={showScrollBar}
      style={{
        margin,
        marginVertical,
        marginHorizontal,
        padding,
        paddingVertical,
        paddingHorizontal,
      }}>
      {children}
      <Space_ />
    </ScrollView>
  );
};

export default MyScrollView;
