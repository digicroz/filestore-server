export declare const serviceLinkZodSchemas: {
    buckets: {
        getBuckets: import("zod").ZodObject<{
            orgId: import("zod").ZodNumber;
        }, "strip", import("zod").ZodTypeAny, {
            orgId: number;
        }, {
            orgId: number;
        }>;
        getPathInfo: import("zod").ZodObject<{
            bucketId: import("zod").ZodNumber;
            pathInSlug: import("zod").ZodString;
            createDirIfNotExist: import("zod").ZodDefault<import("zod").ZodOptional<import("zod").ZodBoolean>>;
        }, "strip", import("zod").ZodTypeAny, {
            bucketId: number;
            pathInSlug: string;
            createDirIfNotExist: boolean;
        }, {
            bucketId: number;
            pathInSlug: string;
            createDirIfNotExist?: boolean | undefined;
        }>;
        createAccessToken: import("zod").ZodObject<{
            bucketId: import("zod").ZodNumber;
            dirId: import("zod").ZodNumber;
            userId: import("zod").ZodNumber;
            tokenName: import("zod").ZodString;
            deleteIfExist: import("zod").ZodDefault<import("zod").ZodOptional<import("zod").ZodBoolean>>;
        }, "strip", import("zod").ZodTypeAny, {
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
    users: {
        hasAccessToBucket: import("zod").ZodObject<{
            userId: import("zod").ZodNumber;
            bucketId: import("zod").ZodNumber;
        }, "strip", import("zod").ZodTypeAny, {
            bucketId: number;
            userId: number;
        }, {
            bucketId: number;
            userId: number;
        }>;
    };
    fsAccess: {
        getPathInfo: import("zod").ZodObject<{
            token: import("zod").ZodString;
            pathInSlug: import("zod").ZodString;
            createDirIfNotExist: import("zod").ZodDefault<import("zod").ZodOptional<import("zod").ZodBoolean>>;
        }, "strip", import("zod").ZodTypeAny, {
            pathInSlug: string;
            createDirIfNotExist: boolean;
            token: string;
        }, {
            pathInSlug: string;
            token: string;
            createDirIfNotExist?: boolean | undefined;
        }>;
        requestUploadUrl: import("zod").ZodObject<{
            token: import("zod").ZodString;
            parentDirId: import("zod").ZodNullable<import("zod").ZodNumber>;
            fileName: import("zod").ZodEffects<import("zod").ZodString, string, string>;
            mimeType: import("zod").ZodString;
            overWriteIfExist: import("zod").ZodDefault<import("zod").ZodBoolean>;
            cacheControl: import("zod").ZodOptional<import("zod").ZodUnion<[import("zod").ZodObject<{
                preset: import("zod").ZodEnum<["infinite", "one-day", "one-hour", "no-cache"]>;
            }, "strip", import("zod").ZodTypeAny, {
                preset: "infinite" | "one-day" | "one-hour" | "no-cache";
            }, {
                preset: "infinite" | "one-day" | "one-hour" | "no-cache";
            }>, import("zod").ZodObject<{
                maxAge: import("zod").ZodOptional<import("zod").ZodNumber>;
                sMaxAge: import("zod").ZodOptional<import("zod").ZodNumber>;
                noCache: import("zod").ZodOptional<import("zod").ZodBoolean>;
                noStore: import("zod").ZodOptional<import("zod").ZodBoolean>;
                mustRevalidate: import("zod").ZodOptional<import("zod").ZodBoolean>;
                proxyRevalidate: import("zod").ZodOptional<import("zod").ZodBoolean>;
                public: import("zod").ZodOptional<import("zod").ZodBoolean>;
                private: import("zod").ZodOptional<import("zod").ZodBoolean>;
                immutable: import("zod").ZodOptional<import("zod").ZodBoolean>;
                staleWhileRevalidate: import("zod").ZodOptional<import("zod").ZodNumber>;
            }, "strip", import("zod").ZodTypeAny, {
                maxAge?: number | undefined;
                sMaxAge?: number | undefined;
                noCache?: boolean | undefined;
                noStore?: boolean | undefined;
                mustRevalidate?: boolean | undefined;
                proxyRevalidate?: boolean | undefined;
                public?: boolean | undefined;
                private?: boolean | undefined;
                immutable?: boolean | undefined;
                staleWhileRevalidate?: number | undefined;
            }, {
                maxAge?: number | undefined;
                sMaxAge?: number | undefined;
                noCache?: boolean | undefined;
                noStore?: boolean | undefined;
                mustRevalidate?: boolean | undefined;
                proxyRevalidate?: boolean | undefined;
                public?: boolean | undefined;
                private?: boolean | undefined;
                immutable?: boolean | undefined;
                staleWhileRevalidate?: number | undefined;
            }>]>>;
        }, "strip", import("zod").ZodTypeAny, {
            token: string;
            parentDirId: number | null;
            fileName: string;
            mimeType: string;
            overWriteIfExist: boolean;
            cacheControl?: {
                preset: "infinite" | "one-day" | "one-hour" | "no-cache";
            } | {
                maxAge?: number | undefined;
                sMaxAge?: number | undefined;
                noCache?: boolean | undefined;
                noStore?: boolean | undefined;
                mustRevalidate?: boolean | undefined;
                proxyRevalidate?: boolean | undefined;
                public?: boolean | undefined;
                private?: boolean | undefined;
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
                maxAge?: number | undefined;
                sMaxAge?: number | undefined;
                noCache?: boolean | undefined;
                noStore?: boolean | undefined;
                mustRevalidate?: boolean | undefined;
                proxyRevalidate?: boolean | undefined;
                public?: boolean | undefined;
                private?: boolean | undefined;
                immutable?: boolean | undefined;
                staleWhileRevalidate?: number | undefined;
            } | undefined;
        }>;
        confirmUpload: import("zod").ZodObject<{
            fileId: import("zod").ZodNumber;
        }, "strip", import("zod").ZodTypeAny, {
            fileId: number;
        }, {
            fileId: number;
        }>;
        getFileInfo: import("zod").ZodObject<{
            token: import("zod").ZodString;
            parentDirId: import("zod").ZodNullable<import("zod").ZodNumber>;
            fileName: import("zod").ZodEffects<import("zod").ZodString, string, string>;
        }, "strip", import("zod").ZodTypeAny, {
            token: string;
            parentDirId: number | null;
            fileName: string;
        }, {
            token: string;
            parentDirId: number | null;
            fileName: string;
        }>;
        delete: import("zod").ZodObject<{
            token: import("zod").ZodString;
            fileId: import("zod").ZodNumber;
        }, "strip", import("zod").ZodTypeAny, {
            token: string;
            fileId: number;
        }, {
            token: string;
            fileId: number;
        }>;
    };
};
//# sourceMappingURL=zodSchemas.d.ts.map