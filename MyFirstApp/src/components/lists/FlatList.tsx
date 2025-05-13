import {DimensionValue, FlatList, ListRenderItem} from 'react-native';

const MyFlatList = ({
  data,
  renderItem,
  padding,
  paddingBottom,
}: {
  data: any[];
  renderItem: ListRenderItem<any>;
  padding?: DimensionValue;
  paddingBottom?: DimensionValue;
}) => (
  <FlatList
    data={data}
    renderItem={renderItem}
    contentContainerStyle={{padding, paddingBottom}}
  />
);

export default MyFlatList;
