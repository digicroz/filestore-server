import { z } from 'zod';
import { zodNameValidation } from '@digicroz/js-kit';

// src/_s2s/dc_file_store/serviceLink/trpcApi/modules/buckets/bucketsZod.ts
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

export { serviceLinkZodSchemas };
//# sourceMappingURL=zodSchemas.js.map
//# sourceMappingURL=zodSchemas.js.map