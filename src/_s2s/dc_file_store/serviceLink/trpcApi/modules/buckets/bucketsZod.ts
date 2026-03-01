import { z } from "zod";

export const bucketsZodSchema = {
    getBuckets: z.object({
        orgId: z.number({ required_error: "orgId is Requires" }),
    }),
    getPathInfo: z.object({
        bucketId: z.number({ required_error: "bucketId is Requires" }),
        pathInSlug: z.string({ required_error: "pathInSlug is Requires" }),
        createDirIfNotExist: z.boolean().optional().default(false),
    }),
    createAccessToken: z.object({
        bucketId: z.number({ required_error: "bucketId is Requires" }),
        dirId: z.number({ required_error: "dirId is Requires" }),
        userId: z.number({ required_error: "userId is Requires" }),
        tokenName: z.string({ required_error: "tokenName is Requires" }),
        deleteIfExist: z.boolean().optional().default(false),
    }),
};
