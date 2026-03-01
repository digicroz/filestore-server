export type { TCacheControl } from "@dcFileStoreProjectB2f/helpers/fileCache.js";
import { dcFileStoreS2S, dcFileStoreZodSchemas } from "./helpers/s2s/dcFileStoreS2S.js";

export type { TDcFileStoreInput, TDcFileStoreOutput } from "./helpers/s2s/dcFileStoreS2S.js";
export { dcFileStoreZodSchemas } from "./helpers/s2s/dcFileStoreS2S.js";


const s2sClient = dcFileStoreS2S({});

export const getPathInfo = s2sClient.fsAccess.getPathInfo.query;
export const getFileInfo = s2sClient.fsAccess.getFileInfo.query;
export const requestUploadUrl = s2sClient.fsAccess.requestUploadUrl.mutate;
export const confirmUpload = s2sClient.fsAccess.confirmUpload.mutate;
export const deleteFile = s2sClient.fsAccess.delete.mutate;