import { ReactElement } from 'react';
import { Tooltip } from 'react-native-paper';

const MyTooltip: React.FC<{
    text?: string;
    children: ReactElement;
}> = ({
    text = "",
    children,
}) => {
        return <Tooltip
            title={text}>
            {children}
        </Tooltip>;
    };

export default MyTooltip;
