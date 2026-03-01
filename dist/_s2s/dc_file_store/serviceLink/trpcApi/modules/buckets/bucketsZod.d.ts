import { z } from "zod";
export declare const bucketsZodSchema: {
    getBuckets: z.ZodObject<{
        orgId: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        orgId: number;
    }, {
        orgId: number;
    }>;
    getPathInfo: z.ZodObject<{
        bucketId: z.ZodNumber;
        pathInSlug: z.ZodString;
        createDirIfNotExist: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
    }, "strip", z.ZodTypeAny, {
        bucketId: number;
        pathInSlug: string;
        createDirIfNotExist: boolean;
    }, {
        bucketId: number;
        pathInSlug: string;
        createDirIfNotExist?: boolean | undefined;
    }>;
    createAccessToken: z.ZodObject<{
        bucketId: z.ZodNumber;
        dirId: z.ZodNumber;
        userId: z.ZodNumber;
        tokenName: z.ZodString;
        deleteIfExist: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
    }, "strip", z.ZodTypeAny, {
        bucketId: number;
        dirId: number;
        userId: number;
        tokenName: string;
        deleteIfExist: boolean;
    }, {
        bucketId: number;
        dirId: number;
        userId: number;
        tokenName: string;
        deleteIfExist?: boolean | undefined;
    }>;
};
//# sourceMappingURL=bucketsZod.d.ts.map