'use strict';

var client = require('@trpc/client');
var superjson = require('superjson');
var zod = require('zod');
var jsKit = require('@digicroz/js-kit');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var superjson__default = /*#__PURE__*/_interopDefault(superjson);

// src/helpers/s2s/dcFileStoreS2S.ts
var bucketsZodSchema = {
  getBuckets: zod.z.object({
    orgId: zod.z.number({ required_error: "orgId is Requires" })
  }),
  getPathInfo: zod.z.object({
    bucketId: zod.z.number({ required_error: "bucketId is Requires" }),
    pathInSlug: zod.z.string({ required_error: "pathInSlug is Requires" }),
    createDirIfNotExist: zod.z.boolean().optional().default(false)
  }),
  createAccessToken: zod.z.object({
    bucketId: zod.z.number({ required_error: "bucketId is Requires" }),
    dirId: zod.z.number({ required_error: "dirId is Requires" }),
    userId: zod.z.number({ required_error: "userId is Requires" }),
    tokenName: zod.z.string({ required_error: "tokenName is Requires" }),
    deleteIfExist: zod.z.boolean().optional().default(false)
  })
};
var fsAccessZodSchema = {
  getPathInfo: zod.z.object({
    token: zod.z.string(),
    pathInSlug: zod.z.string({ required_error: "pathInSlug is Requires" }),
    createDirIfNotExist: zod.z.boolean().optional().default(false)
  }),
  requestUploadUrl: zod.z.object({
    token: zod.z.string(),
    parentDirId: zod.z.number().positive().min(1).nullable(),
    fileName: zod.z.string().min(1, "fileName is required").refine(jsKit.zodNameValidation({ allowedSpecialChars: [" ", "-", "_", "."] }), {
      message: "fileName must contain only lowercase letters, numbers, hyphens, and dots"
    }),
    mimeType: zod.z.string().min(1, "MIME type is required"),
    overWriteIfExist: zod.z.boolean().default(false),
    cacheControl: zod.z.union([
      zod.z.object({
        preset: zod.z.enum(["infinite", "one-day", "one-hour", "no-cache"])
      }),
      zod.z.object({
        maxAge: zod.z.number().int().nonnegative().optional(),
        sMaxAge: zod.z.number().int().nonnegative().optional(),
        noCache: zod.z.boolean().optional(),
        noStore: zod.z.boolean().optional(),
        mustRevalidate: zod.z.boolean().optional(),
        proxyRevalidate: zod.z.boolean().optional(),
        public: zod.z.boolean().optional(),
        private: zod.z.boolean().optional(),
        immutable: zod.z.boolean().optional(),
        staleWhileRevalidate: zod.z.number().int().nonnegative().optional()
      })
    ]).optional()
  }),
  confirmUpload: zod.z.object({
    fileId: zod.z.number()
  }),
  getFileInfo: zod.z.object({
    token: zod.z.string(),
    parentDirId: zod.z.number().positive().min(1).nullable(),
    fileName: zod.z.string().min(1, "fileName is required").refine(jsKit.zodNameValidation({ allowedSpecialChars: [" ", "-", "_", "."] }), {
      message: "fileName must contain only lowercase letters, numbers, hyphens, and dots"
    })
  }),
  delete: zod.z.object({
    token: zod.z.string(),
    fileId: zod.z.number()
  })
};
var usersZodSchema = {
  hasAccessToBucket: zod.z.object({
    userId: zod.z.number(),
    bucketId: zod.z.number()
  })
};

// src/_s2s/dc_file_store/serviceLink/trpcApi/zodSchemas.ts
var serviceLinkZodSchemas = {
  buckets: bucketsZodSchema,
  users: usersZodSchema,
  fsAccess: fsAccessZodSchema
};

// src/_s2s/dc_file_store/serverB2f/constants/development.ts
var localHostname = "localhost";
var localPort = 3223;
var backendEndpoint = {
  development: {
    local: `http://${localHostname}:${localPort}`,
    remote: `https://s1-api-dev.digicroz.com`
  },
  production: {
    remote: "https://s1-api.digicroz.com"
  }
};

// src/helpers/s2s/dcFileStoreS2S.ts
var dcFileStoreZodSchemas = serviceLinkZodSchemas;
var dcFileStoreS2S = ({
  s2sEnvironment = "production_remote"
}) => {
  let backendHost = "";
  if (s2sEnvironment === "development_local") {
    backendHost = backendEndpoint.development.local;
  } else if (s2sEnvironment === "development_remote") {
    backendHost = backendEndpoint.development.remote;
  } else if (s2sEnvironment === "production_remote") {
    backendHost = backendEndpoint.production.remote;
  }
  const trpcBaseUrl = backendHost + `/trpc/dcFileStore/serviceLink`;
  return client.createTRPCProxyClient({
    links: [
      client.httpBatchLink({
        url: `${trpcBaseUrl}`
        // headers: headerFn,
      })
    ],
    transformer: superjson__default.default
  });
};

// src/index.ts
var s2sClient = dcFileStoreS2S({});
var getPathInfo = s2sClient.fsAccess.getPathInfo.query;
var getFileInfo = s2sClient.fsAccess.getFileInfo.query;
var requestUploadUrl = s2sClient.fsAccess.requestUploadUrl.mutate;
var confirmUpload = s2sClient.fsAccess.confirmUpload.mutate;
var deleteFile = s2sClient.fsAccess.delete.mutate;

exports.confirmUpload = confirmUpload;
exports.dcFileStoreZodSchemas = dcFileStoreZodSchemas;
exports.deleteFile = deleteFile;
exports.getFileInfo = getFileInfo;
exports.getPathInfo = getPathInfo;
exports.requestUploadUrl = requestUploadUrl;
//# sourceMappingURL=index.cjs.map
//# sourceMappingURL=index.cjs.map