import { ReactElement } from "react";
import MyView from "../components/views/View";
import MyObservableValueModel from "../models/ObservableValueModel";

class MyDialogUtils {
    private static instance: MyDialogUtils;

    private constructor() { };

    public static getInstance(): MyDialogUtils {
        if (!MyDialogUtils.instance) {
            MyDialogUtils.instance = new MyDialogUtils();
        }
        return MyDialogUtils.instance;
    };

    public isModalVisible = new MyObservableValueModel(false);
    public modalView = new MyObservableValueModel(<MyView />);
    public onDismissModal = new MyObservableValueModel(() => { });

    public showModal({
        view,
        onDismiss = () => this.hideModal(),
    }: {
        view: ReactElement,
        onDismiss?: () => void,
    }) {
        this.modalView.setValue(view);
        this.onDismissModal.setValue(onDismiss);
        this.isModalVisible.setValue(true);
    };

    public hideModal() {
        this.modalView.setValue(<MyView />);
        this.isModalVisible.setValue(false);
        this.onDismissModal.setValue(() => { });
    };
};

export default MyDialogUtils.getInstance();
