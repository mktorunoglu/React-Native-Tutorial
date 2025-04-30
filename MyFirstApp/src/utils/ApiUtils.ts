import axios, {AxiosInstance} from 'axios';
import BlobUtil from 'react-native-blob-util';
import {MyRequestMethods} from '../enums/RequestMethods';
import {MyResponseTypes} from '../enums/ResponseTypes';
import MyResponseModel from '../models/ResponseModel';
import MyFileUtils from './FileUtils';
import MyServiceUtils from './ServiceUtils';

class MyApiUtils {
  private static instance: MyApiUtils;

  private constructor() {
    this.api = axios.create();
  }

  public static getInstance(): MyApiUtils {
    if (!MyApiUtils.instance) {
      MyApiUtils.instance = new MyApiUtils();
    }
    return MyApiUtils.instance;
  }

  private api: AxiosInstance;

  public async request({
    method,
    url,
    data,
    headers,
    responseType,
  }: {
    method: MyRequestMethods;
    url: string;
    data?: any;
    headers?: Record<string, string>;
    responseType?: MyResponseTypes;
  }): Promise<MyResponseModel> {
    try {
      const response = await this.api({
        method,
        url,
        data,
        headers: {
          'X-CSRF-TOKEN': MyServiceUtils.token,
          ...headers,
        },
        responseType,
      });
      console.log('TEST api request url: ' + url);
      console.log('TEST api method: ' + method);
      console.log('TEST api response status: ' + response.status);
      console.log('TEST api response data: ' + JSON.stringify(response.data));
      return new MyResponseModel({
        isSuccessful: response.status == 200,
        data: response.data,
      });
    } catch (error: any) {
      console.error('TEST api error request url: ' + url);
      console.error('TEST api error method: ' + method);
      console.error('TEST api error message: ' + error?.message);
      throw error;
    }
  }

  public async download({
    method,
    url,
    savePath,
  }: {
    method: MyRequestMethods;
    url: string;
    savePath: string;
  }): Promise<MyResponseModel> {
    try {
      await BlobUtil.config({
        fileCache: true,
        path: savePath,
      }).fetch(method, url, {
        'X-CSRF-TOKEN': MyServiceUtils.token!,
      });
      return new MyResponseModel({
        isSuccessful: await MyFileUtils.getIsFilePathExists(savePath),
        data: savePath,
      });
    } catch (error: any) {
      console.error('TEST api error request url: ' + url);
      console.error('TEST api error method: ' + method);
      console.error('TEST api error message: ' + error?.message);
      throw error;
    }
  }
}

export default MyApiUtils.getInstance();
