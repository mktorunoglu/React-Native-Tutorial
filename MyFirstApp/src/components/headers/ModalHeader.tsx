import {MyColors} from '../../enums/Colors';
import {MyTextAligns} from '../../enums/TextAligns';
import MyText from '../texts/Text';
import MyView from '../views/View';

const MyModalHeader = ({
  titleText,
  messageText,
}: {
  titleText: string;
  messageText?: string;
}) => {
  return (
    <MyView isColumn isCenterItems padding={20}>
      <MyText text={titleText} fontSize={16} textAlign={MyTextAligns.Center} />
      {messageText != null && <MyView height={10} />}
      {messageText != null && (
        <MyText
          text={messageText}
          color={MyColors.Grey}
          textAlign={MyTextAligns.Center}
        />
      )}
    </MyView>
  );
};

export default MyModalHeader;
