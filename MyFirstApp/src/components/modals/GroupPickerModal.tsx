import {observer} from 'mobx-react-lite';
import MyGroupModel from '../../models/GroupModel';
import MyObservableValueModel from '../../models/ObservableValueModel';
import MyGroupService from '../../services/GroupService';
import MyFilterUtils from '../../utils/FilterUtils';
import MyLocalizationUtils from '../../utils/LocalizationUtils';
import MyModalUtils from '../../utils/ModalUtils';
import MyAlertBody from '../bodies/AlertBody';
import MyResponseBuilder from '../builders/ResponseBuilder';
import MyModalSelectionButton from '../buttons/ModalSelectionButton';
import MyDivider from '../dividers/Divider';
import MyModalHeader from '../headers/ModalHeader';
import MyFlatList from '../lists/FlatList';
import MyCardModalScaffold from '../scaffolds/CardModalScaffold';
import MySearchTextInput from '../texts/SearchTextInput';
import MyView from '../views/View';

const MyGroupPickerModal = ({
  message,
  selectedGroup,
}: {
  message?: string;
  selectedGroup: MyObservableValueModel<MyGroupModel>;
}) => {
  const searchText = new MyObservableValueModel('');
  const GroupSelectionButtonList_ = observer(
    ({groupList}: {groupList: MyGroupModel[]}) => {
      const filteredGroupList = groupList.filter(item =>
        MyFilterUtils.isTextListContainsSearchText({
          textList: [item.groupName],
          searchText: searchText.value,
        }),
      );
      const isGroupListEmpty = groupList.length == 0;
      const isFilteredGroupListEmpty = filteredGroupList.length == 0;
      const isSearchTextEmpty = searchText.value.trim() == '';
      return (
        <MyView isColumn isExpanded>
          {!isGroupListEmpty && (
            <MySearchTextInput
              isAutoFocused
              onChangeText={text => searchText.setValue(text)}
            />
          )}
          {!isGroupListEmpty && <MyDivider />}
          {isFilteredGroupListEmpty ? (
            <MyAlertBody
              text={
                isSearchTextEmpty
                  ? MyLocalizationUtils.getLocalizedThereIsNoGroupYetText()
                  : MyLocalizationUtils.getLocalizedThereIsNoGroupWithSearchedNameText()
              }
            />
          ) : (
            <MyView isExpanded>
              <MyFlatList
                data={filteredGroupList}
                renderItem={({item}: {item: MyGroupModel}) => (
                  <MyModalSelectionButton
                    key={item.groupId}
                    isSelected={selectedGroup.value.groupId == item.groupId}
                    text={item.groupName ?? ''}
                    onPress={() => {
                      selectedGroup.setValue(item);
                      MyModalUtils.hideLastModal();
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
        titleText={MyLocalizationUtils.getLocalizedSelectGroupText()}
        messageText={message}
      />
      <MyDivider />
      <MyView isExpanded>
        <MyResponseBuilder
          response={() => MyGroupService.searchGroup()}
          builder={response => (
            <GroupSelectionButtonList_ groupList={response.data} />
          )}
        />
      </MyView>
    </MyCardModalScaffold>
  );
};

export default MyGroupPickerModal;
