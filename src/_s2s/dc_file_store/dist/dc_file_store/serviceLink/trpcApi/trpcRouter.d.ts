declare const router: import("express-serve-static-core").Router;
export { router as dcFileStoreServiceLinkTrpcRestRouter };
export declare const dcFileStoreServiceLinkTrpcRouter: import("@trpc/server").CreateRouterInner<import("@trpc/server").RootConfig<{
    ctx: object;
    meta: object;
    errorShape: never;
    transformer: typeof import("superjson").default;
}>, {
    buckets: import("@trpc/server").CreateRouterInner<import("@trpc/server").RootConfig<{
        ctx: object;
        meta: object;
        errorShape: never;
        transformer: typeof import("superjson").default;
    }>, {
        getBuckets: import("@trpc/server").BuildProcedure<"query", {
            _config: import("@trpc/server").RootConfig<{
                ctx: object;
                meta: object;
                errorShape: never;
                transformer: typeof import("superjson").default;
            }>;
            _meta: object;
            _ctx_out: {
                mysqlDB: import("../../../../prisma/dc_file_store/generatedClient/index.js").PrismaClient<{
                    transactionOptions: {
                        isolationLevel: "Serializable";
                    };
                }, never, import("../../../../prisma/dc_file_store/generatedClient/runtime/library.js").DefaultArgs>;
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
                orgId?: number;
            };
            _input_out: {
                orgId?: number;
            };
            _output_in: typeof import("@trpc/server").unsetMarker;
            _output_out: typeof import("@trpc/server").unsetMarker;
        }, import("@digicroz/js-kit").StdError<"unknown_server_error", undefined> | import("@digicroz/js-kit").StdSuccess<{
            status: import("../../../../prisma/dc_file_store/generatedClient/index.js").$Enums.buckets_status;
            created_at_unix: bigint;
            bucket_id: number;
            total_size_bytes: bigint;
            updated_at_unix: bigint;
            org_id: number;
            bucket_name: string;
            bucket_slug: string;
            max_size_bytes: bigint;
            visibility: import("../../../../prisma/dc_file_store/generatedClient/index.js").$Enums.buckets_visibility;
            created_by: number;
        }[]>>;
        getPathInfo: import("@trpc/server").BuildProcedure<"query", {
            _config: import("@trpc/server").RootConfig<{
                ctx: object;
                meta: object;
                errorShape: never;
                transformer: typeof import("superjson").default;
            }>;
            _meta: object;
            _ctx_out: {
                mysqlDB: import("../../../../prisma/dc_file_store/generatedClient/index.js").PrismaClient<{
                    transactionOptions: {
                        isolationLevel: "Serializable";
                    };
                }, never, import("../../../../prisma/dc_file_store/generatedClient/runtime/library.js").DefaultArgs>;
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
                bucketId?: number;
                pathInSlug?: string;
                createDirIfNotExist?: boolean;
            };
            _input_out: {
                bucketId?: number;
                pathInSlug?: string;
                createDirIfNotExist?: boolean;
            };
            _output_in: typeof import("@trpc/server").unsetMarker;
            _output_out: typeof import("@trpc/server").unsetMarker;
        }, import("@digicroz/js-kit").StdError<"unknown_server_error", undefined> | import("@digicroz/js-kit").StdError<"r2_client_not_initialized", undefined> | import("@digicroz/js-kit").StdError<"main_bucket_not_configured", undefined> | import("@digicroz/js-kit").StdError<"r2_create_directory_failed", undefined> | import("@digicroz/js-kit").StdError<"parent_directory_not_found", undefined> | import("@digicroz/js-kit").StdError<"dir_max_depth_5_limit_reached", undefined> | import("@digicroz/js-kit").StdError<"slug_already_exists_in_this_location", undefined> | import("@digicroz/js-kit").StdError<"leading_or_trailing_slash_not_allowed", undefined> | import("@digicroz/js-kit").StdError<"base_dir_not_found", undefined> | import("@digicroz/js-kit").StdError<"invalid_slug", undefined> | import("@digicroz/js-kit").StdError<"directory_not_found", undefined> | import("@digicroz/js-kit").StdSuccess<import("../../../../prisma/dc_file_store/generatedClient/index.js").Prisma.directoriesCreateManyInput> | import("@digicroz/js-kit").StdError<"bucket_not_found", undefined>>;
        createAccessToken: import("@trpc/server").BuildProcedure<"mutation", {
            _config: import("@trpc/server").RootConfig<{
                ctx: object;
                meta: object;
                errorShape: never;
                transformer: typeof import("superjson").default;
            }>;
            _meta: object;
            _ctx_out: {
                mysqlDB: import("../../../../prisma/dc_file_store/generatedClient/index.js").PrismaClient<{
                    transactionOptions: {
                        isolationLevel: "Serializable";
                    };
                }, never, import("../../../../prisma/dc_file_store/generatedClient/runtime/library.js").DefaultArgs>;
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
                userId?: number;
                bucketId?: number;
                dirId?: number;
                tokenName?: string;
                deleteIfExist?: boolean;
            };
            _input_out: {
                userId?: number;
                bucketId?: number;
                dirId?: number;
                tokenName?: string;
                deleteIfExist?: boolean;
            };
            _output_in: typeof import("@trpc/server").unsetMarker;
            _output_out: typeof import("@trpc/server").unsetMarker;
        }, import("@digicroz/js-kit").StdError<"unknown_server_error", undefined> | import("@digicroz/js-kit").StdError<"directory_not_found", undefined> | import("@digicroz/js-kit").StdError<"bucket_not_found", undefined> | import("@digicroz/js-kit").StdError<"max_depth_level_allowed_is_1", undefined> | import("@digicroz/js-kit").StdError<"access_token_already_exist", undefined> | import("@digicroz/js-kit").StdSuccess<{
            token: string;
            tokenRecord: {
                created_at_unix: bigint;
                dir_id: number;
                bucket_id: number;
                created_by: number;
                token_id: number;
                token_random_code: number;
                token_name: string;
                token_slug: string;
                issued_to: string;
                expires_at_unix: bigint;
            };
        }>>;
    }>;
    users: import("@trpc/server").CreateRouterInner<import("@trpc/server").RootConfig<{
        ctx: object;
        meta: object;
        errorShape: never;
        transformer: typeof import("superjson").default;
    }>, {
        hasAccessToBucket: import("@trpc/server").BuildProcedure<"query", {
            _config: import("@trpc/server").RootConfig<{
                ctx: object;
                meta: object;
                errorShape: never;
                transformer: typeof import("superjson").default;
            }>;
            _meta: object;
            _ctx_out: {
                mysqlDB: import("../../../../prisma/dc_file_store/generatedClient/index.js").PrismaClient<{
                    transactionOptions: {
                        isolationLevel: "Serializable";
                    };
                }, never, import("../../../../prisma/dc_file_store/generatedClient/runtime/library.js").DefaultArgs>;
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
                userId?: number;
                bucketId?: number;
            };
            _input_out: {
                userId?: number;
                bucketId?: number;
            };
            _output_in: typeof import("@trpc/server").unsetMarker;
            _output_out: typeof import("@trpc/server").unsetMarker;
        }, import("@digicroz/js-kit").StdError<"unknown_server_error", undefined> | import("@digicroz/js-kit").StdSuccess<import("@digicroz/js-kit").StdError<"user_not_found", undefined> | import("@digicroz/js-kit").StdError<"unknown_server_error", undefined> | import("@digicroz/js-kit").StdError<"bucket_not_found", undefined> | import("@digicroz/js-kit").StdSuccess<{
            status: import("../../../../prisma/dc_file_store/generatedClient/index.js").$Enums.buckets_status;
            created_at_unix: bigint;
            bucket_id: number;
            total_size_bytes: bigint;
            updated_at_unix: bigint;
            org_id: number;
            bucket_name: string;
            bucket_slug: string;
            max_size_bytes: bigint;
            visibility: import("../../../../prisma/dc_file_store/generatedClient/index.js").$Enums.buckets_visibility;
            created_by: number;
        }>>>;
    }>;
    fsAccess: import("@trpc/server").CreateRouterInner<import("@trpc/server").RootConfig<{
        ctx: object;
        meta: object;
        errorShape: never;
        transformer: typeof import("superjson").default;
    }>, {
        getPathInfo: import("@trpc/server").BuildProcedure<"query", {
            _config: import("@trpc/server").RootConfig<{
                ctx: object;
                meta: object;
                errorShape: never;
                transformer: typeof import("superjson").default;
            }>;
            _meta: object;
            _ctx_out: {
                mysqlDB: import("../../../../prisma/dc_file_store/generatedClient/index.js").PrismaClient<{
                    transactionOptions: {
                        isolationLevel: "Serializable";
                    };
                }, never, import("../../../../prisma/dc_file_store/generatedClient/runtime/library.js").DefaultArgs>;
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
        }, import("@digicroz/js-kit").StdError<"unknown_server_error", undefined> | import("@digicroz/js-kit").StdError<"r2_client_not_initialized", undefined> | import("@digicroz/js-kit").StdError<"main_bucket_not_configured", undefined> | import("@digicroz/js-kit").StdError<"r2_create_directory_failed", undefined> | import("@digicroz/js-kit").StdError<"parent_directory_not_found", undefined> | import("@digicroz/js-kit").StdError<"dir_max_depth_5_limit_reached", undefined> | import("@digicroz/js-kit").StdError<"slug_already_exists_in_this_location", undefined> | import("@digicroz/js-kit").StdError<"leading_or_trailing_slash_not_allowed", undefined> | import("@digicroz/js-kit").StdError<"base_dir_not_found", undefined> | import("@digicroz/js-kit").StdError<"invalid_slug", undefined> | import("@digicroz/js-kit").StdError<"directory_not_found", undefined> | import("@digicroz/js-kit").StdSuccess<import("../../../../prisma/dc_file_store/generatedClient/index.js").Prisma.directoriesCreateManyInput> | import("@digicroz/js-kit").StdError<"bucket_not_found", undefined> | import("@digicroz/js-kit").StdError<"invalid_access_key_format", undefined> | import("@digicroz/js-kit").StdError<"token_not_found", undefined>>;
        requestUploadUrl: import("@trpc/server").BuildProcedure<"mutation", {
            _config: import("@trpc/server").RootConfig<{
                ctx: object;
                meta: object;
                errorShape: never;
                transformer: typeof import("superjson").default;
            }>;
            _meta: object;
            _ctx_out: {
                mysqlDB: import("../../../../prisma/dc_file_store/generatedClient/index.js").PrismaClient<{
                    transactionOptions: {
                        isolationLevel: "Serializable";
                    };
                }, never, import("../../../../prisma/dc_file_store/generatedClient/runtime/library.js").DefaultArgs>;
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
            };
            _input_in: {
                token?: string;
                parentDirId?: number;
                mimeType?: string;
                fileName?: string;
                overWriteIfExist?: boolean;
                cacheControl?: {
                    preset?: "infinite" | "one-day" | "one-hour" | "no-cache";
                } | {
                    public?: boolean;
                    private?: boolean;
                    noCache?: boolean;
                    noStore?: boolean;
                    maxAge?: number;
                    sMaxAge?: number;
                    mustRevalidate?: boolean;
                    proxyRevalidate?: boolean;
                    immutable?: boolean;
                    staleWhileRevalidate?: number;
                };
            };
            _input_out: {
                token?: string;
                parentDirId?: number;
                mimeType?: string;
                fileName?: string;
                overWriteIfExist?: boolean;
                cacheControl?: {
                    preset?: "infinite" | "one-day" | "one-hour" | "no-cache";
                } | {
                    public?: boolean;
                    private?: boolean;
                    noCache?: boolean;
                    noStore?: boolean;
                    maxAge?: number;
                    sMaxAge?: number;
                    mustRevalidate?: boolean;
                    proxyRevalidate?: boolean;
                    immutable?: boolean;
                    staleWhileRevalidate?: number;
                };
            };
            _output_in: typeof import("@trpc/server").unsetMarker;
            _output_out: typeof import("@trpc/server").unsetMarker;
        }, import("@digicroz/js-kit").StdError<"unknown_server_error", undefined> | import("@digicroz/js-kit").StdError<"r2_client_not_initialized", undefined> | import("@digicroz/js-kit").StdError<"r2_generate_presigned_upload_failed", undefined> | import("@digicroz/js-kit").StdError<"directory_not_found", undefined> | import("@digicroz/js-kit").StdError<"file_already_exists", undefined> | import("@digicroz/js-kit").StdSuccess<{
            fileId: any;
            presignedUrl: string;
            method: "PUT";
            expiresIn: number;
            headers: {
                cacheControl?: string;
                contentType: string;
                contentDisposition: string;
            };
        }> | import("@digicroz/js-kit").StdError<"bucket_not_found", undefined> | import("@digicroz/js-kit").StdError<"invalid_access_key_format", undefined> | import("@digicroz/js-kit").StdError<"token_not_found", undefined> | import("@digicroz/js-kit").StdError<"bucket_not_active", undefined> | import("@digicroz/js-kit").StdError<"bucket_size_limit_exceeded", undefined>>;
        confirmUpload: import("@trpc/server").BuildProcedure<"mutation", {
            _config: import("@trpc/server").RootConfig<{
                ctx: object;
                meta: object;
                errorShape: never;
                transformer: typeof import("superjson").default;
            }>;
            _meta: object;
            _ctx_out: {
                mysqlDB: import("../../../../prisma/dc_file_store/generatedClient/index.js").PrismaClient<{
                    transactionOptions: {
                        isolationLevel: "Serializable";
                    };
                }, never, import("../../../../prisma/dc_file_store/generatedClient/runtime/library.js").DefaultArgs>;
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
            };
            _input_in: {
                fileId?: number;
            };
            _input_out: {
                fileId?: number;
            };
            _output_in: typeof import("@trpc/server").unsetMarker;
            _output_out: typeof import("@trpc/server").unsetMarker;
        }, import("@digicroz/js-kit").StdError<"unknown_server_error", undefined> | import("@digicroz/js-kit").StdError<"r2_client_not_initialized", undefined> | import("@digicroz/js-kit").StdError<"r2_get_file_details_failed", undefined> | import("@digicroz/js-kit").StdError<"directory_not_found", undefined> | import("@digicroz/js-kit").StdError<"file_not_found", undefined> | import("@digicroz/js-kit").StdError<"already_uploaded", undefined> | import("@digicroz/js-kit").StdError<"invalid_upload_token", undefined> | import("@digicroz/js-kit").StdError<"bucket_not_found", undefined> | import("@digicroz/js-kit").StdError<"file_verification_failed", undefined> | import("@digicroz/js-kit").StdSuccess<{
            file_url: string;
            status: import("../../../../prisma/dc_file_store/generatedClient/index.js").$Enums.files_status;
            created_at_unix: bigint;
            bucket_id: number;
            parent_dir_id: number;
            updated_at_unix: bigint;
            file_id: number;
            file_name: string;
            file_slug: string;
            mime_type: string;
            size_bytes: bigint;
            checksum_sha256: string;
            uploaded_by: number;
        }>>;
        getFileInfo: import("@trpc/server").BuildProcedure<"query", {
            _config: import("@trpc/server").RootConfig<{
                ctx: object;
                meta: object;
                errorShape: never;
                transformer: typeof import("superjson").default;
            }>;
            _meta: object;
            _ctx_out: {
                mysqlDB: import("../../../../prisma/dc_file_store/generatedClient/index.js").PrismaClient<{
                    transactionOptions: {
                        isolationLevel: "Serializable";
                    };
                }, never, import("../../../../prisma/dc_file_store/generatedClient/runtime/library.js").DefaultArgs>;
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
        }, import("@digicroz/js-kit").StdError<"unknown_server_error", undefined> | import("@digicroz/js-kit").StdError<"directory_not_found", undefined> | import("@digicroz/js-kit").StdError<"file_not_found", undefined> | import("@digicroz/js-kit").StdError<"bucket_not_found", undefined> | import("@digicroz/js-kit").StdSuccess<{
            file_url: string;
            status: import("../../../../prisma/dc_file_store/generatedClient/index.js").$Enums.files_status;
            created_at_unix: bigint;
            bucket_id: number;
            parent_dir_id: number;
            updated_at_unix: bigint;
            file_id: number;
            file_name: string;
            file_slug: string;
            mime_type: string;
            size_bytes: bigint;
            checksum_sha256: string;
            uploaded_by: number;
        }> | import("@digicroz/js-kit").StdError<"invalid_access_key_format", undefined> | import("@digicroz/js-kit").StdError<"token_not_found", undefined>>;
        delete: import("@trpc/server").BuildProcedure<"mutation", {
            _config: import("@trpc/server").RootConfig<{
                ctx: object;
                meta: object;
                errorShape: never;
                transformer: typeof import("superjson").default;
            }>;
            _meta: object;
            _ctx_out: {
                mysqlDB: import("../../../../prisma/dc_file_store/generatedClient/index.js").PrismaClient<{
                    transactionOptions: {
                        isolationLevel: "Serializable";
                    };
                }, never, import("../../../../prisma/dc_file_store/generatedClient/runtime/library.js").DefaultArgs>;
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
        }, import("@digicroz/js-kit").StdError<"unknown_server_error", undefined> | import("@digicroz/js-kit").StdError<"directory_not_found", undefined> | import("@digicroz/js-kit").StdError<"file_not_found", undefined> | import("@digicroz/js-kit").StdError<"bucket_not_found", undefined> | import("@digicroz/js-kit").StdSuccess<{
            status: import("../../../../prisma/dc_file_store/generatedClient/index.js").$Enums.files_status;
            created_at_unix: bigint;
            bucket_id: number;
            parent_dir_id: number;
            updated_at_unix: bigint;
            file_id: number;
            file_name: string;
            file_slug: string;
            mime_type: string;
            size_bytes: bigint;
            checksum_sha256: string;
            uploaded_by: number;
        }> | import("@digicroz/js-kit").StdError<"invalid_access_key_format", undefined> | import("@digicroz/js-kit").StdError<"token_not_found", undefined>>;
    }>;
}>;
export type serviceLinkTrpcRouterTypes = typeof dcFileStoreServiceLinkTrpcRouter;
