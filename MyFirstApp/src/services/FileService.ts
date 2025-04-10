import { MyRequestMethods } from "../enums/RequestMethods";
import MyRepoModel from "../models/RepoModel";
import MyResponseModel from "../models/ResponseModel";
import MyApiUtils from "../utils/ApiUtils";
import MyConverterUtils from "../utils/ConverterUtils";
import MyServiceUtils from "../utils/ServiceUtils";

class MyFileService {
    private static instance: MyFileService;

    private constructor() { };

    public static getInstance(): MyFileService {
        if (!MyFileService.instance) {
            MyFileService.instance = new MyFileService();
        }
        return MyFileService.instance;
    };

    public async listOwnedRepo(): Promise<MyResponseModel> {
        const response = await MyApiUtils.request({
            method: MyRequestMethods.Get,
            url: MyServiceUtils.getFileApiUrl() + "/list_owned_repo",
        });
        response.isSuccessful = response.data["result"] == true;
        if (response.isSuccessful) {
            response.data = MyConverterUtils.convertJsonToModelList({
                json: response.data["repos"],
                model: MyRepoModel,
            });
        }
        return response;
    };
};

export default MyFileService.getInstance();
