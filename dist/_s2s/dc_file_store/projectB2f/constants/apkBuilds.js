// src/_s2s/dc_file_store/projectB2f/constants/apkBuilds.ts
var buildTypesArr = ["apk", "aab"];
var buildTypesObj = Object.fromEntries(
  buildTypesArr.map((status) => [status, status])
);
var buildTypes = {
  arr: buildTypesArr,
  obj: buildTypesObj
};
var androidBuildRequestsStatusArr = ["pending", "completed", "failed"];
var androidBuildRequestsStatusObj = Object.fromEntries(
  androidBuildRequestsStatusArr.map((status) => [status, status])
);
var androidBuildRequestsStatus = {
  arr: androidBuildRequestsStatusArr,
  obj: androidBuildRequestsStatusObj
};

export { androidBuildRequestsStatus, buildTypes };
//# sourceMappingURL=apkBuilds.js.map
//# sourceMappingURL=apkBuilds.js.map