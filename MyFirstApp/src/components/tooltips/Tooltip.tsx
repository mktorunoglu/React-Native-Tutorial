import {ReactElement} from 'react';
import {Tooltip} from 'react-native-paper';

const MyTooltip = ({
  text = '',
  children,
}: {
  text?: string;
  children: ReactElement;
}) => <Tooltip title={text}>{children}</Tooltip>;

export default MyTooltip;
