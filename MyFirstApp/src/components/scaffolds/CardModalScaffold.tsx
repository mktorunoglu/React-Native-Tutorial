import {ReactNode} from 'react';
import {MyAligns} from '../../enums/Aligns';
import MyModalUtils from '../../utils/ModalUtils';
import MyCard from '../cards/Card';
import MyView from '../views/View';
import MyModalScaffold from './ModalScaffold';

const MyCardModalScaffold = ({
  isExpanded = false,
  children,
}: {
  isExpanded?: boolean;
  children?: ReactNode;
}) => (
  <MyModalScaffold onDismiss={() => MyModalUtils.hideLastModalIfDismissible()}>
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
