'use strict';

var zod = require('zod');

// src/_s2s/dc_file_store/serviceLink/trpcApi/modules/buckets/bucketsZod.ts
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

exports.bucketsZodSchema = bucketsZodSchema;
//# sourceMappingURL=bucketsZod.cjs.map
//# sourceMappingURL=bucketsZod.cjs.map