import {StackNavigationProp} from '@react-navigation/stack';
import {observer} from 'mobx-react-lite';
import MyResponseBuilder from '../components/builders/ResponseBuilder';
import MyButton from '../components/buttons/Button';
import MyIconButton from '../components/buttons/IconButton';
import MyCard from '../components/cards/Card';
import MyDivider from '../components/dividers/Divider';
import MyImage from '../components/images/Image';
import MyRepoItem from '../components/items/RepoItem';
import MyFlatList from '../components/lists/FlatList';
import MyProgressModal from '../components/modals/ProgressModal';
import MyTextInput from '../components/texts/TextInput';
import MySafeAreaView from '../components/views/SafeAreaView';
import MyScrollView from '../components/views/ScrollView';
import MyView from '../components/views/View';
import {MyRouteProps} from '../constants/RouteProps';
import {MyColors} from '../enums/Colors';
import {MyIcons} from '../enums/Icons';
import {MyRoutes} from '../enums/Routes';
import MyObservableValueModel from '../models/ObservableValueModel';
import MyUserInfoModel from '../models/UserInfoModel';
import MyFileService from '../services/FileService';
import MyUserService from '../services/UserService';
import MyAuthenticationUtils from '../utils/AuthenticationUtils';
import MyColorUtils from '../utils/ColorUtils';
import MyLocalizationUtils from '../utils/LocalizationUtils';
import MyModalUtils from '../utils/ModalUtils';

const screen = new MyObservableValueModel(false);

const MyTestScreen = ({
  navigation,
}: {
  navigation: StackNavigationProp<MyRouteProps>;
}) => {
  return (
    <MyView isColumn isExpanded>
      <MyView isExpanded>
        <Screen_ navigation={navigation} />
      </MyView>
      <MyButton text="test" onPress={() => screen.setValue(!screen.value)} />
      <MySafeAreaView safeOnlyBottom />
    </MyView>
  );
};

const Screen_ = observer(
  ({navigation}: {navigation: StackNavigationProp<MyRouteProps>}) => {
    if (screen.value) {
      return (
        <MyView isColumn isExpanded>
          <MyView
            isExpanded
            backgroundColor={MyColorUtils.getColorWithOpacity(
              MyColors.Theme,
              0.2,
            )}>
            <MyResponseBuilder
              response={MyFileService.listOwnedRepo}
              builder={response => {
                return (
                  <MyFlatList
                    data={response.data}
                    keyExtractor={(item, index) => item.repoId ?? index}
                    renderItem={({item}) => <MyRepoItem repo={item} />}
                    padding={5}
                  />
                );
              }}
            />
          </MyView>
          <MyDivider />
        </MyView>
      );
    }
    return (
      <MyView isColumn isExpanded>
        <MyView
          isColumn
          isExpanded
          backgroundColor={MyColorUtils.getColorWithOpacity(
            MyColors.Theme,
            0.2,
          )}>
          <MyScrollView padding={10}>
            <MyCard padding={20}>
              <MyResponseBuilder
                response={MyUserService.getUserAvatar}
                builder={response => {
                  return (
                    <MyView isColumn isCenterItems>
                      <MyImage
                        url={'file://' + response.data}
                        height={100}
                        width={100}
                      />
                    </MyView>
                  );
                }}
              />
            </MyCard>
            <MyView height={10} />
            <MyCard padding={20}>
              <MyResponseBuilder
                response={MyUserService.getUserInfo}
                builder={response => {
                  const userInfo = response.data as MyUserInfoModel;
                  return (
                    <MyView isColumn>
                      <MyTextInput
                        isEditable={false}
                        labelText={MyLocalizationUtils.getLocalizedUserIdText()}
                        labelTextColor={MyColors.Theme}
                        value={userInfo.user}
                      />
                      <MyView height={20} />
                      <MyTextInput
                        isEditable={false}
                        labelText={MyLocalizationUtils.getLocalizedUserText()}
                        labelTextColor={MyColors.Theme}
                        value={userInfo.name}
                      />
                    </MyView>
                  );
                }}
              />
            </MyCard>
            <MyView height={10} />
            <MyCard padding={20}>
              <MyButton
                icon={MyIcons.SettingsOutlined}
                text={MyLocalizationUtils.getLocalizedOptionsText()}
                onPress={() => {}}
              />
            </MyCard>
            <MyIconButton
              icon={MyIcons.Logout}
              tooltip={MyLocalizationUtils.getLocalizedLogoutText()}
              onPress={async () => {
                MyModalUtils.showModal({modal: <MyProgressModal />});
                await MyAuthenticationUtils.logout({
                  navigateToLoginScreen: () =>
                    navigation.replace(MyRoutes.Login),
                });
                MyModalUtils.hideModal();
              }}
            />
          </MyScrollView>
        </MyView>
        <MyDivider />
      </MyView>
    );
  },
);

export default MyTestScreen;
