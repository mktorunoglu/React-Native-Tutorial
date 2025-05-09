import {Switch} from 'react-native-paper';

const MySwitchButton = ({
  value,
  onChange,
}: {
  value: boolean;
  onChange: (value: boolean) => void;
}) => <Switch value={value} onValueChange={onChange} />;

export default MySwitchButton;
