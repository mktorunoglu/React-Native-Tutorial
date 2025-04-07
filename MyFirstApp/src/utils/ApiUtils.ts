import axios, { AxiosInstance } from "axios";
import { MyRequestMethods } from "../enums/RequestMethods";
import MyResponseModel from "../models/ResponseModel";
import MyServiceUtils from "../utils/ServiceUtils";

class MyApiUtils {
    private static instance: MyApiUtils;

    private constructor() {
        this.api = axios.create();
    };

    public static getInstance(): MyApiUtils {
        if (!MyApiUtils.instance) {
            MyApiUtils.instance = new MyApiUtils();
        }
        return MyApiUtils.instance;
    };

    private api: AxiosInstance;

    public async request({
        method,
        url,
        data,
        headers,
    }: {
        method: MyRequestMethods,
        url: string,
        data?: any,
        headers?: Record<string, string>,
    }): Promise<MyResponseModel> {
        try {
            const response = await this.api({
                method,
                url,
                data,
                headers: {
                    "X-CSRF-TOKEN": MyServiceUtils.token,
                    ...headers,
                },
            });
            return new MyResponseModel({
                isSuccessful: response.status == 200,
                data: response.data,
            });
        } catch (error: any) {
            console.error("TEST api error request url: " + url);
            console.error("TEST api error method: " + method);
            console.error("TEST api error message: " + error?.message);
            throw error;
        }
    };
};

export default MyApiUtils.getInstance();
