import {MyRequestMethods} from '../enums/RequestMethods';
import MyResponseModel from '../models/ResponseModel';
import MyUserInfoModel from '../models/UserInfoModel';
import MyApiUtils from '../utils/ApiUtils';
import MyFileUtils from '../utils/FileUtils';
import MyServiceUtils from '../utils/ServiceUtils';

class MyUserService {
  private static instance: MyUserService;

  private constructor() {}

  public static getInstance(): MyUserService {
    if (!MyUserService.instance) {
      MyUserService.instance = new MyUserService();
    }
    return MyUserService.instance;
  }

  public async login({
    userId,
    password,
  }: {
    userId: string;
    password: string;
  }): Promise<MyResponseModel> {
    const response = await MyApiUtils.request({
      method: MyRequestMethods.Post,
      url: MyServiceUtils.getUserApiUrl() + '/login/c',
      data: {
        userId: userId,
        password: password,
      },
    });
    response.isSuccessful = response.data['result'] == true;
    if (response.isSuccessful) {
      response.data = response.data['access_csrf_token'];
    }
    return response;
  }

  public async logout(): Promise<MyResponseModel> {
    return await MyApiUtils.request({
      method: MyRequestMethods.Post,
      url: MyServiceUtils.getUserApiUrl() + '/logout',
      data: {
        isSessionDropped: false,
      },
    });
  }

  public async getUserInfo(): Promise<MyResponseModel> {
    const response = await MyApiUtils.request({
      method: MyRequestMethods.Get,
      url: MyServiceUtils.getUserApiUrl() + '/get_user_info',
    });
    if (response.isSuccessful) {
      response.data = MyUserInfoModel.fromJson(response.data['result']);
    }
    return response;
  }

  public async getUserAvatar(): Promise<MyResponseModel> {
    return await MyApiUtils.download({
      method: MyRequestMethods.Get,
      url: MyServiceUtils.getUserApiUrl() + '/get_user_avatar',
      savePath: MyFileUtils.getApplicationCacheDirectory() + '/user_avatar',
    });
  }
}

export default MyUserService.getInstance();
