declare const buildTypesArr: readonly ["apk", "aab"];
export type TBuildTypes = typeof buildTypesArr[number];
type TBuildTypesObject = {
    [K in TBuildTypes]: K;
};
export declare const buildTypes: {
    arr: readonly ["apk", "aab"];
    obj: TBuildTypesObject;
};
declare const androidBuildRequestsStatusArr: readonly ["pending", "completed", "failed"];
export type TAndroidBuildRequestsStatus = typeof androidBuildRequestsStatusArr[number];
type TAndroidBuildRequestsStatusObj = {
    [K in TAndroidBuildRequestsStatus]: K;
};
export declare const androidBuildRequestsStatus: {
    arr: readonly ["pending", "completed", "failed"];
    obj: TAndroidBuildRequestsStatusObj;
};
export {};
//# sourceMappingURL=apkBuilds.d.ts.map