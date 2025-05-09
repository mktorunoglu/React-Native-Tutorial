import {DimensionValue, FlatList, ListRenderItem} from 'react-native';

const MyFlatList = ({
  data,
  keyExtractor,
  renderItem,
  padding,
  paddingBottom,
}: {
  data: any[];
  keyExtractor?: (item: any, index: number) => string;
  renderItem: ListRenderItem<any>;
  padding?: DimensionValue;
  paddingBottom?: DimensionValue;
}) => (
  <FlatList
    data={data}
    keyExtractor={keyExtractor}
    renderItem={renderItem}
    contentContainerStyle={{padding, paddingBottom}}
  />
);

export default MyFlatList;
