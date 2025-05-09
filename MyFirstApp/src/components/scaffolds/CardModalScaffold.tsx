import {ReactNode} from 'react';
import {MyAligns} from '../../enums/Aligns';
import MyCard from '../cards/Card';
import MyView from '../views/View';
import MyModalScaffold from './ModalScaffold';

const MyCardModalScaffold = ({
  isDismissable = true,
  children,
}: {
  isDismissable?: boolean;
  children?: ReactNode;
}) => (
  <MyModalScaffold isDismissable={isDismissable}>
    <MyView isColumn isExpanded justifyContent={MyAligns.FlexEnd}>
      <MyCard margin={10}>{children}</MyCard>
    </MyView>
  </MyModalScaffold>
);

export default MyCardModalScaffold;
