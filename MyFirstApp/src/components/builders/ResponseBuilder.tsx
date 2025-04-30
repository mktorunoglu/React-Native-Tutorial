import {observer} from 'mobx-react-lite';
import {ReactNode, useEffect} from 'react';
import {MyLocalizationTextKeys} from '../../enums/LocalizationTextKeys';
import MyObservableValueModel from '../../models/ObservableValueModel';
import MyResponseModel from '../../models/ResponseModel';
import MyLocalizationUtils from '../../utils/LocalizationUtils';
import MyProgressIndicator from '../indicators/ProgressIndicator';
import MyText from '../texts/Text';
import MyView from '../views/View';

const response_ = new MyObservableValueModel<MyResponseModel | null>(null);

const MyResponseBuilder = ({
  response,
  builder,
}: {
  response: () => Promise<MyResponseModel>;
  builder: (response: MyResponseModel) => ReactNode;
}) => {
  useEffect(() => {
    getResponse({
      response: response,
    });
  }, []);
  return <Builder_ builder={builder} />;
};

const getResponse = async ({
  response,
}: {
  response: () => Promise<MyResponseModel>;
}) => (response_.value = await response());

const Builder_ = observer(
  ({builder}: {builder: (response: MyResponseModel) => ReactNode}) => {
    if (response_.value == null) {
      return (
        <MyView isExpanded isCenterItems>
          <MyProgressIndicator />
        </MyView>
      );
    }
    if (!response_.value.isSuccessful) {
      return (
        <MyView isExpanded isCenterItems>
          <MyText
            text={MyLocalizationUtils.getLocalizedText(
              MyLocalizationTextKeys.AnErrorOccurred,
            )}
          />
        </MyView>
      );
    }
    return builder(response_.value);
  },
);

export default MyResponseBuilder;
