import {StackNavigationProp} from '@react-navigation/stack';
import {ReactNode} from 'react';
import {DimensionValue} from 'react-native';
import MyHomeAppBar from '../components/bars/HomeAppBar';
import MyHomeNavigationBar from '../components/bars/HomeNavigationBar';
import MyResponseBuilder from '../components/builders/ResponseBuilder';
import MyCard from '../components/cards/Card';
import MyIcon from '../components/icons/Icon';
import MyPercentProgressIndicator from '../components/indicators/PercentProgressIndicator';
import MyText from '../components/texts/Text';
import MyScrollView from '../components/views/ScrollView';
import MyView from '../components/views/View';
import {MyRouteProps} from '../constants/RouteProps';
import {MyColors} from '../enums/Colors';
import {MyFontWeights} from '../enums/FontWeights';
import {MyIcons} from '../enums/Icons';
import {MyRoutes} from '../enums/Routes';
import MyDashboardInfoModel from '../models/DashboardInfoModel';
import MyFileService from '../services/FileService';
import MyColorUtils from '../utils/ColorUtils';
import MyConverterUtils from '../utils/ConverterUtils';
import MyLocalizationUtils from '../utils/LocalizationUtils';

const MyDashboardScreen = ({
  navigation,
}: {
  navigation: StackNavigationProp<MyRouteProps>;
}) => {
  return (
    <MyView isColumn isExpanded>
      <MyHomeAppBar />
      <MyView
        isExpanded
        backgroundColor={MyColorUtils.getColorWithOpacity(MyColors.Theme, 0.2)}>
        <MyResponseBuilder
          response={MyFileService.getDashboardInfo}
          builder={response => {
            const dashboardInfo = response.data as MyDashboardInfoModel;
            return (
              <MyView isColumn isExpanded>
                <MyScrollView padding={10}>
                  <MyCard_>
                    <MyView isColumn>
                      <MyCardTitleText_
                        text={MyLocalizationUtils.getLocalizedMyUsageText()}
                      />
                      <MyView isRow isCenterItems>
                        <MyPercentProgressIndicator
                          size={140}
                          strokeWidth={10}
                          percent={
                            ((dashboardInfo.usage ?? 0) /
                              (dashboardInfo.quota ?? 1)) *
                            100
                          }>
                          {() => (
                            <MyView isColumn isCenterItems>
                              <MyText
                                text={MyLocalizationUtils.getLocalizedUsageText()}
                                color={MyColors.Grey}
                                fontSize={12}
                              />
                              <MyView height={10} />
                              <MyText
                                text={MyLocalizationUtils.getLocalizedPercentValueText(
                                  {
                                    variableTextList: [
                                      Math.ceil(
                                        ((dashboardInfo.usage ?? 0) /
                                          (dashboardInfo.quota ?? 1)) *
                                          100,
                                      ).toString(),
                                    ],
                                  },
                                )}
                                color={MyColors.Theme}
                                fontWeight={MyFontWeights.Bold}
                                fontSize={20}
                              />
                            </MyView>
                          )}
                        </MyPercentProgressIndicator>
                      </MyView>
                      <MyCardDataLine_
                        text={MyLocalizationUtils.getLocalizedUsageText()}
                        value={MyConverterUtils.convertNumberToSizeText(
                          dashboardInfo.usage ?? 0,
                        )}
                        paddingBottom={5}
                        isImportant={true}
                      />
                      <MyCardDataLine_
                        text={MyLocalizationUtils.getLocalizedTotalText()}
                        value={MyConverterUtils.convertNumberToSizeText(
                          dashboardInfo.quota ?? 0,
                        )}
                      />
                    </MyView>
                  </MyCard_>
                  <MyView height={10} />
                  <MyCard_>
                    <MyCardDataBody_ titleIcon={MyIcons.Share}>
                      <MyCardTitleText_
                        text={MyLocalizationUtils.getLocalizedSharedWithYouText()}
                      />
                      <MyCardDataLine_
                        text={MyLocalizationUtils.getLocalizedWithYouText()}
                        value={(dashboardInfo.inPerson ?? 0).toString()}
                        paddingBottom={5}
                      />
                      <MyCardDataLine_
                        text={MyLocalizationUtils.getLocalizedWithYourGroupsText()}
                        value={(dashboardInfo.inGroup ?? 0).toString()}
                      />
                    </MyCardDataBody_>
                  </MyCard_>
                  <MyView height={10} />
                  <MyCard_>
                    <MyCardDataBody_ titleIcon={MyIcons.Send}>
                      <MyCardTitleText_
                        text={MyLocalizationUtils.getLocalizedSharedByYouText()}
                      />
                      <MyCardDataLine_
                        text={MyLocalizationUtils.getLocalizedSharedLinksText()}
                        value={(dashboardInfo.outDownlink ?? 0).toString()}
                        paddingBottom={5}
                      />
                      <MyCardDataLine_
                        text={MyLocalizationUtils.getLocalizedWithUsersText()}
                        value={(dashboardInfo.outPerson ?? 0).toString()}
                        paddingBottom={5}
                      />
                      <MyCardDataLine_
                        text={MyLocalizationUtils.getLocalizedWithYourGroupsText()}
                        value={(dashboardInfo.outDownlink ?? 0).toString()}
                      />
                    </MyCardDataBody_>
                  </MyCard_>
                  <MyView height={10} />
                  <MyCard_>
                    <MyCardDataBody_
                      titleIcon={MyIcons.Star}
                      titleIconColor={MyColors.Orange}>
                      <MyCardTitleText_
                        text={MyLocalizationUtils.getLocalizedFavoritesText()}
                      />
                      <MyCardDataLine_
                        text={MyLocalizationUtils.getLocalizedFilesText()}
                        value={(dashboardInfo.favs ?? 0).toString()}
                      />
                    </MyCardDataBody_>
                  </MyCard_>
                </MyScrollView>
              </MyView>
            );
          }}
        />
      </MyView>
      <MyHomeNavigationBar currentRoute={MyRoutes.Dashboard} />
    </MyView>
  );
};

