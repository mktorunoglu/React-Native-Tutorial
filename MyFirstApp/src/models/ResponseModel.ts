class MyResponseModel {
    isSuccessful?: boolean;
    data?: any;
    message?: string;

    constructor({
        isSuccessful,
        data,
        message,
    }: {
        isSuccessful?: boolean,
        data?: any,
        message?: string,
    }) {
        this.isSuccessful = isSuccessful;
        this.data = data;
        this.message = message;
    };
};

export default MyResponseModel;
