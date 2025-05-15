import {ReactNode} from 'react';
import {DimensionValue, ScrollView} from 'react-native';

const MyScrollView = ({
  isHorizontal = false,
  showScrollBar = false,
  margin,
  marginVertical,
  marginHorizontal,
  padding,
  paddingVertical,
  paddingHorizontal,
  children,
}: {
  isHorizontal?: boolean;
  showScrollBar?: boolean;
  margin?: DimensionValue;
  marginVertical?: DimensionValue;
  marginHorizontal?: DimensionValue;
  padding?: DimensionValue;
  paddingVertical?: DimensionValue;
  paddingHorizontal?: DimensionValue;
  children?: ReactNode;
}) => (
  <ScrollView
    horizontal={isHorizontal}
    showsVerticalScrollIndicator={showScrollBar}
    showsHorizontalScrollIndicator={showScrollBar}
    contentContainerStyle={{
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
