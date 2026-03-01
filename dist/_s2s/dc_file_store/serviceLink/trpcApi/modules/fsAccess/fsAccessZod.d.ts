import { z } from "zod";
export declare const fsAccessZodSchema: {
    getPathInfo: z.ZodObject<{
        token: z.ZodString;
        pathInSlug: z.ZodString;
        createDirIfNotExist: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
    }, "strip", z.ZodTypeAny, {
        pathInSlug: string;
        createDirIfNotExist: boolean;
        token: string;
    }, {
        pathInSlug: string;
        token: string;
        createDirIfNotExist?: boolean | undefined;
    }>;
    requestUploadUrl: z.ZodObject<{
        token: z.ZodString;
        parentDirId: z.ZodNullable<z.ZodNumber>;
        fileName: z.ZodEffects<z.ZodString, string, string>;
        mimeType: z.ZodString;
        overWriteIfExist: z.ZodDefault<z.ZodBoolean>;
        cacheControl: z.ZodOptional<z.ZodUnion<[z.ZodObject<{
            preset: z.ZodEnum<["infinite", "one-day", "one-hour", "no-cache"]>;
        }, "strip", z.ZodTypeAny, {
            preset: "infinite" | "one-day" | "one-hour" | "no-cache";
        }, {
            preset: "infinite" | "one-day" | "one-hour" | "no-cache";
        }>, z.ZodObject<{
            maxAge: z.ZodOptional<z.ZodNumber>;
            sMaxAge: z.ZodOptional<z.ZodNumber>;
            noCache: z.ZodOptional<z.ZodBoolean>;
            noStore: z.ZodOptional<z.ZodBoolean>;
            mustRevalidate: z.ZodOptional<z.ZodBoolean>;
            proxyRevalidate: z.ZodOptional<z.ZodBoolean>;
            public: z.ZodOptional<z.ZodBoolean>;
            private: z.ZodOptional<z.ZodBoolean>;
            immutable: z.ZodOptional<z.ZodBoolean>;
            staleWhileRevalidate: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            public?: boolean | undefined;
            private?: boolean | undefined;
            noCache?: boolean | undefined;
            noStore?: boolean | undefined;
            maxAge?: number | undefined;
            sMaxAge?: number | undefined;
            mustRevalidate?: boolean | undefined;
            proxyRevalidate?: boolean | undefined;
            immutable?: boolean | undefined;
            staleWhileRevalidate?: number | undefined;
        }, {
            public?: boolean | undefined;
            private?: boolean | undefined;
            noCache?: boolean | undefined;
            noStore?: boolean | undefined;
            maxAge?: number | undefined;
            sMaxAge?: number | undefined;
            mustRevalidate?: boolean | undefined;
            proxyRevalidate?: boolean | undefined;
            immutable?: boolean | undefined;
            staleWhileRevalidate?: number | undefined;
        }>]>>;
    }, "strip", z.ZodTypeAny, {
        token: string;
        parentDirId: number | null;
        fileName: string;
        mimeType: string;
        overWriteIfExist: boolean;
        cacheControl?: {
            preset: "infinite" | "one-day" | "one-hour" | "no-cache";
        } | {
            public?: boolean | undefined;
            private?: boolean | undefined;
            noCache?: boolean | undefined;
            noStore?: boolean | undefined;
            maxAge?: number | undefined;
            sMaxAge?: number | undefined;
            mustRevalidate?: boolean | undefined;
            proxyRevalidate?: boolean | undefined;
            immutable?: boolean | undefined;
            staleWhileRevalidate?: number | undefined;
        } | undefined;
    }, {
        token: string;
        parentDirId: number | null;
        fileName: string;
        mimeType: string;
        overWriteIfExist?: boolean | undefined;
        cacheControl?: {
            preset: "infinite" | "one-day" | "one-hour" | "no-cache";
        } | {
            public?: boolean | undefined;
            private?: boolean | undefined;
            noCache?: boolean | undefined;
            noStore?: boolean | undefined;
            maxAge?: number | undefined;
            sMaxAge?: number | undefined;
            mustRevalidate?: boolean | undefined;
            proxyRevalidate?: boolean | undefined;
            immutable?: boolean | undefined;
            staleWhileRevalidate?: number | undefined;
        } | undefined;
    }>;
    confirmUpload: z.ZodObject<{
        fileId: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        fileId: number;
    }, {
        fileId: number;
    }>;
    getFileInfo: z.ZodObject<{
        token: z.ZodString;
        parentDirId: z.ZodNullable<z.ZodNumber>;
        fileName: z.ZodEffects<z.ZodString, string, string>;
    }, "strip", z.ZodTypeAny, {
        token: string;
        parentDirId: number | null;
        fileName: string;
    }, {
        token: string;
        parentDirId: number | null;
        fileName: string;
    }>;
    delete: z.ZodObject<{
        token: z.ZodString;
        fileId: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        token: string;
        fileId: number;
    }, {
        token: string;
        fileId: number;
    }>;
};
//# sourceMappingURL=fsAccessZod.d.ts.map