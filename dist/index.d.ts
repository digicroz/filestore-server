export type { TCacheControl } from "@dcFileStoreProjectB2f/helpers/fileCache.js";
export type { TDcFileStoreInput, TDcFileStoreOutput } from "./helpers/s2s/dcFileStoreS2S.js";
export { dcFileStoreZodSchemas } from "./helpers/s2s/dcFileStoreS2S.js";
export declare const getPathInfo: import("@trpc/client").Resolver<import("@trpc/server").BuildProcedure<"query", {
    _config: import("@trpc/server").RootConfig<{
        ctx: object;
        meta: object;
        errorShape: never;
        transformer: typeof import("superjson").default;
    }>;
    _meta: object;
    _ctx_out: {
        mysqlDB: import("./_s2s/dc_file_store/prisma/dc_file_store/generatedClient/index.js").PrismaClient<{
            transactionOptions: {
                isolationLevel: "Serializable";
            };
        }, never, import("./_s2s/dc_file_store/prisma/dc_file_store/generatedClient/runtime/library.js").DefaultArgs>;
        redisDB: import("@digicroz/node-backend-utils").RedisGenericClient<"games:*" | "games:webApp:list" | "games:webApp:count:activeContests" | "games:webApp:count:activeChallenges" | "user:*" | "notify:carousels:webApp:list" | "notify:announcements:*" | `contest:${number}:details` | `user:${number}:*` | `user:${number}:session:*` | `user:${number}:session:${number}` | `notify:announcements:webApp:list:take:${number}`>;
        redisKeys: {
            readonly games: {
                readonly _pattern: "games:*";
                readonly webApp: {
                    readonly list: "games:webApp:list";
                    readonly count: {
                        readonly activeContests: "games:webApp:count:activeContests";
                        readonly activeChallenges: "games:webApp:count:activeChallenges";
                    };
                };
            };
            readonly contests: {
                readonly details: (contestId: number) => `contest:${number}:details`;
            };
            readonly users: {
                readonly _pattern: "user:*";
                readonly user: {
                    readonly _pattern: (userId: number) => `user:${number}:*`;
                    readonly sessions: {
                        readonly _pattern: (userId: number) => `user:${number}:session:*`;
                        readonly session: (userId: number, refreshTokenId: number) => `user:${number}:session:${number}`;
                    };
                };
            };
            readonly notify: {
                readonly carousels: {
                    readonly webApp: {
                        readonly list: "notify:carousels:webApp:list";
                    };
                };
                readonly announcements: {
                    readonly _pattern: "notify:announcements:*";
                    readonly webApp: {
                        readonly list: {
                            readonly take: (take: number) => `notify:announcements:webApp:list:take:${number}`;
                        };
                    };
                };
            };
        };
        payload: {
            serviceSlug: string;
            serviceName: string;
        };
    };
    _input_in: {
        token?: string;
        pathInSlug?: string;
        createDirIfNotExist?: boolean;
    };
    _input_out: {
        token?: string;
        pathInSlug?: string;
        createDirIfNotExist?: boolean;
    };
    _output_in: typeof import("@trpc/server").unsetMarker;
    _output_out: typeof import("@trpc/server").unsetMarker;
}, import("@digicroz/js-kit").StdError<"unknown_server_error"> | import("@digicroz/js-kit").StdError<"invalid_access_key_format"> | import("@digicroz/js-kit").StdError<"token_not_found"> | import("@digicroz/js-kit").StdError<"bucket_not_found"> | import("@digicroz/js-kit").StdError<"leading_or_trailing_slash_not_allowed"> | import("@digicroz/js-kit").StdError<"base_dir_not_found"> | import("@digicroz/js-kit").StdError<"invalid_slug"> | import("@digicroz/js-kit").StdError<"parent_directory_not_found"> | import("@digicroz/js-kit").StdError<"dir_max_depth_5_limit_reached"> | import("@digicroz/js-kit").StdError<"slug_already_exists_in_this_location"> | import("@digicroz/js-kit").StdError<"directory_not_found"> | import("@digicroz/js-kit").StdSuccess<import("./_s2s/dc_file_store/prisma/dc_file_store/generatedClient/index.js").Prisma.directoriesCreateManyInput>>>;
export declare const getFileInfo: import("@trpc/client").Resolver<import("@trpc/server").BuildProcedure<"query", {
    _config: import("@trpc/server").RootConfig<{
        ctx: object;
        meta: object;
        errorShape: never;
        transformer: typeof import("superjson").default;
    }>;
    _meta: object;
    _ctx_out: {
        mysqlDB: import("./_s2s/dc_file_store/prisma/dc_file_store/generatedClient/index.js").PrismaClient<{
            transactionOptions: {
                isolationLevel: "Serializable";
            };
        }, never, import("./_s2s/dc_file_store/prisma/dc_file_store/generatedClient/runtime/library.js").DefaultArgs>;
        redisDB: import("@digicroz/node-backend-utils").RedisGenericClient<"games:*" | "games:webApp:list" | "games:webApp:count:activeContests" | "games:webApp:count:activeChallenges" | "user:*" | "notify:carousels:webApp:list" | "notify:announcements:*" | `contest:${number}:details` | `user:${number}:*` | `user:${number}:session:*` | `user:${number}:session:${number}` | `notify:announcements:webApp:list:take:${number}`>;
        redisKeys: {
            readonly games: {
                readonly _pattern: "games:*";
                readonly webApp: {
                    readonly list: "games:webApp:list";
                    readonly count: {
                        readonly activeContests: "games:webApp:count:activeContests";
                        readonly activeChallenges: "games:webApp:count:activeChallenges";
                    };
                };
            };
            readonly contests: {
                readonly details: (contestId: number) => `contest:${number}:details`;
            };
            readonly users: {
                readonly _pattern: "user:*";
                readonly user: {
                    readonly _pattern: (userId: number) => `user:${number}:*`;
                    readonly sessions: {
                        readonly _pattern: (userId: number) => `user:${number}:session:*`;
                        readonly session: (userId: number, refreshTokenId: number) => `user:${number}:session:${number}`;
                    };
                };
            };
            readonly notify: {
                readonly carousels: {
                    readonly webApp: {
                        readonly list: "notify:carousels:webApp:list";
                    };
                };
                readonly announcements: {
                    readonly _pattern: "notify:announcements:*";
                    readonly webApp: {
                        readonly list: {
                            readonly take: (take: number) => `notify:announcements:webApp:list:take:${number}`;
                        };
                    };
                };
            };
        };
        payload: {
            serviceSlug: string;
            serviceName: string;
        };
    };
    _input_in: {
        token?: string;
        parentDirId?: number;
        fileName?: string;
    };
    _input_out: {
        token?: string;
        parentDirId?: number;
        fileName?: string;
    };
    _output_in: typeof import("@trpc/server").unsetMarker;
    _output_out: typeof import("@trpc/server").unsetMarker;
}, import("@digicroz/js-kit").StdError<"unknown_server_error"> | import("@digicroz/js-kit").StdError<"invalid_access_key_format"> | import("@digicroz/js-kit").StdError<"token_not_found"> | import("@digicroz/js-kit").StdError<"bucket_not_found"> | import("@digicroz/js-kit").StdError<"directory_not_found"> | import("@digicroz/js-kit").StdError<"file_not_found"> | import("@digicroz/js-kit").StdSuccess<{
    file_url: string;
    status: import("./_s2s/dc_file_store/prisma/dc_file_store/generatedClient/index.js").$Enums.files_status;
    bucket_id: number;
    parent_dir_id: number;
    created_at_unix: bigint;
    updated_at_unix: bigint;
    file_id: number;
    file_name: string;
    file_slug: string;
    mime_type: string;
    size_bytes: bigint;
    checksum_sha256: string;
    uploaded_by: number;
}>>>;
export declare const requestUploadUrl: import("@trpc/client").Resolver<import("@trpc/server").BuildProcedure<"mutation", {
    _config: import("@trpc/server").RootConfig<{
        ctx: object;
        meta: object;
        errorShape: never;
        transformer: typeof import("superjson").default;
    }>;
    _meta: object;
    _ctx_out: {
        mysqlDB: import("./_s2s/dc_file_store/prisma/dc_file_store/generatedClient/index.js").PrismaClient<{
            transactionOptions: {
                isolationLevel: "Serializable";
            };
        }, never, import("./_s2s/dc_file_store/prisma/dc_file_store/generatedClient/runtime/library.js").DefaultArgs>;
        redisDB: import("@digicroz/node-backend-utils").RedisGenericClient<"games:*" | "games:webApp:list" | "games:webApp:count:activeContests" | "games:webApp:count:activeChallenges" | "user:*" | "notify:carousels:webApp:list" | "notify:announcements:*" | `contest:${number}:details` | `user:${number}:*` | `user:${number}:session:*` | `user:${number}:session:${number}` | `notify:announcements:webApp:list:take:${number}`>;
        redisKeys: {
            readonly games: {
                readonly _pattern: "games:*";
                readonly webApp: {
                    readonly list: "games:webApp:list";
                    readonly count: {
                        readonly activeContests: "games:webApp:count:activeContests";
                        readonly activeChallenges: "games:webApp:count:activeChallenges";
                    };
                };
            };
            readonly contests: {
                readonly details: (contestId: number) => `contest:${number}:details`;
            };
            readonly users: {
                readonly _pattern: "user:*";
                readonly user: {
                    readonly _pattern: (userId: number) => `user:${number}:*`;
                    readonly sessions: {
                        readonly _pattern: (userId: number) => `user:${number}:session:*`;
                        readonly session: (userId: number, refreshTokenId: number) => `user:${number}:session:${number}`;
                    };
                };
            };
            readonly notify: {
                readonly carousels: {
                    readonly webApp: {
                        readonly list: "notify:carousels:webApp:list";
                    };
                };
                readonly announcements: {
                    readonly _pattern: "notify:announcements:*";
                    readonly webApp: {
                        readonly list: {
                            readonly take: (take: number) => `notify:announcements:webApp:list:take:${number}`;
                        };
                    };
                };
            };
        };
        payload: {
            serviceSlug: string;
            serviceName: string;
        };
    };
    _input_in: {
        token?: string;
        parentDirId?: number;
        fileName?: string;
        mimeType?: string;
        overWriteIfExist?: boolean;
        cacheControl?: {
            preset?: "infinite" | "one-day" | "one-hour" | "no-cache";
        } | {
            maxAge?: number;
            sMaxAge?: number;
            noCache?: boolean;
            noStore?: boolean;
            mustRevalidate?: boolean;
            proxyRevalidate?: boolean;
            public?: boolean;
            private?: boolean;
            immutable?: boolean;
            staleWhileRevalidate?: number;
        };
    };
    _input_out: {
        token?: string;
        parentDirId?: number;
        fileName?: string;
        mimeType?: string;
        overWriteIfExist?: boolean;
        cacheControl?: {
            preset?: "infinite" | "one-day" | "one-hour" | "no-cache";
        } | {
            maxAge?: number;
            sMaxAge?: number;
            noCache?: boolean;
            noStore?: boolean;
            mustRevalidate?: boolean;
            proxyRevalidate?: boolean;
            public?: boolean;
            private?: boolean;
            immutable?: boolean;
            staleWhileRevalidate?: number;
        };
    };
    _output_in: typeof import("@trpc/server").unsetMarker;
    _output_out: typeof import("@trpc/server").unsetMarker;
}, import("@digicroz/js-kit").StdError<"unknown_server_error"> | import("@digicroz/js-kit").StdError<"invalid_access_key_format"> | import("@digicroz/js-kit").StdError<"token_not_found"> | import("@digicroz/js-kit").StdError<"bucket_not_found"> | import("@digicroz/js-kit").StdError<"directory_not_found"> | import("@digicroz/js-kit").StdError<"bucket_not_active"> | import("@digicroz/js-kit").StdError<"bucket_size_limit_exceeded"> | import("@digicroz/js-kit").StdError<"file_already_exists"> | import("@digicroz/js-kit").StdSuccess<{
    fileId: any;
    presignedUrl: string;
    method: "PUT";
    expiresIn: number;
    headers: {
        contentType: string;
        contentDisposition: string;
        cacheControl?: string;
    };
}>>>;
export declare const confirmUpload: import("@trpc/client").Resolver<import("@trpc/server").BuildProcedure<"mutation", {
    _config: import("@trpc/server").RootConfig<{
        ctx: object;
        meta: object;
        errorShape: never;
        transformer: typeof import("superjson").default;
    }>;
    _meta: object;
    _ctx_out: {
        mysqlDB: import("./_s2s/dc_file_store/prisma/dc_file_store/generatedClient/index.js").PrismaClient<{
            transactionOptions: {
                isolationLevel: "Serializable";
            };
        }, never, import("./_s2s/dc_file_store/prisma/dc_file_store/generatedClient/runtime/library.js").DefaultArgs>;
        redisDB: import("@digicroz/node-backend-utils").RedisGenericClient<"games:*" | "games:webApp:list" | "games:webApp:count:activeContests" | "games:webApp:count:activeChallenges" | "user:*" | "notify:carousels:webApp:list" | "notify:announcements:*" | `contest:${number}:details` | `user:${number}:*` | `user:${number}:session:*` | `user:${number}:session:${number}` | `notify:announcements:webApp:list:take:${number}`>;
        redisKeys: {
            readonly games: {
                readonly _pattern: "games:*";
                readonly webApp: {
                    readonly list: "games:webApp:list";
                    readonly count: {
                        readonly activeContests: "games:webApp:count:activeContests";
                        readonly activeChallenges: "games:webApp:count:activeChallenges";
                    };
                };
            };
            readonly contests: {
                readonly details: (contestId: number) => `contest:${number}:details`;
            };
            readonly users: {
                readonly _pattern: "user:*";
                readonly user: {
                    readonly _pattern: (userId: number) => `user:${number}:*`;
                    readonly sessions: {
                        readonly _pattern: (userId: number) => `user:${number}:session:*`;
                        readonly session: (userId: number, refreshTokenId: number) => `user:${number}:session:${number}`;
                    };
                };
            };
            readonly notify: {
                readonly carousels: {
                    readonly webApp: {
                        readonly list: "notify:carousels:webApp:list";
                    };
                };
                readonly announcements: {
                    readonly _pattern: "notify:announcements:*";
                    readonly webApp: {
                        readonly list: {
                            readonly take: (take: number) => `notify:announcements:webApp:list:take:${number}`;
                        };
                    };
                };
            };
        };
        payload: {
            serviceSlug: string;
            serviceName: string;
        };
    };
    _input_in: {
        fileId?: number;
    };
    _input_out: {
        fileId?: number;
    };
    _output_in: typeof import("@trpc/server").unsetMarker;
    _output_out: typeof import("@trpc/server").unsetMarker;
}, import("@digicroz/js-kit").StdError<"unknown_server_error"> | import("@digicroz/js-kit").StdError<"bucket_not_found"> | import("@digicroz/js-kit").StdError<"directory_not_found"> | import("@digicroz/js-kit").StdError<"file_not_found"> | import("@digicroz/js-kit").StdError<"already_uploaded"> | import("@digicroz/js-kit").StdError<"invalid_upload_token"> | import("@digicroz/js-kit").StdError<"file_verification_failed"> | import("@digicroz/js-kit").StdSuccess<{
    file_url: string;
    status: import("./_s2s/dc_file_store/prisma/dc_file_store/generatedClient/index.js").$Enums.files_status;
    bucket_id: number;
    parent_dir_id: number;
    created_at_unix: bigint;
    updated_at_unix: bigint;
    file_id: number;
    file_name: string;
    file_slug: string;
    mime_type: string;
    size_bytes: bigint;
    checksum_sha256: string;
    uploaded_by: number;
}>>>;
export declare const deleteFile: import("@trpc/client").Resolver<import("@trpc/server").BuildProcedure<"mutation", {
    _config: import("@trpc/server").RootConfig<{
        ctx: object;
        meta: object;
        errorShape: never;
        transformer: typeof import("superjson").default;
    }>;
    _meta: object;
    _ctx_out: {
        mysqlDB: import("./_s2s/dc_file_store/prisma/dc_file_store/generatedClient/index.js").PrismaClient<{
            transactionOptions: {
                isolationLevel: "Serializable";
            };
        }, never, import("./_s2s/dc_file_store/prisma/dc_file_store/generatedClient/runtime/library.js").DefaultArgs>;
        redisDB: import("@digicroz/node-backend-utils").RedisGenericClient<"games:*" | "games:webApp:list" | "games:webApp:count:activeContests" | "games:webApp:count:activeChallenges" | "user:*" | "notify:carousels:webApp:list" | "notify:announcements:*" | `contest:${number}:details` | `user:${number}:*` | `user:${number}:session:*` | `user:${number}:session:${number}` | `notify:announcements:webApp:list:take:${number}`>;
        redisKeys: {
            readonly games: {
                readonly _pattern: "games:*";
                readonly webApp: {
                    readonly list: "games:webApp:list";
                    readonly count: {
                        readonly activeContests: "games:webApp:count:activeContests";
                        readonly activeChallenges: "games:webApp:count:activeChallenges";
                    };
                };
            };
            readonly contests: {
                readonly details: (contestId: number) => `contest:${number}:details`;
            };
            readonly users: {
                readonly _pattern: "user:*";
                readonly user: {
                    readonly _pattern: (userId: number) => `user:${number}:*`;
                    readonly sessions: {
                        readonly _pattern: (userId: number) => `user:${number}:session:*`;
                        readonly session: (userId: number, refreshTokenId: number) => `user:${number}:session:${number}`;
                    };
                };
            };
            readonly notify: {
                readonly carousels: {
                    readonly webApp: {
                        readonly list: "notify:carousels:webApp:list";
                    };
                };
                readonly announcements: {
                    readonly _pattern: "notify:announcements:*";
                    readonly webApp: {
                        readonly list: {
                            readonly take: (take: number) => `notify:announcements:webApp:list:take:${number}`;
                        };
                    };
                };
            };
        };
        payload: {
            serviceSlug: string;
            serviceName: string;
        };
    };
    _input_in: {
        token?: string;
        fileId?: number;
    };
    _input_out: {
        token?: string;
        fileId?: number;
    };
    _output_in: typeof import("@trpc/server").unsetMarker;
    _output_out: typeof import("@trpc/server").unsetMarker;
}, import("@digicroz/js-kit").StdError<"unknown_server_error"> | import("@digicroz/js-kit").StdError<"invalid_access_key_format"> | import("@digicroz/js-kit").StdError<"token_not_found"> | import("@digicroz/js-kit").StdError<"bucket_not_found"> | import("@digicroz/js-kit").StdError<"directory_not_found"> | import("@digicroz/js-kit").StdError<"file_not_found"> | import("@digicroz/js-kit").StdSuccess<{
    status: import("./_s2s/dc_file_store/prisma/dc_file_store/generatedClient/index.js").$Enums.files_status;
    bucket_id: number;
    parent_dir_id: number;
    created_at_unix: bigint;
    updated_at_unix: bigint;
    file_id: number;
    file_name: string;
    file_slug: string;
    mime_type: string;
    size_bytes: bigint;
    checksum_sha256: string;
    uploaded_by: number;
}>>>;
//# sourceMappingURL=index.d.ts.map