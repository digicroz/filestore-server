import { z } from "zod";
export declare const usersZodSchema: {
    hasAccessToBucket: z.ZodObject<{
        userId: z.ZodNumber;
        bucketId: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        bucketId: number;
        userId: number;
    }, {
        bucketId: number;
        userId: number;
    }>;
};
//# sourceMappingURL=usersZod.d.ts.map