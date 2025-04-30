import {StackNavigationProp} from '@react-navigation/stack';
import MyResponseBuilder from '../components/builders/ResponseBuilder';
import MyButton from '../components/buttons/Button';
import MyIconButton from '../components/buttons/IconButton';
import MyCard from '../components/cards/Card';
import MyDivider from '../components/dividers/Divider';
import MyImage from '../components/images/Image';
import MyProgressModal from '../components/modals/ProgressModal';
import MyTextInput from '../components/texts/TextInput';
import MyScrollView from '../components/views/ScrollView';
import MyView from '../components/views/View';
import {MyRouteProps} from '../constants/RouteProps';
import {MyColors} from '../enums/Colors';
import {MyIcons} from '../enums/Icons';
import {MyLocalizationTextKeys} from '../enums/LocalizationTextKeys';
import {MyRoutes} from '../enums/Routes';
import MyUserInfoModel from '../models/UserInfoModel';
import MyUserService from '../services/UserService';
import MyAuthenticationUtils from '../utils/AuthenticationUtils';
import MyColorUtils from '../utils/ColorUtils';
import MyLocalizationUtils from '../utils/LocalizationUtils';
import MyModalUtils from '../utils/ModalUtils';

const MyProfileScreen = ({
  navigation,
}: {
  navigation: StackNavigationProp<MyRouteProps, MyRoutes.Home>;
}) => {
  return (
    <MyView isColumn isExpanded>
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
                      labelText={MyLocalizationUtils.getLocalizedText(
                        MyLocalizationTextKeys.UserId,
                      )}
                      labelTextColor={MyColors.Theme}
                      value={userInfo.user}
                    />
                    <MyView height={20} />
                    <MyTextInput
                      isEditable={false}
                      labelText={MyLocalizationUtils.getLocalizedText(
                        MyLocalizationTextKeys.User,
                      )}
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
              text={MyLocalizationUtils.getLocalizedText(
                MyLocalizationTextKeys.Options,
              )}
              onPress={() => {}}
            />
          </MyCard>
          <MyIconButton
            icon={MyIcons.Logout}
            tooltip={MyLocalizationUtils.getLocalizedText(
              MyLocalizationTextKeys.Logout,
            )}
            onPress={async () => {
              MyModalUtils.showModal({modal: <MyProgressModal />});
              await MyAuthenticationUtils.logout({
                navigateToLoginScreen: () => navigation.replace(MyRoutes.Login),
              });
              MyModalUtils.hideModal();
            }}
          />
        </MyScrollView>
      </MyView>
      <MyDivider />
    </MyView>
  );
};

export default MyProfileScreen;
