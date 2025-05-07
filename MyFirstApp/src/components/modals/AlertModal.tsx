import {MyFontWeights} from '../../enums/FontWeights';
import MyButton from '../buttons/Button';
import MyDivider from '../dividers/Divider';
import MyModalHeader from '../headers/ModalHeader';
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
        <MyModalHeader titleText={titleText} messageText={messageText} />
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
