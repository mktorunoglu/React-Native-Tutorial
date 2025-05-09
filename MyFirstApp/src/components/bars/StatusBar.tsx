import {StatusBar} from 'react-native';

const MyStatusBar = ({isContentDark = false}: {isContentDark?: boolean}) => (
  <StatusBar barStyle={isContentDark ? 'dark-content' : 'light-content'} />
);

export default MyStatusBar;
