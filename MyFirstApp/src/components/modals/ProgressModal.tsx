import {MyColors} from '../../enums/Colors';
import MyProgressIndicator from '../indicators/ProgressIndicator';
import MyModalScaffold from '../scaffolds/ModalScaffold';
import MyView from '../views/View';

const MyProgressModal = () => (
  <MyModalScaffold isDismissible={false}>
    <MyView isColumn isExpanded isCenterItems>
      <MyProgressIndicator color={MyColors.White} />
    </MyView>
  </MyModalScaffold>
);

export default MyProgressModal;
