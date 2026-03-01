'use strict';

var zod = require('zod');

// src/_s2s/dc_file_store/serviceLink/trpcApi/modules/users/usersZod.ts
var usersZodSchema = {
  hasAccessToBucket: zod.z.object({
    userId: zod.z.number(),
    bucketId: zod.z.number()
  })
};

exports.usersZodSchema = usersZodSchema;
//# sourceMappingURL=usersZod.cjs.map
//# sourceMappingURL=usersZod.cjs.map