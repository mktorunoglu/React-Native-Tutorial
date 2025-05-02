import {DimensionValue, FlatList, ListRenderItem} from 'react-native';

const MyFlatList = ({
  data,
  keyExtractor,
  renderItem,
  padding,
}: {
  data: any[];
  keyExtractor?: (item: any, index: number) => string;
  renderItem: ListRenderItem<any>;
  padding?: DimensionValue;
}) => {
  return (
    <FlatList
      data={data}
      keyExtractor={keyExtractor}
      renderItem={renderItem}
      style={{padding}}
    />
  );
};

export default MyFlatList;
