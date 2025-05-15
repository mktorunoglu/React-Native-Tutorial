import {DimensionValue, FlatList, ListRenderItem} from 'react-native';

const MyFlatList = ({
  padding,
  data,
  renderItem,
}: {
  padding?: DimensionValue;
  data: any[];
  renderItem: ListRenderItem<any>;
}) => (
  <FlatList
    data={data}
    renderItem={renderItem}
    contentContainerStyle={{padding}}
  />
);

export default MyFlatList;
