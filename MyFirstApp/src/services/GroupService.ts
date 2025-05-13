import {MyRequestMethods} from '../enums/RequestMethods';
import GroupModel from '../models/GroupModel';
import MyResponseModel from '../models/ResponseModel';
import MyApiUtils from '../utils/ApiUtils';
import MyServiceUtils from '../utils/ServiceUtils';

class MyGroupService {
  private static instance: MyGroupService;

  private constructor() {}

  public static getInstance(): MyGroupService {
    if (!MyGroupService.instance) {
      MyGroupService.instance = new MyGroupService();
    }
    return MyGroupService.instance;
  }

  public async searchGroup(): Promise<MyResponseModel> {
    const response = await MyApiUtils.request({
      method: MyRequestMethods.Get,
      url: MyServiceUtils.getGroupApiUrl() + '/search_group',
      params: {query: ''},
    });
    if (response.isSuccessful) {
      response.data = response.data['group_list'].map((item: any) =>
        GroupModel.fromJson(item),
      );
    }
    return response;
  }
}

export default MyGroupService.getInstance();
