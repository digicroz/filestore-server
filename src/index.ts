export type { TCacheControl } from "@dcFileStoreProjectB2f/helpers/fileCache.js";
import {
  dcFileStoreS2S,
  dcFileStoreZodSchemas,
  TS2SEnvironment,
} from "./helpers/s2s/dcFileStoreS2S.js";

export type {
  TDcFileStoreInput,
  TDcFileStoreOutput,
} from "./helpers/s2s/dcFileStoreS2S.js";
export { dcFileStoreZodSchemas } from "./helpers/s2s/dcFileStoreS2S.js";

export const createFileStoreClient = (
  s2sEnvironment: TS2SEnvironment = "production_remote",
) => {
  const s2sClient = dcFileStoreS2S({ s2sEnvironment });
  return {
    getBucketStats: s2sClient.fsAccess.getBucketStats.query,
    getPathInfo: s2sClient.fsAccess.getPathInfo.query,
    getFileInfo: s2sClient.fsAccess.getFileInfo.query,
    requestUploadUrl: s2sClient.fsAccess.requestUploadUrl.mutate,
    confirmUpload: s2sClient.fsAccess.confirmUpload.mutate,
    deleteFile: s2sClient.fsAccess.delete.mutate,
  };
};
