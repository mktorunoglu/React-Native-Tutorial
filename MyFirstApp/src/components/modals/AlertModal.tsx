import {MyFontWeights} from '../../enums/FontWeights';
import MyButton from '../buttons/Button';
import MyDivider from '../dividers/Divider';
import MyModalHeader from '../headers/ModalHeader';
import MyCardModalScaffold from '../scaffolds/CardModalScaffold';
import MyView from '../views/View';

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
}) => (
  <MyCardModalScaffold>
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
  </MyCardModalScaffold>
);

export default MyAlertModal;
