class MyDashboardInfoModel {
  favs?: number;
  inPerson?: number;
  inGroup?: number;
  outDownlink?: number;
  outGroup?: number;
  outPerson?: number;
  quota?: number;
  result?: boolean;
  usage?: number;
  username?: string;

  constructor({
    favs,
    inPerson,
    inGroup,
    outDownlink,
    outGroup,
    outPerson,
    quota,
    result,
    usage,
    username,
  }: {
    favs?: number;
    inPerson?: number;
    inGroup?: number;
    outDownlink?: number;
    outGroup?: number;
    outPerson?: number;
    quota?: number;
    result?: boolean;
    usage?: number;
    username?: string;
  }) {
    this.favs = favs;
    this.inPerson = inPerson;
    this.inGroup = inGroup;
    this.outDownlink = outDownlink;
    this.outGroup = outGroup;
    this.outPerson = outPerson;
    this.quota = quota;
    this.result = result;
    this.usage = usage;
    this.username = username;
  }
}

export default MyDashboardInfoModel;
