import {MyAligns} from '../../enums/Aligns';
import {MyColors} from '../../enums/Colors';
import {MyIcons} from '../../enums/Icons';
import {MyLocalizationTextKeys} from '../../enums/LocalizationTextKeys';
import {MyTextOverflows} from '../../enums/TextOverflows';
import MyRepoModel from '../../models/RepoModel';
import MyColorUtils from '../../utils/ColorUtils';
import MyConverterUtils from '../../utils/ConverterUtils';
import MyLocalizationUtils from '../../utils/LocalizationUtils';
import MyIconButton from '../buttons/IconButton';
import MyIcon from '../icons/Icon';
import MyText from '../texts/Text';
import MyView from '../views/View';

const MyRepoItem = ({repo}: {repo: MyRepoModel}) => {
  return (
    <MyView padding={5}>
      <MyView
        borderRadius={10}
        borderWidth={1}
        borderColor={MyColorUtils.getColorWithOpacity(MyColors.Grey, 0.3)}
        backgroundColor={MyColors.White}>
        <MyView isExpanded isRow alignItems={MyAligns.Center}>
          <MyView width={10} />
          <MyView
            width="auto"
            padding={5}
            backgroundColor={MyColorUtils.getColorWithOpacity(
              MyColors.Grey,
              0.2,
            )}
            borderRadius={5}>
            <MyIcon icon={MyIcons.Archive} color={MyColors.Grey} />
          </MyView>
          <MyView isExpanded paddingHorizontal={15}>
            <MyText
              text={repo.name}
              maxLines={2}
              textOverflow={MyTextOverflows.End}
            />
          </MyView>
          <MyText
            text={MyConverterUtils.convertNumberToSizeText({
              number: repo.size ?? 0,
            })}
            fontSize={12}
            color={MyColors.Grey}
          />
          <MyIconButton
            icon={MyIcons.MoreVertical}
            tooltip={MyLocalizationUtils.getLocalizedText(
              MyLocalizationTextKeys.Operations,
            )}
            onPress={() => {}}
          />
        </MyView>
      </MyView>
    </MyView>
  );
};

export default MyRepoItem;
