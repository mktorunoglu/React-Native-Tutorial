class MyRepoModel {
    autoSync?: boolean;
    desc?: any;
    encVersion?: number;
    encrypted?: boolean;
    fileCount?: number;
    groupId?: number;
    groupName?: string;
    headCmmtId?: string;
    id?: string;
    isCorrupted?: boolean;
    isOriginalOwner?: boolean;
    isShared?: boolean;
    isVirtual?: boolean;
    lastModified?: number;
    lastModifier?: string;
    lastModify?: number;
    lastSyncTime?: number;
    magic?: string;
    name?: string;
    needDecrypt?: number;
    originPath?: string;
    originRepoId?: string;
    originRepoName?: string;
    parentGroupId?: number;
    permission?: string;
    randomKey?: any;
    relayId?: any;
    repaired?: boolean;
    repoDesc?: any;
    repoId?: string;
    repoName?: string;
    root?: string;
    salt?: any;
    shareType?: string;
    size?: number;
    smtime?: number;
    status?: number;
    storeId?: string;
    timestamp?: number;
    user?: string;
    version?: number;
    virtualPerm?: any;
    worktree?: any;
    worktreeInvalid?: boolean;
    owner?: string;
    path?: string;

    constructor({
        autoSync,
        desc,
        encVersion,
        encrypted,
        fileCount,
        groupId,
        groupName,
        headCmmtId,
        id,
        isCorrupted,
        isOriginalOwner,
        isShared,
        isVirtual,
        lastModified,
        lastModifier,
        lastModify,
        lastSyncTime,
        magic,
        name,
        needDecrypt,
        originPath,
        originRepoId,
        originRepoName,
        parentGroupId,
        permission,
        randomKey,
        relayId,
        repaired,
        repoDesc,
        repoId,
        repoName,
        root,
        salt,
        shareType,
        size,
        smtime,
        status,
        storeId,
        timestamp,
        user,
        version,
        virtualPerm,
        worktree,
        worktreeInvalid,
        owner,
        path,
    }: {
        autoSync?: boolean;
        desc?: any;
        encVersion?: number;
        encrypted?: boolean;
        fileCount?: number;
        groupId?: number;
        groupName?: string;
        headCmmtId?: string;
        id?: string;
        isCorrupted?: boolean;
        isOriginalOwner?: boolean;
        isShared?: boolean;
        isVirtual?: boolean;
        lastModified?: number;
        lastModifier?: string;
        lastModify?: number;
        lastSyncTime?: number;
        magic?: string;
        name?: string;
        needDecrypt?: number;
        originPath?: string;
        originRepoId?: string;
        originRepoName?: string;
        parentGroupId?: number;
        permission?: string;
        randomKey?: any;
        relayId?: any;
        repaired?: boolean;
        repoDesc?: any;
        repoId?: string;
        repoName?: string;
        root?: string;
        salt?: any;
        shareType?: string;
        size?: number;
        smtime?: number;
        status?: number;
        storeId?: string;
        timestamp?: number;
        user?: string;
        version?: number;
        virtualPerm?: any;
        worktree?: any;
        worktreeInvalid?: boolean;
        owner?: string;
        path?: string;
    }) {
        this.autoSync = autoSync;
        this.desc = desc;
        this.encVersion = encVersion;
        this.encrypted = encrypted;
        this.fileCount = fileCount;
        this.groupId = groupId;
        this.groupName = groupName;
        this.headCmmtId = headCmmtId;
        this.id = id;
        this.isCorrupted = isCorrupted;
        this.isOriginalOwner = isOriginalOwner;
        this.isShared = isShared;
        this.isVirtual = isVirtual;
        this.lastModified = lastModified;
        this.lastModifier = lastModifier;
        this.lastModify = lastModify;
        this.lastSyncTime = lastSyncTime;
        this.magic = magic;
        this.name = name;
        this.needDecrypt = needDecrypt;
        this.originPath = originPath;
        this.originRepoId = originRepoId;
        this.originRepoName = originRepoName;
        this.parentGroupId = parentGroupId;
        this.permission = permission;
        this.randomKey = randomKey;
        this.relayId = relayId;
        this.repaired = repaired;
        this.repoDesc = repoDesc;
        this.repoId = repoId;
        this.repoName = repoName;
        this.root = root;
        this.salt = salt;
        this.shareType = shareType;
        this.size = size;
        this.smtime = smtime;
        this.status = status;
        this.storeId = storeId;
        this.timestamp = timestamp;
        this.user = user;
        this.version = version;
        this.virtualPerm = virtualPerm;
        this.worktree = worktree;
        this.worktreeInvalid = worktreeInvalid;
        this.owner = owner;
        this.path = path;
    }
}

export default MyRepoModel;
