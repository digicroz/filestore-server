import { z } from 'zod';

// src/_s2s/dc_file_store/serviceLink/trpcApi/modules/users/usersZod.ts
var usersZodSchema = {
  hasAccessToBucket: z.object({
    userId: z.number(),
    bucketId: z.number()
  })
};

export { usersZodSchema };
//# sourceMappingURL=usersZod.js.map
//# sourceMappingURL=usersZod.js.map