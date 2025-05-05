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
  useEffect(() => {
    getResponse({
      response: response,
      response_: response_,
    });
  }, []);
  return <Builder_ builder={builder} response_={response_} />;
};

const getResponse = async ({
  response,
  response_,
}: {
  response: () => Promise<MyResponseModel>;
  response_: {
    value: MyResponseModel | null;
    setValue(value: MyResponseModel): void;
  };
}) => response_.setValue(await response());

const Builder_ = observer(
  ({
    builder,
    response_,
  }: {
    builder: (response: MyResponseModel) => ReactNode;
    response_: {
      value: MyResponseModel | null;
      setValue(value: MyResponseModel): void;
    };
  }) => {
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
  },
);

export default MyResponseBuilder;
