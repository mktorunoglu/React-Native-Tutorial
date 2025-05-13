class MyGroupModel {
  groupId?: number;
  groupName?: string;
  id?: number;
  parentGroupId?: number;
  timestamp?: number;
  repos?: any[];

  constructor({
    groupId,
    groupName,
    id,
    parentGroupId,
    timestamp,
    repos,
  }: {
    groupId?: number;
    groupName?: string;
    id?: number;
    parentGroupId?: number;
    timestamp?: number;
    repos?: any[];
  }) {
    this.groupId = groupId;
    this.groupName = groupName;
    this.id = id;
    this.parentGroupId = parentGroupId;
    this.timestamp = timestamp;
    this.repos = repos;
  }

  static fromJson(json: any): MyGroupModel {
    return new MyGroupModel({
      groupId: json.group_id,
      groupName: json.group_name,
      repos: [],
    });
  }
}

export default MyGroupModel;
