'use strict';

var jsKit = require('@digicroz/js-kit');
var zod = require('zod');

// src/_s2s/dc_file_store/serviceLink/trpcApi/modules/fsAccess/fsAccessZod.ts
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

exports.fsAccessZodSchema = fsAccessZodSchema;
//# sourceMappingURL=fsAccessZod.cjs.map
//# sourceMappingURL=fsAccessZod.cjs.map