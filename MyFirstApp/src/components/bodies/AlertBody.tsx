import {MyTextAligns} from '../../enums/TextAligns';
import MyText from '../texts/Text';
import MyView from '../views/View';

const MyAlertBody = ({text}: {text: string}) => {
  return (
    <MyView isExpanded isCenterItems>
      <MyText text={text} textAlign={MyTextAligns.Center} />
    </MyView>
  );
};

export default MyAlertBody;
