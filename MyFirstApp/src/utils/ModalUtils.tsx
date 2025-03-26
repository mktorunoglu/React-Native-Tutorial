import { ReactElement } from "react";
import MyProgressModal from "../components/modals/ProgressModal";
import MyView from "../components/views/View";
import MyObservableValueModel from "../models/ObservableValueModel";

class MyModalUtils {
    private static instance: MyModalUtils;

    private constructor() { };

    public static getInstance(): MyModalUtils {
        if (!MyModalUtils.instance) {
            MyModalUtils.instance = new MyModalUtils();
        }
        return MyModalUtils.instance;
    };

    public isModalVisible = new MyObservableValueModel(false);
    public modal = new MyObservableValueModel(<MyView />);
    public onDismissModal = new MyObservableValueModel(() => { });

    public showModal({
        modal,
        onDismiss = () => this.hideModal(),
    }: {
        modal: ReactElement,
        onDismiss?: () => void,
    }) {
        this.modal.setValue(modal);
        this.onDismissModal.setValue(onDismiss);
        this.isModalVisible.setValue(true);
    };

    public showProgressModal() {
        this.onDismissModal.setValue(() => { });
        this.modal.setValue(<MyProgressModal />);
        this.isModalVisible.setValue(true);
    };

    public hideModal() {
        this.isModalVisible.setValue(false);
        this.modal.setValue(<MyView />);
        this.onDismissModal.setValue(() => { });
    };
};

export default MyModalUtils.getInstance();
