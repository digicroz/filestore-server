export declare const S2S: {
    dcFileStore: {
        api: {
            buckets: {
                getBuckets: {
                    query: import("@trpc/client").Resolver<import("@trpc/server").BuildProcedure<"query", {
                        _config: import("@trpc/server").RootConfig<{
                            ctx: object;
                            meta: object;
                            errorShape: any;
                            transformer: typeof import("superjson").default;
                        }>;
                        _meta: object;
                        _ctx_out: {
                            mysqlDB: import("../../_s2s/dc_file_store/prisma/dc_file_store/generatedClient/index.js").PrismaClient<{
                                transactionOptions: {
                                    isolationLevel: "Serializable";
                                };
                            }, never, import("../../_s2s/dc_file_store/prisma/dc_file_store/generatedClient/runtime/library.js").DefaultArgs>;
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
                    }, {
                        status: "error" | "success";
                        message: string;
                        result?: {
                            status: import("../../_s2s/dc_file_store/prisma/dc_file_store/generatedClient/index.js").$Enums.buckets_status;
                            bucket_id: number;
                            org_id: number;
                            bucket_name: string;
                            bucket_slug: string;
                            total_size_bytes: bigint;
                            max_size_bytes: bigint;
                            visibility: import("../../_s2s/dc_file_store/prisma/dc_file_store/generatedClient/index.js").$Enums.buckets_visibility;
                            created_by: number;
                            created_at_unix: bigint;
                            updated_at_unix: bigint;
                        }[];
                    }>>;
                };
                getPathInfo: {
                    query: import("@trpc/client").Resolver<import("@trpc/server").BuildProcedure<"query", {
                        _config: import("@trpc/server").RootConfig<{
                            ctx: object;
                            meta: object;
                            errorShape: any;
                            transformer: typeof import("superjson").default;
                        }>;
                        _meta: object;
                        _ctx_out: {
                            mysqlDB: import("../../_s2s/dc_file_store/prisma/dc_file_store/generatedClient/index.js").PrismaClient<{
                                transactionOptions: {
                                    isolationLevel: "Serializable";
                                };
                            }, never, import("../../_s2s/dc_file_store/prisma/dc_file_store/generatedClient/runtime/library.js").DefaultArgs>;
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
                    }, {
                        status: "error" | "success";
                        message: string;
                        result?: undefined;
                    } | import("@digicroz/js-kit").StdError<"leading_or_trailing_slash_not_allowed"> | import("@digicroz/js-kit").StdError<"base_dir_not_found"> | import("@digicroz/js-kit").StdError<"invalid_slug"> | import("@digicroz/js-kit").StdError<"parent_directory_not_found"> | import("@digicroz/js-kit").StdError<"dir_max_depth_5_limit_reached"> | import("@digicroz/js-kit").StdError<"slug_already_exists_in_this_location"> | import("@digicroz/js-kit").StdError<"directory_not_found"> | import("@digicroz/js-kit").StdSuccess<import("../../_s2s/dc_file_store/prisma/dc_file_store/generatedClient/index.js").Prisma.directoriesCreateManyInput>>>;
                };
                createAccessToken: {
                    mutate: import("@trpc/client").Resolver<import("@trpc/server").BuildProcedure<"mutation", {
                        _config: import("@trpc/server").RootConfig<{
                            ctx: object;
                            meta: object;
                            errorShape: any;
                            transformer: typeof import("superjson").default;
                        }>;
                        _meta: object;
                        _ctx_out: {
                            mysqlDB: import("../../_s2s/dc_file_store/prisma/dc_file_store/generatedClient/index.js").PrismaClient<{
                                transactionOptions: {
                                    isolationLevel: "Serializable";
                                };
                            }, never, import("../../_s2s/dc_file_store/prisma/dc_file_store/generatedClient/runtime/library.js").DefaultArgs>;
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
                    }, import("@digicroz/js-kit").StdError<"directory_not_found"> | import("@digicroz/js-kit").StdError<"bucket_not_found"> | import("@digicroz/js-kit").StdError<"access_token_already_exist"> | import("@digicroz/js-kit").StdError<"unknown_server_error"> | import("@digicroz/js-kit").StdSuccess<{
                        token: string;
                        tokenRecord: {
                            bucket_id: number;
                            created_by: number;
                            created_at_unix: bigint;
                            dir_id: number;
                            token_id: number;
                            token_random_code: number;
                            token_name: string;
                            token_slug: string;
                            issued_to: string;
                            expires_at_unix: bigint;
                        };
                    }>>>;
                };
            };
            users: {
                hasAccessToBucket: {
                    query: import("@trpc/client").Resolver<import("@trpc/server").BuildProcedure<"query", {
                        _config: import("@trpc/server").RootConfig<{
                            ctx: object;
                            meta: object;
                            errorShape: any;
                            transformer: typeof import("superjson").default;
                        }>;
                        _meta: object;
                        _ctx_out: {
                            mysqlDB: import("../../_s2s/dc_file_store/prisma/dc_file_store/generatedClient/index.js").PrismaClient<{
                                transactionOptions: {
                                    isolationLevel: "Serializable";
                                };
                            }, never, import("../../_s2s/dc_file_store/prisma/dc_file_store/generatedClient/runtime/library.js").DefaultArgs>;
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
                    }, {
                        status: "error" | "success";
                        message: string;
                        result?: {
                            status: import("../../_s2s/dc_file_store/prisma/dc_file_store/generatedClient/index.js").$Enums.buckets_status;
                            bucket_id: number;
                            org_id: number;
                            bucket_name: string;
                            bucket_slug: string;
                            total_size_bytes: bigint;
                            max_size_bytes: bigint;
                            visibility: import("../../_s2s/dc_file_store/prisma/dc_file_store/generatedClient/index.js").$Enums.buckets_visibility;
                            created_by: number;
                            created_at_unix: bigint;
                            updated_at_unix: bigint;
                        };
                    }>>;
                };
            };
            fsAccess: {
                getPathInfo: {
                    query: import("@trpc/client").Resolver<import("@trpc/server").BuildProcedure<"query", {
                        _config: import("@trpc/server").RootConfig<{
                            ctx: object;
                            meta: object;
                            errorShape: any;
                            transformer: typeof import("superjson").default;
                        }>;
                        _meta: object;
                        _ctx_out: {
                            mysqlDB: import("../../_s2s/dc_file_store/prisma/dc_file_store/generatedClient/index.js").PrismaClient<{
                                transactionOptions: {
                                    isolationLevel: "Serializable";
                                };
                            }, never, import("../../_s2s/dc_file_store/prisma/dc_file_store/generatedClient/runtime/library.js").DefaultArgs>;
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
                    }, import("@digicroz/js-kit").StdError<"leading_or_trailing_slash_not_allowed"> | import("@digicroz/js-kit").StdError<"base_dir_not_found"> | import("@digicroz/js-kit").StdError<"invalid_slug"> | import("@digicroz/js-kit").StdError<"parent_directory_not_found"> | import("@digicroz/js-kit").StdError<"dir_max_depth_5_limit_reached"> | import("@digicroz/js-kit").StdError<"slug_already_exists_in_this_location"> | import("@digicroz/js-kit").StdError<"directory_not_found"> | import("@digicroz/js-kit").StdSuccess<import("../../_s2s/dc_file_store/prisma/dc_file_store/generatedClient/index.js").Prisma.directoriesCreateManyInput> | import("@digicroz/js-kit").StdError<"bucket_not_found"> | import("@digicroz/js-kit").StdError<"unknown_server_error"> | import("@digicroz/js-kit").StdError<"invalid_access_key_format"> | import("@digicroz/js-kit").StdError<"token_not_found">>>;
                };
                requestUploadUrl: {
                    mutate: import("@trpc/client").Resolver<import("@trpc/server").BuildProcedure<"mutation", {
                        _config: import("@trpc/server").RootConfig<{
                            ctx: object;
                            meta: object;
                            errorShape: any;
                            transformer: typeof import("superjson").default;
                        }>;
                        _meta: object;
                        _ctx_out: {
                            mysqlDB: import("../../_s2s/dc_file_store/prisma/dc_file_store/generatedClient/index.js").PrismaClient<{
                                transactionOptions: {
                                    isolationLevel: "Serializable";
                                };
                            }, never, import("../../_s2s/dc_file_store/prisma/dc_file_store/generatedClient/runtime/library.js").DefaultArgs>;
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
                    }, import("@digicroz/js-kit").StdError<"directory_not_found"> | import("@digicroz/js-kit").StdError<"bucket_not_found"> | import("@digicroz/js-kit").StdError<"unknown_server_error"> | import("@digicroz/js-kit").StdError<"invalid_access_key_format"> | import("@digicroz/js-kit").StdError<"token_not_found"> | import("@digicroz/js-kit").StdError<"bucket_not_active"> | import("@digicroz/js-kit").StdError<"bucket_size_limit_exceeded"> | import("@digicroz/js-kit").StdError<"file_already_exists"> | import("@digicroz/js-kit").StdSuccess<{
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
                };
                confirmUpload: {
                    mutate: import("@trpc/client").Resolver<import("@trpc/server").BuildProcedure<"mutation", {
                        _config: import("@trpc/server").RootConfig<{
                            ctx: object;
                            meta: object;
                            errorShape: any;
                            transformer: typeof import("superjson").default;
                        }>;
                        _meta: object;
                        _ctx_out: {
                            mysqlDB: import("../../_s2s/dc_file_store/prisma/dc_file_store/generatedClient/index.js").PrismaClient<{
                                transactionOptions: {
                                    isolationLevel: "Serializable";
                                };
                            }, never, import("../../_s2s/dc_file_store/prisma/dc_file_store/generatedClient/runtime/library.js").DefaultArgs>;
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
                    }, import("@digicroz/js-kit").StdError<"directory_not_found"> | import("@digicroz/js-kit").StdError<"bucket_not_found"> | import("@digicroz/js-kit").StdError<"unknown_server_error"> | import("@digicroz/js-kit").StdError<"file_not_found"> | import("@digicroz/js-kit").StdError<"already_uploaded"> | import("@digicroz/js-kit").StdError<"invalid_upload_token"> | import("@digicroz/js-kit").StdError<"file_verification_failed"> | import("@digicroz/js-kit").StdSuccess<{
                        file_url: string;
                        status: import("../../_s2s/dc_file_store/prisma/dc_file_store/generatedClient/index.js").$Enums.files_status;
                        bucket_id: number;
                        created_at_unix: bigint;
                        updated_at_unix: bigint;
                        parent_dir_id: number;
                        file_id: number;
                        file_name: string;
                        file_slug: string;
                        mime_type: string;
                        size_bytes: bigint;
                        checksum_sha256: string;
                        uploaded_by: number;
                    }>>>;
                };
                getFileInfo: {
                    query: import("@trpc/client").Resolver<import("@trpc/server").BuildProcedure<"query", {
                        _config: import("@trpc/server").RootConfig<{
                            ctx: object;
                            meta: object;
                            errorShape: any;
                            transformer: typeof import("superjson").default;
                        }>;
                        _meta: object;
                        _ctx_out: {
                            mysqlDB: import("../../_s2s/dc_file_store/prisma/dc_file_store/generatedClient/index.js").PrismaClient<{
                                transactionOptions: {
                                    isolationLevel: "Serializable";
                                };
                            }, never, import("../../_s2s/dc_file_store/prisma/dc_file_store/generatedClient/runtime/library.js").DefaultArgs>;
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
                    }, import("@digicroz/js-kit").StdError<"directory_not_found"> | import("@digicroz/js-kit").StdError<"bucket_not_found"> | import("@digicroz/js-kit").StdError<"unknown_server_error"> | import("@digicroz/js-kit").StdError<"invalid_access_key_format"> | import("@digicroz/js-kit").StdError<"token_not_found"> | import("@digicroz/js-kit").StdError<"file_not_found"> | import("@digicroz/js-kit").StdSuccess<{
                        file_url: string;
                        status: import("../../_s2s/dc_file_store/prisma/dc_file_store/generatedClient/index.js").$Enums.files_status;
                        bucket_id: number;
                        created_at_unix: bigint;
                        updated_at_unix: bigint;
                        parent_dir_id: number;
                        file_id: number;
                        file_name: string;
                        file_slug: string;
                        mime_type: string;
                        size_bytes: bigint;
                        checksum_sha256: string;
                        uploaded_by: number;
                    }>>>;
                };
                delete: {
                    mutate: import("@trpc/client").Resolver<import("@trpc/server").BuildProcedure<"mutation", {
                        _config: import("@trpc/server").RootConfig<{
                            ctx: object;
                            meta: object;
                            errorShape: any;
                            transformer: typeof import("superjson").default;
                        }>;
                        _meta: object;
                        _ctx_out: {
                            mysqlDB: import("../../_s2s/dc_file_store/prisma/dc_file_store/generatedClient/index.js").PrismaClient<{
                                transactionOptions: {
                                    isolationLevel: "Serializable";
                                };
                            }, never, import("../../_s2s/dc_file_store/prisma/dc_file_store/generatedClient/runtime/library.js").DefaultArgs>;
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
                    }, import("@digicroz/js-kit").StdError<"directory_not_found"> | import("@digicroz/js-kit").StdError<"bucket_not_found"> | import("@digicroz/js-kit").StdError<"unknown_server_error"> | import("@digicroz/js-kit").StdError<"invalid_access_key_format"> | import("@digicroz/js-kit").StdError<"token_not_found"> | import("@digicroz/js-kit").StdError<"file_not_found"> | import("@digicroz/js-kit").StdSuccess<{
                        status: import("../../_s2s/dc_file_store/prisma/dc_file_store/generatedClient/index.js").$Enums.files_status;
                        bucket_id: number;
                        created_at_unix: bigint;
                        updated_at_unix: bigint;
                        parent_dir_id: number;
                        file_id: number;
                        file_name: string;
                        file_slug: string;
                        mime_type: string;
                        size_bytes: bigint;
                        checksum_sha256: string;
                        uploaded_by: number;
                    }>>>;
                };
            };
        };
        zodSchemas: {
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
                }, "strip", import("zod").ZodTypeAny, {
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
    };
};
//# sourceMappingURL=index.d.ts.map