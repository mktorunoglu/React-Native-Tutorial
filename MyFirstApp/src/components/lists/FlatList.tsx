import {FlatList, ListRenderItem} from 'react-native';

const MyFlatList = ({
  data,
  keyExtractor,
  renderItem,
}: {
  data: ArrayLike<any>;
  keyExtractor?: (item: any, index: number) => string;
  renderItem: ListRenderItem<any>;
}) => {
  return (
    <FlatList data={data} keyExtractor={keyExtractor} renderItem={renderItem} />
  );
};

export default MyFlatList;
