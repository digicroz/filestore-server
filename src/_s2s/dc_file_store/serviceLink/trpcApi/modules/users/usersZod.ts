import { z } from "zod";

export const usersZodSchema = {
    hasAccessToBucket: z.object({
        userId: z.number(),
        bucketId: z.number(),
    }),
};