const MyCardDataBody_ = ({
  titleIcon,
  titleIconColor = MyColors.Theme,
  children,
}: {
  titleIcon: MyIcons;
  titleIconColor?: string;
  children?: ReactNode;
}) => {
  return (
    <MyView isRow isCenterItems>
      <MyView
        isCenterItems
        height={70}
        width={70}
        backgroundColor={MyColorUtils.getColorWithOpacity(MyColors.Theme, 0.2)}
        borderRadius={70}>
        <MyIcon icon={titleIcon} color={titleIconColor} size={30} />
      </MyView>
      <MyView width={10} />
      <MyView isColumn isExpanded>
        {children}
      </MyView>
    </MyView>
  );
};

const MyCardDataLine_ = ({
  text,
  value,
  paddingBottom,
  isImportant = false,
}: {
  text: string;
  value: string;
  paddingBottom?: DimensionValue;
  isImportant?: boolean;
}) => {
  return (
    <MyView isRow paddingBottom={paddingBottom}>
      <MyView width="auto" isExpanded>
        <MyText text={text} color={MyColors.Grey} />
      </MyView>
      <MyView width={10} />
      <MyText
        text={value}
        fontWeight={MyFontWeights.Bold}
        color={isImportant ? MyColors.Theme : undefined}
      />
    </MyView>
  );
};

const MyCardTitleText_ = ({text}: {text: string}) => {
  return (
    <MyView paddingBottom={10}>
      <MyText text={text} fontSize={16} />
    </MyView>
  );
};

const MyCard_ = ({children}: {children?: ReactNode}) => {
  return (
    <MyCard paddingVertical={15} paddingHorizontal={10}>
      {children}
    </MyCard>
  );
};

export default MyDashboardScreen;
