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

  public async createRepo({
    repoName,
    repoPass,
  }: {
    repoName: string;
    repoPass?: string;
  }): Promise<MyResponseModel> {
    const response = await MyApiUtils.request({
      method: MyRequestMethods.Post,
      url: MyServiceUtils.getFileApiUrl() + '/create_repo',
      data: {repo_name: repoName, repo_pass: repoPass},
    });
    response.isSuccessful = response.data['result'] == true;
    return response;
  }

  public async renameRepo({
    repoId,
    repoName,
  }: {
    repoId: string;
    repoName: string;
  }): Promise<MyResponseModel> {
    const response = await MyApiUtils.request({
      method: MyRequestMethods.Post,
      url: MyServiceUtils.getFileApiUrl() + '/rename_repo',
      data: {repo_id: repoId, repo_name: repoName},
    });
    response.isSuccessful = response.data['result'] == true;
    return response;
  }
}

export default MyFileService.getInstance();
