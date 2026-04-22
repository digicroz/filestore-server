import { zodNameValidation } from "@digicroz/js-kit";
import { z } from "zod";

export const fsAccessZodSchema = {
    getBucketStats: z.object({
        token: z.string(),
    }),
    getPathInfo: z.object({
        token: z.string(),
        pathInSlug: z.string({ required_error: "pathInSlug is Requires" }),
        createDirIfNotExist: z.boolean().optional().default(false),
    }),
    requestUploadUrl: z.object({
        token: z.string(),
        parentDirId: z.number().positive().min(1).nullable(),
        fileName: z
            .string()
            .min(1, "fileName is required")
            .refine(zodNameValidation({ allowedSpecialChars: [" ", "-", "_", "."] }), {
                message: "fileName must contain only lowercase letters, numbers, hyphens, and dots",
            }),
        mimeType: z.string().min(1, "MIME type is required"),
        overWriteIfExist: z.boolean().default(false),
        cacheControl: z
            .union([
                z.object({
                    preset: z.enum(["infinite", "one-day", "one-hour", "no-cache"]),
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
                    staleWhileRevalidate: z.number().int().nonnegative().optional(),
                }),
            ])
            .optional(),
    }),
    confirmUpload: z.object({
        fileId: z.number(),
    }),
    getFileInfo: z.object({
        token: z.string(),
        parentDirId: z.number().positive().min(1).nullable(),
        fileName: z
            .string()
            .min(1, "fileName is required")
            .refine(zodNameValidation({ allowedSpecialChars: [" ", "-", "_", "."] }), {
                message: "fileName must contain only lowercase letters, numbers, hyphens, and dots",
            }),
    }),
    delete: z.object({
        token: z.string(),
        fileId: z.number(),
    }),
};
