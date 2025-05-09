import {ReactNode} from 'react';
import {DimensionValue, ScrollView} from 'react-native';

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
  </ScrollView>
);

export default MyScrollView;
