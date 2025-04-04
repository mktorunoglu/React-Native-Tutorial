import { MyApiUrls } from "../enums/ApiUrls";
import { MyRequestMethods } from "../enums/RequestMethods";
import MyResponseModel from "../models/ResponseModel";
import ApiUtils from "../utils/ApiUtils";

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
        return await ApiUtils.request({
            method: MyRequestMethods.Post,
            url: MyApiUrls.UserApi + "/login/c",
            data: {
                "userId": userId,
                "password": password,
            },
        });
    };
};

export default MyUserService.getInstance();
