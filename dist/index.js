import { createTRPCProxyClient, httpBatchLink } from '@trpc/client';
import superjson from 'superjson';
import { z } from 'zod';
import { zodNameValidation } from '@digicroz/js-kit';
import dotenv from 'dotenv';

// src/helpers/s2s/dcFileStoreS2S.ts
var bucketsZodSchema = {
  getBuckets: z.object({
    orgId: z.number({ required_error: "orgId is Requires" })
  }),
  getPathInfo: z.object({
    bucketId: z.number({ required_error: "bucketId is Requires" }),
    pathInSlug: z.string({ required_error: "pathInSlug is Requires" }),
    createDirIfNotExist: z.boolean().optional().default(false)
  }),
  createAccessToken: z.object({
    bucketId: z.number({ required_error: "bucketId is Requires" }),
    dirId: z.number({ required_error: "dirId is Requires" }),
    userId: z.number({ required_error: "userId is Requires" }),
    tokenName: z.string({ required_error: "tokenName is Requires" }),
    deleteIfExist: z.boolean().optional().default(false)
  })
};
var fsAccessZodSchema = {
  getPathInfo: z.object({
    token: z.string(),
    pathInSlug: z.string({ required_error: "pathInSlug is Requires" }),
    createDirIfNotExist: z.boolean().optional().default(false)
  }),
  requestUploadUrl: z.object({
    token: z.string(),
    parentDirId: z.number().positive().min(1).nullable(),
    fileName: z.string().min(1, "fileName is required").refine(zodNameValidation({ allowedSpecialChars: [" ", "-", "_", "."] }), {
      message: "fileName must contain only lowercase letters, numbers, hyphens, and dots"
    }),
    mimeType: z.string().min(1, "MIME type is required"),
    overWriteIfExist: z.boolean().default(false),
    cacheControl: z.union([
      z.object({
        preset: z.enum(["infinite", "one-day", "one-hour", "no-cache"])
      }),
      z.object({
        maxAge: z.number().int().nonnegative().optional(),
        sMaxAge: z.number().int().nonnegative().optional(),
        noCache: z.boolean().optional(),
        noStore: z.boolean().optional(),
        mustRevalidate: z.boolean().optional(),
        proxyRevalidate: z.boolean().optional(),
        public: z.boolean().optional(),
        private: z.boolean().optional(),
        immutable: z.boolean().optional(),
        staleWhileRevalidate: z.number().int().nonnegative().optional()
      })
    ]).optional()
  }),
  confirmUpload: z.object({
    fileId: z.number()
  }),
  getFileInfo: z.object({
    token: z.string(),
    parentDirId: z.number().positive().min(1).nullable(),
    fileName: z.string().min(1, "fileName is required").refine(zodNameValidation({ allowedSpecialChars: [" ", "-", "_", "."] }), {
      message: "fileName must contain only lowercase letters, numbers, hyphens, and dots"
    })
  }),
  delete: z.object({
    token: z.string(),
    fileId: z.number()
  })
};
var usersZodSchema = {
  hasAccessToBucket: z.object({
    userId: z.number(),
    bucketId: z.number()
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
dotenv.config();
if (process.env.DEVELOPMENT_ENVIRONMENT === "local") ; else if (process.env.DEVELOPMENT_ENVIRONMENT === "remote") ;
if (process.env.DEVELOPER_NAME === "adarsh") ;
var s2sEnvironment = "production_remote";
if (process.env.S2S_ENVIRONMENT === "dev_local") {
  s2sEnvironment = "development_local";
} else if (process.env.S2S_ENVIRONMENT === "dev_remote") {
  s2sEnvironment = "development_remote";
}

// src/helpers/s2s/dcFileStoreS2S.ts
var dcFileStoreZodSchemas = serviceLinkZodSchemas;
var backendHost = "";
if (s2sEnvironment === "development_local") {
  backendHost = backendEndpoint.development.local;
} else if (s2sEnvironment === "development_remote") {
  backendHost = backendEndpoint.development.remote;
} else if (s2sEnvironment === "production_remote") {
  backendHost = backendEndpoint.production.remote;
}
var trpcBaseUrl = backendHost + `/trpc/dcFileStore/serviceLink`;
var dcFileStoreS2S = () => {
  return createTRPCProxyClient({
    links: [
      httpBatchLink({
        url: `${trpcBaseUrl}`
        // headers: headerFn,
      })
    ],
    transformer: superjson
  });
};

// src/index.ts
var s2sClient = dcFileStoreS2S();
var getPathInfo = s2sClient.fsAccess.getPathInfo.query;
var requestUploadUrl = s2sClient.fsAccess.requestUploadUrl.mutate;
var confirmUpload = s2sClient.fsAccess.confirmUpload.mutate;
var deleteFile = s2sClient.fsAccess.delete.mutate;

export { confirmUpload, dcFileStoreZodSchemas, deleteFile, getPathInfo, requestUploadUrl };
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map