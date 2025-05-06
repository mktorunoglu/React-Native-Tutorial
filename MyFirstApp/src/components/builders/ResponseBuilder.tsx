import {observer, useLocalObservable} from 'mobx-react-lite';
import {ReactNode, useEffect} from 'react';
import MyResponseModel from '../../models/ResponseModel';
import MyLocalizationUtils from '../../utils/LocalizationUtils';
import MyProgressIndicator from '../indicators/ProgressIndicator';
import MyText from '../texts/Text';
import MyView from '../views/View';

const MyResponseBuilder = ({
  response,
  builder,
}: {
  response: () => Promise<MyResponseModel>;
  builder: (response: MyResponseModel) => ReactNode;
}) => {
  const response_ = useLocalObservable(() => ({
    value: null as MyResponseModel | null,
    setValue(value: MyResponseModel) {
      this.value = value;
    },
  }));
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
        <MyView isExpanded isCenterItems>
          <MyText
            text={MyLocalizationUtils.getLocalizedAnErrorOccurredText()}
          />
        </MyView>
      );
    }
    return builder(response_.value!);
  });
  return <Builder_ />;
};

export default MyResponseBuilder;
