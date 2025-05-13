import {observer} from 'mobx-react-lite';
import MyObservableValueModel from '../../models/ObservableValueModel';
import MyUserService from '../../services/UserService';
import MyFilterUtils from '../../utils/FilterUtils';
import MyLocalizationUtils from '../../utils/LocalizationUtils';
import MyAlertBody from '../bodies/AlertBody';
import MyResponseBuilder from '../builders/ResponseBuilder';
import MyModalSelectionButton from '../buttons/ModalSelectionButton';
import MyDivider from '../dividers/Divider';
import MyModalHeader from '../headers/ModalHeader';
import MyFlatList from '../lists/FlatList';
import MyCardModalScaffold from '../scaffolds/CardModalScaffold';
import MySearchTextInput from '../texts/SearchTextInput';
import MyView from '../views/View';

const MyUserPickerModal = ({
  message,
  selectedUserId,
}: {
  message?: string;
  selectedUserId: MyObservableValueModel<string>;
}) => {
  const searchText = new MyObservableValueModel('');
  const UserIdSelectionButtonList_ = observer(
    ({userIdList}: {userIdList: string[]}) => {
      const filteredUserIdList = userIdList.filter(userId =>
        MyFilterUtils.isTextListContainsSearchText({
          textList: [userId],
          searchText: searchText.value,
        }),
      );
      const isUserIdListEmpty = userIdList.length == 0;
      const isFilteredUserIdListEmpty = filteredUserIdList.length == 0;
      const isSearchTextEmpty = searchText.value.trim() == '';
      return (
        <MyView isColumn isExpanded>
          {!isUserIdListEmpty && (
            <MySearchTextInput
              isAutoFocused
              onChangeText={text => searchText.setValue(text)}
            />
          )}
          {!isUserIdListEmpty && <MyDivider />}
          {isFilteredUserIdListEmpty ? (
            <MyAlertBody
              text={
                isSearchTextEmpty
                  ? MyLocalizationUtils.getLocalizedThereIsNoUserYetText()
                  : MyLocalizationUtils.getLocalizedThereIsNoUserWithSearchedNameText()
              }
            />
          ) : (
            <MyView isExpanded>
              <MyFlatList
                data={filteredUserIdList}
                renderItem={({item}: {item: string}) => (
                  <MyModalSelectionButton
                    key={item}
                    isSelected={selectedUserId.value == item}
                    text={item}
                    onPress={() => {
                      selectedUserId.setValue(item);
                    }}
                  />
                )}
              />
            </MyView>
          )}
        </MyView>
      );
    },
  );
  return (
    <MyCardModalScaffold isExpanded>
      <MyModalHeader
        titleText={MyLocalizationUtils.getLocalizedSelectUserText()}
        messageText={message}
      />
      <MyDivider />
      <MyView isExpanded>
        <MyResponseBuilder
          response={() => MyUserService.searchUser()}
          builder={response => (
            <UserIdSelectionButtonList_ userIdList={response.data} />
          )}
        />
      </MyView>
    </MyCardModalScaffold>
  );
};

export default MyUserPickerModal;
