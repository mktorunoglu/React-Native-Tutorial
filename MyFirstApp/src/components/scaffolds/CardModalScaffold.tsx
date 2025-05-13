import {ReactNode} from 'react';
import {MyAligns} from '../../enums/Aligns';
import MyCard from '../cards/Card';
import MyView from '../views/View';
import MyModalScaffold from './ModalScaffold';

const MyCardModalScaffold = ({
  isExpanded = false,
  isDismissable = true,
  children,
}: {
  isExpanded?: boolean;
  isDismissable?: boolean;
  children?: ReactNode;
}) => (
  <MyModalScaffold isDismissable={isDismissable}>
    <MyView
      isColumn
      isExpanded
      justifyContent={MyAligns.FlexEnd}
      paddingTop={isExpanded ? 0 : 50}>
      <MyCard isExpanded={isExpanded} margin={10}>
        {children}
      </MyCard>
    </MyView>
  </MyModalScaffold>
);

export default MyCardModalScaffold;
