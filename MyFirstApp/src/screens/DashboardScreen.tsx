import {StackNavigationProp} from '@react-navigation/stack';
import {ReactNode} from 'react';
import MyResponseBuilder from '../components/builders/ResponseBuilder';
import MyCard from '../components/cards/Card';
import MyDivider from '../components/dividers/Divider';
import MyText from '../components/texts/Text';
import MyScrollView from '../components/views/ScrollView';
import MyView from '../components/views/View';
import {MyRouteProps} from '../constants/RouteProps';
import {MyColors} from '../enums/Colors';
import {MyFontWeights} from '../enums/FontWeights';
import {MyLocalizationTextKeys} from '../enums/LocalizationTextKeys';
import {MyRoutes} from '../enums/Routes';
import MyDashboardInfoModel from '../models/DashboardInfoModel';
import MyFileService from '../services/FileService';
import MyColorUtils from '../utils/ColorUtils';
import MyConverterUtils from '../utils/ConverterUtils';
import MyLocalizationUtils from '../utils/LocalizationUtils';

const MyDashboardScreen = ({
  navigation,
}: {
  navigation: StackNavigationProp<MyRouteProps, MyRoutes.Home>;
}) => {
  return (
    <MyView isColumn isExpanded>
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
                        text={MyLocalizationUtils.getLocalizedText(
                          MyLocalizationTextKeys.MyUsage,
                        )}
                      />
                      <MyCardDataLine_
                        text={MyLocalizationUtils.getLocalizedText(
                          MyLocalizationTextKeys.Usage,
                        )}
                        value={MyConverterUtils.convertNumberToSizeText(
                          dashboardInfo.usage ?? 0,
                        )}
                        isImportant={true}
                      />
                      <MyCardDataLine_
                        text={MyLocalizationUtils.getLocalizedText(
                          MyLocalizationTextKeys.Total,
                        )}
                        value={MyConverterUtils.convertNumberToSizeText(
                          dashboardInfo.quota ?? 0,
                        )}
                      />
                    </MyView>
                  </MyCard_>
                  <MyView height={10} />
                  <MyCard_>
                    <MyCardTitleText_
                      text={MyLocalizationUtils.getLocalizedText(
                        MyLocalizationTextKeys.SharedWithYou,
                      )}
                    />
                    <MyCardDataLine_
                      text={MyLocalizationUtils.getLocalizedText(
                        MyLocalizationTextKeys.MyUsage,
                      )}
                      value={(dashboardInfo.inPerson ?? 0).toString()}
                    />
                    <MyCardDataLine_
                      text={MyLocalizationUtils.getLocalizedText(
                        MyLocalizationTextKeys.MyUsage,
                      )}
                      value={(dashboardInfo.inGroup ?? 0).toString()}
                    />
                  </MyCard_>
                  <MyView height={10} />
                  <MyCard_>
                    <MyCardTitleText_
                      text={MyLocalizationUtils.getLocalizedText(
                        MyLocalizationTextKeys.SharedByYou,
                      )}
                    />
                    <MyCardDataLine_
                      text={MyLocalizationUtils.getLocalizedText(
                        MyLocalizationTextKeys.MyUsage,
                      )}
                      value={(dashboardInfo.outDownlink ?? 0).toString()}
                    />
                    <MyCardDataLine_
                      text={MyLocalizationUtils.getLocalizedText(
                        MyLocalizationTextKeys.MyUsage,
                      )}
                      value={(dashboardInfo.outPerson ?? 0).toString()}
                    />
                    <MyCardDataLine_
                      text={MyLocalizationUtils.getLocalizedText(
                        MyLocalizationTextKeys.MyUsage,
                      )}
                      value={(dashboardInfo.outDownlink ?? 0).toString()}
                    />
                  </MyCard_>
                  <MyView height={10} />
                  <MyCard_>
                    <MyCardTitleText_
                      text={MyLocalizationUtils.getLocalizedText(
                        MyLocalizationTextKeys.Favorites,
                      )}
                    />
                    <MyCardDataLine_
                      text={MyLocalizationUtils.getLocalizedText(
                        MyLocalizationTextKeys.MyUsage,
                      )}
                      value={(dashboardInfo.favs ?? 0).toString()}
                    />
                  </MyCard_>
                </MyScrollView>
              </MyView>
            );
          }}
        />
      </MyView>
      <MyDivider />
    </MyView>
  );
};

const MyCardDataLine_ = ({
  text,
  value,
  isImportant = false,
}: {
  text: string;
  value: string;
  isImportant?: boolean;
}) => {
  return (
    <MyView isRow>
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
  return <MyCard padding={10}>{children}</MyCard>;
};

export default MyDashboardScreen;
