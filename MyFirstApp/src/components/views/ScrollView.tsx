import {ReactNode} from 'react';
import {DimensionValue, ScrollView} from 'react-native';
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
}) => (
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
    <MyView height={40} />
  </ScrollView>
); // TEST <MyView height={40} /> keyboard açıkken göster

export default MyScrollView;
