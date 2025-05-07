import {MyRequestMethods} from '../enums/RequestMethods';
import MyDashboardInfoModel from '../models/DashboardInfoModel';
import MyRepoModel from '../models/RepoModel';
import MyResponseModel from '../models/ResponseModel';
import MyApiUtils from '../utils/ApiUtils';
import MyServiceUtils from '../utils/ServiceUtils';
import MyTimeUtils from '../utils/TimeUtils';

class MyFileService {
  private static instance: MyFileService;

  private constructor() {}

  public static getInstance(): MyFileService {
    if (!MyFileService.instance) {
      MyFileService.instance = new MyFileService();
    }
    return MyFileService.instance;
  }

  public async listOwnedRepo(): Promise<MyResponseModel> {
    const response = await MyApiUtils.request({
      method: MyRequestMethods.Get,
      url: MyServiceUtils.getFileApiUrl() + '/list_owned_repo',
    });
    response.isSuccessful = response.data['result'] == true;
    if (response.isSuccessful) {
      response.data = response.data['repos'].map((item: any) =>
        MyRepoModel.fromJson(item),
      );
    }
    return response;
  }

  public async getDashboardInfo(): Promise<MyResponseModel> {
    const response = await MyApiUtils.request({
      method: MyRequestMethods.Get,
      url: MyServiceUtils.getFileApiUrl() + '/get_dashboard_info',
      params: {t: await MyTimeUtils.getTime()},
    });
    if (response.isSuccessful) {
      response.data = MyDashboardInfoModel.fromJson(response.data);
    }
    return response;
  }
}

export default MyFileService.getInstance();
