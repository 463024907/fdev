export default {
  fuser: {
    queryByGroupId: '/fuser/api/group/queryByGroupId'
  },
  frelease: {
    updateNoteService: 'frelease/api/note/updateNoteService',
    queryNoteDetail: 'frelease/api/note/queryNoteDetail',
    addNoteService: '/frelease/api/note/addNoteService',
    queryNoteService: '/frelease/api/note/queryNoteService',
    deleteNoteService: '/frelease/api/note/deleteNoteService',
    createNote: '/frelease/api/release/createNote', // 新增发布说明
    queryReleaseNote: '/frelease/api/release/queryReleaseNote', // 查询发布说明列表
    queryRqrmntFileUri: '/frelease/api/rqrmnt/queryRqrmntFileUri', //查询大窗口需求文档minio地址
    queryTaskRqrmntAlert: '/frelease/api/rqrmnt/queryTaskRqrmntAlert',
    queryAppTagPiplines: '/frelease/api/application/queryAppTagPiplines',
    queryTestRunPiplines: '/frelease/api/application/queryTestRunPiplines',
    queryApplicationTags: '/frelease/api/application/queryApplicationTags',
    queryApplications: '/frelease/api/application/queryApplications',
    queryComponent: '/frelease/api/application/queryComponent',
    queryTasksReviews: '/frelease/api/application/queryTasksReviews',
    sendEmailForTaskManagers:
      '/frelease/api/application/sendEmailForTaskManagers',
    setTestEnvs: '/frelease/api/application/setTestEnvs',
    packageFromTag: '/frelease/api/devops/packageFromTag',
    relDevops: '/frelease/api/devops/relDevops',
    queryImageTags: '/frelease/api/devopsrecord/queryImageTags',
    addAppScale: '/frelease/api/appscale/add',
    addApplication: '/frelease/api/release/addApplication',
    addGitlabAsset: '/frelease/api/release/addGitlabAsset',
    releaseAudit: '/frelease/api/release/audit',
    releaseCreate: '/frelease/api/release/create',
    releaseDelete: '/frelease/api/release/delete',
    deleteAppScale: '/frelease/api/appscale/delete',
    deleteApplication: '/frelease/api/release/deleteApplication',
    deleteAsset: '/frelease/api/release/deleteAsset',
    deleteAssets: '/frelease/api/release/deleteAssets',
    generateProdExcel: '/frelease/api/release/generateProdExcel',
    getReleaseVersion: '/frelease/api/release/getReleaseVersion',
    releaseQuery: '/frelease/api/release/query',
    queryAppScale: '/frelease/api/appscale/query',
    releaseQueryApplications: '/frelease/api/release/queryApplications',
    queryAssets: '/frelease/api/release/queryConfigAssets',
    queryDetail: '/frelease/api/release/queryDetail',
    queryGroupAbbr: '/frelease/api/release/queryGroupAbbr',
    queryPlan: '/frelease/api/release/queryPlan',
    queryProdInfo: '/frelease/api/release/queryProdInfo',
    queryResourceBranches: '/frelease/api/release/queryResourceBranches',
    queryResourceFiles: '/frelease/api/release/queryResourceFiles',
    queryResourceProjects: '/frelease/api/release/queryResourceProjects',
    querySysRlsInfo: '/frelease/api/release/querySysRlsInfo',
    setImageTag: '/frelease/api/release/setImageTag',
    setTemplate: '/frelease/api/release/setTemplate',
    trace: '/frelease/api/release/trace',
    releaseUpdate: '/frelease/api/release/update',
    updateAppScale: '/frelease/api/appscale/update',
    updateAssetSeqNo: '/frelease/api/release/updateAssetSeqNo',
    updateGroupAbbr: '/frelease/api/release/updateGroupAbbr',
    updateSysRlsInfo: '/frelease/api/release/updateSysRlsInfo',
    releaseNodeCreate: '/frelease/api/releasenode/create',
    getReleaseNodeName: '/frelease/api/releasenode/getReleaseNodeName',
    releaseNodeQueryDetail: '/frelease/api/releasenode/queryDetail',
    queryReleaseNodes: '/frelease/api/releasenode/queryReleaseNodes',
    releaseNodeUpdate: '/frelease/api/releasenode/update',
    taskAdd: '/frelease/api/task/add',
    taskAuditAdd: '/frelease/api/task/auditAdd',
    changeReleaseNode: '/frelease/api/task/changeReleaseNode',
    deleteTask: '/frelease/api/task/deleteTask',
    queryDetailByTaskId: '/frelease/api/task/queryDetailByTaskId',
    queryTasks: '/frelease/api/task/queryTasks',
    updateTaskArchived: '/frelease/api/task/updateTaskArchived',
    templateCreate: '/frelease/api/template/create',
    templateDelete: '/frelease/api/template/delete',
    templateQuery: '/frelease/api/template/query',
    templateQueryDetail: '/frelease/api/template/queryDetail',
    queryOptionalCatalog: '/frelease/api/template/queryOptionalCatalog',
    templateUpdate: '/frelease/api/template/update',
    queryAllProdAssets: '/frelease/api/release/queryAllProdAssets',
    queryDeAutoAllProdAssets: '/frelease/api/release/queryDeAutoAllProdAssets',
    exportProdDirection: '/frelease/api/release/exportProdDirection',
    tasksInSitStage: '/frelease/api/application/tasksInSitStage',
    queryGroupSysAbbr: '/frelease/api/release/queryGroupSysAbbr',
    updateGroupSysAbbr: '/frelease/api/release/updateGroupSysAbbr',
    queryModuleType: '/frelease/api/optionalcatalog/query',
    deleteModuleType: '/frelease/api/optionalcatalog/delete',
    addModuleType: '/frelease/api/optionalcatalog/add',
    updateModuleType: '/frelease/api/optionalcatalog/update',
    queryScript: '/frelease/api/automationparam/query',
    deleteScript: '/frelease/api/automationparam/delete',
    addScript: '/frelease/api/automationparam/add',
    updateScript: '/frelease/api/automationparam/update',
    queryAutomationEnv: '/frelease/api/automationenv/queryToProdScale',
    deleteAutomationEnv: '/frelease/api/automationenv/delete',
    addAutomationEnv: '/frelease/api/automationenv/add',
    updateAutomationEnv: '/frelease/api/automationenv/update',
    queryDBAssets: '/frelease/api/release/queryDBAssets',
    createTestrunBranch: '/frelease/api/testrun/createTestrunBranch',
    mergeTaskBranch: '/frelease/api/testrun/mergeTaskBranch',
    queryTaskByTestRunId: '/frelease/api/testrun/queryTaskByTestRunId',
    findByProdId: '/frelease/api/prodMediaFile/findByProdId',
    changeConfirmConf: '/frelease/api/application/confirmConfigChanges',
    changeReleaseConf: '/frelease/api/release/confirmConfigChanges',
    queryByReleaseNodeName: '/frelease/api/rqrmnt/queryByReleaseNodeName',
    deleteFile: '/frelease/api/rqrmnt/deleteFile',
    taskChangeNotise: '/frelease/api/rqrmnt/taskChangeNotise',
    downloadFiles: '/frelease/api/rqrmnt/download',
    addSourceReview: '/frelease/api/rqrmnt/addSourceReview',
    addSystemTestFile: '/frelease/api/rqrmnt/addSystemTestFile',
    pullGrayBranch: '/frelease/api/task/pullGrayBranch',
    querySystem: '/frelease/api/template/querySystem',
    queryExcelTemplate: '/frelease/api/template/queryExcelTemplate',
    editFakeInfo: '/frelease/api/application/editFakeInfo',
    iOSOrAndroidAppPublish: '/frelease/api/application/release',
    createBigReleaseNode: '/frelease/api/releasenode/createBigReleaseNode',
    updateBigReleasenode: '/frelease/api/releasenode/updateBigReleaseNode',
    queryBigReleaseNodes: '/frelease/api/releasenode/queryBigReleaseNodes',
    queryBigReleaseNodeDetail:
      '/frelease/api/releasenode/queryBigReleaseNodeDetail',
    queryContactInfo: '/frelease/api/releasenode/queryContactInfo',
    queryRqrmntInfoList: '/frelease/api/rqrmnt/queryRqrmntInfoList',
    queryByReleaseDate: '/frelease/api/releaseCycle/queryByReleaseDate',
    updateBigReleaseDate: '/frelease/api/releaseCycle/update',
    queryProWantTasks: '/frelease/api/task/queryProWantTasks',
    queryBatchInfoByTaskId: '/frelease/api/releasebatch/queryBatchInfoByTaskId',
    addBatch: '/frelease/api/releasebatch/addBatch',
    queryRqrmntInfoListByType: '/frelease/api/rqrmnt/queryRqrmntInfoListByType',
    exportRqrmntInfoList: '/frelease/api/rqrmnt/exportRqrmntInfoList',
    updateRqrmntInfo: '/frelease/api/rqrmnt/updateRqrmntInfo',
    exportRqrmntInfoListByType:
      '/frelease/api/rqrmnt/exportRqrmntInfoListByType',
    queryBatchInfoByAppId: '/frelease/api/releasebatch/queryBatchInfoByAppId',
    queryReleaseSystem: 'frelease/api/rqrmnt/queryReleaseSystem',
    queryRqrmntInfoTasks: '/frelease/api/rqrmnt/queryRqrmntInfoTasks',
    exportSpecialRqrmntInfoList:
      '/frelease/api/rqrmnt/exportSpecialRqrmntInfoList',
    queryDeAutoAssets: '/frelease/api/release/queryDeAutoAssets',
    deAutoUpload: '/frelease/api/release/deAutoUpload',
    queryPackageTags: '/frelease/api/devopsrecord/queryPackageTags',
    setPackageTag: '/frelease/api/release/setPackageTag',
    queryConfigApplication: '/frelease/api/config/queryConfigApplication',
    addConfigApplication: '/frelease/api/config/addConfigApplication',
    checkConfigApplication: '/frelease/api/config/checkConfigApplication',
    createConfig: '/frelease/api/config/createConfig',
    deleteConfig: '/frelease/api/config/deleteConfig',
    queryConfigSum: '/frelease/api/config/queryConfigSum',
    confirmChanges: '/frelease/api/release/confirmChanges',
    deleteReleaseNode: '/frelease/api/releasenode/delete',
    querySystemDetailByProdId:
      '/frelease/api/release/querySystemDetailByProdId',
    queryDbPath: '/frelease/api/dbreview/queryDbPath',
    uploadAssets: '/frelease/api/dbreview/uploadAssets',
    queryProdDir: '/frelease/api/release/queryProdDir',
    updateProdDir: '/frelease/api/release/updateProdDir',
    updateProdDeploy: '/frelease/api/release/updateProdDeploy',
    queryDeployTypeByAppId: '/frelease/api/release/queryDeployTypeByAppId', // 根据应用id查询部署平台
    updateAwsAssetGroupId: '/frelease/api/release/updateAwsAssetGroupId', // 对象存储修改组
    queryAwsConfigByGroupId: '/frelease/api/release/queryAwsConfigByGroupId' // 查询对象存储用户所属组列表
  }
};
