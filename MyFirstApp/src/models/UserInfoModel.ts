class MyUserInfoModel {
  name?: string;
  user?: string;
  userType?: number;

  constructor({
    name,
    user,
    userType,
  }: {
    name?: string;
    user?: string;
    userType?: number;
  }) {
    this.name = name;
    this.user = user;
    this.userType = userType;
  }

  static fromJson(json: any): MyUserInfoModel {
    return new MyUserInfoModel({
      name: json.name,
      user: json.user,
      userType: json.user_type,
    });
  }
}

export default MyUserInfoModel;
