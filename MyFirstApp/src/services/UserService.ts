import { MyRequestMethods } from "../enums/RequestMethods";
import MyResponseModel from "../models/ResponseModel";
import MyApiUtils from "../utils/ApiUtils";
import MyServiceUtils from "../utils/ServiceUtils";

class MyUserService {
    private static instance: MyUserService;

    private constructor() { };

    public static getInstance(): MyUserService {
        if (!MyUserService.instance) {
            MyUserService.instance = new MyUserService();
        }
        return MyUserService.instance;
    };

    public async login({
        userId,
        password,
    }: {
        userId: string,
        password: string,
    }): Promise<MyResponseModel> {
        const response = await MyApiUtils.request({
            method: MyRequestMethods.Post,
            url: MyServiceUtils.getUserApiUrl() + "/login/c",
            data: {
                "userId": userId,
                "password": password,
            },
        });
        response.isSuccessful = response.data["result"] == true;
        if (response.isSuccessful) {
            response.data = response.data["access_csrf_token"];
        }
        return response;
    };

    public async logout(): Promise<MyResponseModel> {
        return await MyApiUtils.request({
            method: MyRequestMethods.Post,
            url: MyServiceUtils.getUserApiUrl() + "/logout",
            data: {
                "isSessionDropped": false,
            },
        });
    };
};

export default MyUserService.getInstance();
