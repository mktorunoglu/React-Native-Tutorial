import {StackNavigationProp} from '@react-navigation/stack';
import MyHomeAppBar from '../components/bars/HomeAppBar';
import MyHomeNavigationBar from '../components/bars/HomeNavigationBar';
import MyResponseBuilder from '../components/builders/ResponseBuilder';
import MyButton from '../components/buttons/Button';
import MyCard from '../components/cards/Card';
import MyImage from '../components/images/Image';
import MyOptionsModal from '../components/modals/OptionsModal';
import MyTextInput from '../components/texts/TextInput';
import MyScrollView from '../components/views/ScrollView';
import MyView from '../components/views/View';
import {MyRouteProps} from '../constants/RouteProps';
import {MyColors} from '../enums/Colors';
import {MyIcons} from '../enums/Icons';
import {MyRoutes} from '../enums/Routes';
import MyUserInfoModel from '../models/UserInfoModel';
import MyUserService from '../services/UserService';
import MyColorUtils from '../utils/ColorUtils';
import MyLocalizationUtils from '../utils/LocalizationUtils';
import MyModalUtils from '../utils/ModalUtils';

const MyProfileScreen = ({
  navigation,
}: {
  navigation: StackNavigationProp<MyRouteProps, MyRoutes.Profile>;
}) => {
  return (
    <MyView isColumn isExpanded>
      <MyHomeAppBar />
      <MyView
        isColumn
        isExpanded
        backgroundColor={MyColorUtils.getColorWithOpacity(MyColors.Theme, 0.2)}>
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
              onPress={() =>
                MyModalUtils.showModal({
                  modal: (
                    <MyOptionsModal
                      onChangeLanguage={() =>
                        navigation.replace(MyRoutes.Profile)
                      }
                      onLogout={() => navigation.replace(MyRoutes.Login)}
                    />
                  ),
                })
              }
            />
          </MyCard>
        </MyScrollView>
      </MyView>
      <MyHomeNavigationBar currentRoute={MyRoutes.Profile} />
    </MyView>
  );
};

export default MyProfileScreen;
