import MyUserService from '../../services/UserService';
import MyLocalizationUtils from '../../utils/LocalizationUtils';
import MyResponseBuilder from '../builders/ResponseBuilder';
import MyModalSelectionButton from '../buttons/ModalSelectionButton';
import MyDivider from '../dividers/Divider';
import MyModalHeader from '../headers/ModalHeader';
import MyFlatList from '../lists/FlatList';
import MyCardModalScaffold from '../scaffolds/CardModalScaffold';

const MyUserPickerModal = ({message}: {message?: string}) => (
  <MyCardModalScaffold isExpanded>
    <MyModalHeader
      titleText={MyLocalizationUtils.getLocalizedSelectUserText()}
      messageText={message}
    />
    <MyDivider />
    <MyResponseBuilder
      response={() => MyUserService.searchUser()}
      builder={response => (
        <MyFlatList
          data={response.data}
          renderItem={({item}: {item: string}) => (
            <MyModalSelectionButton
              key={item}
              isSelected={false}
              text={item}
              onPress={() => {}}
            />
          )}
        />
      )}
    />
  </MyCardModalScaffold>
);

export default MyUserPickerModal;
