import { observer } from "mobx-react-lite";
import { ReactNode, useEffect } from "react";
import MyObservableValueModel from "../../models/ObservableValueModel";
import MyResponseModel from "../../models/ResponseModel";
import MyProgressIndicator from "../indicators/ProgressIndicator";

const response_ = new MyObservableValueModel<MyResponseModel | null>(null);

const MyResponseBuilder: React.FC<{
    response: () => Promise<MyResponseModel>,
    builder: (response: MyResponseModel) => ReactNode,
}> = ({
    response,
    builder,
}) => {
        useEffect(() => {
            getResponse({
                response: response,
            });
        }, []);
        return <Builder_
            builder={builder} />;
    };

const getResponse = async ({
    response,
}: {
    response: () => Promise<MyResponseModel>,
}) =>
    response_.value = await response();

const Builder_ = observer(({
    builder,
}: {
    builder: (response: MyResponseModel) => ReactNode,
}) => {
    if (response_.value == null) {
        return <MyProgressIndicator />;
    }
    return builder(response_.value);
});

export default MyResponseBuilder;
