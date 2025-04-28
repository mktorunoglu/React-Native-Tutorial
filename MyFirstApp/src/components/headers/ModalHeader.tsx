import MyText from '../texts/Text';
import MyView from '../views/View';

const MyModalHeader = ({text}: {text: string}) => {
  return (
    <MyView isColumn isCenterItems padding={20}>
      <MyText text={text} />
    </MyView>
  );
};

export default MyModalHeader;
