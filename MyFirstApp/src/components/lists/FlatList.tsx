import {DimensionValue, FlatList, ListRenderItem} from 'react-native';

const MyFlatList = ({
  data,
  keyExtractor,
  renderItem,
  padding,
}: {
  data: ArrayLike<any>;
  keyExtractor?: (item: any, index: number) => string;
  renderItem: ListRenderItem<any>;
  padding?: DimensionValue;
}) => {
  return (
    <FlatList
      data={data}
      keyExtractor={keyExtractor}
      renderItem={renderItem}
      style={{padding: padding}}
    />
  );
};

export default MyFlatList;
