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
}

export default MyUserInfoModel;
