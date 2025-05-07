import {observer} from 'mobx-react-lite';
import {ReactNode, useEffect} from 'react';
import MyObservableValueModel from '../../models/ObservableValueModel';
import MyResponseModel from '../../models/ResponseModel';
import MyLocalizationUtils from '../../utils/LocalizationUtils';
import MyAlertBody from '../bodies/AlertBody';
import MyProgressIndicator from '../indicators/ProgressIndicator';
import MyView from '../views/View';

const MyResponseBuilder = ({
  response,
  builder,
}: {
  response: () => Promise<MyResponseModel>;
  builder: (response: MyResponseModel) => ReactNode;
}) => {
  const response_ = new MyObservableValueModel<MyResponseModel | null>(null);
  const getResponse = async () => response_.setValue(await response());
  useEffect(() => {
    getResponse();
  }, []);
  const Builder_ = observer(() => {
    if (response_.value == null) {
      return (
        <MyView isExpanded isCenterItems>
          <MyProgressIndicator />
        </MyView>
      );
    }
    if (!response_.value!.isSuccessful) {
      return (
        <MyAlertBody
          text={MyLocalizationUtils.getLocalizedAnErrorOccurredText()}
        />
      );
    }
    return builder(response_.value!);
  });
  return <Builder_ />;
};

export default MyResponseBuilder;
