import {MyAligns} from '../../enums/Aligns';
import {MyColors} from '../../enums/Colors';
import {MyIcons} from '../../enums/Icons';
import {MySizes} from '../../enums/Sizes';
import {MyTextOverflows} from '../../enums/TextOverflows';
import MyRepoModel from '../../models/RepoModel';
import MyColorUtils from '../../utils/ColorUtils';
import MyConverterUtils from '../../utils/ConverterUtils';
import MyLocalizationUtils from '../../utils/LocalizationUtils';
import MyModalUtils from '../../utils/ModalUtils';
import MyIconButton from '../buttons/IconButton';
import MyCard from '../cards/Card';
import MyIcon from '../icons/Icon';
import MyRepoOperationsModal from '../modals/RepoOperationsModal';
import MyText from '../texts/Text';
import MyView from '../views/View';

const MyRepoItem = ({
  refreshContentFunctionList,
  repo,
}: {
  refreshContentFunctionList: (() => void)[];
  repo: MyRepoModel;
}) => (
  <MyCard margin={5}>
    <MyView isExpanded isRow alignItems={MyAligns.Center}>
      <MyView width={10} />
      <MyView
        width={MySizes.Auto}
        padding={5}
        backgroundColor={MyColorUtils.getColorWithOpacity(MyColors.Grey, 0.2)}
        borderRadius={5}>
        <MyIcon icon={MyIcons.Archive} color={MyColors.Grey} />
      </MyView>
      <MyView isExpanded paddingHorizontal={15}>
        <MyText
          text={repo.repoName}
          maxLines={2}
          textOverflow={MyTextOverflows.End}
        />
      </MyView>
      <MyText
        text={MyConverterUtils.convertNumberToSizeText(repo.size ?? 0)}
        fontSize={12}
        color={MyColors.Grey}
      />
      <MyIconButton
        icon={MyIcons.MoreVertical}
        tooltip={MyLocalizationUtils.getLocalizedOperationsText()}
        onPress={() =>
          MyModalUtils.showModal({
            modal: (
              <MyRepoOperationsModal
                refreshContentFunctionList={refreshContentFunctionList}
                repo={repo}
              />
            ),
          })
        }
      />
    </MyView>
  </MyCard>
);

export default MyRepoItem;
