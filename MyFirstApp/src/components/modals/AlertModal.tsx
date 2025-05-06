import {MyColors} from '../../enums/Colors';
import {MyFontWeights} from '../../enums/FontWeights';
import {MyTextAligns} from '../../enums/TextAligns';
import MyButton from '../buttons/Button';
import MyDivider from '../dividers/Divider';
import MyText from '../texts/Text';
import MyView from '../views/View';
import MyModal from './Modal';

const MyAlertModal = ({
  titleText,
  messageText,
  buttonText,
  buttonColor,
  buttonOnPress,
}: {
  titleText: string;
  messageText?: string;
  buttonText: string;
  buttonColor?: string;
  buttonOnPress?: () => void;
}) => {
  return (
    <MyModal>
      <MyView isColumn>
        <MyView isColumn padding={20}>
          <MyText
            text={titleText}
            fontSize={16}
            textAlign={MyTextAligns.Center}
          />
          {messageText != null && <MyView height={10} />}
          {messageText != null && (
            <MyText
              text={messageText}
              color={MyColors.Grey}
              textAlign={MyTextAligns.Center}
            />
          )}
        </MyView>
        <MyDivider />
        <MyButton
          isTextButton
          borderRadius={0}
          foregroundColor={buttonColor}
          text={buttonText}
          textFontWeight={MyFontWeights.Normal}
          padding={5}
          onPress={buttonOnPress}
        />
      </MyView>
    </MyModal>
  );
};

export default MyAlertModal;
