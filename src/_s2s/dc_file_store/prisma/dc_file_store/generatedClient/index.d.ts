
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model user_sessions
 * 
 */
export type user_sessions = $Result.DefaultSelection<Prisma.$user_sessionsPayload>
/**
 * Model buckets
 * 
 */
export type buckets = $Result.DefaultSelection<Prisma.$bucketsPayload>
/**
 * Model directories
 * 
 */
export type directories = $Result.DefaultSelection<Prisma.$directoriesPayload>
/**
 * Model files
 * 
 */
export type files = $Result.DefaultSelection<Prisma.$filesPayload>
/**
 * Model fs_access_tokens
 * 
 */
export type fs_access_tokens = $Result.DefaultSelection<Prisma.$fs_access_tokensPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const buckets_visibility: {
  private: 'private',
  public: 'public'
};

export type buckets_visibility = (typeof buckets_visibility)[keyof typeof buckets_visibility]


export const files_status: {
  pending: 'pending',
  uploaded: 'uploaded',
  deleted: 'deleted'
};

export type files_status = (typeof files_status)[keyof typeof files_status]


export const buckets_status: {
  pending: 'pending',
  active: 'active',
  deleted: 'deleted'
};

export type buckets_status = (typeof buckets_status)[keyof typeof buckets_status]

}

export type buckets_visibility = $Enums.buckets_visibility

export const buckets_visibility: typeof $Enums.buckets_visibility

export type files_status = $Enums.files_status

export const files_status: typeof $Enums.files_status

export type buckets_status = $Enums.buckets_status

export const buckets_status: typeof $Enums.buckets_status

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more User_sessions
 * const user_sessions = await prisma.user_sessions.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more User_sessions
   * const user_sessions = await prisma.user_sessions.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Executes a typed SQL query and returns a typed result
   * @example
   * ```
   * import { myQuery } from '@prisma/client/sql'
   * 
   * const result = await prisma.$queryRawTyped(myQuery())
   * ```
   */
  $queryRawTyped<T>(typedSql: runtime.TypedSql<unknown[], T>): Prisma.PrismaPromise<T[]>

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user_sessions`: Exposes CRUD operations for the **user_sessions** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more User_sessions
    * const user_sessions = await prisma.user_sessions.findMany()
    * ```
    */
  get user_sessions(): Prisma.user_sessionsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.buckets`: Exposes CRUD operations for the **buckets** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Buckets
    * const buckets = await prisma.buckets.findMany()
    * ```
    */
  get buckets(): Prisma.bucketsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.directories`: Exposes CRUD operations for the **directories** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Directories
    * const directories = await prisma.directories.findMany()
    * ```
    */
  get directories(): Prisma.directoriesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.files`: Exposes CRUD operations for the **files** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Files
    * const files = await prisma.files.findMany()
    * ```
    */
  get files(): Prisma.filesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.fs_access_tokens`: Exposes CRUD operations for the **fs_access_tokens** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Fs_access_tokens
    * const fs_access_tokens = await prisma.fs_access_tokens.findMany()
    * ```
    */
  get fs_access_tokens(): Prisma.fs_access_tokensDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.16.2
   * Query Engine version: 1c57fdcd7e44b29b9313256c76699e91c3ac3c43
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    user_sessions: 'user_sessions',
    buckets: 'buckets',
    directories: 'directories',
    files: 'files',
    fs_access_tokens: 'fs_access_tokens'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user_sessions" | "buckets" | "directories" | "files" | "fs_access_tokens"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      user_sessions: {
        payload: Prisma.$user_sessionsPayload<ExtArgs>
        fields: Prisma.user_sessionsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.user_sessionsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_sessionsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.user_sessionsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_sessionsPayload>
          }
          findFirst: {
            args: Prisma.user_sessionsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_sessionsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.user_sessionsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_sessionsPayload>
          }
          findMany: {
            args: Prisma.user_sessionsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_sessionsPayload>[]
          }
          create: {
            args: Prisma.user_sessionsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_sessionsPayload>
          }
          createMany: {
            args: Prisma.user_sessionsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.user_sessionsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_sessionsPayload>
          }
          update: {
            args: Prisma.user_sessionsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_sessionsPayload>
          }
          deleteMany: {
            args: Prisma.user_sessionsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.user_sessionsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.user_sessionsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_sessionsPayload>
          }
          aggregate: {
            args: Prisma.User_sessionsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser_sessions>
          }
          groupBy: {
            args: Prisma.user_sessionsGroupByArgs<ExtArgs>
            result: $Utils.Optional<User_sessionsGroupByOutputType>[]
          }
          count: {
            args: Prisma.user_sessionsCountArgs<ExtArgs>
            result: $Utils.Optional<User_sessionsCountAggregateOutputType> | number
          }
        }
      }
      buckets: {
        payload: Prisma.$bucketsPayload<ExtArgs>
        fields: Prisma.bucketsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.bucketsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bucketsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.bucketsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bucketsPayload>
          }
          findFirst: {
            args: Prisma.bucketsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bucketsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.bucketsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bucketsPayload>
          }
          findMany: {
            args: Prisma.bucketsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bucketsPayload>[]
          }
          create: {
            args: Prisma.bucketsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bucketsPayload>
          }
          createMany: {
            args: Prisma.bucketsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.bucketsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bucketsPayload>
          }
          update: {
            args: Prisma.bucketsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bucketsPayload>
          }
          deleteMany: {
            args: Prisma.bucketsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.bucketsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.bucketsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bucketsPayload>
          }
          aggregate: {
            args: Prisma.BucketsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBuckets>
          }
          groupBy: {
            args: Prisma.bucketsGroupByArgs<ExtArgs>
            result: $Utils.Optional<BucketsGroupByOutputType>[]
          }
          count: {
            args: Prisma.bucketsCountArgs<ExtArgs>
            result: $Utils.Optional<BucketsCountAggregateOutputType> | number
          }
        }
      }
      directories: {
        payload: Prisma.$directoriesPayload<ExtArgs>
        fields: Prisma.directoriesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.directoriesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$directoriesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.directoriesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$directoriesPayload>
          }
          findFirst: {
            args: Prisma.directoriesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$directoriesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.directoriesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$directoriesPayload>
          }
          findMany: {
            args: Prisma.directoriesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$directoriesPayload>[]
          }
          create: {
            args: Prisma.directoriesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$directoriesPayload>
          }
          createMany: {
            args: Prisma.directoriesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.directoriesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$directoriesPayload>
          }
          update: {
            args: Prisma.directoriesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$directoriesPayload>
          }
          deleteMany: {
            args: Prisma.directoriesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.directoriesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.directoriesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$directoriesPayload>
          }
          aggregate: {
            args: Prisma.DirectoriesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDirectories>
          }
          groupBy: {
            args: Prisma.directoriesGroupByArgs<ExtArgs>
            result: $Utils.Optional<DirectoriesGroupByOutputType>[]
          }
          count: {
            args: Prisma.directoriesCountArgs<ExtArgs>
            result: $Utils.Optional<DirectoriesCountAggregateOutputType> | number
          }
        }
      }
      files: {
        payload: Prisma.$filesPayload<ExtArgs>
        fields: Prisma.filesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.filesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$filesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.filesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$filesPayload>
          }
          findFirst: {
            args: Prisma.filesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$filesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.filesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$filesPayload>
          }
          findMany: {
            args: Prisma.filesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$filesPayload>[]
          }
          create: {
            args: Prisma.filesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$filesPayload>
          }
          createMany: {
            args: Prisma.filesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.filesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$filesPayload>
          }
          update: {
            args: Prisma.filesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$filesPayload>
          }
          deleteMany: {
            args: Prisma.filesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.filesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.filesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$filesPayload>
          }
          aggregate: {
            args: Prisma.FilesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFiles>
          }
          groupBy: {
            args: Prisma.filesGroupByArgs<ExtArgs>
            result: $Utils.Optional<FilesGroupByOutputType>[]
          }
          count: {
            args: Prisma.filesCountArgs<ExtArgs>
            result: $Utils.Optional<FilesCountAggregateOutputType> | number
          }
        }
      }
      fs_access_tokens: {
        payload: Prisma.$fs_access_tokensPayload<ExtArgs>
        fields: Prisma.fs_access_tokensFieldRefs
        operations: {
          findUnique: {
            args: Prisma.fs_access_tokensFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$fs_access_tokensPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.fs_access_tokensFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$fs_access_tokensPayload>
          }
          findFirst: {
            args: Prisma.fs_access_tokensFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$fs_access_tokensPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.fs_access_tokensFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$fs_access_tokensPayload>
          }
          findMany: {
            args: Prisma.fs_access_tokensFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$fs_access_tokensPayload>[]
          }
          create: {
            args: Prisma.fs_access_tokensCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$fs_access_tokensPayload>
          }
          createMany: {
            args: Prisma.fs_access_tokensCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.fs_access_tokensDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$fs_access_tokensPayload>
          }
          update: {
            args: Prisma.fs_access_tokensUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$fs_access_tokensPayload>
          }
          deleteMany: {
            args: Prisma.fs_access_tokensDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.fs_access_tokensUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.fs_access_tokensUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$fs_access_tokensPayload>
          }
          aggregate: {
            args: Prisma.Fs_access_tokensAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFs_access_tokens>
          }
          groupBy: {
            args: Prisma.fs_access_tokensGroupByArgs<ExtArgs>
            result: $Utils.Optional<Fs_access_tokensGroupByOutputType>[]
          }
          count: {
            args: Prisma.fs_access_tokensCountArgs<ExtArgs>
            result: $Utils.Optional<Fs_access_tokensCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRawTyped: {
          args: runtime.UnknownTypedSql,
          result: Prisma.JsonObject
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user_sessions?: user_sessionsOmit
    buckets?: bucketsOmit
    directories?: directoriesOmit
    files?: filesOmit
    fs_access_tokens?: fs_access_tokensOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type BucketsCountOutputType
   */

  export type BucketsCountOutputType = {
    directories: number
    files: number
    fs_access_tokens: number
  }

  export type BucketsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    directories?: boolean | BucketsCountOutputTypeCountDirectoriesArgs
    files?: boolean | BucketsCountOutputTypeCountFilesArgs
    fs_access_tokens?: boolean | BucketsCountOutputTypeCountFs_access_tokensArgs
  }

  // Custom InputTypes
  /**
   * BucketsCountOutputType without action
   */
  export type BucketsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BucketsCountOutputType
     */
    select?: BucketsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BucketsCountOutputType without action
   */
  export type BucketsCountOutputTypeCountDirectoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: directoriesWhereInput
  }

  /**
   * BucketsCountOutputType without action
   */
  export type BucketsCountOutputTypeCountFilesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: filesWhereInput
  }

  /**
   * BucketsCountOutputType without action
   */
  export type BucketsCountOutputTypeCountFs_access_tokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: fs_access_tokensWhereInput
  }


  /**
   * Count Type DirectoriesCountOutputType
   */

  export type DirectoriesCountOutputType = {
    other_directories: number
    files: number
  }

  export type DirectoriesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    other_directories?: boolean | DirectoriesCountOutputTypeCountOther_directoriesArgs
    files?: boolean | DirectoriesCountOutputTypeCountFilesArgs
  }

  // Custom InputTypes
  /**
   * DirectoriesCountOutputType without action
   */
  export type DirectoriesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DirectoriesCountOutputType
     */
    select?: DirectoriesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DirectoriesCountOutputType without action
   */
  export type DirectoriesCountOutputTypeCountOther_directoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: directoriesWhereInput
  }

  /**
   * DirectoriesCountOutputType without action
   */
  export type DirectoriesCountOutputTypeCountFilesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: filesWhereInput
  }


  /**
   * Models
   */

  /**
   * Model user_sessions
   */

  export type AggregateUser_sessions = {
    _count: User_sessionsCountAggregateOutputType | null
    _avg: User_sessionsAvgAggregateOutputType | null
    _sum: User_sessionsSumAggregateOutputType | null
    _min: User_sessionsMinAggregateOutputType | null
    _max: User_sessionsMaxAggregateOutputType | null
  }

  export type User_sessionsAvgAggregateOutputType = {
    user_session_id: number | null
    user_id: number | null
    refresh_token_id: number | null
    created_at_unix: number | null
    valid_till_unix: number | null
  }

  export type User_sessionsSumAggregateOutputType = {
    user_session_id: number | null
    user_id: number | null
    refresh_token_id: number | null
    created_at_unix: bigint | null
    valid_till_unix: bigint | null
  }

  export type User_sessionsMinAggregateOutputType = {
    user_session_id: number | null
    user_id: number | null
    refresh_token_id: number | null
    created_at_unix: bigint | null
    valid_till_unix: bigint | null
  }

  export type User_sessionsMaxAggregateOutputType = {
    user_session_id: number | null
    user_id: number | null
    refresh_token_id: number | null
    created_at_unix: bigint | null
    valid_till_unix: bigint | null
  }

  export type User_sessionsCountAggregateOutputType = {
    user_session_id: number
    user_id: number
    refresh_token_id: number
    created_at_unix: number
    valid_till_unix: number
    _all: number
  }


  export type User_sessionsAvgAggregateInputType = {
    user_session_id?: true
    user_id?: true
    refresh_token_id?: true
    created_at_unix?: true
    valid_till_unix?: true
  }

  export type User_sessionsSumAggregateInputType = {
    user_session_id?: true
    user_id?: true
    refresh_token_id?: true
    created_at_unix?: true
    valid_till_unix?: true
  }

  export type User_sessionsMinAggregateInputType = {
    user_session_id?: true
    user_id?: true
    refresh_token_id?: true
    created_at_unix?: true
    valid_till_unix?: true
  }

  export type User_sessionsMaxAggregateInputType = {
    user_session_id?: true
    user_id?: true
    refresh_token_id?: true
    created_at_unix?: true
    valid_till_unix?: true
  }

  export type User_sessionsCountAggregateInputType = {
    user_session_id?: true
    user_id?: true
    refresh_token_id?: true
    created_at_unix?: true
    valid_till_unix?: true
    _all?: true
  }

  export type User_sessionsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user_sessions to aggregate.
     */
    where?: user_sessionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_sessions to fetch.
     */
    orderBy?: user_sessionsOrderByWithRelationInput | user_sessionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: user_sessionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned user_sessions
    **/
    _count?: true | User_sessionsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: User_sessionsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: User_sessionsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: User_sessionsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: User_sessionsMaxAggregateInputType
  }

  export type GetUser_sessionsAggregateType<T extends User_sessionsAggregateArgs> = {
        [P in keyof T & keyof AggregateUser_sessions]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser_sessions[P]>
      : GetScalarType<T[P], AggregateUser_sessions[P]>
  }




  export type user_sessionsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: user_sessionsWhereInput
    orderBy?: user_sessionsOrderByWithAggregationInput | user_sessionsOrderByWithAggregationInput[]
    by: User_sessionsScalarFieldEnum[] | User_sessionsScalarFieldEnum
    having?: user_sessionsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: User_sessionsCountAggregateInputType | true
    _avg?: User_sessionsAvgAggregateInputType
    _sum?: User_sessionsSumAggregateInputType
    _min?: User_sessionsMinAggregateInputType
    _max?: User_sessionsMaxAggregateInputType
  }

  export type User_sessionsGroupByOutputType = {
    user_session_id: number
    user_id: number
    refresh_token_id: number
    created_at_unix: bigint
    valid_till_unix: bigint
    _count: User_sessionsCountAggregateOutputType | null
    _avg: User_sessionsAvgAggregateOutputType | null
    _sum: User_sessionsSumAggregateOutputType | null
    _min: User_sessionsMinAggregateOutputType | null
    _max: User_sessionsMaxAggregateOutputType | null
  }

  type GetUser_sessionsGroupByPayload<T extends user_sessionsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<User_sessionsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof User_sessionsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], User_sessionsGroupByOutputType[P]>
            : GetScalarType<T[P], User_sessionsGroupByOutputType[P]>
        }
      >
    >


  export type user_sessionsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_session_id?: boolean
    user_id?: boolean
    refresh_token_id?: boolean
    created_at_unix?: boolean
    valid_till_unix?: boolean
  }, ExtArgs["result"]["user_sessions"]>



  export type user_sessionsSelectScalar = {
    user_session_id?: boolean
    user_id?: boolean
    refresh_token_id?: boolean
    created_at_unix?: boolean
    valid_till_unix?: boolean
  }

  export type user_sessionsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"user_session_id" | "user_id" | "refresh_token_id" | "created_at_unix" | "valid_till_unix", ExtArgs["result"]["user_sessions"]>

  export type $user_sessionsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "user_sessions"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      user_session_id: number
      user_id: number
      refresh_token_id: number
      created_at_unix: bigint
      valid_till_unix: bigint
    }, ExtArgs["result"]["user_sessions"]>
    composites: {}
  }

  type user_sessionsGetPayload<S extends boolean | null | undefined | user_sessionsDefaultArgs> = $Result.GetResult<Prisma.$user_sessionsPayload, S>

  type user_sessionsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<user_sessionsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: User_sessionsCountAggregateInputType | true
    }

  export interface user_sessionsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user_sessions'], meta: { name: 'user_sessions' } }
    /**
     * Find zero or one User_sessions that matches the filter.
     * @param {user_sessionsFindUniqueArgs} args - Arguments to find a User_sessions
     * @example
     * // Get one User_sessions
     * const user_sessions = await prisma.user_sessions.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends user_sessionsFindUniqueArgs>(args: SelectSubset<T, user_sessionsFindUniqueArgs<ExtArgs>>): Prisma__user_sessionsClient<$Result.GetResult<Prisma.$user_sessionsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User_sessions that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {user_sessionsFindUniqueOrThrowArgs} args - Arguments to find a User_sessions
     * @example
     * // Get one User_sessions
     * const user_sessions = await prisma.user_sessions.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends user_sessionsFindUniqueOrThrowArgs>(args: SelectSubset<T, user_sessionsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__user_sessionsClient<$Result.GetResult<Prisma.$user_sessionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User_sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_sessionsFindFirstArgs} args - Arguments to find a User_sessions
     * @example
     * // Get one User_sessions
     * const user_sessions = await prisma.user_sessions.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends user_sessionsFindFirstArgs>(args?: SelectSubset<T, user_sessionsFindFirstArgs<ExtArgs>>): Prisma__user_sessionsClient<$Result.GetResult<Prisma.$user_sessionsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User_sessions that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_sessionsFindFirstOrThrowArgs} args - Arguments to find a User_sessions
     * @example
     * // Get one User_sessions
     * const user_sessions = await prisma.user_sessions.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends user_sessionsFindFirstOrThrowArgs>(args?: SelectSubset<T, user_sessionsFindFirstOrThrowArgs<ExtArgs>>): Prisma__user_sessionsClient<$Result.GetResult<Prisma.$user_sessionsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more User_sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_sessionsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all User_sessions
     * const user_sessions = await prisma.user_sessions.findMany()
     * 
     * // Get first 10 User_sessions
     * const user_sessions = await prisma.user_sessions.findMany({ take: 10 })
     * 
     * // Only select the `user_session_id`
     * const user_sessionsWithUser_session_idOnly = await prisma.user_sessions.findMany({ select: { user_session_id: true } })
     * 
     */
    findMany<T extends user_sessionsFindManyArgs>(args?: SelectSubset<T, user_sessionsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_sessionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User_sessions.
     * @param {user_sessionsCreateArgs} args - Arguments to create a User_sessions.
     * @example
     * // Create one User_sessions
     * const User_sessions = await prisma.user_sessions.create({
     *   data: {
     *     // ... data to create a User_sessions
     *   }
     * })
     * 
     */
    create<T extends user_sessionsCreateArgs>(args: SelectSubset<T, user_sessionsCreateArgs<ExtArgs>>): Prisma__user_sessionsClient<$Result.GetResult<Prisma.$user_sessionsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many User_sessions.
     * @param {user_sessionsCreateManyArgs} args - Arguments to create many User_sessions.
     * @example
     * // Create many User_sessions
     * const user_sessions = await prisma.user_sessions.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends user_sessionsCreateManyArgs>(args?: SelectSubset<T, user_sessionsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User_sessions.
     * @param {user_sessionsDeleteArgs} args - Arguments to delete one User_sessions.
     * @example
     * // Delete one User_sessions
     * const User_sessions = await prisma.user_sessions.delete({
     *   where: {
     *     // ... filter to delete one User_sessions
     *   }
     * })
     * 
     */
    delete<T extends user_sessionsDeleteArgs>(args: SelectSubset<T, user_sessionsDeleteArgs<ExtArgs>>): Prisma__user_sessionsClient<$Result.GetResult<Prisma.$user_sessionsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User_sessions.
     * @param {user_sessionsUpdateArgs} args - Arguments to update one User_sessions.
     * @example
     * // Update one User_sessions
     * const user_sessions = await prisma.user_sessions.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends user_sessionsUpdateArgs>(args: SelectSubset<T, user_sessionsUpdateArgs<ExtArgs>>): Prisma__user_sessionsClient<$Result.GetResult<Prisma.$user_sessionsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more User_sessions.
     * @param {user_sessionsDeleteManyArgs} args - Arguments to filter User_sessions to delete.
     * @example
     * // Delete a few User_sessions
     * const { count } = await prisma.user_sessions.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends user_sessionsDeleteManyArgs>(args?: SelectSubset<T, user_sessionsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more User_sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_sessionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many User_sessions
     * const user_sessions = await prisma.user_sessions.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends user_sessionsUpdateManyArgs>(args: SelectSubset<T, user_sessionsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User_sessions.
     * @param {user_sessionsUpsertArgs} args - Arguments to update or create a User_sessions.
     * @example
     * // Update or create a User_sessions
     * const user_sessions = await prisma.user_sessions.upsert({
     *   create: {
     *     // ... data to create a User_sessions
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User_sessions we want to update
     *   }
     * })
     */
    upsert<T extends user_sessionsUpsertArgs>(args: SelectSubset<T, user_sessionsUpsertArgs<ExtArgs>>): Prisma__user_sessionsClient<$Result.GetResult<Prisma.$user_sessionsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of User_sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_sessionsCountArgs} args - Arguments to filter User_sessions to count.
     * @example
     * // Count the number of User_sessions
     * const count = await prisma.user_sessions.count({
     *   where: {
     *     // ... the filter for the User_sessions we want to count
     *   }
     * })
    **/
    count<T extends user_sessionsCountArgs>(
      args?: Subset<T, user_sessionsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], User_sessionsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User_sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_sessionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends User_sessionsAggregateArgs>(args: Subset<T, User_sessionsAggregateArgs>): Prisma.PrismaPromise<GetUser_sessionsAggregateType<T>>

    /**
     * Group by User_sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_sessionsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends user_sessionsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: user_sessionsGroupByArgs['orderBy'] }
        : { orderBy?: user_sessionsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, user_sessionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUser_sessionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the user_sessions model
   */
  readonly fields: user_sessionsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user_sessions.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__user_sessionsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the user_sessions model
   */
  interface user_sessionsFieldRefs {
    readonly user_session_id: FieldRef<"user_sessions", 'Int'>
    readonly user_id: FieldRef<"user_sessions", 'Int'>
    readonly refresh_token_id: FieldRef<"user_sessions", 'Int'>
    readonly created_at_unix: FieldRef<"user_sessions", 'BigInt'>
    readonly valid_till_unix: FieldRef<"user_sessions", 'BigInt'>
  }
    

  // Custom InputTypes
  /**
   * user_sessions findUnique
   */
  export type user_sessionsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_sessions
     */
    select?: user_sessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_sessions
     */
    omit?: user_sessionsOmit<ExtArgs> | null
    /**
     * Filter, which user_sessions to fetch.
     */
    where: user_sessionsWhereUniqueInput
  }

  /**
   * user_sessions findUniqueOrThrow
   */
  export type user_sessionsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_sessions
     */
    select?: user_sessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_sessions
     */
    omit?: user_sessionsOmit<ExtArgs> | null
    /**
     * Filter, which user_sessions to fetch.
     */
    where: user_sessionsWhereUniqueInput
  }

  /**
   * user_sessions findFirst
   */
  export type user_sessionsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_sessions
     */
    select?: user_sessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_sessions
     */
    omit?: user_sessionsOmit<ExtArgs> | null
    /**
     * Filter, which user_sessions to fetch.
     */
    where?: user_sessionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_sessions to fetch.
     */
    orderBy?: user_sessionsOrderByWithRelationInput | user_sessionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for user_sessions.
     */
    cursor?: user_sessionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of user_sessions.
     */
    distinct?: User_sessionsScalarFieldEnum | User_sessionsScalarFieldEnum[]
  }

  /**
   * user_sessions findFirstOrThrow
   */
  export type user_sessionsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_sessions
     */
    select?: user_sessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_sessions
     */
    omit?: user_sessionsOmit<ExtArgs> | null
    /**
     * Filter, which user_sessions to fetch.
     */
    where?: user_sessionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_sessions to fetch.
     */
    orderBy?: user_sessionsOrderByWithRelationInput | user_sessionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for user_sessions.
     */
    cursor?: user_sessionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of user_sessions.
     */
    distinct?: User_sessionsScalarFieldEnum | User_sessionsScalarFieldEnum[]
  }

  /**
   * user_sessions findMany
   */
  export type user_sessionsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_sessions
     */
    select?: user_sessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_sessions
     */
    omit?: user_sessionsOmit<ExtArgs> | null
    /**
     * Filter, which user_sessions to fetch.
     */
    where?: user_sessionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_sessions to fetch.
     */
    orderBy?: user_sessionsOrderByWithRelationInput | user_sessionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing user_sessions.
     */
    cursor?: user_sessionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_sessions.
     */
    skip?: number
    distinct?: User_sessionsScalarFieldEnum | User_sessionsScalarFieldEnum[]
  }

  /**
   * user_sessions create
   */
  export type user_sessionsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_sessions
     */
    select?: user_sessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_sessions
     */
    omit?: user_sessionsOmit<ExtArgs> | null
    /**
     * The data needed to create a user_sessions.
     */
    data: XOR<user_sessionsCreateInput, user_sessionsUncheckedCreateInput>
  }

  /**
   * user_sessions createMany
   */
  export type user_sessionsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many user_sessions.
     */
    data: user_sessionsCreateManyInput | user_sessionsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user_sessions update
   */
  export type user_sessionsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_sessions
     */
    select?: user_sessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_sessions
     */
    omit?: user_sessionsOmit<ExtArgs> | null
    /**
     * The data needed to update a user_sessions.
     */
    data: XOR<user_sessionsUpdateInput, user_sessionsUncheckedUpdateInput>
    /**
     * Choose, which user_sessions to update.
     */
    where: user_sessionsWhereUniqueInput
  }

  /**
   * user_sessions updateMany
   */
  export type user_sessionsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update user_sessions.
     */
    data: XOR<user_sessionsUpdateManyMutationInput, user_sessionsUncheckedUpdateManyInput>
    /**
     * Filter which user_sessions to update
     */
    where?: user_sessionsWhereInput
    /**
     * Limit how many user_sessions to update.
     */
    limit?: number
  }

  /**
   * user_sessions upsert
   */
  export type user_sessionsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_sessions
     */
    select?: user_sessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_sessions
     */
    omit?: user_sessionsOmit<ExtArgs> | null
    /**
     * The filter to search for the user_sessions to update in case it exists.
     */
    where: user_sessionsWhereUniqueInput
    /**
     * In case the user_sessions found by the `where` argument doesn't exist, create a new user_sessions with this data.
     */
    create: XOR<user_sessionsCreateInput, user_sessionsUncheckedCreateInput>
    /**
     * In case the user_sessions was found with the provided `where` argument, update it with this data.
     */
    update: XOR<user_sessionsUpdateInput, user_sessionsUncheckedUpdateInput>
  }

  /**
   * user_sessions delete
   */
  export type user_sessionsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_sessions
     */
    select?: user_sessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_sessions
     */
    omit?: user_sessionsOmit<ExtArgs> | null
    /**
     * Filter which user_sessions to delete.
     */
    where: user_sessionsWhereUniqueInput
  }

  /**
   * user_sessions deleteMany
   */
  export type user_sessionsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user_sessions to delete
     */
    where?: user_sessionsWhereInput
    /**
     * Limit how many user_sessions to delete.
     */
    limit?: number
  }

  /**
   * user_sessions without action
   */
  export type user_sessionsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_sessions
     */
    select?: user_sessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_sessions
     */
    omit?: user_sessionsOmit<ExtArgs> | null
  }


  /**
   * Model buckets
   */

  export type AggregateBuckets = {
    _count: BucketsCountAggregateOutputType | null
    _avg: BucketsAvgAggregateOutputType | null
    _sum: BucketsSumAggregateOutputType | null
    _min: BucketsMinAggregateOutputType | null
    _max: BucketsMaxAggregateOutputType | null
  }

  export type BucketsAvgAggregateOutputType = {
    bucket_id: number | null
    org_id: number | null
    total_size_bytes: number | null
    max_size_bytes: number | null
    created_by: number | null
    created_at_unix: number | null
    updated_at_unix: number | null
  }

  export type BucketsSumAggregateOutputType = {
    bucket_id: number | null
    org_id: number | null
    total_size_bytes: bigint | null
    max_size_bytes: bigint | null
    created_by: number | null
    created_at_unix: bigint | null
    updated_at_unix: bigint | null
  }

  export type BucketsMinAggregateOutputType = {
    bucket_id: number | null
    org_id: number | null
    bucket_name: string | null
    bucket_slug: string | null
    total_size_bytes: bigint | null
    max_size_bytes: bigint | null
    visibility: $Enums.buckets_visibility | null
    status: $Enums.buckets_status | null
    created_by: number | null
    created_at_unix: bigint | null
    updated_at_unix: bigint | null
  }

  export type BucketsMaxAggregateOutputType = {
    bucket_id: number | null
    org_id: number | null
    bucket_name: string | null
    bucket_slug: string | null
    total_size_bytes: bigint | null
    max_size_bytes: bigint | null
    visibility: $Enums.buckets_visibility | null
    status: $Enums.buckets_status | null
    created_by: number | null
    created_at_unix: bigint | null
    updated_at_unix: bigint | null
  }

  export type BucketsCountAggregateOutputType = {
    bucket_id: number
    org_id: number
    bucket_name: number
    bucket_slug: number
    total_size_bytes: number
    max_size_bytes: number
    visibility: number
    status: number
    created_by: number
    created_at_unix: number
    updated_at_unix: number
    _all: number
  }


  export type BucketsAvgAggregateInputType = {
    bucket_id?: true
    org_id?: true
    total_size_bytes?: true
    max_size_bytes?: true
    created_by?: true
    created_at_unix?: true
    updated_at_unix?: true
  }

  export type BucketsSumAggregateInputType = {
    bucket_id?: true
    org_id?: true
    total_size_bytes?: true
    max_size_bytes?: true
    created_by?: true
    created_at_unix?: true
    updated_at_unix?: true
  }

  export type BucketsMinAggregateInputType = {
    bucket_id?: true
    org_id?: true
    bucket_name?: true
    bucket_slug?: true
    total_size_bytes?: true
    max_size_bytes?: true
    visibility?: true
    status?: true
    created_by?: true
    created_at_unix?: true
    updated_at_unix?: true
  }

  export type BucketsMaxAggregateInputType = {
    bucket_id?: true
    org_id?: true
    bucket_name?: true
    bucket_slug?: true
    total_size_bytes?: true
    max_size_bytes?: true
    visibility?: true
    status?: true
    created_by?: true
    created_at_unix?: true
    updated_at_unix?: true
  }

  export type BucketsCountAggregateInputType = {
    bucket_id?: true
    org_id?: true
    bucket_name?: true
    bucket_slug?: true
    total_size_bytes?: true
    max_size_bytes?: true
    visibility?: true
    status?: true
    created_by?: true
    created_at_unix?: true
    updated_at_unix?: true
    _all?: true
  }

  export type BucketsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which buckets to aggregate.
     */
    where?: bucketsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of buckets to fetch.
     */
    orderBy?: bucketsOrderByWithRelationInput | bucketsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: bucketsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` buckets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` buckets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned buckets
    **/
    _count?: true | BucketsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BucketsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BucketsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BucketsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BucketsMaxAggregateInputType
  }

  export type GetBucketsAggregateType<T extends BucketsAggregateArgs> = {
        [P in keyof T & keyof AggregateBuckets]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBuckets[P]>
      : GetScalarType<T[P], AggregateBuckets[P]>
  }




  export type bucketsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: bucketsWhereInput
    orderBy?: bucketsOrderByWithAggregationInput | bucketsOrderByWithAggregationInput[]
    by: BucketsScalarFieldEnum[] | BucketsScalarFieldEnum
    having?: bucketsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BucketsCountAggregateInputType | true
    _avg?: BucketsAvgAggregateInputType
    _sum?: BucketsSumAggregateInputType
    _min?: BucketsMinAggregateInputType
    _max?: BucketsMaxAggregateInputType
  }

  export type BucketsGroupByOutputType = {
    bucket_id: number
    org_id: number
    bucket_name: string
    bucket_slug: string
    total_size_bytes: bigint
    max_size_bytes: bigint
    visibility: $Enums.buckets_visibility
    status: $Enums.buckets_status
    created_by: number
    created_at_unix: bigint
    updated_at_unix: bigint | null
    _count: BucketsCountAggregateOutputType | null
    _avg: BucketsAvgAggregateOutputType | null
    _sum: BucketsSumAggregateOutputType | null
    _min: BucketsMinAggregateOutputType | null
    _max: BucketsMaxAggregateOutputType | null
  }

  type GetBucketsGroupByPayload<T extends bucketsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BucketsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BucketsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BucketsGroupByOutputType[P]>
            : GetScalarType<T[P], BucketsGroupByOutputType[P]>
        }
      >
    >


  export type bucketsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    bucket_id?: boolean
    org_id?: boolean
    bucket_name?: boolean
    bucket_slug?: boolean
    total_size_bytes?: boolean
    max_size_bytes?: boolean
    visibility?: boolean
    status?: boolean
    created_by?: boolean
    created_at_unix?: boolean
    updated_at_unix?: boolean
    directories?: boolean | buckets$directoriesArgs<ExtArgs>
    files?: boolean | buckets$filesArgs<ExtArgs>
    fs_access_tokens?: boolean | buckets$fs_access_tokensArgs<ExtArgs>
    _count?: boolean | BucketsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["buckets"]>



  export type bucketsSelectScalar = {
    bucket_id?: boolean
    org_id?: boolean
    bucket_name?: boolean
    bucket_slug?: boolean
    total_size_bytes?: boolean
    max_size_bytes?: boolean
    visibility?: boolean
    status?: boolean
    created_by?: boolean
    created_at_unix?: boolean
    updated_at_unix?: boolean
  }

  export type bucketsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"bucket_id" | "org_id" | "bucket_name" | "bucket_slug" | "total_size_bytes" | "max_size_bytes" | "visibility" | "status" | "created_by" | "created_at_unix" | "updated_at_unix", ExtArgs["result"]["buckets"]>
  export type bucketsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    directories?: boolean | buckets$directoriesArgs<ExtArgs>
    files?: boolean | buckets$filesArgs<ExtArgs>
    fs_access_tokens?: boolean | buckets$fs_access_tokensArgs<ExtArgs>
    _count?: boolean | BucketsCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $bucketsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "buckets"
    objects: {
      directories: Prisma.$directoriesPayload<ExtArgs>[]
      files: Prisma.$filesPayload<ExtArgs>[]
      fs_access_tokens: Prisma.$fs_access_tokensPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      bucket_id: number
      org_id: number
      bucket_name: string
      bucket_slug: string
      total_size_bytes: bigint
      max_size_bytes: bigint
      visibility: $Enums.buckets_visibility
      status: $Enums.buckets_status
      created_by: number
      created_at_unix: bigint
      updated_at_unix: bigint | null
    }, ExtArgs["result"]["buckets"]>
    composites: {}
  }

  type bucketsGetPayload<S extends boolean | null | undefined | bucketsDefaultArgs> = $Result.GetResult<Prisma.$bucketsPayload, S>

  type bucketsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<bucketsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BucketsCountAggregateInputType | true
    }

  export interface bucketsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['buckets'], meta: { name: 'buckets' } }
    /**
     * Find zero or one Buckets that matches the filter.
     * @param {bucketsFindUniqueArgs} args - Arguments to find a Buckets
     * @example
     * // Get one Buckets
     * const buckets = await prisma.buckets.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends bucketsFindUniqueArgs>(args: SelectSubset<T, bucketsFindUniqueArgs<ExtArgs>>): Prisma__bucketsClient<$Result.GetResult<Prisma.$bucketsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Buckets that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {bucketsFindUniqueOrThrowArgs} args - Arguments to find a Buckets
     * @example
     * // Get one Buckets
     * const buckets = await prisma.buckets.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends bucketsFindUniqueOrThrowArgs>(args: SelectSubset<T, bucketsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__bucketsClient<$Result.GetResult<Prisma.$bucketsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Buckets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bucketsFindFirstArgs} args - Arguments to find a Buckets
     * @example
     * // Get one Buckets
     * const buckets = await prisma.buckets.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends bucketsFindFirstArgs>(args?: SelectSubset<T, bucketsFindFirstArgs<ExtArgs>>): Prisma__bucketsClient<$Result.GetResult<Prisma.$bucketsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Buckets that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bucketsFindFirstOrThrowArgs} args - Arguments to find a Buckets
     * @example
     * // Get one Buckets
     * const buckets = await prisma.buckets.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends bucketsFindFirstOrThrowArgs>(args?: SelectSubset<T, bucketsFindFirstOrThrowArgs<ExtArgs>>): Prisma__bucketsClient<$Result.GetResult<Prisma.$bucketsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Buckets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bucketsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Buckets
     * const buckets = await prisma.buckets.findMany()
     * 
     * // Get first 10 Buckets
     * const buckets = await prisma.buckets.findMany({ take: 10 })
     * 
     * // Only select the `bucket_id`
     * const bucketsWithBucket_idOnly = await prisma.buckets.findMany({ select: { bucket_id: true } })
     * 
     */
    findMany<T extends bucketsFindManyArgs>(args?: SelectSubset<T, bucketsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$bucketsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Buckets.
     * @param {bucketsCreateArgs} args - Arguments to create a Buckets.
     * @example
     * // Create one Buckets
     * const Buckets = await prisma.buckets.create({
     *   data: {
     *     // ... data to create a Buckets
     *   }
     * })
     * 
     */
    create<T extends bucketsCreateArgs>(args: SelectSubset<T, bucketsCreateArgs<ExtArgs>>): Prisma__bucketsClient<$Result.GetResult<Prisma.$bucketsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Buckets.
     * @param {bucketsCreateManyArgs} args - Arguments to create many Buckets.
     * @example
     * // Create many Buckets
     * const buckets = await prisma.buckets.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends bucketsCreateManyArgs>(args?: SelectSubset<T, bucketsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Buckets.
     * @param {bucketsDeleteArgs} args - Arguments to delete one Buckets.
     * @example
     * // Delete one Buckets
     * const Buckets = await prisma.buckets.delete({
     *   where: {
     *     // ... filter to delete one Buckets
     *   }
     * })
     * 
     */
    delete<T extends bucketsDeleteArgs>(args: SelectSubset<T, bucketsDeleteArgs<ExtArgs>>): Prisma__bucketsClient<$Result.GetResult<Prisma.$bucketsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Buckets.
     * @param {bucketsUpdateArgs} args - Arguments to update one Buckets.
     * @example
     * // Update one Buckets
     * const buckets = await prisma.buckets.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends bucketsUpdateArgs>(args: SelectSubset<T, bucketsUpdateArgs<ExtArgs>>): Prisma__bucketsClient<$Result.GetResult<Prisma.$bucketsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Buckets.
     * @param {bucketsDeleteManyArgs} args - Arguments to filter Buckets to delete.
     * @example
     * // Delete a few Buckets
     * const { count } = await prisma.buckets.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends bucketsDeleteManyArgs>(args?: SelectSubset<T, bucketsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Buckets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bucketsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Buckets
     * const buckets = await prisma.buckets.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends bucketsUpdateManyArgs>(args: SelectSubset<T, bucketsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Buckets.
     * @param {bucketsUpsertArgs} args - Arguments to update or create a Buckets.
     * @example
     * // Update or create a Buckets
     * const buckets = await prisma.buckets.upsert({
     *   create: {
     *     // ... data to create a Buckets
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Buckets we want to update
     *   }
     * })
     */
    upsert<T extends bucketsUpsertArgs>(args: SelectSubset<T, bucketsUpsertArgs<ExtArgs>>): Prisma__bucketsClient<$Result.GetResult<Prisma.$bucketsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Buckets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bucketsCountArgs} args - Arguments to filter Buckets to count.
     * @example
     * // Count the number of Buckets
     * const count = await prisma.buckets.count({
     *   where: {
     *     // ... the filter for the Buckets we want to count
     *   }
     * })
    **/
    count<T extends bucketsCountArgs>(
      args?: Subset<T, bucketsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BucketsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Buckets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BucketsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BucketsAggregateArgs>(args: Subset<T, BucketsAggregateArgs>): Prisma.PrismaPromise<GetBucketsAggregateType<T>>

    /**
     * Group by Buckets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bucketsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends bucketsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: bucketsGroupByArgs['orderBy'] }
        : { orderBy?: bucketsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, bucketsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBucketsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the buckets model
   */
  readonly fields: bucketsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for buckets.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__bucketsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    directories<T extends buckets$directoriesArgs<ExtArgs> = {}>(args?: Subset<T, buckets$directoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$directoriesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    files<T extends buckets$filesArgs<ExtArgs> = {}>(args?: Subset<T, buckets$filesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$filesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    fs_access_tokens<T extends buckets$fs_access_tokensArgs<ExtArgs> = {}>(args?: Subset<T, buckets$fs_access_tokensArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$fs_access_tokensPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the buckets model
   */
  interface bucketsFieldRefs {
    readonly bucket_id: FieldRef<"buckets", 'Int'>
    readonly org_id: FieldRef<"buckets", 'Int'>
    readonly bucket_name: FieldRef<"buckets", 'String'>
    readonly bucket_slug: FieldRef<"buckets", 'String'>
    readonly total_size_bytes: FieldRef<"buckets", 'BigInt'>
    readonly max_size_bytes: FieldRef<"buckets", 'BigInt'>
    readonly visibility: FieldRef<"buckets", 'buckets_visibility'>
    readonly status: FieldRef<"buckets", 'buckets_status'>
    readonly created_by: FieldRef<"buckets", 'Int'>
    readonly created_at_unix: FieldRef<"buckets", 'BigInt'>
    readonly updated_at_unix: FieldRef<"buckets", 'BigInt'>
  }
    

  // Custom InputTypes
  /**
   * buckets findUnique
   */
  export type bucketsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the buckets
     */
    select?: bucketsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the buckets
     */
    omit?: bucketsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bucketsInclude<ExtArgs> | null
    /**
     * Filter, which buckets to fetch.
     */
    where: bucketsWhereUniqueInput
  }

  /**
   * buckets findUniqueOrThrow
   */
  export type bucketsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the buckets
     */
    select?: bucketsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the buckets
     */
    omit?: bucketsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bucketsInclude<ExtArgs> | null
    /**
     * Filter, which buckets to fetch.
     */
    where: bucketsWhereUniqueInput
  }

  /**
   * buckets findFirst
   */
  export type bucketsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the buckets
     */
    select?: bucketsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the buckets
     */
    omit?: bucketsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bucketsInclude<ExtArgs> | null
    /**
     * Filter, which buckets to fetch.
     */
    where?: bucketsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of buckets to fetch.
     */
    orderBy?: bucketsOrderByWithRelationInput | bucketsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for buckets.
     */
    cursor?: bucketsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` buckets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` buckets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of buckets.
     */
    distinct?: BucketsScalarFieldEnum | BucketsScalarFieldEnum[]
  }

  /**
   * buckets findFirstOrThrow
   */
  export type bucketsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the buckets
     */
    select?: bucketsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the buckets
     */
    omit?: bucketsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bucketsInclude<ExtArgs> | null
    /**
     * Filter, which buckets to fetch.
     */
    where?: bucketsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of buckets to fetch.
     */
    orderBy?: bucketsOrderByWithRelationInput | bucketsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for buckets.
     */
    cursor?: bucketsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` buckets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` buckets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of buckets.
     */
    distinct?: BucketsScalarFieldEnum | BucketsScalarFieldEnum[]
  }

  /**
   * buckets findMany
   */
  export type bucketsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the buckets
     */
    select?: bucketsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the buckets
     */
    omit?: bucketsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bucketsInclude<ExtArgs> | null
    /**
     * Filter, which buckets to fetch.
     */
    where?: bucketsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of buckets to fetch.
     */
    orderBy?: bucketsOrderByWithRelationInput | bucketsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing buckets.
     */
    cursor?: bucketsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` buckets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` buckets.
     */
    skip?: number
    distinct?: BucketsScalarFieldEnum | BucketsScalarFieldEnum[]
  }

  /**
   * buckets create
   */
  export type bucketsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the buckets
     */
    select?: bucketsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the buckets
     */
    omit?: bucketsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bucketsInclude<ExtArgs> | null
    /**
     * The data needed to create a buckets.
     */
    data: XOR<bucketsCreateInput, bucketsUncheckedCreateInput>
  }

  /**
   * buckets createMany
   */
  export type bucketsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many buckets.
     */
    data: bucketsCreateManyInput | bucketsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * buckets update
   */
  export type bucketsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the buckets
     */
    select?: bucketsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the buckets
     */
    omit?: bucketsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bucketsInclude<ExtArgs> | null
    /**
     * The data needed to update a buckets.
     */
    data: XOR<bucketsUpdateInput, bucketsUncheckedUpdateInput>
    /**
     * Choose, which buckets to update.
     */
    where: bucketsWhereUniqueInput
  }

  /**
   * buckets updateMany
   */
  export type bucketsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update buckets.
     */
    data: XOR<bucketsUpdateManyMutationInput, bucketsUncheckedUpdateManyInput>
    /**
     * Filter which buckets to update
     */
    where?: bucketsWhereInput
    /**
     * Limit how many buckets to update.
     */
    limit?: number
  }

  /**
   * buckets upsert
   */
  export type bucketsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the buckets
     */
    select?: bucketsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the buckets
     */
    omit?: bucketsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bucketsInclude<ExtArgs> | null
    /**
     * The filter to search for the buckets to update in case it exists.
     */
    where: bucketsWhereUniqueInput
    /**
     * In case the buckets found by the `where` argument doesn't exist, create a new buckets with this data.
     */
    create: XOR<bucketsCreateInput, bucketsUncheckedCreateInput>
    /**
     * In case the buckets was found with the provided `where` argument, update it with this data.
     */
    update: XOR<bucketsUpdateInput, bucketsUncheckedUpdateInput>
  }

  /**
   * buckets delete
   */
  export type bucketsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the buckets
     */
    select?: bucketsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the buckets
     */
    omit?: bucketsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bucketsInclude<ExtArgs> | null
    /**
     * Filter which buckets to delete.
     */
    where: bucketsWhereUniqueInput
  }

  /**
   * buckets deleteMany
   */
  export type bucketsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which buckets to delete
     */
    where?: bucketsWhereInput
    /**
     * Limit how many buckets to delete.
     */
    limit?: number
  }

  /**
   * buckets.directories
   */
  export type buckets$directoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the directories
     */
    select?: directoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the directories
     */
    omit?: directoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: directoriesInclude<ExtArgs> | null
    where?: directoriesWhereInput
    orderBy?: directoriesOrderByWithRelationInput | directoriesOrderByWithRelationInput[]
    cursor?: directoriesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DirectoriesScalarFieldEnum | DirectoriesScalarFieldEnum[]
  }

  /**
   * buckets.files
   */
  export type buckets$filesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the files
     */
    select?: filesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the files
     */
    omit?: filesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: filesInclude<ExtArgs> | null
    where?: filesWhereInput
    orderBy?: filesOrderByWithRelationInput | filesOrderByWithRelationInput[]
    cursor?: filesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FilesScalarFieldEnum | FilesScalarFieldEnum[]
  }

  /**
   * buckets.fs_access_tokens
   */
  export type buckets$fs_access_tokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fs_access_tokens
     */
    select?: fs_access_tokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the fs_access_tokens
     */
    omit?: fs_access_tokensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: fs_access_tokensInclude<ExtArgs> | null
    where?: fs_access_tokensWhereInput
    orderBy?: fs_access_tokensOrderByWithRelationInput | fs_access_tokensOrderByWithRelationInput[]
    cursor?: fs_access_tokensWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Fs_access_tokensScalarFieldEnum | Fs_access_tokensScalarFieldEnum[]
  }

  /**
   * buckets without action
   */
  export type bucketsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the buckets
     */
    select?: bucketsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the buckets
     */
    omit?: bucketsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bucketsInclude<ExtArgs> | null
  }


  /**
   * Model directories
   */

  export type AggregateDirectories = {
    _count: DirectoriesCountAggregateOutputType | null
    _avg: DirectoriesAvgAggregateOutputType | null
    _sum: DirectoriesSumAggregateOutputType | null
    _min: DirectoriesMinAggregateOutputType | null
    _max: DirectoriesMaxAggregateOutputType | null
  }

  export type DirectoriesAvgAggregateOutputType = {
    dir_id: number | null
    bucket_id: number | null
    parent_dir_id: number | null
    depth_level: number | null
    total_size_bytes: number | null
    created_at_unix: number | null
    updated_at_unix: number | null
  }

  export type DirectoriesSumAggregateOutputType = {
    dir_id: number | null
    bucket_id: number | null
    parent_dir_id: number | null
    depth_level: number | null
    total_size_bytes: bigint | null
    created_at_unix: bigint | null
    updated_at_unix: bigint | null
  }

  export type DirectoriesMinAggregateOutputType = {
    dir_id: number | null
    bucket_id: number | null
    parent_dir_id: number | null
    depth_level: number | null
    dir_name: string | null
    dir_slug: string | null
    path_in_slug: string | null
    path_in_id: string | null
    total_size_bytes: bigint | null
    created_at_unix: bigint | null
    updated_at_unix: bigint | null
  }

  export type DirectoriesMaxAggregateOutputType = {
    dir_id: number | null
    bucket_id: number | null
    parent_dir_id: number | null
    depth_level: number | null
    dir_name: string | null
    dir_slug: string | null
    path_in_slug: string | null
    path_in_id: string | null
    total_size_bytes: bigint | null
    created_at_unix: bigint | null
    updated_at_unix: bigint | null
  }

  export type DirectoriesCountAggregateOutputType = {
    dir_id: number
    bucket_id: number
    parent_dir_id: number
    depth_level: number
    dir_name: number
    dir_slug: number
    path_in_slug: number
    path_in_id: number
    total_size_bytes: number
    created_at_unix: number
    updated_at_unix: number
    _all: number
  }


  export type DirectoriesAvgAggregateInputType = {
    dir_id?: true
    bucket_id?: true
    parent_dir_id?: true
    depth_level?: true
    total_size_bytes?: true
    created_at_unix?: true
    updated_at_unix?: true
  }

  export type DirectoriesSumAggregateInputType = {
    dir_id?: true
    bucket_id?: true
    parent_dir_id?: true
    depth_level?: true
    total_size_bytes?: true
    created_at_unix?: true
    updated_at_unix?: true
  }

  export type DirectoriesMinAggregateInputType = {
    dir_id?: true
    bucket_id?: true
    parent_dir_id?: true
    depth_level?: true
    dir_name?: true
    dir_slug?: true
    path_in_slug?: true
    path_in_id?: true
    total_size_bytes?: true
    created_at_unix?: true
    updated_at_unix?: true
  }

  export type DirectoriesMaxAggregateInputType = {
    dir_id?: true
    bucket_id?: true
    parent_dir_id?: true
    depth_level?: true
    dir_name?: true
    dir_slug?: true
    path_in_slug?: true
    path_in_id?: true
    total_size_bytes?: true
    created_at_unix?: true
    updated_at_unix?: true
  }

  export type DirectoriesCountAggregateInputType = {
    dir_id?: true
    bucket_id?: true
    parent_dir_id?: true
    depth_level?: true
    dir_name?: true
    dir_slug?: true
    path_in_slug?: true
    path_in_id?: true
    total_size_bytes?: true
    created_at_unix?: true
    updated_at_unix?: true
    _all?: true
  }

  export type DirectoriesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which directories to aggregate.
     */
    where?: directoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of directories to fetch.
     */
    orderBy?: directoriesOrderByWithRelationInput | directoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: directoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` directories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` directories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned directories
    **/
    _count?: true | DirectoriesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DirectoriesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DirectoriesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DirectoriesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DirectoriesMaxAggregateInputType
  }

  export type GetDirectoriesAggregateType<T extends DirectoriesAggregateArgs> = {
        [P in keyof T & keyof AggregateDirectories]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDirectories[P]>
      : GetScalarType<T[P], AggregateDirectories[P]>
  }




  export type directoriesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: directoriesWhereInput
    orderBy?: directoriesOrderByWithAggregationInput | directoriesOrderByWithAggregationInput[]
    by: DirectoriesScalarFieldEnum[] | DirectoriesScalarFieldEnum
    having?: directoriesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DirectoriesCountAggregateInputType | true
    _avg?: DirectoriesAvgAggregateInputType
    _sum?: DirectoriesSumAggregateInputType
    _min?: DirectoriesMinAggregateInputType
    _max?: DirectoriesMaxAggregateInputType
  }

  export type DirectoriesGroupByOutputType = {
    dir_id: number
    bucket_id: number
    parent_dir_id: number | null
    depth_level: number
    dir_name: string
    dir_slug: string
    path_in_slug: string
    path_in_id: string
    total_size_bytes: bigint
    created_at_unix: bigint
    updated_at_unix: bigint | null
    _count: DirectoriesCountAggregateOutputType | null
    _avg: DirectoriesAvgAggregateOutputType | null
    _sum: DirectoriesSumAggregateOutputType | null
    _min: DirectoriesMinAggregateOutputType | null
    _max: DirectoriesMaxAggregateOutputType | null
  }

  type GetDirectoriesGroupByPayload<T extends directoriesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DirectoriesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DirectoriesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DirectoriesGroupByOutputType[P]>
            : GetScalarType<T[P], DirectoriesGroupByOutputType[P]>
        }
      >
    >


  export type directoriesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    dir_id?: boolean
    bucket_id?: boolean
    parent_dir_id?: boolean
    depth_level?: boolean
    dir_name?: boolean
    dir_slug?: boolean
    path_in_slug?: boolean
    path_in_id?: boolean
    total_size_bytes?: boolean
    created_at_unix?: boolean
    updated_at_unix?: boolean
    buckets?: boolean | bucketsDefaultArgs<ExtArgs>
    directories?: boolean | directories$directoriesArgs<ExtArgs>
    other_directories?: boolean | directories$other_directoriesArgs<ExtArgs>
    files?: boolean | directories$filesArgs<ExtArgs>
    fs_access_tokens?: boolean | directories$fs_access_tokensArgs<ExtArgs>
    _count?: boolean | DirectoriesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["directories"]>



  export type directoriesSelectScalar = {
    dir_id?: boolean
    bucket_id?: boolean
    parent_dir_id?: boolean
    depth_level?: boolean
    dir_name?: boolean
    dir_slug?: boolean
    path_in_slug?: boolean
    path_in_id?: boolean
    total_size_bytes?: boolean
    created_at_unix?: boolean
    updated_at_unix?: boolean
  }

  export type directoriesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"dir_id" | "bucket_id" | "parent_dir_id" | "depth_level" | "dir_name" | "dir_slug" | "path_in_slug" | "path_in_id" | "total_size_bytes" | "created_at_unix" | "updated_at_unix", ExtArgs["result"]["directories"]>
  export type directoriesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    buckets?: boolean | bucketsDefaultArgs<ExtArgs>
    directories?: boolean | directories$directoriesArgs<ExtArgs>
    other_directories?: boolean | directories$other_directoriesArgs<ExtArgs>
    files?: boolean | directories$filesArgs<ExtArgs>
    fs_access_tokens?: boolean | directories$fs_access_tokensArgs<ExtArgs>
    _count?: boolean | DirectoriesCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $directoriesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "directories"
    objects: {
      buckets: Prisma.$bucketsPayload<ExtArgs>
      directories: Prisma.$directoriesPayload<ExtArgs> | null
      other_directories: Prisma.$directoriesPayload<ExtArgs>[]
      files: Prisma.$filesPayload<ExtArgs>[]
      fs_access_tokens: Prisma.$fs_access_tokensPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      dir_id: number
      bucket_id: number
      parent_dir_id: number | null
      depth_level: number
      dir_name: string
      dir_slug: string
      path_in_slug: string
      path_in_id: string
      total_size_bytes: bigint
      created_at_unix: bigint
      updated_at_unix: bigint | null
    }, ExtArgs["result"]["directories"]>
    composites: {}
  }

  type directoriesGetPayload<S extends boolean | null | undefined | directoriesDefaultArgs> = $Result.GetResult<Prisma.$directoriesPayload, S>

  type directoriesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<directoriesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DirectoriesCountAggregateInputType | true
    }

  export interface directoriesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['directories'], meta: { name: 'directories' } }
    /**
     * Find zero or one Directories that matches the filter.
     * @param {directoriesFindUniqueArgs} args - Arguments to find a Directories
     * @example
     * // Get one Directories
     * const directories = await prisma.directories.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends directoriesFindUniqueArgs>(args: SelectSubset<T, directoriesFindUniqueArgs<ExtArgs>>): Prisma__directoriesClient<$Result.GetResult<Prisma.$directoriesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Directories that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {directoriesFindUniqueOrThrowArgs} args - Arguments to find a Directories
     * @example
     * // Get one Directories
     * const directories = await prisma.directories.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends directoriesFindUniqueOrThrowArgs>(args: SelectSubset<T, directoriesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__directoriesClient<$Result.GetResult<Prisma.$directoriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Directories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {directoriesFindFirstArgs} args - Arguments to find a Directories
     * @example
     * // Get one Directories
     * const directories = await prisma.directories.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends directoriesFindFirstArgs>(args?: SelectSubset<T, directoriesFindFirstArgs<ExtArgs>>): Prisma__directoriesClient<$Result.GetResult<Prisma.$directoriesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Directories that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {directoriesFindFirstOrThrowArgs} args - Arguments to find a Directories
     * @example
     * // Get one Directories
     * const directories = await prisma.directories.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends directoriesFindFirstOrThrowArgs>(args?: SelectSubset<T, directoriesFindFirstOrThrowArgs<ExtArgs>>): Prisma__directoriesClient<$Result.GetResult<Prisma.$directoriesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Directories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {directoriesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Directories
     * const directories = await prisma.directories.findMany()
     * 
     * // Get first 10 Directories
     * const directories = await prisma.directories.findMany({ take: 10 })
     * 
     * // Only select the `dir_id`
     * const directoriesWithDir_idOnly = await prisma.directories.findMany({ select: { dir_id: true } })
     * 
     */
    findMany<T extends directoriesFindManyArgs>(args?: SelectSubset<T, directoriesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$directoriesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Directories.
     * @param {directoriesCreateArgs} args - Arguments to create a Directories.
     * @example
     * // Create one Directories
     * const Directories = await prisma.directories.create({
     *   data: {
     *     // ... data to create a Directories
     *   }
     * })
     * 
     */
    create<T extends directoriesCreateArgs>(args: SelectSubset<T, directoriesCreateArgs<ExtArgs>>): Prisma__directoriesClient<$Result.GetResult<Prisma.$directoriesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Directories.
     * @param {directoriesCreateManyArgs} args - Arguments to create many Directories.
     * @example
     * // Create many Directories
     * const directories = await prisma.directories.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends directoriesCreateManyArgs>(args?: SelectSubset<T, directoriesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Directories.
     * @param {directoriesDeleteArgs} args - Arguments to delete one Directories.
     * @example
     * // Delete one Directories
     * const Directories = await prisma.directories.delete({
     *   where: {
     *     // ... filter to delete one Directories
     *   }
     * })
     * 
     */
    delete<T extends directoriesDeleteArgs>(args: SelectSubset<T, directoriesDeleteArgs<ExtArgs>>): Prisma__directoriesClient<$Result.GetResult<Prisma.$directoriesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Directories.
     * @param {directoriesUpdateArgs} args - Arguments to update one Directories.
     * @example
     * // Update one Directories
     * const directories = await prisma.directories.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends directoriesUpdateArgs>(args: SelectSubset<T, directoriesUpdateArgs<ExtArgs>>): Prisma__directoriesClient<$Result.GetResult<Prisma.$directoriesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Directories.
     * @param {directoriesDeleteManyArgs} args - Arguments to filter Directories to delete.
     * @example
     * // Delete a few Directories
     * const { count } = await prisma.directories.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends directoriesDeleteManyArgs>(args?: SelectSubset<T, directoriesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Directories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {directoriesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Directories
     * const directories = await prisma.directories.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends directoriesUpdateManyArgs>(args: SelectSubset<T, directoriesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Directories.
     * @param {directoriesUpsertArgs} args - Arguments to update or create a Directories.
     * @example
     * // Update or create a Directories
     * const directories = await prisma.directories.upsert({
     *   create: {
     *     // ... data to create a Directories
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Directories we want to update
     *   }
     * })
     */
    upsert<T extends directoriesUpsertArgs>(args: SelectSubset<T, directoriesUpsertArgs<ExtArgs>>): Prisma__directoriesClient<$Result.GetResult<Prisma.$directoriesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Directories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {directoriesCountArgs} args - Arguments to filter Directories to count.
     * @example
     * // Count the number of Directories
     * const count = await prisma.directories.count({
     *   where: {
     *     // ... the filter for the Directories we want to count
     *   }
     * })
    **/
    count<T extends directoriesCountArgs>(
      args?: Subset<T, directoriesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DirectoriesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Directories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DirectoriesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DirectoriesAggregateArgs>(args: Subset<T, DirectoriesAggregateArgs>): Prisma.PrismaPromise<GetDirectoriesAggregateType<T>>

    /**
     * Group by Directories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {directoriesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends directoriesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: directoriesGroupByArgs['orderBy'] }
        : { orderBy?: directoriesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, directoriesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDirectoriesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the directories model
   */
  readonly fields: directoriesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for directories.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__directoriesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    buckets<T extends bucketsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, bucketsDefaultArgs<ExtArgs>>): Prisma__bucketsClient<$Result.GetResult<Prisma.$bucketsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    directories<T extends directories$directoriesArgs<ExtArgs> = {}>(args?: Subset<T, directories$directoriesArgs<ExtArgs>>): Prisma__directoriesClient<$Result.GetResult<Prisma.$directoriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    other_directories<T extends directories$other_directoriesArgs<ExtArgs> = {}>(args?: Subset<T, directories$other_directoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$directoriesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    files<T extends directories$filesArgs<ExtArgs> = {}>(args?: Subset<T, directories$filesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$filesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    fs_access_tokens<T extends directories$fs_access_tokensArgs<ExtArgs> = {}>(args?: Subset<T, directories$fs_access_tokensArgs<ExtArgs>>): Prisma__fs_access_tokensClient<$Result.GetResult<Prisma.$fs_access_tokensPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the directories model
   */
  interface directoriesFieldRefs {
    readonly dir_id: FieldRef<"directories", 'Int'>
    readonly bucket_id: FieldRef<"directories", 'Int'>
    readonly parent_dir_id: FieldRef<"directories", 'Int'>
    readonly depth_level: FieldRef<"directories", 'Int'>
    readonly dir_name: FieldRef<"directories", 'String'>
    readonly dir_slug: FieldRef<"directories", 'String'>
    readonly path_in_slug: FieldRef<"directories", 'String'>
    readonly path_in_id: FieldRef<"directories", 'String'>
    readonly total_size_bytes: FieldRef<"directories", 'BigInt'>
    readonly created_at_unix: FieldRef<"directories", 'BigInt'>
    readonly updated_at_unix: FieldRef<"directories", 'BigInt'>
  }
    

  // Custom InputTypes
  /**
   * directories findUnique
   */
  export type directoriesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the directories
     */
    select?: directoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the directories
     */
    omit?: directoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: directoriesInclude<ExtArgs> | null
    /**
     * Filter, which directories to fetch.
     */
    where: directoriesWhereUniqueInput
  }

  /**
   * directories findUniqueOrThrow
   */
  export type directoriesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the directories
     */
    select?: directoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the directories
     */
    omit?: directoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: directoriesInclude<ExtArgs> | null
    /**
     * Filter, which directories to fetch.
     */
    where: directoriesWhereUniqueInput
  }

  /**
   * directories findFirst
   */
  export type directoriesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the directories
     */
    select?: directoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the directories
     */
    omit?: directoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: directoriesInclude<ExtArgs> | null
    /**
     * Filter, which directories to fetch.
     */
    where?: directoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of directories to fetch.
     */
    orderBy?: directoriesOrderByWithRelationInput | directoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for directories.
     */
    cursor?: directoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` directories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` directories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of directories.
     */
    distinct?: DirectoriesScalarFieldEnum | DirectoriesScalarFieldEnum[]
  }

  /**
   * directories findFirstOrThrow
   */
  export type directoriesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the directories
     */
    select?: directoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the directories
     */
    omit?: directoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: directoriesInclude<ExtArgs> | null
    /**
     * Filter, which directories to fetch.
     */
    where?: directoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of directories to fetch.
     */
    orderBy?: directoriesOrderByWithRelationInput | directoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for directories.
     */
    cursor?: directoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` directories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` directories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of directories.
     */
    distinct?: DirectoriesScalarFieldEnum | DirectoriesScalarFieldEnum[]
  }

  /**
   * directories findMany
   */
  export type directoriesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the directories
     */
    select?: directoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the directories
     */
    omit?: directoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: directoriesInclude<ExtArgs> | null
    /**
     * Filter, which directories to fetch.
     */
    where?: directoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of directories to fetch.
     */
    orderBy?: directoriesOrderByWithRelationInput | directoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing directories.
     */
    cursor?: directoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` directories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` directories.
     */
    skip?: number
    distinct?: DirectoriesScalarFieldEnum | DirectoriesScalarFieldEnum[]
  }

  /**
   * directories create
   */
  export type directoriesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the directories
     */
    select?: directoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the directories
     */
    omit?: directoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: directoriesInclude<ExtArgs> | null
    /**
     * The data needed to create a directories.
     */
    data: XOR<directoriesCreateInput, directoriesUncheckedCreateInput>
  }

  /**
   * directories createMany
   */
  export type directoriesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many directories.
     */
    data: directoriesCreateManyInput | directoriesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * directories update
   */
  export type directoriesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the directories
     */
    select?: directoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the directories
     */
    omit?: directoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: directoriesInclude<ExtArgs> | null
    /**
     * The data needed to update a directories.
     */
    data: XOR<directoriesUpdateInput, directoriesUncheckedUpdateInput>
    /**
     * Choose, which directories to update.
     */
    where: directoriesWhereUniqueInput
  }

  /**
   * directories updateMany
   */
  export type directoriesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update directories.
     */
    data: XOR<directoriesUpdateManyMutationInput, directoriesUncheckedUpdateManyInput>
    /**
     * Filter which directories to update
     */
    where?: directoriesWhereInput
    /**
     * Limit how many directories to update.
     */
    limit?: number
  }

  /**
   * directories upsert
   */
  export type directoriesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the directories
     */
    select?: directoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the directories
     */
    omit?: directoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: directoriesInclude<ExtArgs> | null
    /**
     * The filter to search for the directories to update in case it exists.
     */
    where: directoriesWhereUniqueInput
    /**
     * In case the directories found by the `where` argument doesn't exist, create a new directories with this data.
     */
    create: XOR<directoriesCreateInput, directoriesUncheckedCreateInput>
    /**
     * In case the directories was found with the provided `where` argument, update it with this data.
     */
    update: XOR<directoriesUpdateInput, directoriesUncheckedUpdateInput>
  }

  /**
   * directories delete
   */
  export type directoriesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the directories
     */
    select?: directoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the directories
     */
    omit?: directoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: directoriesInclude<ExtArgs> | null
    /**
     * Filter which directories to delete.
     */
    where: directoriesWhereUniqueInput
  }

  /**
   * directories deleteMany
   */
  export type directoriesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which directories to delete
     */
    where?: directoriesWhereInput
    /**
     * Limit how many directories to delete.
     */
    limit?: number
  }

  /**
   * directories.directories
   */
  export type directories$directoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the directories
     */
    select?: directoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the directories
     */
    omit?: directoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: directoriesInclude<ExtArgs> | null
    where?: directoriesWhereInput
  }

  /**
   * directories.other_directories
   */
  export type directories$other_directoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the directories
     */
    select?: directoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the directories
     */
    omit?: directoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: directoriesInclude<ExtArgs> | null
    where?: directoriesWhereInput
    orderBy?: directoriesOrderByWithRelationInput | directoriesOrderByWithRelationInput[]
    cursor?: directoriesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DirectoriesScalarFieldEnum | DirectoriesScalarFieldEnum[]
  }

  /**
   * directories.files
   */
  export type directories$filesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the files
     */
    select?: filesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the files
     */
    omit?: filesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: filesInclude<ExtArgs> | null
    where?: filesWhereInput
    orderBy?: filesOrderByWithRelationInput | filesOrderByWithRelationInput[]
    cursor?: filesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FilesScalarFieldEnum | FilesScalarFieldEnum[]
  }

  /**
   * directories.fs_access_tokens
   */
  export type directories$fs_access_tokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fs_access_tokens
     */
    select?: fs_access_tokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the fs_access_tokens
     */
    omit?: fs_access_tokensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: fs_access_tokensInclude<ExtArgs> | null
    where?: fs_access_tokensWhereInput
  }

  /**
   * directories without action
   */
  export type directoriesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the directories
     */
    select?: directoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the directories
     */
    omit?: directoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: directoriesInclude<ExtArgs> | null
  }


  /**
   * Model files
   */

  export type AggregateFiles = {
    _count: FilesCountAggregateOutputType | null
    _avg: FilesAvgAggregateOutputType | null
    _sum: FilesSumAggregateOutputType | null
    _min: FilesMinAggregateOutputType | null
    _max: FilesMaxAggregateOutputType | null
  }

  export type FilesAvgAggregateOutputType = {
    file_id: number | null
    bucket_id: number | null
    parent_dir_id: number | null
    size_bytes: number | null
    uploaded_by: number | null
    created_at_unix: number | null
    updated_at_unix: number | null
  }

  export type FilesSumAggregateOutputType = {
    file_id: number | null
    bucket_id: number | null
    parent_dir_id: number | null
    size_bytes: bigint | null
    uploaded_by: number | null
    created_at_unix: bigint | null
    updated_at_unix: bigint | null
  }

  export type FilesMinAggregateOutputType = {
    file_id: number | null
    bucket_id: number | null
    parent_dir_id: number | null
    file_name: string | null
    file_slug: string | null
    mime_type: string | null
    size_bytes: bigint | null
    checksum_sha256: string | null
    status: $Enums.files_status | null
    uploaded_by: number | null
    created_at_unix: bigint | null
    updated_at_unix: bigint | null
  }

  export type FilesMaxAggregateOutputType = {
    file_id: number | null
    bucket_id: number | null
    parent_dir_id: number | null
    file_name: string | null
    file_slug: string | null
    mime_type: string | null
    size_bytes: bigint | null
    checksum_sha256: string | null
    status: $Enums.files_status | null
    uploaded_by: number | null
    created_at_unix: bigint | null
    updated_at_unix: bigint | null
  }

  export type FilesCountAggregateOutputType = {
    file_id: number
    bucket_id: number
    parent_dir_id: number
    file_name: number
    file_slug: number
    mime_type: number
    size_bytes: number
    checksum_sha256: number
    status: number
    uploaded_by: number
    created_at_unix: number
    updated_at_unix: number
    _all: number
  }


  export type FilesAvgAggregateInputType = {
    file_id?: true
    bucket_id?: true
    parent_dir_id?: true
    size_bytes?: true
    uploaded_by?: true
    created_at_unix?: true
    updated_at_unix?: true
  }

  export type FilesSumAggregateInputType = {
    file_id?: true
    bucket_id?: true
    parent_dir_id?: true
    size_bytes?: true
    uploaded_by?: true
    created_at_unix?: true
    updated_at_unix?: true
  }

  export type FilesMinAggregateInputType = {
    file_id?: true
    bucket_id?: true
    parent_dir_id?: true
    file_name?: true
    file_slug?: true
    mime_type?: true
    size_bytes?: true
    checksum_sha256?: true
    status?: true
    uploaded_by?: true
    created_at_unix?: true
    updated_at_unix?: true
  }

  export type FilesMaxAggregateInputType = {
    file_id?: true
    bucket_id?: true
    parent_dir_id?: true
    file_name?: true
    file_slug?: true
    mime_type?: true
    size_bytes?: true
    checksum_sha256?: true
    status?: true
    uploaded_by?: true
    created_at_unix?: true
    updated_at_unix?: true
  }

  export type FilesCountAggregateInputType = {
    file_id?: true
    bucket_id?: true
    parent_dir_id?: true
    file_name?: true
    file_slug?: true
    mime_type?: true
    size_bytes?: true
    checksum_sha256?: true
    status?: true
    uploaded_by?: true
    created_at_unix?: true
    updated_at_unix?: true
    _all?: true
  }

  export type FilesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which files to aggregate.
     */
    where?: filesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of files to fetch.
     */
    orderBy?: filesOrderByWithRelationInput | filesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: filesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` files from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` files.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned files
    **/
    _count?: true | FilesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FilesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FilesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FilesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FilesMaxAggregateInputType
  }

  export type GetFilesAggregateType<T extends FilesAggregateArgs> = {
        [P in keyof T & keyof AggregateFiles]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFiles[P]>
      : GetScalarType<T[P], AggregateFiles[P]>
  }




  export type filesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: filesWhereInput
    orderBy?: filesOrderByWithAggregationInput | filesOrderByWithAggregationInput[]
    by: FilesScalarFieldEnum[] | FilesScalarFieldEnum
    having?: filesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FilesCountAggregateInputType | true
    _avg?: FilesAvgAggregateInputType
    _sum?: FilesSumAggregateInputType
    _min?: FilesMinAggregateInputType
    _max?: FilesMaxAggregateInputType
  }

  export type FilesGroupByOutputType = {
    file_id: number
    bucket_id: number
    parent_dir_id: number | null
    file_name: string
    file_slug: string
    mime_type: string
    size_bytes: bigint
    checksum_sha256: string | null
    status: $Enums.files_status
    uploaded_by: number
    created_at_unix: bigint
    updated_at_unix: bigint | null
    _count: FilesCountAggregateOutputType | null
    _avg: FilesAvgAggregateOutputType | null
    _sum: FilesSumAggregateOutputType | null
    _min: FilesMinAggregateOutputType | null
    _max: FilesMaxAggregateOutputType | null
  }

  type GetFilesGroupByPayload<T extends filesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FilesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FilesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FilesGroupByOutputType[P]>
            : GetScalarType<T[P], FilesGroupByOutputType[P]>
        }
      >
    >


  export type filesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    file_id?: boolean
    bucket_id?: boolean
    parent_dir_id?: boolean
    file_name?: boolean
    file_slug?: boolean
    mime_type?: boolean
    size_bytes?: boolean
    checksum_sha256?: boolean
    status?: boolean
    uploaded_by?: boolean
    created_at_unix?: boolean
    updated_at_unix?: boolean
    buckets?: boolean | bucketsDefaultArgs<ExtArgs>
    directories?: boolean | files$directoriesArgs<ExtArgs>
  }, ExtArgs["result"]["files"]>



  export type filesSelectScalar = {
    file_id?: boolean
    bucket_id?: boolean
    parent_dir_id?: boolean
    file_name?: boolean
    file_slug?: boolean
    mime_type?: boolean
    size_bytes?: boolean
    checksum_sha256?: boolean
    status?: boolean
    uploaded_by?: boolean
    created_at_unix?: boolean
    updated_at_unix?: boolean
  }

  export type filesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"file_id" | "bucket_id" | "parent_dir_id" | "file_name" | "file_slug" | "mime_type" | "size_bytes" | "checksum_sha256" | "status" | "uploaded_by" | "created_at_unix" | "updated_at_unix", ExtArgs["result"]["files"]>
  export type filesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    buckets?: boolean | bucketsDefaultArgs<ExtArgs>
    directories?: boolean | files$directoriesArgs<ExtArgs>
  }

  export type $filesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "files"
    objects: {
      buckets: Prisma.$bucketsPayload<ExtArgs>
      directories: Prisma.$directoriesPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      file_id: number
      bucket_id: number
      parent_dir_id: number | null
      file_name: string
      file_slug: string
      mime_type: string
      size_bytes: bigint
      checksum_sha256: string | null
      status: $Enums.files_status
      uploaded_by: number
      created_at_unix: bigint
      updated_at_unix: bigint | null
    }, ExtArgs["result"]["files"]>
    composites: {}
  }

  type filesGetPayload<S extends boolean | null | undefined | filesDefaultArgs> = $Result.GetResult<Prisma.$filesPayload, S>

  type filesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<filesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FilesCountAggregateInputType | true
    }

  export interface filesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['files'], meta: { name: 'files' } }
    /**
     * Find zero or one Files that matches the filter.
     * @param {filesFindUniqueArgs} args - Arguments to find a Files
     * @example
     * // Get one Files
     * const files = await prisma.files.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends filesFindUniqueArgs>(args: SelectSubset<T, filesFindUniqueArgs<ExtArgs>>): Prisma__filesClient<$Result.GetResult<Prisma.$filesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Files that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {filesFindUniqueOrThrowArgs} args - Arguments to find a Files
     * @example
     * // Get one Files
     * const files = await prisma.files.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends filesFindUniqueOrThrowArgs>(args: SelectSubset<T, filesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__filesClient<$Result.GetResult<Prisma.$filesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Files that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {filesFindFirstArgs} args - Arguments to find a Files
     * @example
     * // Get one Files
     * const files = await prisma.files.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends filesFindFirstArgs>(args?: SelectSubset<T, filesFindFirstArgs<ExtArgs>>): Prisma__filesClient<$Result.GetResult<Prisma.$filesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Files that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {filesFindFirstOrThrowArgs} args - Arguments to find a Files
     * @example
     * // Get one Files
     * const files = await prisma.files.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends filesFindFirstOrThrowArgs>(args?: SelectSubset<T, filesFindFirstOrThrowArgs<ExtArgs>>): Prisma__filesClient<$Result.GetResult<Prisma.$filesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Files that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {filesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Files
     * const files = await prisma.files.findMany()
     * 
     * // Get first 10 Files
     * const files = await prisma.files.findMany({ take: 10 })
     * 
     * // Only select the `file_id`
     * const filesWithFile_idOnly = await prisma.files.findMany({ select: { file_id: true } })
     * 
     */
    findMany<T extends filesFindManyArgs>(args?: SelectSubset<T, filesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$filesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Files.
     * @param {filesCreateArgs} args - Arguments to create a Files.
     * @example
     * // Create one Files
     * const Files = await prisma.files.create({
     *   data: {
     *     // ... data to create a Files
     *   }
     * })
     * 
     */
    create<T extends filesCreateArgs>(args: SelectSubset<T, filesCreateArgs<ExtArgs>>): Prisma__filesClient<$Result.GetResult<Prisma.$filesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Files.
     * @param {filesCreateManyArgs} args - Arguments to create many Files.
     * @example
     * // Create many Files
     * const files = await prisma.files.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends filesCreateManyArgs>(args?: SelectSubset<T, filesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Files.
     * @param {filesDeleteArgs} args - Arguments to delete one Files.
     * @example
     * // Delete one Files
     * const Files = await prisma.files.delete({
     *   where: {
     *     // ... filter to delete one Files
     *   }
     * })
     * 
     */
    delete<T extends filesDeleteArgs>(args: SelectSubset<T, filesDeleteArgs<ExtArgs>>): Prisma__filesClient<$Result.GetResult<Prisma.$filesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Files.
     * @param {filesUpdateArgs} args - Arguments to update one Files.
     * @example
     * // Update one Files
     * const files = await prisma.files.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends filesUpdateArgs>(args: SelectSubset<T, filesUpdateArgs<ExtArgs>>): Prisma__filesClient<$Result.GetResult<Prisma.$filesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Files.
     * @param {filesDeleteManyArgs} args - Arguments to filter Files to delete.
     * @example
     * // Delete a few Files
     * const { count } = await prisma.files.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends filesDeleteManyArgs>(args?: SelectSubset<T, filesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Files.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {filesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Files
     * const files = await prisma.files.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends filesUpdateManyArgs>(args: SelectSubset<T, filesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Files.
     * @param {filesUpsertArgs} args - Arguments to update or create a Files.
     * @example
     * // Update or create a Files
     * const files = await prisma.files.upsert({
     *   create: {
     *     // ... data to create a Files
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Files we want to update
     *   }
     * })
     */
    upsert<T extends filesUpsertArgs>(args: SelectSubset<T, filesUpsertArgs<ExtArgs>>): Prisma__filesClient<$Result.GetResult<Prisma.$filesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Files.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {filesCountArgs} args - Arguments to filter Files to count.
     * @example
     * // Count the number of Files
     * const count = await prisma.files.count({
     *   where: {
     *     // ... the filter for the Files we want to count
     *   }
     * })
    **/
    count<T extends filesCountArgs>(
      args?: Subset<T, filesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FilesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Files.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FilesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FilesAggregateArgs>(args: Subset<T, FilesAggregateArgs>): Prisma.PrismaPromise<GetFilesAggregateType<T>>

    /**
     * Group by Files.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {filesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends filesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: filesGroupByArgs['orderBy'] }
        : { orderBy?: filesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, filesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFilesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the files model
   */
  readonly fields: filesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for files.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__filesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    buckets<T extends bucketsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, bucketsDefaultArgs<ExtArgs>>): Prisma__bucketsClient<$Result.GetResult<Prisma.$bucketsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    directories<T extends files$directoriesArgs<ExtArgs> = {}>(args?: Subset<T, files$directoriesArgs<ExtArgs>>): Prisma__directoriesClient<$Result.GetResult<Prisma.$directoriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the files model
   */
  interface filesFieldRefs {
    readonly file_id: FieldRef<"files", 'Int'>
    readonly bucket_id: FieldRef<"files", 'Int'>
    readonly parent_dir_id: FieldRef<"files", 'Int'>
    readonly file_name: FieldRef<"files", 'String'>
    readonly file_slug: FieldRef<"files", 'String'>
    readonly mime_type: FieldRef<"files", 'String'>
    readonly size_bytes: FieldRef<"files", 'BigInt'>
    readonly checksum_sha256: FieldRef<"files", 'String'>
    readonly status: FieldRef<"files", 'files_status'>
    readonly uploaded_by: FieldRef<"files", 'Int'>
    readonly created_at_unix: FieldRef<"files", 'BigInt'>
    readonly updated_at_unix: FieldRef<"files", 'BigInt'>
  }
    

  // Custom InputTypes
  /**
   * files findUnique
   */
  export type filesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the files
     */
    select?: filesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the files
     */
    omit?: filesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: filesInclude<ExtArgs> | null
    /**
     * Filter, which files to fetch.
     */
    where: filesWhereUniqueInput
  }

  /**
   * files findUniqueOrThrow
   */
  export type filesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the files
     */
    select?: filesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the files
     */
    omit?: filesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: filesInclude<ExtArgs> | null
    /**
     * Filter, which files to fetch.
     */
    where: filesWhereUniqueInput
  }

  /**
   * files findFirst
   */
  export type filesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the files
     */
    select?: filesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the files
     */
    omit?: filesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: filesInclude<ExtArgs> | null
    /**
     * Filter, which files to fetch.
     */
    where?: filesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of files to fetch.
     */
    orderBy?: filesOrderByWithRelationInput | filesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for files.
     */
    cursor?: filesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` files from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` files.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of files.
     */
    distinct?: FilesScalarFieldEnum | FilesScalarFieldEnum[]
  }

  /**
   * files findFirstOrThrow
   */
  export type filesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the files
     */
    select?: filesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the files
     */
    omit?: filesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: filesInclude<ExtArgs> | null
    /**
     * Filter, which files to fetch.
     */
    where?: filesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of files to fetch.
     */
    orderBy?: filesOrderByWithRelationInput | filesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for files.
     */
    cursor?: filesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` files from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` files.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of files.
     */
    distinct?: FilesScalarFieldEnum | FilesScalarFieldEnum[]
  }

  /**
   * files findMany
   */
  export type filesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the files
     */
    select?: filesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the files
     */
    omit?: filesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: filesInclude<ExtArgs> | null
    /**
     * Filter, which files to fetch.
     */
    where?: filesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of files to fetch.
     */
    orderBy?: filesOrderByWithRelationInput | filesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing files.
     */
    cursor?: filesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` files from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` files.
     */
    skip?: number
    distinct?: FilesScalarFieldEnum | FilesScalarFieldEnum[]
  }

  /**
   * files create
   */
  export type filesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the files
     */
    select?: filesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the files
     */
    omit?: filesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: filesInclude<ExtArgs> | null
    /**
     * The data needed to create a files.
     */
    data: XOR<filesCreateInput, filesUncheckedCreateInput>
  }

  /**
   * files createMany
   */
  export type filesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many files.
     */
    data: filesCreateManyInput | filesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * files update
   */
  export type filesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the files
     */
    select?: filesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the files
     */
    omit?: filesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: filesInclude<ExtArgs> | null
    /**
     * The data needed to update a files.
     */
    data: XOR<filesUpdateInput, filesUncheckedUpdateInput>
    /**
     * Choose, which files to update.
     */
    where: filesWhereUniqueInput
  }

  /**
   * files updateMany
   */
  export type filesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update files.
     */
    data: XOR<filesUpdateManyMutationInput, filesUncheckedUpdateManyInput>
    /**
     * Filter which files to update
     */
    where?: filesWhereInput
    /**
     * Limit how many files to update.
     */
    limit?: number
  }

  /**
   * files upsert
   */
  export type filesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the files
     */
    select?: filesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the files
     */
    omit?: filesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: filesInclude<ExtArgs> | null
    /**
     * The filter to search for the files to update in case it exists.
     */
    where: filesWhereUniqueInput
    /**
     * In case the files found by the `where` argument doesn't exist, create a new files with this data.
     */
    create: XOR<filesCreateInput, filesUncheckedCreateInput>
    /**
     * In case the files was found with the provided `where` argument, update it with this data.
     */
    update: XOR<filesUpdateInput, filesUncheckedUpdateInput>
  }

  /**
   * files delete
   */
  export type filesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the files
     */
    select?: filesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the files
     */
    omit?: filesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: filesInclude<ExtArgs> | null
    /**
     * Filter which files to delete.
     */
    where: filesWhereUniqueInput
  }

  /**
   * files deleteMany
   */
  export type filesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which files to delete
     */
    where?: filesWhereInput
    /**
     * Limit how many files to delete.
     */
    limit?: number
  }

  /**
   * files.directories
   */
  export type files$directoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the directories
     */
    select?: directoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the directories
     */
    omit?: directoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: directoriesInclude<ExtArgs> | null
    where?: directoriesWhereInput
  }

  /**
   * files without action
   */
  export type filesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the files
     */
    select?: filesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the files
     */
    omit?: filesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: filesInclude<ExtArgs> | null
  }


  /**
   * Model fs_access_tokens
   */

  export type AggregateFs_access_tokens = {
    _count: Fs_access_tokensCountAggregateOutputType | null
    _avg: Fs_access_tokensAvgAggregateOutputType | null
    _sum: Fs_access_tokensSumAggregateOutputType | null
    _min: Fs_access_tokensMinAggregateOutputType | null
    _max: Fs_access_tokensMaxAggregateOutputType | null
  }

  export type Fs_access_tokensAvgAggregateOutputType = {
    token_id: number | null
    bucket_id: number | null
    dir_id: number | null
    token_random_code: number | null
    expires_at_unix: number | null
    created_by: number | null
    created_at_unix: number | null
  }

  export type Fs_access_tokensSumAggregateOutputType = {
    token_id: number | null
    bucket_id: number | null
    dir_id: number | null
    token_random_code: number | null
    expires_at_unix: bigint | null
    created_by: number | null
    created_at_unix: bigint | null
  }

  export type Fs_access_tokensMinAggregateOutputType = {
    token_id: number | null
    bucket_id: number | null
    dir_id: number | null
    token_random_code: number | null
    token_name: string | null
    token_slug: string | null
    issued_to: string | null
    expires_at_unix: bigint | null
    created_by: number | null
    created_at_unix: bigint | null
  }

  export type Fs_access_tokensMaxAggregateOutputType = {
    token_id: number | null
    bucket_id: number | null
    dir_id: number | null
    token_random_code: number | null
    token_name: string | null
    token_slug: string | null
    issued_to: string | null
    expires_at_unix: bigint | null
    created_by: number | null
    created_at_unix: bigint | null
  }

  export type Fs_access_tokensCountAggregateOutputType = {
    token_id: number
    bucket_id: number
    dir_id: number
    token_random_code: number
    token_name: number
    token_slug: number
    issued_to: number
    expires_at_unix: number
    created_by: number
    created_at_unix: number
    _all: number
  }


  export type Fs_access_tokensAvgAggregateInputType = {
    token_id?: true
    bucket_id?: true
    dir_id?: true
    token_random_code?: true
    expires_at_unix?: true
    created_by?: true
    created_at_unix?: true
  }

  export type Fs_access_tokensSumAggregateInputType = {
    token_id?: true
    bucket_id?: true
    dir_id?: true
    token_random_code?: true
    expires_at_unix?: true
    created_by?: true
    created_at_unix?: true
  }

  export type Fs_access_tokensMinAggregateInputType = {
    token_id?: true
    bucket_id?: true
    dir_id?: true
    token_random_code?: true
    token_name?: true
    token_slug?: true
    issued_to?: true
    expires_at_unix?: true
    created_by?: true
    created_at_unix?: true
  }

  export type Fs_access_tokensMaxAggregateInputType = {
    token_id?: true
    bucket_id?: true
    dir_id?: true
    token_random_code?: true
    token_name?: true
    token_slug?: true
    issued_to?: true
    expires_at_unix?: true
    created_by?: true
    created_at_unix?: true
  }

  export type Fs_access_tokensCountAggregateInputType = {
    token_id?: true
    bucket_id?: true
    dir_id?: true
    token_random_code?: true
    token_name?: true
    token_slug?: true
    issued_to?: true
    expires_at_unix?: true
    created_by?: true
    created_at_unix?: true
    _all?: true
  }

  export type Fs_access_tokensAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which fs_access_tokens to aggregate.
     */
    where?: fs_access_tokensWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of fs_access_tokens to fetch.
     */
    orderBy?: fs_access_tokensOrderByWithRelationInput | fs_access_tokensOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: fs_access_tokensWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` fs_access_tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` fs_access_tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned fs_access_tokens
    **/
    _count?: true | Fs_access_tokensCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Fs_access_tokensAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Fs_access_tokensSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Fs_access_tokensMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Fs_access_tokensMaxAggregateInputType
  }

  export type GetFs_access_tokensAggregateType<T extends Fs_access_tokensAggregateArgs> = {
        [P in keyof T & keyof AggregateFs_access_tokens]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFs_access_tokens[P]>
      : GetScalarType<T[P], AggregateFs_access_tokens[P]>
  }




  export type fs_access_tokensGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: fs_access_tokensWhereInput
    orderBy?: fs_access_tokensOrderByWithAggregationInput | fs_access_tokensOrderByWithAggregationInput[]
    by: Fs_access_tokensScalarFieldEnum[] | Fs_access_tokensScalarFieldEnum
    having?: fs_access_tokensScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Fs_access_tokensCountAggregateInputType | true
    _avg?: Fs_access_tokensAvgAggregateInputType
    _sum?: Fs_access_tokensSumAggregateInputType
    _min?: Fs_access_tokensMinAggregateInputType
    _max?: Fs_access_tokensMaxAggregateInputType
  }

  export type Fs_access_tokensGroupByOutputType = {
    token_id: number
    bucket_id: number
    dir_id: number
    token_random_code: number
    token_name: string
    token_slug: string
    issued_to: string | null
    expires_at_unix: bigint | null
    created_by: number | null
    created_at_unix: bigint
    _count: Fs_access_tokensCountAggregateOutputType | null
    _avg: Fs_access_tokensAvgAggregateOutputType | null
    _sum: Fs_access_tokensSumAggregateOutputType | null
    _min: Fs_access_tokensMinAggregateOutputType | null
    _max: Fs_access_tokensMaxAggregateOutputType | null
  }

  type GetFs_access_tokensGroupByPayload<T extends fs_access_tokensGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Fs_access_tokensGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Fs_access_tokensGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Fs_access_tokensGroupByOutputType[P]>
            : GetScalarType<T[P], Fs_access_tokensGroupByOutputType[P]>
        }
      >
    >


  export type fs_access_tokensSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    token_id?: boolean
    bucket_id?: boolean
    dir_id?: boolean
    token_random_code?: boolean
    token_name?: boolean
    token_slug?: boolean
    issued_to?: boolean
    expires_at_unix?: boolean
    created_by?: boolean
    created_at_unix?: boolean
    buckets?: boolean | bucketsDefaultArgs<ExtArgs>
    directories?: boolean | directoriesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fs_access_tokens"]>



  export type fs_access_tokensSelectScalar = {
    token_id?: boolean
    bucket_id?: boolean
    dir_id?: boolean
    token_random_code?: boolean
    token_name?: boolean
    token_slug?: boolean
    issued_to?: boolean
    expires_at_unix?: boolean
    created_by?: boolean
    created_at_unix?: boolean
  }

  export type fs_access_tokensOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"token_id" | "bucket_id" | "dir_id" | "token_random_code" | "token_name" | "token_slug" | "issued_to" | "expires_at_unix" | "created_by" | "created_at_unix", ExtArgs["result"]["fs_access_tokens"]>
  export type fs_access_tokensInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    buckets?: boolean | bucketsDefaultArgs<ExtArgs>
    directories?: boolean | directoriesDefaultArgs<ExtArgs>
  }

  export type $fs_access_tokensPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "fs_access_tokens"
    objects: {
      buckets: Prisma.$bucketsPayload<ExtArgs>
      directories: Prisma.$directoriesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      token_id: number
      bucket_id: number
      dir_id: number
      token_random_code: number
      token_name: string
      token_slug: string
      issued_to: string | null
      expires_at_unix: bigint | null
      created_by: number | null
      created_at_unix: bigint
    }, ExtArgs["result"]["fs_access_tokens"]>
    composites: {}
  }

  type fs_access_tokensGetPayload<S extends boolean | null | undefined | fs_access_tokensDefaultArgs> = $Result.GetResult<Prisma.$fs_access_tokensPayload, S>

  type fs_access_tokensCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<fs_access_tokensFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Fs_access_tokensCountAggregateInputType | true
    }

  export interface fs_access_tokensDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['fs_access_tokens'], meta: { name: 'fs_access_tokens' } }
    /**
     * Find zero or one Fs_access_tokens that matches the filter.
     * @param {fs_access_tokensFindUniqueArgs} args - Arguments to find a Fs_access_tokens
     * @example
     * // Get one Fs_access_tokens
     * const fs_access_tokens = await prisma.fs_access_tokens.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends fs_access_tokensFindUniqueArgs>(args: SelectSubset<T, fs_access_tokensFindUniqueArgs<ExtArgs>>): Prisma__fs_access_tokensClient<$Result.GetResult<Prisma.$fs_access_tokensPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Fs_access_tokens that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {fs_access_tokensFindUniqueOrThrowArgs} args - Arguments to find a Fs_access_tokens
     * @example
     * // Get one Fs_access_tokens
     * const fs_access_tokens = await prisma.fs_access_tokens.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends fs_access_tokensFindUniqueOrThrowArgs>(args: SelectSubset<T, fs_access_tokensFindUniqueOrThrowArgs<ExtArgs>>): Prisma__fs_access_tokensClient<$Result.GetResult<Prisma.$fs_access_tokensPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Fs_access_tokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {fs_access_tokensFindFirstArgs} args - Arguments to find a Fs_access_tokens
     * @example
     * // Get one Fs_access_tokens
     * const fs_access_tokens = await prisma.fs_access_tokens.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends fs_access_tokensFindFirstArgs>(args?: SelectSubset<T, fs_access_tokensFindFirstArgs<ExtArgs>>): Prisma__fs_access_tokensClient<$Result.GetResult<Prisma.$fs_access_tokensPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Fs_access_tokens that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {fs_access_tokensFindFirstOrThrowArgs} args - Arguments to find a Fs_access_tokens
     * @example
     * // Get one Fs_access_tokens
     * const fs_access_tokens = await prisma.fs_access_tokens.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends fs_access_tokensFindFirstOrThrowArgs>(args?: SelectSubset<T, fs_access_tokensFindFirstOrThrowArgs<ExtArgs>>): Prisma__fs_access_tokensClient<$Result.GetResult<Prisma.$fs_access_tokensPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Fs_access_tokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {fs_access_tokensFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Fs_access_tokens
     * const fs_access_tokens = await prisma.fs_access_tokens.findMany()
     * 
     * // Get first 10 Fs_access_tokens
     * const fs_access_tokens = await prisma.fs_access_tokens.findMany({ take: 10 })
     * 
     * // Only select the `token_id`
     * const fs_access_tokensWithToken_idOnly = await prisma.fs_access_tokens.findMany({ select: { token_id: true } })
     * 
     */
    findMany<T extends fs_access_tokensFindManyArgs>(args?: SelectSubset<T, fs_access_tokensFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$fs_access_tokensPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Fs_access_tokens.
     * @param {fs_access_tokensCreateArgs} args - Arguments to create a Fs_access_tokens.
     * @example
     * // Create one Fs_access_tokens
     * const Fs_access_tokens = await prisma.fs_access_tokens.create({
     *   data: {
     *     // ... data to create a Fs_access_tokens
     *   }
     * })
     * 
     */
    create<T extends fs_access_tokensCreateArgs>(args: SelectSubset<T, fs_access_tokensCreateArgs<ExtArgs>>): Prisma__fs_access_tokensClient<$Result.GetResult<Prisma.$fs_access_tokensPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Fs_access_tokens.
     * @param {fs_access_tokensCreateManyArgs} args - Arguments to create many Fs_access_tokens.
     * @example
     * // Create many Fs_access_tokens
     * const fs_access_tokens = await prisma.fs_access_tokens.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends fs_access_tokensCreateManyArgs>(args?: SelectSubset<T, fs_access_tokensCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Fs_access_tokens.
     * @param {fs_access_tokensDeleteArgs} args - Arguments to delete one Fs_access_tokens.
     * @example
     * // Delete one Fs_access_tokens
     * const Fs_access_tokens = await prisma.fs_access_tokens.delete({
     *   where: {
     *     // ... filter to delete one Fs_access_tokens
     *   }
     * })
     * 
     */
    delete<T extends fs_access_tokensDeleteArgs>(args: SelectSubset<T, fs_access_tokensDeleteArgs<ExtArgs>>): Prisma__fs_access_tokensClient<$Result.GetResult<Prisma.$fs_access_tokensPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Fs_access_tokens.
     * @param {fs_access_tokensUpdateArgs} args - Arguments to update one Fs_access_tokens.
     * @example
     * // Update one Fs_access_tokens
     * const fs_access_tokens = await prisma.fs_access_tokens.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends fs_access_tokensUpdateArgs>(args: SelectSubset<T, fs_access_tokensUpdateArgs<ExtArgs>>): Prisma__fs_access_tokensClient<$Result.GetResult<Prisma.$fs_access_tokensPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Fs_access_tokens.
     * @param {fs_access_tokensDeleteManyArgs} args - Arguments to filter Fs_access_tokens to delete.
     * @example
     * // Delete a few Fs_access_tokens
     * const { count } = await prisma.fs_access_tokens.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends fs_access_tokensDeleteManyArgs>(args?: SelectSubset<T, fs_access_tokensDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Fs_access_tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {fs_access_tokensUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Fs_access_tokens
     * const fs_access_tokens = await prisma.fs_access_tokens.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends fs_access_tokensUpdateManyArgs>(args: SelectSubset<T, fs_access_tokensUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Fs_access_tokens.
     * @param {fs_access_tokensUpsertArgs} args - Arguments to update or create a Fs_access_tokens.
     * @example
     * // Update or create a Fs_access_tokens
     * const fs_access_tokens = await prisma.fs_access_tokens.upsert({
     *   create: {
     *     // ... data to create a Fs_access_tokens
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Fs_access_tokens we want to update
     *   }
     * })
     */
    upsert<T extends fs_access_tokensUpsertArgs>(args: SelectSubset<T, fs_access_tokensUpsertArgs<ExtArgs>>): Prisma__fs_access_tokensClient<$Result.GetResult<Prisma.$fs_access_tokensPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Fs_access_tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {fs_access_tokensCountArgs} args - Arguments to filter Fs_access_tokens to count.
     * @example
     * // Count the number of Fs_access_tokens
     * const count = await prisma.fs_access_tokens.count({
     *   where: {
     *     // ... the filter for the Fs_access_tokens we want to count
     *   }
     * })
    **/
    count<T extends fs_access_tokensCountArgs>(
      args?: Subset<T, fs_access_tokensCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Fs_access_tokensCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Fs_access_tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Fs_access_tokensAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Fs_access_tokensAggregateArgs>(args: Subset<T, Fs_access_tokensAggregateArgs>): Prisma.PrismaPromise<GetFs_access_tokensAggregateType<T>>

    /**
     * Group by Fs_access_tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {fs_access_tokensGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends fs_access_tokensGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: fs_access_tokensGroupByArgs['orderBy'] }
        : { orderBy?: fs_access_tokensGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, fs_access_tokensGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFs_access_tokensGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the fs_access_tokens model
   */
  readonly fields: fs_access_tokensFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for fs_access_tokens.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__fs_access_tokensClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    buckets<T extends bucketsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, bucketsDefaultArgs<ExtArgs>>): Prisma__bucketsClient<$Result.GetResult<Prisma.$bucketsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    directories<T extends directoriesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, directoriesDefaultArgs<ExtArgs>>): Prisma__directoriesClient<$Result.GetResult<Prisma.$directoriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the fs_access_tokens model
   */
  interface fs_access_tokensFieldRefs {
    readonly token_id: FieldRef<"fs_access_tokens", 'Int'>
    readonly bucket_id: FieldRef<"fs_access_tokens", 'Int'>
    readonly dir_id: FieldRef<"fs_access_tokens", 'Int'>
    readonly token_random_code: FieldRef<"fs_access_tokens", 'Int'>
    readonly token_name: FieldRef<"fs_access_tokens", 'String'>
    readonly token_slug: FieldRef<"fs_access_tokens", 'String'>
    readonly issued_to: FieldRef<"fs_access_tokens", 'String'>
    readonly expires_at_unix: FieldRef<"fs_access_tokens", 'BigInt'>
    readonly created_by: FieldRef<"fs_access_tokens", 'Int'>
    readonly created_at_unix: FieldRef<"fs_access_tokens", 'BigInt'>
  }
    

  // Custom InputTypes
  /**
   * fs_access_tokens findUnique
   */
  export type fs_access_tokensFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fs_access_tokens
     */
    select?: fs_access_tokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the fs_access_tokens
     */
    omit?: fs_access_tokensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: fs_access_tokensInclude<ExtArgs> | null
    /**
     * Filter, which fs_access_tokens to fetch.
     */
    where: fs_access_tokensWhereUniqueInput
  }

  /**
   * fs_access_tokens findUniqueOrThrow
   */
  export type fs_access_tokensFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fs_access_tokens
     */
    select?: fs_access_tokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the fs_access_tokens
     */
    omit?: fs_access_tokensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: fs_access_tokensInclude<ExtArgs> | null
    /**
     * Filter, which fs_access_tokens to fetch.
     */
    where: fs_access_tokensWhereUniqueInput
  }

  /**
   * fs_access_tokens findFirst
   */
  export type fs_access_tokensFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fs_access_tokens
     */
    select?: fs_access_tokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the fs_access_tokens
     */
    omit?: fs_access_tokensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: fs_access_tokensInclude<ExtArgs> | null
    /**
     * Filter, which fs_access_tokens to fetch.
     */
    where?: fs_access_tokensWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of fs_access_tokens to fetch.
     */
    orderBy?: fs_access_tokensOrderByWithRelationInput | fs_access_tokensOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for fs_access_tokens.
     */
    cursor?: fs_access_tokensWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` fs_access_tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` fs_access_tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of fs_access_tokens.
     */
    distinct?: Fs_access_tokensScalarFieldEnum | Fs_access_tokensScalarFieldEnum[]
  }

  /**
   * fs_access_tokens findFirstOrThrow
   */
  export type fs_access_tokensFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fs_access_tokens
     */
    select?: fs_access_tokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the fs_access_tokens
     */
    omit?: fs_access_tokensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: fs_access_tokensInclude<ExtArgs> | null
    /**
     * Filter, which fs_access_tokens to fetch.
     */
    where?: fs_access_tokensWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of fs_access_tokens to fetch.
     */
    orderBy?: fs_access_tokensOrderByWithRelationInput | fs_access_tokensOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for fs_access_tokens.
     */
    cursor?: fs_access_tokensWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` fs_access_tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` fs_access_tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of fs_access_tokens.
     */
    distinct?: Fs_access_tokensScalarFieldEnum | Fs_access_tokensScalarFieldEnum[]
  }

  /**
   * fs_access_tokens findMany
   */
  export type fs_access_tokensFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fs_access_tokens
     */
    select?: fs_access_tokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the fs_access_tokens
     */
    omit?: fs_access_tokensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: fs_access_tokensInclude<ExtArgs> | null
    /**
     * Filter, which fs_access_tokens to fetch.
     */
    where?: fs_access_tokensWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of fs_access_tokens to fetch.
     */
    orderBy?: fs_access_tokensOrderByWithRelationInput | fs_access_tokensOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing fs_access_tokens.
     */
    cursor?: fs_access_tokensWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` fs_access_tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` fs_access_tokens.
     */
    skip?: number
    distinct?: Fs_access_tokensScalarFieldEnum | Fs_access_tokensScalarFieldEnum[]
  }

  /**
   * fs_access_tokens create
   */
  export type fs_access_tokensCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fs_access_tokens
     */
    select?: fs_access_tokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the fs_access_tokens
     */
    omit?: fs_access_tokensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: fs_access_tokensInclude<ExtArgs> | null
    /**
     * The data needed to create a fs_access_tokens.
     */
    data: XOR<fs_access_tokensCreateInput, fs_access_tokensUncheckedCreateInput>
  }

  /**
   * fs_access_tokens createMany
   */
  export type fs_access_tokensCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many fs_access_tokens.
     */
    data: fs_access_tokensCreateManyInput | fs_access_tokensCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * fs_access_tokens update
   */
  export type fs_access_tokensUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fs_access_tokens
     */
    select?: fs_access_tokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the fs_access_tokens
     */
    omit?: fs_access_tokensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: fs_access_tokensInclude<ExtArgs> | null
    /**
     * The data needed to update a fs_access_tokens.
     */
    data: XOR<fs_access_tokensUpdateInput, fs_access_tokensUncheckedUpdateInput>
    /**
     * Choose, which fs_access_tokens to update.
     */
    where: fs_access_tokensWhereUniqueInput
  }

  /**
   * fs_access_tokens updateMany
   */
  export type fs_access_tokensUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update fs_access_tokens.
     */
    data: XOR<fs_access_tokensUpdateManyMutationInput, fs_access_tokensUncheckedUpdateManyInput>
    /**
     * Filter which fs_access_tokens to update
     */
    where?: fs_access_tokensWhereInput
    /**
     * Limit how many fs_access_tokens to update.
     */
    limit?: number
  }

  /**
   * fs_access_tokens upsert
   */
  export type fs_access_tokensUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fs_access_tokens
     */
    select?: fs_access_tokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the fs_access_tokens
     */
    omit?: fs_access_tokensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: fs_access_tokensInclude<ExtArgs> | null
    /**
     * The filter to search for the fs_access_tokens to update in case it exists.
     */
    where: fs_access_tokensWhereUniqueInput
    /**
     * In case the fs_access_tokens found by the `where` argument doesn't exist, create a new fs_access_tokens with this data.
     */
    create: XOR<fs_access_tokensCreateInput, fs_access_tokensUncheckedCreateInput>
    /**
     * In case the fs_access_tokens was found with the provided `where` argument, update it with this data.
     */
    update: XOR<fs_access_tokensUpdateInput, fs_access_tokensUncheckedUpdateInput>
  }

  /**
   * fs_access_tokens delete
   */
  export type fs_access_tokensDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fs_access_tokens
     */
    select?: fs_access_tokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the fs_access_tokens
     */
    omit?: fs_access_tokensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: fs_access_tokensInclude<ExtArgs> | null
    /**
     * Filter which fs_access_tokens to delete.
     */
    where: fs_access_tokensWhereUniqueInput
  }

  /**
   * fs_access_tokens deleteMany
   */
  export type fs_access_tokensDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which fs_access_tokens to delete
     */
    where?: fs_access_tokensWhereInput
    /**
     * Limit how many fs_access_tokens to delete.
     */
    limit?: number
  }

  /**
   * fs_access_tokens without action
   */
  export type fs_access_tokensDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the fs_access_tokens
     */
    select?: fs_access_tokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the fs_access_tokens
     */
    omit?: fs_access_tokensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: fs_access_tokensInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const User_sessionsScalarFieldEnum: {
    user_session_id: 'user_session_id',
    user_id: 'user_id',
    refresh_token_id: 'refresh_token_id',
    created_at_unix: 'created_at_unix',
    valid_till_unix: 'valid_till_unix'
  };

  export type User_sessionsScalarFieldEnum = (typeof User_sessionsScalarFieldEnum)[keyof typeof User_sessionsScalarFieldEnum]


  export const BucketsScalarFieldEnum: {
    bucket_id: 'bucket_id',
    org_id: 'org_id',
    bucket_name: 'bucket_name',
    bucket_slug: 'bucket_slug',
    total_size_bytes: 'total_size_bytes',
    max_size_bytes: 'max_size_bytes',
    visibility: 'visibility',
    status: 'status',
    created_by: 'created_by',
    created_at_unix: 'created_at_unix',
    updated_at_unix: 'updated_at_unix'
  };

  export type BucketsScalarFieldEnum = (typeof BucketsScalarFieldEnum)[keyof typeof BucketsScalarFieldEnum]


  export const DirectoriesScalarFieldEnum: {
    dir_id: 'dir_id',
    bucket_id: 'bucket_id',
    parent_dir_id: 'parent_dir_id',
    depth_level: 'depth_level',
    dir_name: 'dir_name',
    dir_slug: 'dir_slug',
    path_in_slug: 'path_in_slug',
    path_in_id: 'path_in_id',
    total_size_bytes: 'total_size_bytes',
    created_at_unix: 'created_at_unix',
    updated_at_unix: 'updated_at_unix'
  };

  export type DirectoriesScalarFieldEnum = (typeof DirectoriesScalarFieldEnum)[keyof typeof DirectoriesScalarFieldEnum]


  export const FilesScalarFieldEnum: {
    file_id: 'file_id',
    bucket_id: 'bucket_id',
    parent_dir_id: 'parent_dir_id',
    file_name: 'file_name',
    file_slug: 'file_slug',
    mime_type: 'mime_type',
    size_bytes: 'size_bytes',
    checksum_sha256: 'checksum_sha256',
    status: 'status',
    uploaded_by: 'uploaded_by',
    created_at_unix: 'created_at_unix',
    updated_at_unix: 'updated_at_unix'
  };

  export type FilesScalarFieldEnum = (typeof FilesScalarFieldEnum)[keyof typeof FilesScalarFieldEnum]


  export const Fs_access_tokensScalarFieldEnum: {
    token_id: 'token_id',
    bucket_id: 'bucket_id',
    dir_id: 'dir_id',
    token_random_code: 'token_random_code',
    token_name: 'token_name',
    token_slug: 'token_slug',
    issued_to: 'issued_to',
    expires_at_unix: 'expires_at_unix',
    created_by: 'created_by',
    created_at_unix: 'created_at_unix'
  };

  export type Fs_access_tokensScalarFieldEnum = (typeof Fs_access_tokensScalarFieldEnum)[keyof typeof Fs_access_tokensScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const bucketsOrderByRelevanceFieldEnum: {
    bucket_name: 'bucket_name',
    bucket_slug: 'bucket_slug'
  };

  export type bucketsOrderByRelevanceFieldEnum = (typeof bucketsOrderByRelevanceFieldEnum)[keyof typeof bucketsOrderByRelevanceFieldEnum]


  export const directoriesOrderByRelevanceFieldEnum: {
    dir_name: 'dir_name',
    dir_slug: 'dir_slug',
    path_in_slug: 'path_in_slug',
    path_in_id: 'path_in_id'
  };

  export type directoriesOrderByRelevanceFieldEnum = (typeof directoriesOrderByRelevanceFieldEnum)[keyof typeof directoriesOrderByRelevanceFieldEnum]


  export const filesOrderByRelevanceFieldEnum: {
    file_name: 'file_name',
    file_slug: 'file_slug',
    mime_type: 'mime_type',
    checksum_sha256: 'checksum_sha256'
  };

  export type filesOrderByRelevanceFieldEnum = (typeof filesOrderByRelevanceFieldEnum)[keyof typeof filesOrderByRelevanceFieldEnum]


  export const fs_access_tokensOrderByRelevanceFieldEnum: {
    token_name: 'token_name',
    token_slug: 'token_slug',
    issued_to: 'issued_to'
  };

  export type fs_access_tokensOrderByRelevanceFieldEnum = (typeof fs_access_tokensOrderByRelevanceFieldEnum)[keyof typeof fs_access_tokensOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'buckets_visibility'
   */
  export type Enumbuckets_visibilityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'buckets_visibility'>
    


  /**
   * Reference to a field of type 'buckets_status'
   */
  export type Enumbuckets_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'buckets_status'>
    


  /**
   * Reference to a field of type 'files_status'
   */
  export type Enumfiles_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'files_status'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type user_sessionsWhereInput = {
    AND?: user_sessionsWhereInput | user_sessionsWhereInput[]
    OR?: user_sessionsWhereInput[]
    NOT?: user_sessionsWhereInput | user_sessionsWhereInput[]
    user_session_id?: IntFilter<"user_sessions"> | number
    user_id?: IntFilter<"user_sessions"> | number
    refresh_token_id?: IntFilter<"user_sessions"> | number
    created_at_unix?: BigIntFilter<"user_sessions"> | bigint | number
    valid_till_unix?: BigIntFilter<"user_sessions"> | bigint | number
  }

  export type user_sessionsOrderByWithRelationInput = {
    user_session_id?: SortOrder
    user_id?: SortOrder
    refresh_token_id?: SortOrder
    created_at_unix?: SortOrder
    valid_till_unix?: SortOrder
  }

  export type user_sessionsWhereUniqueInput = Prisma.AtLeast<{
    user_session_id?: number
    AND?: user_sessionsWhereInput | user_sessionsWhereInput[]
    OR?: user_sessionsWhereInput[]
    NOT?: user_sessionsWhereInput | user_sessionsWhereInput[]
    user_id?: IntFilter<"user_sessions"> | number
    refresh_token_id?: IntFilter<"user_sessions"> | number
    created_at_unix?: BigIntFilter<"user_sessions"> | bigint | number
    valid_till_unix?: BigIntFilter<"user_sessions"> | bigint | number
  }, "user_session_id">

  export type user_sessionsOrderByWithAggregationInput = {
    user_session_id?: SortOrder
    user_id?: SortOrder
    refresh_token_id?: SortOrder
    created_at_unix?: SortOrder
    valid_till_unix?: SortOrder
    _count?: user_sessionsCountOrderByAggregateInput
    _avg?: user_sessionsAvgOrderByAggregateInput
    _max?: user_sessionsMaxOrderByAggregateInput
    _min?: user_sessionsMinOrderByAggregateInput
    _sum?: user_sessionsSumOrderByAggregateInput
  }

  export type user_sessionsScalarWhereWithAggregatesInput = {
    AND?: user_sessionsScalarWhereWithAggregatesInput | user_sessionsScalarWhereWithAggregatesInput[]
    OR?: user_sessionsScalarWhereWithAggregatesInput[]
    NOT?: user_sessionsScalarWhereWithAggregatesInput | user_sessionsScalarWhereWithAggregatesInput[]
    user_session_id?: IntWithAggregatesFilter<"user_sessions"> | number
    user_id?: IntWithAggregatesFilter<"user_sessions"> | number
    refresh_token_id?: IntWithAggregatesFilter<"user_sessions"> | number
    created_at_unix?: BigIntWithAggregatesFilter<"user_sessions"> | bigint | number
    valid_till_unix?: BigIntWithAggregatesFilter<"user_sessions"> | bigint | number
  }

  export type bucketsWhereInput = {
    AND?: bucketsWhereInput | bucketsWhereInput[]
    OR?: bucketsWhereInput[]
    NOT?: bucketsWhereInput | bucketsWhereInput[]
    bucket_id?: IntFilter<"buckets"> | number
    org_id?: IntFilter<"buckets"> | number
    bucket_name?: StringFilter<"buckets"> | string
    bucket_slug?: StringFilter<"buckets"> | string
    total_size_bytes?: BigIntFilter<"buckets"> | bigint | number
    max_size_bytes?: BigIntFilter<"buckets"> | bigint | number
    visibility?: Enumbuckets_visibilityFilter<"buckets"> | $Enums.buckets_visibility
    status?: Enumbuckets_statusFilter<"buckets"> | $Enums.buckets_status
    created_by?: IntFilter<"buckets"> | number
    created_at_unix?: BigIntFilter<"buckets"> | bigint | number
    updated_at_unix?: BigIntNullableFilter<"buckets"> | bigint | number | null
    directories?: DirectoriesListRelationFilter
    files?: FilesListRelationFilter
    fs_access_tokens?: Fs_access_tokensListRelationFilter
  }

  export type bucketsOrderByWithRelationInput = {
    bucket_id?: SortOrder
    org_id?: SortOrder
    bucket_name?: SortOrder
    bucket_slug?: SortOrder
    total_size_bytes?: SortOrder
    max_size_bytes?: SortOrder
    visibility?: SortOrder
    status?: SortOrder
    created_by?: SortOrder
    created_at_unix?: SortOrder
    updated_at_unix?: SortOrderInput | SortOrder
    directories?: directoriesOrderByRelationAggregateInput
    files?: filesOrderByRelationAggregateInput
    fs_access_tokens?: fs_access_tokensOrderByRelationAggregateInput
    _relevance?: bucketsOrderByRelevanceInput
  }

  export type bucketsWhereUniqueInput = Prisma.AtLeast<{
    bucket_id?: number
    bucket_slug?: string
    AND?: bucketsWhereInput | bucketsWhereInput[]
    OR?: bucketsWhereInput[]
    NOT?: bucketsWhereInput | bucketsWhereInput[]
    org_id?: IntFilter<"buckets"> | number
    bucket_name?: StringFilter<"buckets"> | string
    total_size_bytes?: BigIntFilter<"buckets"> | bigint | number
    max_size_bytes?: BigIntFilter<"buckets"> | bigint | number
    visibility?: Enumbuckets_visibilityFilter<"buckets"> | $Enums.buckets_visibility
    status?: Enumbuckets_statusFilter<"buckets"> | $Enums.buckets_status
    created_by?: IntFilter<"buckets"> | number
    created_at_unix?: BigIntFilter<"buckets"> | bigint | number
    updated_at_unix?: BigIntNullableFilter<"buckets"> | bigint | number | null
    directories?: DirectoriesListRelationFilter
    files?: FilesListRelationFilter
    fs_access_tokens?: Fs_access_tokensListRelationFilter
  }, "bucket_id" | "bucket_slug">

  export type bucketsOrderByWithAggregationInput = {
    bucket_id?: SortOrder
    org_id?: SortOrder
    bucket_name?: SortOrder
    bucket_slug?: SortOrder
    total_size_bytes?: SortOrder
    max_size_bytes?: SortOrder
    visibility?: SortOrder
    status?: SortOrder
    created_by?: SortOrder
    created_at_unix?: SortOrder
    updated_at_unix?: SortOrderInput | SortOrder
    _count?: bucketsCountOrderByAggregateInput
    _avg?: bucketsAvgOrderByAggregateInput
    _max?: bucketsMaxOrderByAggregateInput
    _min?: bucketsMinOrderByAggregateInput
    _sum?: bucketsSumOrderByAggregateInput
  }

  export type bucketsScalarWhereWithAggregatesInput = {
    AND?: bucketsScalarWhereWithAggregatesInput | bucketsScalarWhereWithAggregatesInput[]
    OR?: bucketsScalarWhereWithAggregatesInput[]
    NOT?: bucketsScalarWhereWithAggregatesInput | bucketsScalarWhereWithAggregatesInput[]
    bucket_id?: IntWithAggregatesFilter<"buckets"> | number
    org_id?: IntWithAggregatesFilter<"buckets"> | number
    bucket_name?: StringWithAggregatesFilter<"buckets"> | string
    bucket_slug?: StringWithAggregatesFilter<"buckets"> | string
    total_size_bytes?: BigIntWithAggregatesFilter<"buckets"> | bigint | number
    max_size_bytes?: BigIntWithAggregatesFilter<"buckets"> | bigint | number
    visibility?: Enumbuckets_visibilityWithAggregatesFilter<"buckets"> | $Enums.buckets_visibility
    status?: Enumbuckets_statusWithAggregatesFilter<"buckets"> | $Enums.buckets_status
    created_by?: IntWithAggregatesFilter<"buckets"> | number
    created_at_unix?: BigIntWithAggregatesFilter<"buckets"> | bigint | number
    updated_at_unix?: BigIntNullableWithAggregatesFilter<"buckets"> | bigint | number | null
  }

  export type directoriesWhereInput = {
    AND?: directoriesWhereInput | directoriesWhereInput[]
    OR?: directoriesWhereInput[]
    NOT?: directoriesWhereInput | directoriesWhereInput[]
    dir_id?: IntFilter<"directories"> | number
    bucket_id?: IntFilter<"directories"> | number
    parent_dir_id?: IntNullableFilter<"directories"> | number | null
    depth_level?: IntFilter<"directories"> | number
    dir_name?: StringFilter<"directories"> | string
    dir_slug?: StringFilter<"directories"> | string
    path_in_slug?: StringFilter<"directories"> | string
    path_in_id?: StringFilter<"directories"> | string
    total_size_bytes?: BigIntFilter<"directories"> | bigint | number
    created_at_unix?: BigIntFilter<"directories"> | bigint | number
    updated_at_unix?: BigIntNullableFilter<"directories"> | bigint | number | null
    buckets?: XOR<BucketsScalarRelationFilter, bucketsWhereInput>
    directories?: XOR<DirectoriesNullableScalarRelationFilter, directoriesWhereInput> | null
    other_directories?: DirectoriesListRelationFilter
    files?: FilesListRelationFilter
    fs_access_tokens?: XOR<Fs_access_tokensNullableScalarRelationFilter, fs_access_tokensWhereInput> | null
  }

  export type directoriesOrderByWithRelationInput = {
    dir_id?: SortOrder
    bucket_id?: SortOrder
    parent_dir_id?: SortOrderInput | SortOrder
    depth_level?: SortOrder
    dir_name?: SortOrder
    dir_slug?: SortOrder
    path_in_slug?: SortOrder
    path_in_id?: SortOrder
    total_size_bytes?: SortOrder
    created_at_unix?: SortOrder
    updated_at_unix?: SortOrderInput | SortOrder
    buckets?: bucketsOrderByWithRelationInput
    directories?: directoriesOrderByWithRelationInput
    other_directories?: directoriesOrderByRelationAggregateInput
    files?: filesOrderByRelationAggregateInput
    fs_access_tokens?: fs_access_tokensOrderByWithRelationInput
    _relevance?: directoriesOrderByRelevanceInput
  }

  export type directoriesWhereUniqueInput = Prisma.AtLeast<{
    dir_id?: number
    bucket_id_parent_dir_id_dir_slug?: directoriesBucket_idParent_dir_idDir_slugCompoundUniqueInput
    AND?: directoriesWhereInput | directoriesWhereInput[]
    OR?: directoriesWhereInput[]
    NOT?: directoriesWhereInput | directoriesWhereInput[]
    bucket_id?: IntFilter<"directories"> | number
    parent_dir_id?: IntNullableFilter<"directories"> | number | null
    depth_level?: IntFilter<"directories"> | number
    dir_name?: StringFilter<"directories"> | string
    dir_slug?: StringFilter<"directories"> | string
    path_in_slug?: StringFilter<"directories"> | string
    path_in_id?: StringFilter<"directories"> | string
    total_size_bytes?: BigIntFilter<"directories"> | bigint | number
    created_at_unix?: BigIntFilter<"directories"> | bigint | number
    updated_at_unix?: BigIntNullableFilter<"directories"> | bigint | number | null
    buckets?: XOR<BucketsScalarRelationFilter, bucketsWhereInput>
    directories?: XOR<DirectoriesNullableScalarRelationFilter, directoriesWhereInput> | null
    other_directories?: DirectoriesListRelationFilter
    files?: FilesListRelationFilter
    fs_access_tokens?: XOR<Fs_access_tokensNullableScalarRelationFilter, fs_access_tokensWhereInput> | null
  }, "dir_id" | "bucket_id_parent_dir_id_dir_slug">

  export type directoriesOrderByWithAggregationInput = {
    dir_id?: SortOrder
    bucket_id?: SortOrder
    parent_dir_id?: SortOrderInput | SortOrder
    depth_level?: SortOrder
    dir_name?: SortOrder
    dir_slug?: SortOrder
    path_in_slug?: SortOrder
    path_in_id?: SortOrder
    total_size_bytes?: SortOrder
    created_at_unix?: SortOrder
    updated_at_unix?: SortOrderInput | SortOrder
    _count?: directoriesCountOrderByAggregateInput
    _avg?: directoriesAvgOrderByAggregateInput
    _max?: directoriesMaxOrderByAggregateInput
    _min?: directoriesMinOrderByAggregateInput
    _sum?: directoriesSumOrderByAggregateInput
  }

  export type directoriesScalarWhereWithAggregatesInput = {
    AND?: directoriesScalarWhereWithAggregatesInput | directoriesScalarWhereWithAggregatesInput[]
    OR?: directoriesScalarWhereWithAggregatesInput[]
    NOT?: directoriesScalarWhereWithAggregatesInput | directoriesScalarWhereWithAggregatesInput[]
    dir_id?: IntWithAggregatesFilter<"directories"> | number
    bucket_id?: IntWithAggregatesFilter<"directories"> | number
    parent_dir_id?: IntNullableWithAggregatesFilter<"directories"> | number | null
    depth_level?: IntWithAggregatesFilter<"directories"> | number
    dir_name?: StringWithAggregatesFilter<"directories"> | string
    dir_slug?: StringWithAggregatesFilter<"directories"> | string
    path_in_slug?: StringWithAggregatesFilter<"directories"> | string
    path_in_id?: StringWithAggregatesFilter<"directories"> | string
    total_size_bytes?: BigIntWithAggregatesFilter<"directories"> | bigint | number
    created_at_unix?: BigIntWithAggregatesFilter<"directories"> | bigint | number
    updated_at_unix?: BigIntNullableWithAggregatesFilter<"directories"> | bigint | number | null
  }

  export type filesWhereInput = {
    AND?: filesWhereInput | filesWhereInput[]
    OR?: filesWhereInput[]
    NOT?: filesWhereInput | filesWhereInput[]
    file_id?: IntFilter<"files"> | number
    bucket_id?: IntFilter<"files"> | number
    parent_dir_id?: IntNullableFilter<"files"> | number | null
    file_name?: StringFilter<"files"> | string
    file_slug?: StringFilter<"files"> | string
    mime_type?: StringFilter<"files"> | string
    size_bytes?: BigIntFilter<"files"> | bigint | number
    checksum_sha256?: StringNullableFilter<"files"> | string | null
    status?: Enumfiles_statusFilter<"files"> | $Enums.files_status
    uploaded_by?: IntFilter<"files"> | number
    created_at_unix?: BigIntFilter<"files"> | bigint | number
    updated_at_unix?: BigIntNullableFilter<"files"> | bigint | number | null
    buckets?: XOR<BucketsScalarRelationFilter, bucketsWhereInput>
    directories?: XOR<DirectoriesNullableScalarRelationFilter, directoriesWhereInput> | null
  }

  export type filesOrderByWithRelationInput = {
    file_id?: SortOrder
    bucket_id?: SortOrder
    parent_dir_id?: SortOrderInput | SortOrder
    file_name?: SortOrder
    file_slug?: SortOrder
    mime_type?: SortOrder
    size_bytes?: SortOrder
    checksum_sha256?: SortOrderInput | SortOrder
    status?: SortOrder
    uploaded_by?: SortOrder
    created_at_unix?: SortOrder
    updated_at_unix?: SortOrderInput | SortOrder
    buckets?: bucketsOrderByWithRelationInput
    directories?: directoriesOrderByWithRelationInput
    _relevance?: filesOrderByRelevanceInput
  }

  export type filesWhereUniqueInput = Prisma.AtLeast<{
    file_id?: number
    bucket_id_parent_dir_id_file_slug?: filesBucket_idParent_dir_idFile_slugCompoundUniqueInput
    AND?: filesWhereInput | filesWhereInput[]
    OR?: filesWhereInput[]
    NOT?: filesWhereInput | filesWhereInput[]
    bucket_id?: IntFilter<"files"> | number
    parent_dir_id?: IntNullableFilter<"files"> | number | null
    file_name?: StringFilter<"files"> | string
    file_slug?: StringFilter<"files"> | string
    mime_type?: StringFilter<"files"> | string
    size_bytes?: BigIntFilter<"files"> | bigint | number
    checksum_sha256?: StringNullableFilter<"files"> | string | null
    status?: Enumfiles_statusFilter<"files"> | $Enums.files_status
    uploaded_by?: IntFilter<"files"> | number
    created_at_unix?: BigIntFilter<"files"> | bigint | number
    updated_at_unix?: BigIntNullableFilter<"files"> | bigint | number | null
    buckets?: XOR<BucketsScalarRelationFilter, bucketsWhereInput>
    directories?: XOR<DirectoriesNullableScalarRelationFilter, directoriesWhereInput> | null
  }, "file_id" | "bucket_id_parent_dir_id_file_slug">

  export type filesOrderByWithAggregationInput = {
    file_id?: SortOrder
    bucket_id?: SortOrder
    parent_dir_id?: SortOrderInput | SortOrder
    file_name?: SortOrder
    file_slug?: SortOrder
    mime_type?: SortOrder
    size_bytes?: SortOrder
    checksum_sha256?: SortOrderInput | SortOrder
    status?: SortOrder
    uploaded_by?: SortOrder
    created_at_unix?: SortOrder
    updated_at_unix?: SortOrderInput | SortOrder
    _count?: filesCountOrderByAggregateInput
    _avg?: filesAvgOrderByAggregateInput
    _max?: filesMaxOrderByAggregateInput
    _min?: filesMinOrderByAggregateInput
    _sum?: filesSumOrderByAggregateInput
  }

  export type filesScalarWhereWithAggregatesInput = {
    AND?: filesScalarWhereWithAggregatesInput | filesScalarWhereWithAggregatesInput[]
    OR?: filesScalarWhereWithAggregatesInput[]
    NOT?: filesScalarWhereWithAggregatesInput | filesScalarWhereWithAggregatesInput[]
    file_id?: IntWithAggregatesFilter<"files"> | number
    bucket_id?: IntWithAggregatesFilter<"files"> | number
    parent_dir_id?: IntNullableWithAggregatesFilter<"files"> | number | null
    file_name?: StringWithAggregatesFilter<"files"> | string
    file_slug?: StringWithAggregatesFilter<"files"> | string
    mime_type?: StringWithAggregatesFilter<"files"> | string
    size_bytes?: BigIntWithAggregatesFilter<"files"> | bigint | number
    checksum_sha256?: StringNullableWithAggregatesFilter<"files"> | string | null
    status?: Enumfiles_statusWithAggregatesFilter<"files"> | $Enums.files_status
    uploaded_by?: IntWithAggregatesFilter<"files"> | number
    created_at_unix?: BigIntWithAggregatesFilter<"files"> | bigint | number
    updated_at_unix?: BigIntNullableWithAggregatesFilter<"files"> | bigint | number | null
  }

  export type fs_access_tokensWhereInput = {
    AND?: fs_access_tokensWhereInput | fs_access_tokensWhereInput[]
    OR?: fs_access_tokensWhereInput[]
    NOT?: fs_access_tokensWhereInput | fs_access_tokensWhereInput[]
    token_id?: IntFilter<"fs_access_tokens"> | number
    bucket_id?: IntFilter<"fs_access_tokens"> | number
    dir_id?: IntFilter<"fs_access_tokens"> | number
    token_random_code?: IntFilter<"fs_access_tokens"> | number
    token_name?: StringFilter<"fs_access_tokens"> | string
    token_slug?: StringFilter<"fs_access_tokens"> | string
    issued_to?: StringNullableFilter<"fs_access_tokens"> | string | null
    expires_at_unix?: BigIntNullableFilter<"fs_access_tokens"> | bigint | number | null
    created_by?: IntNullableFilter<"fs_access_tokens"> | number | null
    created_at_unix?: BigIntFilter<"fs_access_tokens"> | bigint | number
    buckets?: XOR<BucketsScalarRelationFilter, bucketsWhereInput>
    directories?: XOR<DirectoriesScalarRelationFilter, directoriesWhereInput>
  }

  export type fs_access_tokensOrderByWithRelationInput = {
    token_id?: SortOrder
    bucket_id?: SortOrder
    dir_id?: SortOrder
    token_random_code?: SortOrder
    token_name?: SortOrder
    token_slug?: SortOrder
    issued_to?: SortOrderInput | SortOrder
    expires_at_unix?: SortOrderInput | SortOrder
    created_by?: SortOrderInput | SortOrder
    created_at_unix?: SortOrder
    buckets?: bucketsOrderByWithRelationInput
    directories?: directoriesOrderByWithRelationInput
    _relevance?: fs_access_tokensOrderByRelevanceInput
  }

  export type fs_access_tokensWhereUniqueInput = Prisma.AtLeast<{
    token_id?: number
    dir_id?: number
    AND?: fs_access_tokensWhereInput | fs_access_tokensWhereInput[]
    OR?: fs_access_tokensWhereInput[]
    NOT?: fs_access_tokensWhereInput | fs_access_tokensWhereInput[]
    bucket_id?: IntFilter<"fs_access_tokens"> | number
    token_random_code?: IntFilter<"fs_access_tokens"> | number
    token_name?: StringFilter<"fs_access_tokens"> | string
    token_slug?: StringFilter<"fs_access_tokens"> | string
    issued_to?: StringNullableFilter<"fs_access_tokens"> | string | null
    expires_at_unix?: BigIntNullableFilter<"fs_access_tokens"> | bigint | number | null
    created_by?: IntNullableFilter<"fs_access_tokens"> | number | null
    created_at_unix?: BigIntFilter<"fs_access_tokens"> | bigint | number
    buckets?: XOR<BucketsScalarRelationFilter, bucketsWhereInput>
    directories?: XOR<DirectoriesScalarRelationFilter, directoriesWhereInput>
  }, "token_id" | "dir_id">

  export type fs_access_tokensOrderByWithAggregationInput = {
    token_id?: SortOrder
    bucket_id?: SortOrder
    dir_id?: SortOrder
    token_random_code?: SortOrder
    token_name?: SortOrder
    token_slug?: SortOrder
    issued_to?: SortOrderInput | SortOrder
    expires_at_unix?: SortOrderInput | SortOrder
    created_by?: SortOrderInput | SortOrder
    created_at_unix?: SortOrder
    _count?: fs_access_tokensCountOrderByAggregateInput
    _avg?: fs_access_tokensAvgOrderByAggregateInput
    _max?: fs_access_tokensMaxOrderByAggregateInput
    _min?: fs_access_tokensMinOrderByAggregateInput
    _sum?: fs_access_tokensSumOrderByAggregateInput
  }

  export type fs_access_tokensScalarWhereWithAggregatesInput = {
    AND?: fs_access_tokensScalarWhereWithAggregatesInput | fs_access_tokensScalarWhereWithAggregatesInput[]
    OR?: fs_access_tokensScalarWhereWithAggregatesInput[]
    NOT?: fs_access_tokensScalarWhereWithAggregatesInput | fs_access_tokensScalarWhereWithAggregatesInput[]
    token_id?: IntWithAggregatesFilter<"fs_access_tokens"> | number
    bucket_id?: IntWithAggregatesFilter<"fs_access_tokens"> | number
    dir_id?: IntWithAggregatesFilter<"fs_access_tokens"> | number
    token_random_code?: IntWithAggregatesFilter<"fs_access_tokens"> | number
    token_name?: StringWithAggregatesFilter<"fs_access_tokens"> | string
    token_slug?: StringWithAggregatesFilter<"fs_access_tokens"> | string
    issued_to?: StringNullableWithAggregatesFilter<"fs_access_tokens"> | string | null
    expires_at_unix?: BigIntNullableWithAggregatesFilter<"fs_access_tokens"> | bigint | number | null
    created_by?: IntNullableWithAggregatesFilter<"fs_access_tokens"> | number | null
    created_at_unix?: BigIntWithAggregatesFilter<"fs_access_tokens"> | bigint | number
  }

  export type user_sessionsCreateInput = {
    user_id: number
    refresh_token_id: number
    created_at_unix: bigint | number
    valid_till_unix: bigint | number
  }

  export type user_sessionsUncheckedCreateInput = {
    user_session_id?: number
    user_id: number
    refresh_token_id: number
    created_at_unix: bigint | number
    valid_till_unix: bigint | number
  }

  export type user_sessionsUpdateInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    refresh_token_id?: IntFieldUpdateOperationsInput | number
    created_at_unix?: BigIntFieldUpdateOperationsInput | bigint | number
    valid_till_unix?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type user_sessionsUncheckedUpdateInput = {
    user_session_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    refresh_token_id?: IntFieldUpdateOperationsInput | number
    created_at_unix?: BigIntFieldUpdateOperationsInput | bigint | number
    valid_till_unix?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type user_sessionsCreateManyInput = {
    user_session_id?: number
    user_id: number
    refresh_token_id: number
    created_at_unix: bigint | number
    valid_till_unix: bigint | number
  }

  export type user_sessionsUpdateManyMutationInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    refresh_token_id?: IntFieldUpdateOperationsInput | number
    created_at_unix?: BigIntFieldUpdateOperationsInput | bigint | number
    valid_till_unix?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type user_sessionsUncheckedUpdateManyInput = {
    user_session_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    refresh_token_id?: IntFieldUpdateOperationsInput | number
    created_at_unix?: BigIntFieldUpdateOperationsInput | bigint | number
    valid_till_unix?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type bucketsCreateInput = {
    org_id: number
    bucket_name: string
    bucket_slug: string
    total_size_bytes?: bigint | number
    max_size_bytes?: bigint | number
    visibility?: $Enums.buckets_visibility
    status?: $Enums.buckets_status
    created_by: number
    created_at_unix: bigint | number
    updated_at_unix?: bigint | number | null
    directories?: directoriesCreateNestedManyWithoutBucketsInput
    files?: filesCreateNestedManyWithoutBucketsInput
    fs_access_tokens?: fs_access_tokensCreateNestedManyWithoutBucketsInput
  }

  export type bucketsUncheckedCreateInput = {
    bucket_id?: number
    org_id: number
    bucket_name: string
    bucket_slug: string
    total_size_bytes?: bigint | number
    max_size_bytes?: bigint | number
    visibility?: $Enums.buckets_visibility
    status?: $Enums.buckets_status
    created_by: number
    created_at_unix: bigint | number
    updated_at_unix?: bigint | number | null
    directories?: directoriesUncheckedCreateNestedManyWithoutBucketsInput
    files?: filesUncheckedCreateNestedManyWithoutBucketsInput
    fs_access_tokens?: fs_access_tokensUncheckedCreateNestedManyWithoutBucketsInput
  }

  export type bucketsUpdateInput = {
    org_id?: IntFieldUpdateOperationsInput | number
    bucket_name?: StringFieldUpdateOperationsInput | string
    bucket_slug?: StringFieldUpdateOperationsInput | string
    total_size_bytes?: BigIntFieldUpdateOperationsInput | bigint | number
    max_size_bytes?: BigIntFieldUpdateOperationsInput | bigint | number
    visibility?: Enumbuckets_visibilityFieldUpdateOperationsInput | $Enums.buckets_visibility
    status?: Enumbuckets_statusFieldUpdateOperationsInput | $Enums.buckets_status
    created_by?: IntFieldUpdateOperationsInput | number
    created_at_unix?: BigIntFieldUpdateOperationsInput | bigint | number
    updated_at_unix?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    directories?: directoriesUpdateManyWithoutBucketsNestedInput
    files?: filesUpdateManyWithoutBucketsNestedInput
    fs_access_tokens?: fs_access_tokensUpdateManyWithoutBucketsNestedInput
  }

  export type bucketsUncheckedUpdateInput = {
    bucket_id?: IntFieldUpdateOperationsInput | number
    org_id?: IntFieldUpdateOperationsInput | number
    bucket_name?: StringFieldUpdateOperationsInput | string
    bucket_slug?: StringFieldUpdateOperationsInput | string
    total_size_bytes?: BigIntFieldUpdateOperationsInput | bigint | number
    max_size_bytes?: BigIntFieldUpdateOperationsInput | bigint | number
    visibility?: Enumbuckets_visibilityFieldUpdateOperationsInput | $Enums.buckets_visibility
    status?: Enumbuckets_statusFieldUpdateOperationsInput | $Enums.buckets_status
    created_by?: IntFieldUpdateOperationsInput | number
    created_at_unix?: BigIntFieldUpdateOperationsInput | bigint | number
    updated_at_unix?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    directories?: directoriesUncheckedUpdateManyWithoutBucketsNestedInput
    files?: filesUncheckedUpdateManyWithoutBucketsNestedInput
    fs_access_tokens?: fs_access_tokensUncheckedUpdateManyWithoutBucketsNestedInput
  }

  export type bucketsCreateManyInput = {
    bucket_id?: number
    org_id: number
    bucket_name: string
    bucket_slug: string
    total_size_bytes?: bigint | number
    max_size_bytes?: bigint | number
    visibility?: $Enums.buckets_visibility
    status?: $Enums.buckets_status
    created_by: number
    created_at_unix: bigint | number
    updated_at_unix?: bigint | number | null
  }

  export type bucketsUpdateManyMutationInput = {
    org_id?: IntFieldUpdateOperationsInput | number
    bucket_name?: StringFieldUpdateOperationsInput | string
    bucket_slug?: StringFieldUpdateOperationsInput | string
    total_size_bytes?: BigIntFieldUpdateOperationsInput | bigint | number
    max_size_bytes?: BigIntFieldUpdateOperationsInput | bigint | number
    visibility?: Enumbuckets_visibilityFieldUpdateOperationsInput | $Enums.buckets_visibility
    status?: Enumbuckets_statusFieldUpdateOperationsInput | $Enums.buckets_status
    created_by?: IntFieldUpdateOperationsInput | number
    created_at_unix?: BigIntFieldUpdateOperationsInput | bigint | number
    updated_at_unix?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
  }

  export type bucketsUncheckedUpdateManyInput = {
    bucket_id?: IntFieldUpdateOperationsInput | number
    org_id?: IntFieldUpdateOperationsInput | number
    bucket_name?: StringFieldUpdateOperationsInput | string
    bucket_slug?: StringFieldUpdateOperationsInput | string
    total_size_bytes?: BigIntFieldUpdateOperationsInput | bigint | number
    max_size_bytes?: BigIntFieldUpdateOperationsInput | bigint | number
    visibility?: Enumbuckets_visibilityFieldUpdateOperationsInput | $Enums.buckets_visibility
    status?: Enumbuckets_statusFieldUpdateOperationsInput | $Enums.buckets_status
    created_by?: IntFieldUpdateOperationsInput | number
    created_at_unix?: BigIntFieldUpdateOperationsInput | bigint | number
    updated_at_unix?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
  }

  export type directoriesCreateInput = {
    depth_level: number
    dir_name: string
    dir_slug: string
    path_in_slug: string
    path_in_id: string
    total_size_bytes?: bigint | number
    created_at_unix: bigint | number
    updated_at_unix?: bigint | number | null
    buckets: bucketsCreateNestedOneWithoutDirectoriesInput
    directories?: directoriesCreateNestedOneWithoutOther_directoriesInput
    other_directories?: directoriesCreateNestedManyWithoutDirectoriesInput
    files?: filesCreateNestedManyWithoutDirectoriesInput
    fs_access_tokens?: fs_access_tokensCreateNestedOneWithoutDirectoriesInput
  }

  export type directoriesUncheckedCreateInput = {
    dir_id?: number
    bucket_id: number
    parent_dir_id?: number | null
    depth_level: number
    dir_name: string
    dir_slug: string
    path_in_slug: string
    path_in_id: string
    total_size_bytes?: bigint | number
    created_at_unix: bigint | number
    updated_at_unix?: bigint | number | null
    other_directories?: directoriesUncheckedCreateNestedManyWithoutDirectoriesInput
    files?: filesUncheckedCreateNestedManyWithoutDirectoriesInput
    fs_access_tokens?: fs_access_tokensUncheckedCreateNestedOneWithoutDirectoriesInput
  }

  export type directoriesUpdateInput = {
    depth_level?: IntFieldUpdateOperationsInput | number
    dir_name?: StringFieldUpdateOperationsInput | string
    dir_slug?: StringFieldUpdateOperationsInput | string
    path_in_slug?: StringFieldUpdateOperationsInput | string
    path_in_id?: StringFieldUpdateOperationsInput | string
    total_size_bytes?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at_unix?: BigIntFieldUpdateOperationsInput | bigint | number
    updated_at_unix?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    buckets?: bucketsUpdateOneRequiredWithoutDirectoriesNestedInput
    directories?: directoriesUpdateOneWithoutOther_directoriesNestedInput
    other_directories?: directoriesUpdateManyWithoutDirectoriesNestedInput
    files?: filesUpdateManyWithoutDirectoriesNestedInput
    fs_access_tokens?: fs_access_tokensUpdateOneWithoutDirectoriesNestedInput
  }

  export type directoriesUncheckedUpdateInput = {
    dir_id?: IntFieldUpdateOperationsInput | number
    bucket_id?: IntFieldUpdateOperationsInput | number
    parent_dir_id?: NullableIntFieldUpdateOperationsInput | number | null
    depth_level?: IntFieldUpdateOperationsInput | number
    dir_name?: StringFieldUpdateOperationsInput | string
    dir_slug?: StringFieldUpdateOperationsInput | string
    path_in_slug?: StringFieldUpdateOperationsInput | string
    path_in_id?: StringFieldUpdateOperationsInput | string
    total_size_bytes?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at_unix?: BigIntFieldUpdateOperationsInput | bigint | number
    updated_at_unix?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    other_directories?: directoriesUncheckedUpdateManyWithoutDirectoriesNestedInput
    files?: filesUncheckedUpdateManyWithoutDirectoriesNestedInput
    fs_access_tokens?: fs_access_tokensUncheckedUpdateOneWithoutDirectoriesNestedInput
  }

  export type directoriesCreateManyInput = {
    dir_id?: number
    bucket_id: number
    parent_dir_id?: number | null
    depth_level: number
    dir_name: string
    dir_slug: string
    path_in_slug: string
    path_in_id: string
    total_size_bytes?: bigint | number
    created_at_unix: bigint | number
    updated_at_unix?: bigint | number | null
  }

  export type directoriesUpdateManyMutationInput = {
    depth_level?: IntFieldUpdateOperationsInput | number
    dir_name?: StringFieldUpdateOperationsInput | string
    dir_slug?: StringFieldUpdateOperationsInput | string
    path_in_slug?: StringFieldUpdateOperationsInput | string
    path_in_id?: StringFieldUpdateOperationsInput | string
    total_size_bytes?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at_unix?: BigIntFieldUpdateOperationsInput | bigint | number
    updated_at_unix?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
  }

  export type directoriesUncheckedUpdateManyInput = {
    dir_id?: IntFieldUpdateOperationsInput | number
    bucket_id?: IntFieldUpdateOperationsInput | number
    parent_dir_id?: NullableIntFieldUpdateOperationsInput | number | null
    depth_level?: IntFieldUpdateOperationsInput | number
    dir_name?: StringFieldUpdateOperationsInput | string
    dir_slug?: StringFieldUpdateOperationsInput | string
    path_in_slug?: StringFieldUpdateOperationsInput | string
    path_in_id?: StringFieldUpdateOperationsInput | string
    total_size_bytes?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at_unix?: BigIntFieldUpdateOperationsInput | bigint | number
    updated_at_unix?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
  }

  export type filesCreateInput = {
    file_name: string
    file_slug: string
    mime_type: string
    size_bytes: bigint | number
    checksum_sha256?: string | null
    status?: $Enums.files_status
    uploaded_by: number
    created_at_unix: bigint | number
    updated_at_unix?: bigint | number | null
    buckets: bucketsCreateNestedOneWithoutFilesInput
    directories?: directoriesCreateNestedOneWithoutFilesInput
  }

  export type filesUncheckedCreateInput = {
    file_id?: number
    bucket_id: number
    parent_dir_id?: number | null
    file_name: string
    file_slug: string
    mime_type: string
    size_bytes: bigint | number
    checksum_sha256?: string | null
    status?: $Enums.files_status
    uploaded_by: number
    created_at_unix: bigint | number
    updated_at_unix?: bigint | number | null
  }

  export type filesUpdateInput = {
    file_name?: StringFieldUpdateOperationsInput | string
    file_slug?: StringFieldUpdateOperationsInput | string
    mime_type?: StringFieldUpdateOperationsInput | string
    size_bytes?: BigIntFieldUpdateOperationsInput | bigint | number
    checksum_sha256?: NullableStringFieldUpdateOperationsInput | string | null
    status?: Enumfiles_statusFieldUpdateOperationsInput | $Enums.files_status
    uploaded_by?: IntFieldUpdateOperationsInput | number
    created_at_unix?: BigIntFieldUpdateOperationsInput | bigint | number
    updated_at_unix?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    buckets?: bucketsUpdateOneRequiredWithoutFilesNestedInput
    directories?: directoriesUpdateOneWithoutFilesNestedInput
  }

  export type filesUncheckedUpdateInput = {
    file_id?: IntFieldUpdateOperationsInput | number
    bucket_id?: IntFieldUpdateOperationsInput | number
    parent_dir_id?: NullableIntFieldUpdateOperationsInput | number | null
    file_name?: StringFieldUpdateOperationsInput | string
    file_slug?: StringFieldUpdateOperationsInput | string
    mime_type?: StringFieldUpdateOperationsInput | string
    size_bytes?: BigIntFieldUpdateOperationsInput | bigint | number
    checksum_sha256?: NullableStringFieldUpdateOperationsInput | string | null
    status?: Enumfiles_statusFieldUpdateOperationsInput | $Enums.files_status
    uploaded_by?: IntFieldUpdateOperationsInput | number
    created_at_unix?: BigIntFieldUpdateOperationsInput | bigint | number
    updated_at_unix?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
  }

  export type filesCreateManyInput = {
    file_id?: number
    bucket_id: number
    parent_dir_id?: number | null
    file_name: string
    file_slug: string
    mime_type: string
    size_bytes: bigint | number
    checksum_sha256?: string | null
    status?: $Enums.files_status
    uploaded_by: number
    created_at_unix: bigint | number
    updated_at_unix?: bigint | number | null
  }

  export type filesUpdateManyMutationInput = {
    file_name?: StringFieldUpdateOperationsInput | string
    file_slug?: StringFieldUpdateOperationsInput | string
    mime_type?: StringFieldUpdateOperationsInput | string
    size_bytes?: BigIntFieldUpdateOperationsInput | bigint | number
    checksum_sha256?: NullableStringFieldUpdateOperationsInput | string | null
    status?: Enumfiles_statusFieldUpdateOperationsInput | $Enums.files_status
    uploaded_by?: IntFieldUpdateOperationsInput | number
    created_at_unix?: BigIntFieldUpdateOperationsInput | bigint | number
    updated_at_unix?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
  }

  export type filesUncheckedUpdateManyInput = {
    file_id?: IntFieldUpdateOperationsInput | number
    bucket_id?: IntFieldUpdateOperationsInput | number
    parent_dir_id?: NullableIntFieldUpdateOperationsInput | number | null
    file_name?: StringFieldUpdateOperationsInput | string
    file_slug?: StringFieldUpdateOperationsInput | string
    mime_type?: StringFieldUpdateOperationsInput | string
    size_bytes?: BigIntFieldUpdateOperationsInput | bigint | number
    checksum_sha256?: NullableStringFieldUpdateOperationsInput | string | null
    status?: Enumfiles_statusFieldUpdateOperationsInput | $Enums.files_status
    uploaded_by?: IntFieldUpdateOperationsInput | number
    created_at_unix?: BigIntFieldUpdateOperationsInput | bigint | number
    updated_at_unix?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
  }

  export type fs_access_tokensCreateInput = {
    token_random_code: number
    token_name: string
    token_slug: string
    issued_to?: string | null
    expires_at_unix?: bigint | number | null
    created_by?: number | null
    created_at_unix: bigint | number
    buckets: bucketsCreateNestedOneWithoutFs_access_tokensInput
    directories: directoriesCreateNestedOneWithoutFs_access_tokensInput
  }

  export type fs_access_tokensUncheckedCreateInput = {
    token_id?: number
    bucket_id: number
    dir_id: number
    token_random_code: number
    token_name: string
    token_slug: string
    issued_to?: string | null
    expires_at_unix?: bigint | number | null
    created_by?: number | null
    created_at_unix: bigint | number
  }

  export type fs_access_tokensUpdateInput = {
    token_random_code?: IntFieldUpdateOperationsInput | number
    token_name?: StringFieldUpdateOperationsInput | string
    token_slug?: StringFieldUpdateOperationsInput | string
    issued_to?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at_unix?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    created_at_unix?: BigIntFieldUpdateOperationsInput | bigint | number
    buckets?: bucketsUpdateOneRequiredWithoutFs_access_tokensNestedInput
    directories?: directoriesUpdateOneRequiredWithoutFs_access_tokensNestedInput
  }

  export type fs_access_tokensUncheckedUpdateInput = {
    token_id?: IntFieldUpdateOperationsInput | number
    bucket_id?: IntFieldUpdateOperationsInput | number
    dir_id?: IntFieldUpdateOperationsInput | number
    token_random_code?: IntFieldUpdateOperationsInput | number
    token_name?: StringFieldUpdateOperationsInput | string
    token_slug?: StringFieldUpdateOperationsInput | string
    issued_to?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at_unix?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    created_at_unix?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type fs_access_tokensCreateManyInput = {
    token_id?: number
    bucket_id: number
    dir_id: number
    token_random_code: number
    token_name: string
    token_slug: string
    issued_to?: string | null
    expires_at_unix?: bigint | number | null
    created_by?: number | null
    created_at_unix: bigint | number
  }

  export type fs_access_tokensUpdateManyMutationInput = {
    token_random_code?: IntFieldUpdateOperationsInput | number
    token_name?: StringFieldUpdateOperationsInput | string
    token_slug?: StringFieldUpdateOperationsInput | string
    issued_to?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at_unix?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    created_at_unix?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type fs_access_tokensUncheckedUpdateManyInput = {
    token_id?: IntFieldUpdateOperationsInput | number
    bucket_id?: IntFieldUpdateOperationsInput | number
    dir_id?: IntFieldUpdateOperationsInput | number
    token_random_code?: IntFieldUpdateOperationsInput | number
    token_name?: StringFieldUpdateOperationsInput | string
    token_slug?: StringFieldUpdateOperationsInput | string
    issued_to?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at_unix?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    created_at_unix?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type user_sessionsCountOrderByAggregateInput = {
    user_session_id?: SortOrder
    user_id?: SortOrder
    refresh_token_id?: SortOrder
    created_at_unix?: SortOrder
    valid_till_unix?: SortOrder
  }

  export type user_sessionsAvgOrderByAggregateInput = {
    user_session_id?: SortOrder
    user_id?: SortOrder
    refresh_token_id?: SortOrder
    created_at_unix?: SortOrder
    valid_till_unix?: SortOrder
  }

  export type user_sessionsMaxOrderByAggregateInput = {
    user_session_id?: SortOrder
    user_id?: SortOrder
    refresh_token_id?: SortOrder
    created_at_unix?: SortOrder
    valid_till_unix?: SortOrder
  }

  export type user_sessionsMinOrderByAggregateInput = {
    user_session_id?: SortOrder
    user_id?: SortOrder
    refresh_token_id?: SortOrder
    created_at_unix?: SortOrder
    valid_till_unix?: SortOrder
  }

  export type user_sessionsSumOrderByAggregateInput = {
    user_session_id?: SortOrder
    user_id?: SortOrder
    refresh_token_id?: SortOrder
    created_at_unix?: SortOrder
    valid_till_unix?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type Enumbuckets_visibilityFilter<$PrismaModel = never> = {
    equals?: $Enums.buckets_visibility | Enumbuckets_visibilityFieldRefInput<$PrismaModel>
    in?: $Enums.buckets_visibility[]
    notIn?: $Enums.buckets_visibility[]
    not?: NestedEnumbuckets_visibilityFilter<$PrismaModel> | $Enums.buckets_visibility
  }

  export type Enumbuckets_statusFilter<$PrismaModel = never> = {
    equals?: $Enums.buckets_status | Enumbuckets_statusFieldRefInput<$PrismaModel>
    in?: $Enums.buckets_status[]
    notIn?: $Enums.buckets_status[]
    not?: NestedEnumbuckets_statusFilter<$PrismaModel> | $Enums.buckets_status
  }

  export type BigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | null
    notIn?: bigint[] | number[] | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null
  }

  export type DirectoriesListRelationFilter = {
    every?: directoriesWhereInput
    some?: directoriesWhereInput
    none?: directoriesWhereInput
  }

  export type FilesListRelationFilter = {
    every?: filesWhereInput
    some?: filesWhereInput
    none?: filesWhereInput
  }

  export type Fs_access_tokensListRelationFilter = {
    every?: fs_access_tokensWhereInput
    some?: fs_access_tokensWhereInput
    none?: fs_access_tokensWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type directoriesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type filesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type fs_access_tokensOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type bucketsOrderByRelevanceInput = {
    fields: bucketsOrderByRelevanceFieldEnum | bucketsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type bucketsCountOrderByAggregateInput = {
    bucket_id?: SortOrder
    org_id?: SortOrder
    bucket_name?: SortOrder
    bucket_slug?: SortOrder
    total_size_bytes?: SortOrder
    max_size_bytes?: SortOrder
    visibility?: SortOrder
    status?: SortOrder
    created_by?: SortOrder
    created_at_unix?: SortOrder
    updated_at_unix?: SortOrder
  }

  export type bucketsAvgOrderByAggregateInput = {
    bucket_id?: SortOrder
    org_id?: SortOrder
    total_size_bytes?: SortOrder
    max_size_bytes?: SortOrder
    created_by?: SortOrder
    created_at_unix?: SortOrder
    updated_at_unix?: SortOrder
  }

  export type bucketsMaxOrderByAggregateInput = {
    bucket_id?: SortOrder
    org_id?: SortOrder
    bucket_name?: SortOrder
    bucket_slug?: SortOrder
    total_size_bytes?: SortOrder
    max_size_bytes?: SortOrder
    visibility?: SortOrder
    status?: SortOrder
    created_by?: SortOrder
    created_at_unix?: SortOrder
    updated_at_unix?: SortOrder
  }

  export type bucketsMinOrderByAggregateInput = {
    bucket_id?: SortOrder
    org_id?: SortOrder
    bucket_name?: SortOrder
    bucket_slug?: SortOrder
    total_size_bytes?: SortOrder
    max_size_bytes?: SortOrder
    visibility?: SortOrder
    status?: SortOrder
    created_by?: SortOrder
    created_at_unix?: SortOrder
    updated_at_unix?: SortOrder
  }

  export type bucketsSumOrderByAggregateInput = {
    bucket_id?: SortOrder
    org_id?: SortOrder
    total_size_bytes?: SortOrder
    max_size_bytes?: SortOrder
    created_by?: SortOrder
    created_at_unix?: SortOrder
    updated_at_unix?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type Enumbuckets_visibilityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.buckets_visibility | Enumbuckets_visibilityFieldRefInput<$PrismaModel>
    in?: $Enums.buckets_visibility[]
    notIn?: $Enums.buckets_visibility[]
    not?: NestedEnumbuckets_visibilityWithAggregatesFilter<$PrismaModel> | $Enums.buckets_visibility
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumbuckets_visibilityFilter<$PrismaModel>
    _max?: NestedEnumbuckets_visibilityFilter<$PrismaModel>
  }

  export type Enumbuckets_statusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.buckets_status | Enumbuckets_statusFieldRefInput<$PrismaModel>
    in?: $Enums.buckets_status[]
    notIn?: $Enums.buckets_status[]
    not?: NestedEnumbuckets_statusWithAggregatesFilter<$PrismaModel> | $Enums.buckets_status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumbuckets_statusFilter<$PrismaModel>
    _max?: NestedEnumbuckets_statusFilter<$PrismaModel>
  }

  export type BigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | null
    notIn?: bigint[] | number[] | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableWithAggregatesFilter<$PrismaModel> | bigint | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedBigIntNullableFilter<$PrismaModel>
    _min?: NestedBigIntNullableFilter<$PrismaModel>
    _max?: NestedBigIntNullableFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type BucketsScalarRelationFilter = {
    is?: bucketsWhereInput
    isNot?: bucketsWhereInput
  }

  export type DirectoriesNullableScalarRelationFilter = {
    is?: directoriesWhereInput | null
    isNot?: directoriesWhereInput | null
  }

  export type Fs_access_tokensNullableScalarRelationFilter = {
    is?: fs_access_tokensWhereInput | null
    isNot?: fs_access_tokensWhereInput | null
  }

  export type directoriesOrderByRelevanceInput = {
    fields: directoriesOrderByRelevanceFieldEnum | directoriesOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type directoriesBucket_idParent_dir_idDir_slugCompoundUniqueInput = {
    bucket_id: number
    parent_dir_id: number
    dir_slug: string
  }

  export type directoriesCountOrderByAggregateInput = {
    dir_id?: SortOrder
    bucket_id?: SortOrder
    parent_dir_id?: SortOrder
    depth_level?: SortOrder
    dir_name?: SortOrder
    dir_slug?: SortOrder
    path_in_slug?: SortOrder
    path_in_id?: SortOrder
    total_size_bytes?: SortOrder
    created_at_unix?: SortOrder
    updated_at_unix?: SortOrder
  }

  export type directoriesAvgOrderByAggregateInput = {
    dir_id?: SortOrder
    bucket_id?: SortOrder
    parent_dir_id?: SortOrder
    depth_level?: SortOrder
    total_size_bytes?: SortOrder
    created_at_unix?: SortOrder
    updated_at_unix?: SortOrder
  }

  export type directoriesMaxOrderByAggregateInput = {
    dir_id?: SortOrder
    bucket_id?: SortOrder
    parent_dir_id?: SortOrder
    depth_level?: SortOrder
    dir_name?: SortOrder
    dir_slug?: SortOrder
    path_in_slug?: SortOrder
    path_in_id?: SortOrder
    total_size_bytes?: SortOrder
    created_at_unix?: SortOrder
    updated_at_unix?: SortOrder
  }

  export type directoriesMinOrderByAggregateInput = {
    dir_id?: SortOrder
    bucket_id?: SortOrder
    parent_dir_id?: SortOrder
    depth_level?: SortOrder
    dir_name?: SortOrder
    dir_slug?: SortOrder
    path_in_slug?: SortOrder
    path_in_id?: SortOrder
    total_size_bytes?: SortOrder
    created_at_unix?: SortOrder
    updated_at_unix?: SortOrder
  }

  export type directoriesSumOrderByAggregateInput = {
    dir_id?: SortOrder
    bucket_id?: SortOrder
    parent_dir_id?: SortOrder
    depth_level?: SortOrder
    total_size_bytes?: SortOrder
    created_at_unix?: SortOrder
    updated_at_unix?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type Enumfiles_statusFilter<$PrismaModel = never> = {
    equals?: $Enums.files_status | Enumfiles_statusFieldRefInput<$PrismaModel>
    in?: $Enums.files_status[]
    notIn?: $Enums.files_status[]
    not?: NestedEnumfiles_statusFilter<$PrismaModel> | $Enums.files_status
  }

  export type filesOrderByRelevanceInput = {
    fields: filesOrderByRelevanceFieldEnum | filesOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type filesBucket_idParent_dir_idFile_slugCompoundUniqueInput = {
    bucket_id: number
    parent_dir_id: number
    file_slug: string
  }

  export type filesCountOrderByAggregateInput = {
    file_id?: SortOrder
    bucket_id?: SortOrder
    parent_dir_id?: SortOrder
    file_name?: SortOrder
    file_slug?: SortOrder
    mime_type?: SortOrder
    size_bytes?: SortOrder
    checksum_sha256?: SortOrder
    status?: SortOrder
    uploaded_by?: SortOrder
    created_at_unix?: SortOrder
    updated_at_unix?: SortOrder
  }

  export type filesAvgOrderByAggregateInput = {
    file_id?: SortOrder
    bucket_id?: SortOrder
    parent_dir_id?: SortOrder
    size_bytes?: SortOrder
    uploaded_by?: SortOrder
    created_at_unix?: SortOrder
    updated_at_unix?: SortOrder
  }

  export type filesMaxOrderByAggregateInput = {
    file_id?: SortOrder
    bucket_id?: SortOrder
    parent_dir_id?: SortOrder
    file_name?: SortOrder
    file_slug?: SortOrder
    mime_type?: SortOrder
    size_bytes?: SortOrder
    checksum_sha256?: SortOrder
    status?: SortOrder
    uploaded_by?: SortOrder
    created_at_unix?: SortOrder
    updated_at_unix?: SortOrder
  }

  export type filesMinOrderByAggregateInput = {
    file_id?: SortOrder
    bucket_id?: SortOrder
    parent_dir_id?: SortOrder
    file_name?: SortOrder
    file_slug?: SortOrder
    mime_type?: SortOrder
    size_bytes?: SortOrder
    checksum_sha256?: SortOrder
    status?: SortOrder
    uploaded_by?: SortOrder
    created_at_unix?: SortOrder
    updated_at_unix?: SortOrder
  }

  export type filesSumOrderByAggregateInput = {
    file_id?: SortOrder
    bucket_id?: SortOrder
    parent_dir_id?: SortOrder
    size_bytes?: SortOrder
    uploaded_by?: SortOrder
    created_at_unix?: SortOrder
    updated_at_unix?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type Enumfiles_statusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.files_status | Enumfiles_statusFieldRefInput<$PrismaModel>
    in?: $Enums.files_status[]
    notIn?: $Enums.files_status[]
    not?: NestedEnumfiles_statusWithAggregatesFilter<$PrismaModel> | $Enums.files_status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumfiles_statusFilter<$PrismaModel>
    _max?: NestedEnumfiles_statusFilter<$PrismaModel>
  }

  export type DirectoriesScalarRelationFilter = {
    is?: directoriesWhereInput
    isNot?: directoriesWhereInput
  }

  export type fs_access_tokensOrderByRelevanceInput = {
    fields: fs_access_tokensOrderByRelevanceFieldEnum | fs_access_tokensOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type fs_access_tokensCountOrderByAggregateInput = {
    token_id?: SortOrder
    bucket_id?: SortOrder
    dir_id?: SortOrder
    token_random_code?: SortOrder
    token_name?: SortOrder
    token_slug?: SortOrder
    issued_to?: SortOrder
    expires_at_unix?: SortOrder
    created_by?: SortOrder
    created_at_unix?: SortOrder
  }

  export type fs_access_tokensAvgOrderByAggregateInput = {
    token_id?: SortOrder
    bucket_id?: SortOrder
    dir_id?: SortOrder
    token_random_code?: SortOrder
    expires_at_unix?: SortOrder
    created_by?: SortOrder
    created_at_unix?: SortOrder
  }

  export type fs_access_tokensMaxOrderByAggregateInput = {
    token_id?: SortOrder
    bucket_id?: SortOrder
    dir_id?: SortOrder
    token_random_code?: SortOrder
    token_name?: SortOrder
    token_slug?: SortOrder
    issued_to?: SortOrder
    expires_at_unix?: SortOrder
    created_by?: SortOrder
    created_at_unix?: SortOrder
  }

  export type fs_access_tokensMinOrderByAggregateInput = {
    token_id?: SortOrder
    bucket_id?: SortOrder
    dir_id?: SortOrder
    token_random_code?: SortOrder
    token_name?: SortOrder
    token_slug?: SortOrder
    issued_to?: SortOrder
    expires_at_unix?: SortOrder
    created_by?: SortOrder
    created_at_unix?: SortOrder
  }

  export type fs_access_tokensSumOrderByAggregateInput = {
    token_id?: SortOrder
    bucket_id?: SortOrder
    dir_id?: SortOrder
    token_random_code?: SortOrder
    expires_at_unix?: SortOrder
    created_by?: SortOrder
    created_at_unix?: SortOrder
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type directoriesCreateNestedManyWithoutBucketsInput = {
    create?: XOR<directoriesCreateWithoutBucketsInput, directoriesUncheckedCreateWithoutBucketsInput> | directoriesCreateWithoutBucketsInput[] | directoriesUncheckedCreateWithoutBucketsInput[]
    connectOrCreate?: directoriesCreateOrConnectWithoutBucketsInput | directoriesCreateOrConnectWithoutBucketsInput[]
    createMany?: directoriesCreateManyBucketsInputEnvelope
    connect?: directoriesWhereUniqueInput | directoriesWhereUniqueInput[]
  }

  export type filesCreateNestedManyWithoutBucketsInput = {
    create?: XOR<filesCreateWithoutBucketsInput, filesUncheckedCreateWithoutBucketsInput> | filesCreateWithoutBucketsInput[] | filesUncheckedCreateWithoutBucketsInput[]
    connectOrCreate?: filesCreateOrConnectWithoutBucketsInput | filesCreateOrConnectWithoutBucketsInput[]
    createMany?: filesCreateManyBucketsInputEnvelope
    connect?: filesWhereUniqueInput | filesWhereUniqueInput[]
  }

  export type fs_access_tokensCreateNestedManyWithoutBucketsInput = {
    create?: XOR<fs_access_tokensCreateWithoutBucketsInput, fs_access_tokensUncheckedCreateWithoutBucketsInput> | fs_access_tokensCreateWithoutBucketsInput[] | fs_access_tokensUncheckedCreateWithoutBucketsInput[]
    connectOrCreate?: fs_access_tokensCreateOrConnectWithoutBucketsInput | fs_access_tokensCreateOrConnectWithoutBucketsInput[]
    createMany?: fs_access_tokensCreateManyBucketsInputEnvelope
    connect?: fs_access_tokensWhereUniqueInput | fs_access_tokensWhereUniqueInput[]
  }

  export type directoriesUncheckedCreateNestedManyWithoutBucketsInput = {
    create?: XOR<directoriesCreateWithoutBucketsInput, directoriesUncheckedCreateWithoutBucketsInput> | directoriesCreateWithoutBucketsInput[] | directoriesUncheckedCreateWithoutBucketsInput[]
    connectOrCreate?: directoriesCreateOrConnectWithoutBucketsInput | directoriesCreateOrConnectWithoutBucketsInput[]
    createMany?: directoriesCreateManyBucketsInputEnvelope
    connect?: directoriesWhereUniqueInput | directoriesWhereUniqueInput[]
  }

  export type filesUncheckedCreateNestedManyWithoutBucketsInput = {
    create?: XOR<filesCreateWithoutBucketsInput, filesUncheckedCreateWithoutBucketsInput> | filesCreateWithoutBucketsInput[] | filesUncheckedCreateWithoutBucketsInput[]
    connectOrCreate?: filesCreateOrConnectWithoutBucketsInput | filesCreateOrConnectWithoutBucketsInput[]
    createMany?: filesCreateManyBucketsInputEnvelope
    connect?: filesWhereUniqueInput | filesWhereUniqueInput[]
  }

  export type fs_access_tokensUncheckedCreateNestedManyWithoutBucketsInput = {
    create?: XOR<fs_access_tokensCreateWithoutBucketsInput, fs_access_tokensUncheckedCreateWithoutBucketsInput> | fs_access_tokensCreateWithoutBucketsInput[] | fs_access_tokensUncheckedCreateWithoutBucketsInput[]
    connectOrCreate?: fs_access_tokensCreateOrConnectWithoutBucketsInput | fs_access_tokensCreateOrConnectWithoutBucketsInput[]
    createMany?: fs_access_tokensCreateManyBucketsInputEnvelope
    connect?: fs_access_tokensWhereUniqueInput | fs_access_tokensWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type Enumbuckets_visibilityFieldUpdateOperationsInput = {
    set?: $Enums.buckets_visibility
  }

  export type Enumbuckets_statusFieldUpdateOperationsInput = {
    set?: $Enums.buckets_status
  }

  export type NullableBigIntFieldUpdateOperationsInput = {
    set?: bigint | number | null
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type directoriesUpdateManyWithoutBucketsNestedInput = {
    create?: XOR<directoriesCreateWithoutBucketsInput, directoriesUncheckedCreateWithoutBucketsInput> | directoriesCreateWithoutBucketsInput[] | directoriesUncheckedCreateWithoutBucketsInput[]
    connectOrCreate?: directoriesCreateOrConnectWithoutBucketsInput | directoriesCreateOrConnectWithoutBucketsInput[]
    upsert?: directoriesUpsertWithWhereUniqueWithoutBucketsInput | directoriesUpsertWithWhereUniqueWithoutBucketsInput[]
    createMany?: directoriesCreateManyBucketsInputEnvelope
    set?: directoriesWhereUniqueInput | directoriesWhereUniqueInput[]
    disconnect?: directoriesWhereUniqueInput | directoriesWhereUniqueInput[]
    delete?: directoriesWhereUniqueInput | directoriesWhereUniqueInput[]
    connect?: directoriesWhereUniqueInput | directoriesWhereUniqueInput[]
    update?: directoriesUpdateWithWhereUniqueWithoutBucketsInput | directoriesUpdateWithWhereUniqueWithoutBucketsInput[]
    updateMany?: directoriesUpdateManyWithWhereWithoutBucketsInput | directoriesUpdateManyWithWhereWithoutBucketsInput[]
    deleteMany?: directoriesScalarWhereInput | directoriesScalarWhereInput[]
  }

  export type filesUpdateManyWithoutBucketsNestedInput = {
    create?: XOR<filesCreateWithoutBucketsInput, filesUncheckedCreateWithoutBucketsInput> | filesCreateWithoutBucketsInput[] | filesUncheckedCreateWithoutBucketsInput[]
    connectOrCreate?: filesCreateOrConnectWithoutBucketsInput | filesCreateOrConnectWithoutBucketsInput[]
    upsert?: filesUpsertWithWhereUniqueWithoutBucketsInput | filesUpsertWithWhereUniqueWithoutBucketsInput[]
    createMany?: filesCreateManyBucketsInputEnvelope
    set?: filesWhereUniqueInput | filesWhereUniqueInput[]
    disconnect?: filesWhereUniqueInput | filesWhereUniqueInput[]
    delete?: filesWhereUniqueInput | filesWhereUniqueInput[]
    connect?: filesWhereUniqueInput | filesWhereUniqueInput[]
    update?: filesUpdateWithWhereUniqueWithoutBucketsInput | filesUpdateWithWhereUniqueWithoutBucketsInput[]
    updateMany?: filesUpdateManyWithWhereWithoutBucketsInput | filesUpdateManyWithWhereWithoutBucketsInput[]
    deleteMany?: filesScalarWhereInput | filesScalarWhereInput[]
  }

  export type fs_access_tokensUpdateManyWithoutBucketsNestedInput = {
    create?: XOR<fs_access_tokensCreateWithoutBucketsInput, fs_access_tokensUncheckedCreateWithoutBucketsInput> | fs_access_tokensCreateWithoutBucketsInput[] | fs_access_tokensUncheckedCreateWithoutBucketsInput[]
    connectOrCreate?: fs_access_tokensCreateOrConnectWithoutBucketsInput | fs_access_tokensCreateOrConnectWithoutBucketsInput[]
    upsert?: fs_access_tokensUpsertWithWhereUniqueWithoutBucketsInput | fs_access_tokensUpsertWithWhereUniqueWithoutBucketsInput[]
    createMany?: fs_access_tokensCreateManyBucketsInputEnvelope
    set?: fs_access_tokensWhereUniqueInput | fs_access_tokensWhereUniqueInput[]
    disconnect?: fs_access_tokensWhereUniqueInput | fs_access_tokensWhereUniqueInput[]
    delete?: fs_access_tokensWhereUniqueInput | fs_access_tokensWhereUniqueInput[]
    connect?: fs_access_tokensWhereUniqueInput | fs_access_tokensWhereUniqueInput[]
    update?: fs_access_tokensUpdateWithWhereUniqueWithoutBucketsInput | fs_access_tokensUpdateWithWhereUniqueWithoutBucketsInput[]
    updateMany?: fs_access_tokensUpdateManyWithWhereWithoutBucketsInput | fs_access_tokensUpdateManyWithWhereWithoutBucketsInput[]
    deleteMany?: fs_access_tokensScalarWhereInput | fs_access_tokensScalarWhereInput[]
  }

  export type directoriesUncheckedUpdateManyWithoutBucketsNestedInput = {
    create?: XOR<directoriesCreateWithoutBucketsInput, directoriesUncheckedCreateWithoutBucketsInput> | directoriesCreateWithoutBucketsInput[] | directoriesUncheckedCreateWithoutBucketsInput[]
    connectOrCreate?: directoriesCreateOrConnectWithoutBucketsInput | directoriesCreateOrConnectWithoutBucketsInput[]
    upsert?: directoriesUpsertWithWhereUniqueWithoutBucketsInput | directoriesUpsertWithWhereUniqueWithoutBucketsInput[]
    createMany?: directoriesCreateManyBucketsInputEnvelope
    set?: directoriesWhereUniqueInput | directoriesWhereUniqueInput[]
    disconnect?: directoriesWhereUniqueInput | directoriesWhereUniqueInput[]
    delete?: directoriesWhereUniqueInput | directoriesWhereUniqueInput[]
    connect?: directoriesWhereUniqueInput | directoriesWhereUniqueInput[]
    update?: directoriesUpdateWithWhereUniqueWithoutBucketsInput | directoriesUpdateWithWhereUniqueWithoutBucketsInput[]
    updateMany?: directoriesUpdateManyWithWhereWithoutBucketsInput | directoriesUpdateManyWithWhereWithoutBucketsInput[]
    deleteMany?: directoriesScalarWhereInput | directoriesScalarWhereInput[]
  }

  export type filesUncheckedUpdateManyWithoutBucketsNestedInput = {
    create?: XOR<filesCreateWithoutBucketsInput, filesUncheckedCreateWithoutBucketsInput> | filesCreateWithoutBucketsInput[] | filesUncheckedCreateWithoutBucketsInput[]
    connectOrCreate?: filesCreateOrConnectWithoutBucketsInput | filesCreateOrConnectWithoutBucketsInput[]
    upsert?: filesUpsertWithWhereUniqueWithoutBucketsInput | filesUpsertWithWhereUniqueWithoutBucketsInput[]
    createMany?: filesCreateManyBucketsInputEnvelope
    set?: filesWhereUniqueInput | filesWhereUniqueInput[]
    disconnect?: filesWhereUniqueInput | filesWhereUniqueInput[]
    delete?: filesWhereUniqueInput | filesWhereUniqueInput[]
    connect?: filesWhereUniqueInput | filesWhereUniqueInput[]
    update?: filesUpdateWithWhereUniqueWithoutBucketsInput | filesUpdateWithWhereUniqueWithoutBucketsInput[]
    updateMany?: filesUpdateManyWithWhereWithoutBucketsInput | filesUpdateManyWithWhereWithoutBucketsInput[]
    deleteMany?: filesScalarWhereInput | filesScalarWhereInput[]
  }

  export type fs_access_tokensUncheckedUpdateManyWithoutBucketsNestedInput = {
    create?: XOR<fs_access_tokensCreateWithoutBucketsInput, fs_access_tokensUncheckedCreateWithoutBucketsInput> | fs_access_tokensCreateWithoutBucketsInput[] | fs_access_tokensUncheckedCreateWithoutBucketsInput[]
    connectOrCreate?: fs_access_tokensCreateOrConnectWithoutBucketsInput | fs_access_tokensCreateOrConnectWithoutBucketsInput[]
    upsert?: fs_access_tokensUpsertWithWhereUniqueWithoutBucketsInput | fs_access_tokensUpsertWithWhereUniqueWithoutBucketsInput[]
    createMany?: fs_access_tokensCreateManyBucketsInputEnvelope
    set?: fs_access_tokensWhereUniqueInput | fs_access_tokensWhereUniqueInput[]
    disconnect?: fs_access_tokensWhereUniqueInput | fs_access_tokensWhereUniqueInput[]
    delete?: fs_access_tokensWhereUniqueInput | fs_access_tokensWhereUniqueInput[]
    connect?: fs_access_tokensWhereUniqueInput | fs_access_tokensWhereUniqueInput[]
    update?: fs_access_tokensUpdateWithWhereUniqueWithoutBucketsInput | fs_access_tokensUpdateWithWhereUniqueWithoutBucketsInput[]
    updateMany?: fs_access_tokensUpdateManyWithWhereWithoutBucketsInput | fs_access_tokensUpdateManyWithWhereWithoutBucketsInput[]
    deleteMany?: fs_access_tokensScalarWhereInput | fs_access_tokensScalarWhereInput[]
  }

  export type bucketsCreateNestedOneWithoutDirectoriesInput = {
    create?: XOR<bucketsCreateWithoutDirectoriesInput, bucketsUncheckedCreateWithoutDirectoriesInput>
    connectOrCreate?: bucketsCreateOrConnectWithoutDirectoriesInput
    connect?: bucketsWhereUniqueInput
  }

  export type directoriesCreateNestedOneWithoutOther_directoriesInput = {
    create?: XOR<directoriesCreateWithoutOther_directoriesInput, directoriesUncheckedCreateWithoutOther_directoriesInput>
    connectOrCreate?: directoriesCreateOrConnectWithoutOther_directoriesInput
    connect?: directoriesWhereUniqueInput
  }

  export type directoriesCreateNestedManyWithoutDirectoriesInput = {
    create?: XOR<directoriesCreateWithoutDirectoriesInput, directoriesUncheckedCreateWithoutDirectoriesInput> | directoriesCreateWithoutDirectoriesInput[] | directoriesUncheckedCreateWithoutDirectoriesInput[]
    connectOrCreate?: directoriesCreateOrConnectWithoutDirectoriesInput | directoriesCreateOrConnectWithoutDirectoriesInput[]
    createMany?: directoriesCreateManyDirectoriesInputEnvelope
    connect?: directoriesWhereUniqueInput | directoriesWhereUniqueInput[]
  }

  export type filesCreateNestedManyWithoutDirectoriesInput = {
    create?: XOR<filesCreateWithoutDirectoriesInput, filesUncheckedCreateWithoutDirectoriesInput> | filesCreateWithoutDirectoriesInput[] | filesUncheckedCreateWithoutDirectoriesInput[]
    connectOrCreate?: filesCreateOrConnectWithoutDirectoriesInput | filesCreateOrConnectWithoutDirectoriesInput[]
    createMany?: filesCreateManyDirectoriesInputEnvelope
    connect?: filesWhereUniqueInput | filesWhereUniqueInput[]
  }

  export type fs_access_tokensCreateNestedOneWithoutDirectoriesInput = {
    create?: XOR<fs_access_tokensCreateWithoutDirectoriesInput, fs_access_tokensUncheckedCreateWithoutDirectoriesInput>
    connectOrCreate?: fs_access_tokensCreateOrConnectWithoutDirectoriesInput
    connect?: fs_access_tokensWhereUniqueInput
  }

  export type directoriesUncheckedCreateNestedManyWithoutDirectoriesInput = {
    create?: XOR<directoriesCreateWithoutDirectoriesInput, directoriesUncheckedCreateWithoutDirectoriesInput> | directoriesCreateWithoutDirectoriesInput[] | directoriesUncheckedCreateWithoutDirectoriesInput[]
    connectOrCreate?: directoriesCreateOrConnectWithoutDirectoriesInput | directoriesCreateOrConnectWithoutDirectoriesInput[]
    createMany?: directoriesCreateManyDirectoriesInputEnvelope
    connect?: directoriesWhereUniqueInput | directoriesWhereUniqueInput[]
  }

  export type filesUncheckedCreateNestedManyWithoutDirectoriesInput = {
    create?: XOR<filesCreateWithoutDirectoriesInput, filesUncheckedCreateWithoutDirectoriesInput> | filesCreateWithoutDirectoriesInput[] | filesUncheckedCreateWithoutDirectoriesInput[]
    connectOrCreate?: filesCreateOrConnectWithoutDirectoriesInput | filesCreateOrConnectWithoutDirectoriesInput[]
    createMany?: filesCreateManyDirectoriesInputEnvelope
    connect?: filesWhereUniqueInput | filesWhereUniqueInput[]
  }

  export type fs_access_tokensUncheckedCreateNestedOneWithoutDirectoriesInput = {
    create?: XOR<fs_access_tokensCreateWithoutDirectoriesInput, fs_access_tokensUncheckedCreateWithoutDirectoriesInput>
    connectOrCreate?: fs_access_tokensCreateOrConnectWithoutDirectoriesInput
    connect?: fs_access_tokensWhereUniqueInput
  }

  export type bucketsUpdateOneRequiredWithoutDirectoriesNestedInput = {
    create?: XOR<bucketsCreateWithoutDirectoriesInput, bucketsUncheckedCreateWithoutDirectoriesInput>
    connectOrCreate?: bucketsCreateOrConnectWithoutDirectoriesInput
    upsert?: bucketsUpsertWithoutDirectoriesInput
    connect?: bucketsWhereUniqueInput
    update?: XOR<XOR<bucketsUpdateToOneWithWhereWithoutDirectoriesInput, bucketsUpdateWithoutDirectoriesInput>, bucketsUncheckedUpdateWithoutDirectoriesInput>
  }

  export type directoriesUpdateOneWithoutOther_directoriesNestedInput = {
    create?: XOR<directoriesCreateWithoutOther_directoriesInput, directoriesUncheckedCreateWithoutOther_directoriesInput>
    connectOrCreate?: directoriesCreateOrConnectWithoutOther_directoriesInput
    upsert?: directoriesUpsertWithoutOther_directoriesInput
    disconnect?: directoriesWhereInput | boolean
    delete?: directoriesWhereInput | boolean
    connect?: directoriesWhereUniqueInput
    update?: XOR<XOR<directoriesUpdateToOneWithWhereWithoutOther_directoriesInput, directoriesUpdateWithoutOther_directoriesInput>, directoriesUncheckedUpdateWithoutOther_directoriesInput>
  }

  export type directoriesUpdateManyWithoutDirectoriesNestedInput = {
    create?: XOR<directoriesCreateWithoutDirectoriesInput, directoriesUncheckedCreateWithoutDirectoriesInput> | directoriesCreateWithoutDirectoriesInput[] | directoriesUncheckedCreateWithoutDirectoriesInput[]
    connectOrCreate?: directoriesCreateOrConnectWithoutDirectoriesInput | directoriesCreateOrConnectWithoutDirectoriesInput[]
    upsert?: directoriesUpsertWithWhereUniqueWithoutDirectoriesInput | directoriesUpsertWithWhereUniqueWithoutDirectoriesInput[]
    createMany?: directoriesCreateManyDirectoriesInputEnvelope
    set?: directoriesWhereUniqueInput | directoriesWhereUniqueInput[]
    disconnect?: directoriesWhereUniqueInput | directoriesWhereUniqueInput[]
    delete?: directoriesWhereUniqueInput | directoriesWhereUniqueInput[]
    connect?: directoriesWhereUniqueInput | directoriesWhereUniqueInput[]
    update?: directoriesUpdateWithWhereUniqueWithoutDirectoriesInput | directoriesUpdateWithWhereUniqueWithoutDirectoriesInput[]
    updateMany?: directoriesUpdateManyWithWhereWithoutDirectoriesInput | directoriesUpdateManyWithWhereWithoutDirectoriesInput[]
    deleteMany?: directoriesScalarWhereInput | directoriesScalarWhereInput[]
  }

  export type filesUpdateManyWithoutDirectoriesNestedInput = {
    create?: XOR<filesCreateWithoutDirectoriesInput, filesUncheckedCreateWithoutDirectoriesInput> | filesCreateWithoutDirectoriesInput[] | filesUncheckedCreateWithoutDirectoriesInput[]
    connectOrCreate?: filesCreateOrConnectWithoutDirectoriesInput | filesCreateOrConnectWithoutDirectoriesInput[]
    upsert?: filesUpsertWithWhereUniqueWithoutDirectoriesInput | filesUpsertWithWhereUniqueWithoutDirectoriesInput[]
    createMany?: filesCreateManyDirectoriesInputEnvelope
    set?: filesWhereUniqueInput | filesWhereUniqueInput[]
    disconnect?: filesWhereUniqueInput | filesWhereUniqueInput[]
    delete?: filesWhereUniqueInput | filesWhereUniqueInput[]
    connect?: filesWhereUniqueInput | filesWhereUniqueInput[]
    update?: filesUpdateWithWhereUniqueWithoutDirectoriesInput | filesUpdateWithWhereUniqueWithoutDirectoriesInput[]
    updateMany?: filesUpdateManyWithWhereWithoutDirectoriesInput | filesUpdateManyWithWhereWithoutDirectoriesInput[]
    deleteMany?: filesScalarWhereInput | filesScalarWhereInput[]
  }

  export type fs_access_tokensUpdateOneWithoutDirectoriesNestedInput = {
    create?: XOR<fs_access_tokensCreateWithoutDirectoriesInput, fs_access_tokensUncheckedCreateWithoutDirectoriesInput>
    connectOrCreate?: fs_access_tokensCreateOrConnectWithoutDirectoriesInput
    upsert?: fs_access_tokensUpsertWithoutDirectoriesInput
    disconnect?: fs_access_tokensWhereInput | boolean
    delete?: fs_access_tokensWhereInput | boolean
    connect?: fs_access_tokensWhereUniqueInput
    update?: XOR<XOR<fs_access_tokensUpdateToOneWithWhereWithoutDirectoriesInput, fs_access_tokensUpdateWithoutDirectoriesInput>, fs_access_tokensUncheckedUpdateWithoutDirectoriesInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type directoriesUncheckedUpdateManyWithoutDirectoriesNestedInput = {
    create?: XOR<directoriesCreateWithoutDirectoriesInput, directoriesUncheckedCreateWithoutDirectoriesInput> | directoriesCreateWithoutDirectoriesInput[] | directoriesUncheckedCreateWithoutDirectoriesInput[]
    connectOrCreate?: directoriesCreateOrConnectWithoutDirectoriesInput | directoriesCreateOrConnectWithoutDirectoriesInput[]
    upsert?: directoriesUpsertWithWhereUniqueWithoutDirectoriesInput | directoriesUpsertWithWhereUniqueWithoutDirectoriesInput[]
    createMany?: directoriesCreateManyDirectoriesInputEnvelope
    set?: directoriesWhereUniqueInput | directoriesWhereUniqueInput[]
    disconnect?: directoriesWhereUniqueInput | directoriesWhereUniqueInput[]
    delete?: directoriesWhereUniqueInput | directoriesWhereUniqueInput[]
    connect?: directoriesWhereUniqueInput | directoriesWhereUniqueInput[]
    update?: directoriesUpdateWithWhereUniqueWithoutDirectoriesInput | directoriesUpdateWithWhereUniqueWithoutDirectoriesInput[]
    updateMany?: directoriesUpdateManyWithWhereWithoutDirectoriesInput | directoriesUpdateManyWithWhereWithoutDirectoriesInput[]
    deleteMany?: directoriesScalarWhereInput | directoriesScalarWhereInput[]
  }

  export type filesUncheckedUpdateManyWithoutDirectoriesNestedInput = {
    create?: XOR<filesCreateWithoutDirectoriesInput, filesUncheckedCreateWithoutDirectoriesInput> | filesCreateWithoutDirectoriesInput[] | filesUncheckedCreateWithoutDirectoriesInput[]
    connectOrCreate?: filesCreateOrConnectWithoutDirectoriesInput | filesCreateOrConnectWithoutDirectoriesInput[]
    upsert?: filesUpsertWithWhereUniqueWithoutDirectoriesInput | filesUpsertWithWhereUniqueWithoutDirectoriesInput[]
    createMany?: filesCreateManyDirectoriesInputEnvelope
    set?: filesWhereUniqueInput | filesWhereUniqueInput[]
    disconnect?: filesWhereUniqueInput | filesWhereUniqueInput[]
    delete?: filesWhereUniqueInput | filesWhereUniqueInput[]
    connect?: filesWhereUniqueInput | filesWhereUniqueInput[]
    update?: filesUpdateWithWhereUniqueWithoutDirectoriesInput | filesUpdateWithWhereUniqueWithoutDirectoriesInput[]
    updateMany?: filesUpdateManyWithWhereWithoutDirectoriesInput | filesUpdateManyWithWhereWithoutDirectoriesInput[]
    deleteMany?: filesScalarWhereInput | filesScalarWhereInput[]
  }

  export type fs_access_tokensUncheckedUpdateOneWithoutDirectoriesNestedInput = {
    create?: XOR<fs_access_tokensCreateWithoutDirectoriesInput, fs_access_tokensUncheckedCreateWithoutDirectoriesInput>
    connectOrCreate?: fs_access_tokensCreateOrConnectWithoutDirectoriesInput
    upsert?: fs_access_tokensUpsertWithoutDirectoriesInput
    disconnect?: fs_access_tokensWhereInput | boolean
    delete?: fs_access_tokensWhereInput | boolean
    connect?: fs_access_tokensWhereUniqueInput
    update?: XOR<XOR<fs_access_tokensUpdateToOneWithWhereWithoutDirectoriesInput, fs_access_tokensUpdateWithoutDirectoriesInput>, fs_access_tokensUncheckedUpdateWithoutDirectoriesInput>
  }

  export type bucketsCreateNestedOneWithoutFilesInput = {
    create?: XOR<bucketsCreateWithoutFilesInput, bucketsUncheckedCreateWithoutFilesInput>
    connectOrCreate?: bucketsCreateOrConnectWithoutFilesInput
    connect?: bucketsWhereUniqueInput
  }

  export type directoriesCreateNestedOneWithoutFilesInput = {
    create?: XOR<directoriesCreateWithoutFilesInput, directoriesUncheckedCreateWithoutFilesInput>
    connectOrCreate?: directoriesCreateOrConnectWithoutFilesInput
    connect?: directoriesWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type Enumfiles_statusFieldUpdateOperationsInput = {
    set?: $Enums.files_status
  }

  export type bucketsUpdateOneRequiredWithoutFilesNestedInput = {
    create?: XOR<bucketsCreateWithoutFilesInput, bucketsUncheckedCreateWithoutFilesInput>
    connectOrCreate?: bucketsCreateOrConnectWithoutFilesInput
    upsert?: bucketsUpsertWithoutFilesInput
    connect?: bucketsWhereUniqueInput
    update?: XOR<XOR<bucketsUpdateToOneWithWhereWithoutFilesInput, bucketsUpdateWithoutFilesInput>, bucketsUncheckedUpdateWithoutFilesInput>
  }

  export type directoriesUpdateOneWithoutFilesNestedInput = {
    create?: XOR<directoriesCreateWithoutFilesInput, directoriesUncheckedCreateWithoutFilesInput>
    connectOrCreate?: directoriesCreateOrConnectWithoutFilesInput
    upsert?: directoriesUpsertWithoutFilesInput
    disconnect?: directoriesWhereInput | boolean
    delete?: directoriesWhereInput | boolean
    connect?: directoriesWhereUniqueInput
    update?: XOR<XOR<directoriesUpdateToOneWithWhereWithoutFilesInput, directoriesUpdateWithoutFilesInput>, directoriesUncheckedUpdateWithoutFilesInput>
  }

  export type bucketsCreateNestedOneWithoutFs_access_tokensInput = {
    create?: XOR<bucketsCreateWithoutFs_access_tokensInput, bucketsUncheckedCreateWithoutFs_access_tokensInput>
    connectOrCreate?: bucketsCreateOrConnectWithoutFs_access_tokensInput
    connect?: bucketsWhereUniqueInput
  }

  export type directoriesCreateNestedOneWithoutFs_access_tokensInput = {
    create?: XOR<directoriesCreateWithoutFs_access_tokensInput, directoriesUncheckedCreateWithoutFs_access_tokensInput>
    connectOrCreate?: directoriesCreateOrConnectWithoutFs_access_tokensInput
    connect?: directoriesWhereUniqueInput
  }

  export type bucketsUpdateOneRequiredWithoutFs_access_tokensNestedInput = {
    create?: XOR<bucketsCreateWithoutFs_access_tokensInput, bucketsUncheckedCreateWithoutFs_access_tokensInput>
    connectOrCreate?: bucketsCreateOrConnectWithoutFs_access_tokensInput
    upsert?: bucketsUpsertWithoutFs_access_tokensInput
    connect?: bucketsWhereUniqueInput
    update?: XOR<XOR<bucketsUpdateToOneWithWhereWithoutFs_access_tokensInput, bucketsUpdateWithoutFs_access_tokensInput>, bucketsUncheckedUpdateWithoutFs_access_tokensInput>
  }

  export type directoriesUpdateOneRequiredWithoutFs_access_tokensNestedInput = {
    create?: XOR<directoriesCreateWithoutFs_access_tokensInput, directoriesUncheckedCreateWithoutFs_access_tokensInput>
    connectOrCreate?: directoriesCreateOrConnectWithoutFs_access_tokensInput
    upsert?: directoriesUpsertWithoutFs_access_tokensInput
    connect?: directoriesWhereUniqueInput
    update?: XOR<XOR<directoriesUpdateToOneWithWhereWithoutFs_access_tokensInput, directoriesUpdateWithoutFs_access_tokensInput>, directoriesUncheckedUpdateWithoutFs_access_tokensInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumbuckets_visibilityFilter<$PrismaModel = never> = {
    equals?: $Enums.buckets_visibility | Enumbuckets_visibilityFieldRefInput<$PrismaModel>
    in?: $Enums.buckets_visibility[]
    notIn?: $Enums.buckets_visibility[]
    not?: NestedEnumbuckets_visibilityFilter<$PrismaModel> | $Enums.buckets_visibility
  }

  export type NestedEnumbuckets_statusFilter<$PrismaModel = never> = {
    equals?: $Enums.buckets_status | Enumbuckets_statusFieldRefInput<$PrismaModel>
    in?: $Enums.buckets_status[]
    notIn?: $Enums.buckets_status[]
    not?: NestedEnumbuckets_statusFilter<$PrismaModel> | $Enums.buckets_status
  }

  export type NestedBigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | null
    notIn?: bigint[] | number[] | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedEnumbuckets_visibilityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.buckets_visibility | Enumbuckets_visibilityFieldRefInput<$PrismaModel>
    in?: $Enums.buckets_visibility[]
    notIn?: $Enums.buckets_visibility[]
    not?: NestedEnumbuckets_visibilityWithAggregatesFilter<$PrismaModel> | $Enums.buckets_visibility
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumbuckets_visibilityFilter<$PrismaModel>
    _max?: NestedEnumbuckets_visibilityFilter<$PrismaModel>
  }

  export type NestedEnumbuckets_statusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.buckets_status | Enumbuckets_statusFieldRefInput<$PrismaModel>
    in?: $Enums.buckets_status[]
    notIn?: $Enums.buckets_status[]
    not?: NestedEnumbuckets_statusWithAggregatesFilter<$PrismaModel> | $Enums.buckets_status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumbuckets_statusFilter<$PrismaModel>
    _max?: NestedEnumbuckets_statusFilter<$PrismaModel>
  }

  export type NestedBigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | null
    notIn?: bigint[] | number[] | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableWithAggregatesFilter<$PrismaModel> | bigint | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedBigIntNullableFilter<$PrismaModel>
    _min?: NestedBigIntNullableFilter<$PrismaModel>
    _max?: NestedBigIntNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumfiles_statusFilter<$PrismaModel = never> = {
    equals?: $Enums.files_status | Enumfiles_statusFieldRefInput<$PrismaModel>
    in?: $Enums.files_status[]
    notIn?: $Enums.files_status[]
    not?: NestedEnumfiles_statusFilter<$PrismaModel> | $Enums.files_status
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedEnumfiles_statusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.files_status | Enumfiles_statusFieldRefInput<$PrismaModel>
    in?: $Enums.files_status[]
    notIn?: $Enums.files_status[]
    not?: NestedEnumfiles_statusWithAggregatesFilter<$PrismaModel> | $Enums.files_status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumfiles_statusFilter<$PrismaModel>
    _max?: NestedEnumfiles_statusFilter<$PrismaModel>
  }

  export type directoriesCreateWithoutBucketsInput = {
    depth_level: number
    dir_name: string
    dir_slug: string
    path_in_slug: string
    path_in_id: string
    total_size_bytes?: bigint | number
    created_at_unix: bigint | number
    updated_at_unix?: bigint | number | null
    directories?: directoriesCreateNestedOneWithoutOther_directoriesInput
    other_directories?: directoriesCreateNestedManyWithoutDirectoriesInput
    files?: filesCreateNestedManyWithoutDirectoriesInput
    fs_access_tokens?: fs_access_tokensCreateNestedOneWithoutDirectoriesInput
  }

  export type directoriesUncheckedCreateWithoutBucketsInput = {
    dir_id?: number
    parent_dir_id?: number | null
    depth_level: number
    dir_name: string
    dir_slug: string
    path_in_slug: string
    path_in_id: string
    total_size_bytes?: bigint | number
    created_at_unix: bigint | number
    updated_at_unix?: bigint | number | null
    other_directories?: directoriesUncheckedCreateNestedManyWithoutDirectoriesInput
    files?: filesUncheckedCreateNestedManyWithoutDirectoriesInput
    fs_access_tokens?: fs_access_tokensUncheckedCreateNestedOneWithoutDirectoriesInput
  }

  export type directoriesCreateOrConnectWithoutBucketsInput = {
    where: directoriesWhereUniqueInput
    create: XOR<directoriesCreateWithoutBucketsInput, directoriesUncheckedCreateWithoutBucketsInput>
  }

  export type directoriesCreateManyBucketsInputEnvelope = {
    data: directoriesCreateManyBucketsInput | directoriesCreateManyBucketsInput[]
    skipDuplicates?: boolean
  }

  export type filesCreateWithoutBucketsInput = {
    file_name: string
    file_slug: string
    mime_type: string
    size_bytes: bigint | number
    checksum_sha256?: string | null
    status?: $Enums.files_status
    uploaded_by: number
    created_at_unix: bigint | number
    updated_at_unix?: bigint | number | null
    directories?: directoriesCreateNestedOneWithoutFilesInput
  }

  export type filesUncheckedCreateWithoutBucketsInput = {
    file_id?: number
    parent_dir_id?: number | null
    file_name: string
    file_slug: string
    mime_type: string
    size_bytes: bigint | number
    checksum_sha256?: string | null
    status?: $Enums.files_status
    uploaded_by: number
    created_at_unix: bigint | number
    updated_at_unix?: bigint | number | null
  }

  export type filesCreateOrConnectWithoutBucketsInput = {
    where: filesWhereUniqueInput
    create: XOR<filesCreateWithoutBucketsInput, filesUncheckedCreateWithoutBucketsInput>
  }

  export type filesCreateManyBucketsInputEnvelope = {
    data: filesCreateManyBucketsInput | filesCreateManyBucketsInput[]
    skipDuplicates?: boolean
  }

  export type fs_access_tokensCreateWithoutBucketsInput = {
    token_random_code: number
    token_name: string
    token_slug: string
    issued_to?: string | null
    expires_at_unix?: bigint | number | null
    created_by?: number | null
    created_at_unix: bigint | number
    directories: directoriesCreateNestedOneWithoutFs_access_tokensInput
  }

  export type fs_access_tokensUncheckedCreateWithoutBucketsInput = {
    token_id?: number
    dir_id: number
    token_random_code: number
    token_name: string
    token_slug: string
    issued_to?: string | null
    expires_at_unix?: bigint | number | null
    created_by?: number | null
    created_at_unix: bigint | number
  }

  export type fs_access_tokensCreateOrConnectWithoutBucketsInput = {
    where: fs_access_tokensWhereUniqueInput
    create: XOR<fs_access_tokensCreateWithoutBucketsInput, fs_access_tokensUncheckedCreateWithoutBucketsInput>
  }

  export type fs_access_tokensCreateManyBucketsInputEnvelope = {
    data: fs_access_tokensCreateManyBucketsInput | fs_access_tokensCreateManyBucketsInput[]
    skipDuplicates?: boolean
  }

  export type directoriesUpsertWithWhereUniqueWithoutBucketsInput = {
    where: directoriesWhereUniqueInput
    update: XOR<directoriesUpdateWithoutBucketsInput, directoriesUncheckedUpdateWithoutBucketsInput>
    create: XOR<directoriesCreateWithoutBucketsInput, directoriesUncheckedCreateWithoutBucketsInput>
  }

  export type directoriesUpdateWithWhereUniqueWithoutBucketsInput = {
    where: directoriesWhereUniqueInput
    data: XOR<directoriesUpdateWithoutBucketsInput, directoriesUncheckedUpdateWithoutBucketsInput>
  }

  export type directoriesUpdateManyWithWhereWithoutBucketsInput = {
    where: directoriesScalarWhereInput
    data: XOR<directoriesUpdateManyMutationInput, directoriesUncheckedUpdateManyWithoutBucketsInput>
  }

  export type directoriesScalarWhereInput = {
    AND?: directoriesScalarWhereInput | directoriesScalarWhereInput[]
    OR?: directoriesScalarWhereInput[]
    NOT?: directoriesScalarWhereInput | directoriesScalarWhereInput[]
    dir_id?: IntFilter<"directories"> | number
    bucket_id?: IntFilter<"directories"> | number
    parent_dir_id?: IntNullableFilter<"directories"> | number | null
    depth_level?: IntFilter<"directories"> | number
    dir_name?: StringFilter<"directories"> | string
    dir_slug?: StringFilter<"directories"> | string
    path_in_slug?: StringFilter<"directories"> | string
    path_in_id?: StringFilter<"directories"> | string
    total_size_bytes?: BigIntFilter<"directories"> | bigint | number
    created_at_unix?: BigIntFilter<"directories"> | bigint | number
    updated_at_unix?: BigIntNullableFilter<"directories"> | bigint | number | null
  }

  export type filesUpsertWithWhereUniqueWithoutBucketsInput = {
    where: filesWhereUniqueInput
    update: XOR<filesUpdateWithoutBucketsInput, filesUncheckedUpdateWithoutBucketsInput>
    create: XOR<filesCreateWithoutBucketsInput, filesUncheckedCreateWithoutBucketsInput>
  }

  export type filesUpdateWithWhereUniqueWithoutBucketsInput = {
    where: filesWhereUniqueInput
    data: XOR<filesUpdateWithoutBucketsInput, filesUncheckedUpdateWithoutBucketsInput>
  }

  export type filesUpdateManyWithWhereWithoutBucketsInput = {
    where: filesScalarWhereInput
    data: XOR<filesUpdateManyMutationInput, filesUncheckedUpdateManyWithoutBucketsInput>
  }

  export type filesScalarWhereInput = {
    AND?: filesScalarWhereInput | filesScalarWhereInput[]
    OR?: filesScalarWhereInput[]
    NOT?: filesScalarWhereInput | filesScalarWhereInput[]
    file_id?: IntFilter<"files"> | number
    bucket_id?: IntFilter<"files"> | number
    parent_dir_id?: IntNullableFilter<"files"> | number | null
    file_name?: StringFilter<"files"> | string
    file_slug?: StringFilter<"files"> | string
    mime_type?: StringFilter<"files"> | string
    size_bytes?: BigIntFilter<"files"> | bigint | number
    checksum_sha256?: StringNullableFilter<"files"> | string | null
    status?: Enumfiles_statusFilter<"files"> | $Enums.files_status
    uploaded_by?: IntFilter<"files"> | number
    created_at_unix?: BigIntFilter<"files"> | bigint | number
    updated_at_unix?: BigIntNullableFilter<"files"> | bigint | number | null
  }

  export type fs_access_tokensUpsertWithWhereUniqueWithoutBucketsInput = {
    where: fs_access_tokensWhereUniqueInput
    update: XOR<fs_access_tokensUpdateWithoutBucketsInput, fs_access_tokensUncheckedUpdateWithoutBucketsInput>
    create: XOR<fs_access_tokensCreateWithoutBucketsInput, fs_access_tokensUncheckedCreateWithoutBucketsInput>
  }

  export type fs_access_tokensUpdateWithWhereUniqueWithoutBucketsInput = {
    where: fs_access_tokensWhereUniqueInput
    data: XOR<fs_access_tokensUpdateWithoutBucketsInput, fs_access_tokensUncheckedUpdateWithoutBucketsInput>
  }

  export type fs_access_tokensUpdateManyWithWhereWithoutBucketsInput = {
    where: fs_access_tokensScalarWhereInput
    data: XOR<fs_access_tokensUpdateManyMutationInput, fs_access_tokensUncheckedUpdateManyWithoutBucketsInput>
  }

  export type fs_access_tokensScalarWhereInput = {
    AND?: fs_access_tokensScalarWhereInput | fs_access_tokensScalarWhereInput[]
    OR?: fs_access_tokensScalarWhereInput[]
    NOT?: fs_access_tokensScalarWhereInput | fs_access_tokensScalarWhereInput[]
    token_id?: IntFilter<"fs_access_tokens"> | number
    bucket_id?: IntFilter<"fs_access_tokens"> | number
    dir_id?: IntFilter<"fs_access_tokens"> | number
    token_random_code?: IntFilter<"fs_access_tokens"> | number
    token_name?: StringFilter<"fs_access_tokens"> | string
    token_slug?: StringFilter<"fs_access_tokens"> | string
    issued_to?: StringNullableFilter<"fs_access_tokens"> | string | null
    expires_at_unix?: BigIntNullableFilter<"fs_access_tokens"> | bigint | number | null
    created_by?: IntNullableFilter<"fs_access_tokens"> | number | null
    created_at_unix?: BigIntFilter<"fs_access_tokens"> | bigint | number
  }

  export type bucketsCreateWithoutDirectoriesInput = {
    org_id: number
    bucket_name: string
    bucket_slug: string
    total_size_bytes?: bigint | number
    max_size_bytes?: bigint | number
    visibility?: $Enums.buckets_visibility
    status?: $Enums.buckets_status
    created_by: number
    created_at_unix: bigint | number
    updated_at_unix?: bigint | number | null
    files?: filesCreateNestedManyWithoutBucketsInput
    fs_access_tokens?: fs_access_tokensCreateNestedManyWithoutBucketsInput
  }

  export type bucketsUncheckedCreateWithoutDirectoriesInput = {
    bucket_id?: number
    org_id: number
    bucket_name: string
    bucket_slug: string
    total_size_bytes?: bigint | number
    max_size_bytes?: bigint | number
    visibility?: $Enums.buckets_visibility
    status?: $Enums.buckets_status
    created_by: number
    created_at_unix: bigint | number
    updated_at_unix?: bigint | number | null
    files?: filesUncheckedCreateNestedManyWithoutBucketsInput
    fs_access_tokens?: fs_access_tokensUncheckedCreateNestedManyWithoutBucketsInput
  }

  export type bucketsCreateOrConnectWithoutDirectoriesInput = {
    where: bucketsWhereUniqueInput
    create: XOR<bucketsCreateWithoutDirectoriesInput, bucketsUncheckedCreateWithoutDirectoriesInput>
  }

  export type directoriesCreateWithoutOther_directoriesInput = {
    depth_level: number
    dir_name: string
    dir_slug: string
    path_in_slug: string
    path_in_id: string
    total_size_bytes?: bigint | number
    created_at_unix: bigint | number
    updated_at_unix?: bigint | number | null
    buckets: bucketsCreateNestedOneWithoutDirectoriesInput
    directories?: directoriesCreateNestedOneWithoutOther_directoriesInput
    files?: filesCreateNestedManyWithoutDirectoriesInput
    fs_access_tokens?: fs_access_tokensCreateNestedOneWithoutDirectoriesInput
  }

  export type directoriesUncheckedCreateWithoutOther_directoriesInput = {
    dir_id?: number
    bucket_id: number
    parent_dir_id?: number | null
    depth_level: number
    dir_name: string
    dir_slug: string
    path_in_slug: string
    path_in_id: string
    total_size_bytes?: bigint | number
    created_at_unix: bigint | number
    updated_at_unix?: bigint | number | null
    files?: filesUncheckedCreateNestedManyWithoutDirectoriesInput
    fs_access_tokens?: fs_access_tokensUncheckedCreateNestedOneWithoutDirectoriesInput
  }

  export type directoriesCreateOrConnectWithoutOther_directoriesInput = {
    where: directoriesWhereUniqueInput
    create: XOR<directoriesCreateWithoutOther_directoriesInput, directoriesUncheckedCreateWithoutOther_directoriesInput>
  }

  export type directoriesCreateWithoutDirectoriesInput = {
    depth_level: number
    dir_name: string
    dir_slug: string
    path_in_slug: string
    path_in_id: string
    total_size_bytes?: bigint | number
    created_at_unix: bigint | number
    updated_at_unix?: bigint | number | null
    buckets: bucketsCreateNestedOneWithoutDirectoriesInput
    other_directories?: directoriesCreateNestedManyWithoutDirectoriesInput
    files?: filesCreateNestedManyWithoutDirectoriesInput
    fs_access_tokens?: fs_access_tokensCreateNestedOneWithoutDirectoriesInput
  }

  export type directoriesUncheckedCreateWithoutDirectoriesInput = {
    dir_id?: number
    bucket_id: number
    depth_level: number
    dir_name: string
    dir_slug: string
    path_in_slug: string
    path_in_id: string
    total_size_bytes?: bigint | number
    created_at_unix: bigint | number
    updated_at_unix?: bigint | number | null
    other_directories?: directoriesUncheckedCreateNestedManyWithoutDirectoriesInput
    files?: filesUncheckedCreateNestedManyWithoutDirectoriesInput
    fs_access_tokens?: fs_access_tokensUncheckedCreateNestedOneWithoutDirectoriesInput
  }

  export type directoriesCreateOrConnectWithoutDirectoriesInput = {
    where: directoriesWhereUniqueInput
    create: XOR<directoriesCreateWithoutDirectoriesInput, directoriesUncheckedCreateWithoutDirectoriesInput>
  }

  export type directoriesCreateManyDirectoriesInputEnvelope = {
    data: directoriesCreateManyDirectoriesInput | directoriesCreateManyDirectoriesInput[]
    skipDuplicates?: boolean
  }

  export type filesCreateWithoutDirectoriesInput = {
    file_name: string
    file_slug: string
    mime_type: string
    size_bytes: bigint | number
    checksum_sha256?: string | null
    status?: $Enums.files_status
    uploaded_by: number
    created_at_unix: bigint | number
    updated_at_unix?: bigint | number | null
    buckets: bucketsCreateNestedOneWithoutFilesInput
  }

  export type filesUncheckedCreateWithoutDirectoriesInput = {
    file_id?: number
    bucket_id: number
    file_name: string
    file_slug: string
    mime_type: string
    size_bytes: bigint | number
    checksum_sha256?: string | null
    status?: $Enums.files_status
    uploaded_by: number
    created_at_unix: bigint | number
    updated_at_unix?: bigint | number | null
  }

  export type filesCreateOrConnectWithoutDirectoriesInput = {
    where: filesWhereUniqueInput
    create: XOR<filesCreateWithoutDirectoriesInput, filesUncheckedCreateWithoutDirectoriesInput>
  }

  export type filesCreateManyDirectoriesInputEnvelope = {
    data: filesCreateManyDirectoriesInput | filesCreateManyDirectoriesInput[]
    skipDuplicates?: boolean
  }

  export type fs_access_tokensCreateWithoutDirectoriesInput = {
    token_random_code: number
    token_name: string
    token_slug: string
    issued_to?: string | null
    expires_at_unix?: bigint | number | null
    created_by?: number | null
    created_at_unix: bigint | number
    buckets: bucketsCreateNestedOneWithoutFs_access_tokensInput
  }

  export type fs_access_tokensUncheckedCreateWithoutDirectoriesInput = {
    token_id?: number
    bucket_id: number
    token_random_code: number
    token_name: string
    token_slug: string
    issued_to?: string | null
    expires_at_unix?: bigint | number | null
    created_by?: number | null
    created_at_unix: bigint | number
  }

  export type fs_access_tokensCreateOrConnectWithoutDirectoriesInput = {
    where: fs_access_tokensWhereUniqueInput
    create: XOR<fs_access_tokensCreateWithoutDirectoriesInput, fs_access_tokensUncheckedCreateWithoutDirectoriesInput>
  }

  export type bucketsUpsertWithoutDirectoriesInput = {
    update: XOR<bucketsUpdateWithoutDirectoriesInput, bucketsUncheckedUpdateWithoutDirectoriesInput>
    create: XOR<bucketsCreateWithoutDirectoriesInput, bucketsUncheckedCreateWithoutDirectoriesInput>
    where?: bucketsWhereInput
  }

  export type bucketsUpdateToOneWithWhereWithoutDirectoriesInput = {
    where?: bucketsWhereInput
    data: XOR<bucketsUpdateWithoutDirectoriesInput, bucketsUncheckedUpdateWithoutDirectoriesInput>
  }

  export type bucketsUpdateWithoutDirectoriesInput = {
    org_id?: IntFieldUpdateOperationsInput | number
    bucket_name?: StringFieldUpdateOperationsInput | string
    bucket_slug?: StringFieldUpdateOperationsInput | string
    total_size_bytes?: BigIntFieldUpdateOperationsInput | bigint | number
    max_size_bytes?: BigIntFieldUpdateOperationsInput | bigint | number
    visibility?: Enumbuckets_visibilityFieldUpdateOperationsInput | $Enums.buckets_visibility
    status?: Enumbuckets_statusFieldUpdateOperationsInput | $Enums.buckets_status
    created_by?: IntFieldUpdateOperationsInput | number
    created_at_unix?: BigIntFieldUpdateOperationsInput | bigint | number
    updated_at_unix?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    files?: filesUpdateManyWithoutBucketsNestedInput
    fs_access_tokens?: fs_access_tokensUpdateManyWithoutBucketsNestedInput
  }

  export type bucketsUncheckedUpdateWithoutDirectoriesInput = {
    bucket_id?: IntFieldUpdateOperationsInput | number
    org_id?: IntFieldUpdateOperationsInput | number
    bucket_name?: StringFieldUpdateOperationsInput | string
    bucket_slug?: StringFieldUpdateOperationsInput | string
    total_size_bytes?: BigIntFieldUpdateOperationsInput | bigint | number
    max_size_bytes?: BigIntFieldUpdateOperationsInput | bigint | number
    visibility?: Enumbuckets_visibilityFieldUpdateOperationsInput | $Enums.buckets_visibility
    status?: Enumbuckets_statusFieldUpdateOperationsInput | $Enums.buckets_status
    created_by?: IntFieldUpdateOperationsInput | number
    created_at_unix?: BigIntFieldUpdateOperationsInput | bigint | number
    updated_at_unix?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    files?: filesUncheckedUpdateManyWithoutBucketsNestedInput
    fs_access_tokens?: fs_access_tokensUncheckedUpdateManyWithoutBucketsNestedInput
  }

  export type directoriesUpsertWithoutOther_directoriesInput = {
    update: XOR<directoriesUpdateWithoutOther_directoriesInput, directoriesUncheckedUpdateWithoutOther_directoriesInput>
    create: XOR<directoriesCreateWithoutOther_directoriesInput, directoriesUncheckedCreateWithoutOther_directoriesInput>
    where?: directoriesWhereInput
  }

  export type directoriesUpdateToOneWithWhereWithoutOther_directoriesInput = {
    where?: directoriesWhereInput
    data: XOR<directoriesUpdateWithoutOther_directoriesInput, directoriesUncheckedUpdateWithoutOther_directoriesInput>
  }

  export type directoriesUpdateWithoutOther_directoriesInput = {
    depth_level?: IntFieldUpdateOperationsInput | number
    dir_name?: StringFieldUpdateOperationsInput | string
    dir_slug?: StringFieldUpdateOperationsInput | string
    path_in_slug?: StringFieldUpdateOperationsInput | string
    path_in_id?: StringFieldUpdateOperationsInput | string
    total_size_bytes?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at_unix?: BigIntFieldUpdateOperationsInput | bigint | number
    updated_at_unix?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    buckets?: bucketsUpdateOneRequiredWithoutDirectoriesNestedInput
    directories?: directoriesUpdateOneWithoutOther_directoriesNestedInput
    files?: filesUpdateManyWithoutDirectoriesNestedInput
    fs_access_tokens?: fs_access_tokensUpdateOneWithoutDirectoriesNestedInput
  }

  export type directoriesUncheckedUpdateWithoutOther_directoriesInput = {
    dir_id?: IntFieldUpdateOperationsInput | number
    bucket_id?: IntFieldUpdateOperationsInput | number
    parent_dir_id?: NullableIntFieldUpdateOperationsInput | number | null
    depth_level?: IntFieldUpdateOperationsInput | number
    dir_name?: StringFieldUpdateOperationsInput | string
    dir_slug?: StringFieldUpdateOperationsInput | string
    path_in_slug?: StringFieldUpdateOperationsInput | string
    path_in_id?: StringFieldUpdateOperationsInput | string
    total_size_bytes?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at_unix?: BigIntFieldUpdateOperationsInput | bigint | number
    updated_at_unix?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    files?: filesUncheckedUpdateManyWithoutDirectoriesNestedInput
    fs_access_tokens?: fs_access_tokensUncheckedUpdateOneWithoutDirectoriesNestedInput
  }

  export type directoriesUpsertWithWhereUniqueWithoutDirectoriesInput = {
    where: directoriesWhereUniqueInput
    update: XOR<directoriesUpdateWithoutDirectoriesInput, directoriesUncheckedUpdateWithoutDirectoriesInput>
    create: XOR<directoriesCreateWithoutDirectoriesInput, directoriesUncheckedCreateWithoutDirectoriesInput>
  }

  export type directoriesUpdateWithWhereUniqueWithoutDirectoriesInput = {
    where: directoriesWhereUniqueInput
    data: XOR<directoriesUpdateWithoutDirectoriesInput, directoriesUncheckedUpdateWithoutDirectoriesInput>
  }

  export type directoriesUpdateManyWithWhereWithoutDirectoriesInput = {
    where: directoriesScalarWhereInput
    data: XOR<directoriesUpdateManyMutationInput, directoriesUncheckedUpdateManyWithoutDirectoriesInput>
  }

  export type filesUpsertWithWhereUniqueWithoutDirectoriesInput = {
    where: filesWhereUniqueInput
    update: XOR<filesUpdateWithoutDirectoriesInput, filesUncheckedUpdateWithoutDirectoriesInput>
    create: XOR<filesCreateWithoutDirectoriesInput, filesUncheckedCreateWithoutDirectoriesInput>
  }

  export type filesUpdateWithWhereUniqueWithoutDirectoriesInput = {
    where: filesWhereUniqueInput
    data: XOR<filesUpdateWithoutDirectoriesInput, filesUncheckedUpdateWithoutDirectoriesInput>
  }

  export type filesUpdateManyWithWhereWithoutDirectoriesInput = {
    where: filesScalarWhereInput
    data: XOR<filesUpdateManyMutationInput, filesUncheckedUpdateManyWithoutDirectoriesInput>
  }

  export type fs_access_tokensUpsertWithoutDirectoriesInput = {
    update: XOR<fs_access_tokensUpdateWithoutDirectoriesInput, fs_access_tokensUncheckedUpdateWithoutDirectoriesInput>
    create: XOR<fs_access_tokensCreateWithoutDirectoriesInput, fs_access_tokensUncheckedCreateWithoutDirectoriesInput>
    where?: fs_access_tokensWhereInput
  }

  export type fs_access_tokensUpdateToOneWithWhereWithoutDirectoriesInput = {
    where?: fs_access_tokensWhereInput
    data: XOR<fs_access_tokensUpdateWithoutDirectoriesInput, fs_access_tokensUncheckedUpdateWithoutDirectoriesInput>
  }

  export type fs_access_tokensUpdateWithoutDirectoriesInput = {
    token_random_code?: IntFieldUpdateOperationsInput | number
    token_name?: StringFieldUpdateOperationsInput | string
    token_slug?: StringFieldUpdateOperationsInput | string
    issued_to?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at_unix?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    created_at_unix?: BigIntFieldUpdateOperationsInput | bigint | number
    buckets?: bucketsUpdateOneRequiredWithoutFs_access_tokensNestedInput
  }

  export type fs_access_tokensUncheckedUpdateWithoutDirectoriesInput = {
    token_id?: IntFieldUpdateOperationsInput | number
    bucket_id?: IntFieldUpdateOperationsInput | number
    token_random_code?: IntFieldUpdateOperationsInput | number
    token_name?: StringFieldUpdateOperationsInput | string
    token_slug?: StringFieldUpdateOperationsInput | string
    issued_to?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at_unix?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    created_at_unix?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type bucketsCreateWithoutFilesInput = {
    org_id: number
    bucket_name: string
    bucket_slug: string
    total_size_bytes?: bigint | number
    max_size_bytes?: bigint | number
    visibility?: $Enums.buckets_visibility
    status?: $Enums.buckets_status
    created_by: number
    created_at_unix: bigint | number
    updated_at_unix?: bigint | number | null
    directories?: directoriesCreateNestedManyWithoutBucketsInput
    fs_access_tokens?: fs_access_tokensCreateNestedManyWithoutBucketsInput
  }

  export type bucketsUncheckedCreateWithoutFilesInput = {
    bucket_id?: number
    org_id: number
    bucket_name: string
    bucket_slug: string
    total_size_bytes?: bigint | number
    max_size_bytes?: bigint | number
    visibility?: $Enums.buckets_visibility
    status?: $Enums.buckets_status
    created_by: number
    created_at_unix: bigint | number
    updated_at_unix?: bigint | number | null
    directories?: directoriesUncheckedCreateNestedManyWithoutBucketsInput
    fs_access_tokens?: fs_access_tokensUncheckedCreateNestedManyWithoutBucketsInput
  }

  export type bucketsCreateOrConnectWithoutFilesInput = {
    where: bucketsWhereUniqueInput
    create: XOR<bucketsCreateWithoutFilesInput, bucketsUncheckedCreateWithoutFilesInput>
  }

  export type directoriesCreateWithoutFilesInput = {
    depth_level: number
    dir_name: string
    dir_slug: string
    path_in_slug: string
    path_in_id: string
    total_size_bytes?: bigint | number
    created_at_unix: bigint | number
    updated_at_unix?: bigint | number | null
    buckets: bucketsCreateNestedOneWithoutDirectoriesInput
    directories?: directoriesCreateNestedOneWithoutOther_directoriesInput
    other_directories?: directoriesCreateNestedManyWithoutDirectoriesInput
    fs_access_tokens?: fs_access_tokensCreateNestedOneWithoutDirectoriesInput
  }

  export type directoriesUncheckedCreateWithoutFilesInput = {
    dir_id?: number
    bucket_id: number
    parent_dir_id?: number | null
    depth_level: number
    dir_name: string
    dir_slug: string
    path_in_slug: string
    path_in_id: string
    total_size_bytes?: bigint | number
    created_at_unix: bigint | number
    updated_at_unix?: bigint | number | null
    other_directories?: directoriesUncheckedCreateNestedManyWithoutDirectoriesInput
    fs_access_tokens?: fs_access_tokensUncheckedCreateNestedOneWithoutDirectoriesInput
  }

  export type directoriesCreateOrConnectWithoutFilesInput = {
    where: directoriesWhereUniqueInput
    create: XOR<directoriesCreateWithoutFilesInput, directoriesUncheckedCreateWithoutFilesInput>
  }

  export type bucketsUpsertWithoutFilesInput = {
    update: XOR<bucketsUpdateWithoutFilesInput, bucketsUncheckedUpdateWithoutFilesInput>
    create: XOR<bucketsCreateWithoutFilesInput, bucketsUncheckedCreateWithoutFilesInput>
    where?: bucketsWhereInput
  }

  export type bucketsUpdateToOneWithWhereWithoutFilesInput = {
    where?: bucketsWhereInput
    data: XOR<bucketsUpdateWithoutFilesInput, bucketsUncheckedUpdateWithoutFilesInput>
  }

  export type bucketsUpdateWithoutFilesInput = {
    org_id?: IntFieldUpdateOperationsInput | number
    bucket_name?: StringFieldUpdateOperationsInput | string
    bucket_slug?: StringFieldUpdateOperationsInput | string
    total_size_bytes?: BigIntFieldUpdateOperationsInput | bigint | number
    max_size_bytes?: BigIntFieldUpdateOperationsInput | bigint | number
    visibility?: Enumbuckets_visibilityFieldUpdateOperationsInput | $Enums.buckets_visibility
    status?: Enumbuckets_statusFieldUpdateOperationsInput | $Enums.buckets_status
    created_by?: IntFieldUpdateOperationsInput | number
    created_at_unix?: BigIntFieldUpdateOperationsInput | bigint | number
    updated_at_unix?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    directories?: directoriesUpdateManyWithoutBucketsNestedInput
    fs_access_tokens?: fs_access_tokensUpdateManyWithoutBucketsNestedInput
  }

  export type bucketsUncheckedUpdateWithoutFilesInput = {
    bucket_id?: IntFieldUpdateOperationsInput | number
    org_id?: IntFieldUpdateOperationsInput | number
    bucket_name?: StringFieldUpdateOperationsInput | string
    bucket_slug?: StringFieldUpdateOperationsInput | string
    total_size_bytes?: BigIntFieldUpdateOperationsInput | bigint | number
    max_size_bytes?: BigIntFieldUpdateOperationsInput | bigint | number
    visibility?: Enumbuckets_visibilityFieldUpdateOperationsInput | $Enums.buckets_visibility
    status?: Enumbuckets_statusFieldUpdateOperationsInput | $Enums.buckets_status
    created_by?: IntFieldUpdateOperationsInput | number
    created_at_unix?: BigIntFieldUpdateOperationsInput | bigint | number
    updated_at_unix?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    directories?: directoriesUncheckedUpdateManyWithoutBucketsNestedInput
    fs_access_tokens?: fs_access_tokensUncheckedUpdateManyWithoutBucketsNestedInput
  }

  export type directoriesUpsertWithoutFilesInput = {
    update: XOR<directoriesUpdateWithoutFilesInput, directoriesUncheckedUpdateWithoutFilesInput>
    create: XOR<directoriesCreateWithoutFilesInput, directoriesUncheckedCreateWithoutFilesInput>
    where?: directoriesWhereInput
  }

  export type directoriesUpdateToOneWithWhereWithoutFilesInput = {
    where?: directoriesWhereInput
    data: XOR<directoriesUpdateWithoutFilesInput, directoriesUncheckedUpdateWithoutFilesInput>
  }

  export type directoriesUpdateWithoutFilesInput = {
    depth_level?: IntFieldUpdateOperationsInput | number
    dir_name?: StringFieldUpdateOperationsInput | string
    dir_slug?: StringFieldUpdateOperationsInput | string
    path_in_slug?: StringFieldUpdateOperationsInput | string
    path_in_id?: StringFieldUpdateOperationsInput | string
    total_size_bytes?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at_unix?: BigIntFieldUpdateOperationsInput | bigint | number
    updated_at_unix?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    buckets?: bucketsUpdateOneRequiredWithoutDirectoriesNestedInput
    directories?: directoriesUpdateOneWithoutOther_directoriesNestedInput
    other_directories?: directoriesUpdateManyWithoutDirectoriesNestedInput
    fs_access_tokens?: fs_access_tokensUpdateOneWithoutDirectoriesNestedInput
  }

  export type directoriesUncheckedUpdateWithoutFilesInput = {
    dir_id?: IntFieldUpdateOperationsInput | number
    bucket_id?: IntFieldUpdateOperationsInput | number
    parent_dir_id?: NullableIntFieldUpdateOperationsInput | number | null
    depth_level?: IntFieldUpdateOperationsInput | number
    dir_name?: StringFieldUpdateOperationsInput | string
    dir_slug?: StringFieldUpdateOperationsInput | string
    path_in_slug?: StringFieldUpdateOperationsInput | string
    path_in_id?: StringFieldUpdateOperationsInput | string
    total_size_bytes?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at_unix?: BigIntFieldUpdateOperationsInput | bigint | number
    updated_at_unix?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    other_directories?: directoriesUncheckedUpdateManyWithoutDirectoriesNestedInput
    fs_access_tokens?: fs_access_tokensUncheckedUpdateOneWithoutDirectoriesNestedInput
  }

  export type bucketsCreateWithoutFs_access_tokensInput = {
    org_id: number
    bucket_name: string
    bucket_slug: string
    total_size_bytes?: bigint | number
    max_size_bytes?: bigint | number
    visibility?: $Enums.buckets_visibility
    status?: $Enums.buckets_status
    created_by: number
    created_at_unix: bigint | number
    updated_at_unix?: bigint | number | null
    directories?: directoriesCreateNestedManyWithoutBucketsInput
    files?: filesCreateNestedManyWithoutBucketsInput
  }

  export type bucketsUncheckedCreateWithoutFs_access_tokensInput = {
    bucket_id?: number
    org_id: number
    bucket_name: string
    bucket_slug: string
    total_size_bytes?: bigint | number
    max_size_bytes?: bigint | number
    visibility?: $Enums.buckets_visibility
    status?: $Enums.buckets_status
    created_by: number
    created_at_unix: bigint | number
    updated_at_unix?: bigint | number | null
    directories?: directoriesUncheckedCreateNestedManyWithoutBucketsInput
    files?: filesUncheckedCreateNestedManyWithoutBucketsInput
  }

  export type bucketsCreateOrConnectWithoutFs_access_tokensInput = {
    where: bucketsWhereUniqueInput
    create: XOR<bucketsCreateWithoutFs_access_tokensInput, bucketsUncheckedCreateWithoutFs_access_tokensInput>
  }

  export type directoriesCreateWithoutFs_access_tokensInput = {
    depth_level: number
    dir_name: string
    dir_slug: string
    path_in_slug: string
    path_in_id: string
    total_size_bytes?: bigint | number
    created_at_unix: bigint | number
    updated_at_unix?: bigint | number | null
    buckets: bucketsCreateNestedOneWithoutDirectoriesInput
    directories?: directoriesCreateNestedOneWithoutOther_directoriesInput
    other_directories?: directoriesCreateNestedManyWithoutDirectoriesInput
    files?: filesCreateNestedManyWithoutDirectoriesInput
  }

  export type directoriesUncheckedCreateWithoutFs_access_tokensInput = {
    dir_id?: number
    bucket_id: number
    parent_dir_id?: number | null
    depth_level: number
    dir_name: string
    dir_slug: string
    path_in_slug: string
    path_in_id: string
    total_size_bytes?: bigint | number
    created_at_unix: bigint | number
    updated_at_unix?: bigint | number | null
    other_directories?: directoriesUncheckedCreateNestedManyWithoutDirectoriesInput
    files?: filesUncheckedCreateNestedManyWithoutDirectoriesInput
  }

  export type directoriesCreateOrConnectWithoutFs_access_tokensInput = {
    where: directoriesWhereUniqueInput
    create: XOR<directoriesCreateWithoutFs_access_tokensInput, directoriesUncheckedCreateWithoutFs_access_tokensInput>
  }

  export type bucketsUpsertWithoutFs_access_tokensInput = {
    update: XOR<bucketsUpdateWithoutFs_access_tokensInput, bucketsUncheckedUpdateWithoutFs_access_tokensInput>
    create: XOR<bucketsCreateWithoutFs_access_tokensInput, bucketsUncheckedCreateWithoutFs_access_tokensInput>
    where?: bucketsWhereInput
  }

  export type bucketsUpdateToOneWithWhereWithoutFs_access_tokensInput = {
    where?: bucketsWhereInput
    data: XOR<bucketsUpdateWithoutFs_access_tokensInput, bucketsUncheckedUpdateWithoutFs_access_tokensInput>
  }

  export type bucketsUpdateWithoutFs_access_tokensInput = {
    org_id?: IntFieldUpdateOperationsInput | number
    bucket_name?: StringFieldUpdateOperationsInput | string
    bucket_slug?: StringFieldUpdateOperationsInput | string
    total_size_bytes?: BigIntFieldUpdateOperationsInput | bigint | number
    max_size_bytes?: BigIntFieldUpdateOperationsInput | bigint | number
    visibility?: Enumbuckets_visibilityFieldUpdateOperationsInput | $Enums.buckets_visibility
    status?: Enumbuckets_statusFieldUpdateOperationsInput | $Enums.buckets_status
    created_by?: IntFieldUpdateOperationsInput | number
    created_at_unix?: BigIntFieldUpdateOperationsInput | bigint | number
    updated_at_unix?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    directories?: directoriesUpdateManyWithoutBucketsNestedInput
    files?: filesUpdateManyWithoutBucketsNestedInput
  }

  export type bucketsUncheckedUpdateWithoutFs_access_tokensInput = {
    bucket_id?: IntFieldUpdateOperationsInput | number
    org_id?: IntFieldUpdateOperationsInput | number
    bucket_name?: StringFieldUpdateOperationsInput | string
    bucket_slug?: StringFieldUpdateOperationsInput | string
    total_size_bytes?: BigIntFieldUpdateOperationsInput | bigint | number
    max_size_bytes?: BigIntFieldUpdateOperationsInput | bigint | number
    visibility?: Enumbuckets_visibilityFieldUpdateOperationsInput | $Enums.buckets_visibility
    status?: Enumbuckets_statusFieldUpdateOperationsInput | $Enums.buckets_status
    created_by?: IntFieldUpdateOperationsInput | number
    created_at_unix?: BigIntFieldUpdateOperationsInput | bigint | number
    updated_at_unix?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    directories?: directoriesUncheckedUpdateManyWithoutBucketsNestedInput
    files?: filesUncheckedUpdateManyWithoutBucketsNestedInput
  }

  export type directoriesUpsertWithoutFs_access_tokensInput = {
    update: XOR<directoriesUpdateWithoutFs_access_tokensInput, directoriesUncheckedUpdateWithoutFs_access_tokensInput>
    create: XOR<directoriesCreateWithoutFs_access_tokensInput, directoriesUncheckedCreateWithoutFs_access_tokensInput>
    where?: directoriesWhereInput
  }

  export type directoriesUpdateToOneWithWhereWithoutFs_access_tokensInput = {
    where?: directoriesWhereInput
    data: XOR<directoriesUpdateWithoutFs_access_tokensInput, directoriesUncheckedUpdateWithoutFs_access_tokensInput>
  }

  export type directoriesUpdateWithoutFs_access_tokensInput = {
    depth_level?: IntFieldUpdateOperationsInput | number
    dir_name?: StringFieldUpdateOperationsInput | string
    dir_slug?: StringFieldUpdateOperationsInput | string
    path_in_slug?: StringFieldUpdateOperationsInput | string
    path_in_id?: StringFieldUpdateOperationsInput | string
    total_size_bytes?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at_unix?: BigIntFieldUpdateOperationsInput | bigint | number
    updated_at_unix?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    buckets?: bucketsUpdateOneRequiredWithoutDirectoriesNestedInput
    directories?: directoriesUpdateOneWithoutOther_directoriesNestedInput
    other_directories?: directoriesUpdateManyWithoutDirectoriesNestedInput
    files?: filesUpdateManyWithoutDirectoriesNestedInput
  }

  export type directoriesUncheckedUpdateWithoutFs_access_tokensInput = {
    dir_id?: IntFieldUpdateOperationsInput | number
    bucket_id?: IntFieldUpdateOperationsInput | number
    parent_dir_id?: NullableIntFieldUpdateOperationsInput | number | null
    depth_level?: IntFieldUpdateOperationsInput | number
    dir_name?: StringFieldUpdateOperationsInput | string
    dir_slug?: StringFieldUpdateOperationsInput | string
    path_in_slug?: StringFieldUpdateOperationsInput | string
    path_in_id?: StringFieldUpdateOperationsInput | string
    total_size_bytes?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at_unix?: BigIntFieldUpdateOperationsInput | bigint | number
    updated_at_unix?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    other_directories?: directoriesUncheckedUpdateManyWithoutDirectoriesNestedInput
    files?: filesUncheckedUpdateManyWithoutDirectoriesNestedInput
  }

  export type directoriesCreateManyBucketsInput = {
    dir_id?: number
    parent_dir_id?: number | null
    depth_level: number
    dir_name: string
    dir_slug: string
    path_in_slug: string
    path_in_id: string
    total_size_bytes?: bigint | number
    created_at_unix: bigint | number
    updated_at_unix?: bigint | number | null
  }

  export type filesCreateManyBucketsInput = {
    file_id?: number
    parent_dir_id?: number | null
    file_name: string
    file_slug: string
    mime_type: string
    size_bytes: bigint | number
    checksum_sha256?: string | null
    status?: $Enums.files_status
    uploaded_by: number
    created_at_unix: bigint | number
    updated_at_unix?: bigint | number | null
  }

  export type fs_access_tokensCreateManyBucketsInput = {
    token_id?: number
    dir_id: number
    token_random_code: number
    token_name: string
    token_slug: string
    issued_to?: string | null
    expires_at_unix?: bigint | number | null
    created_by?: number | null
    created_at_unix: bigint | number
  }

  export type directoriesUpdateWithoutBucketsInput = {
    depth_level?: IntFieldUpdateOperationsInput | number
    dir_name?: StringFieldUpdateOperationsInput | string
    dir_slug?: StringFieldUpdateOperationsInput | string
    path_in_slug?: StringFieldUpdateOperationsInput | string
    path_in_id?: StringFieldUpdateOperationsInput | string
    total_size_bytes?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at_unix?: BigIntFieldUpdateOperationsInput | bigint | number
    updated_at_unix?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    directories?: directoriesUpdateOneWithoutOther_directoriesNestedInput
    other_directories?: directoriesUpdateManyWithoutDirectoriesNestedInput
    files?: filesUpdateManyWithoutDirectoriesNestedInput
    fs_access_tokens?: fs_access_tokensUpdateOneWithoutDirectoriesNestedInput
  }

  export type directoriesUncheckedUpdateWithoutBucketsInput = {
    dir_id?: IntFieldUpdateOperationsInput | number
    parent_dir_id?: NullableIntFieldUpdateOperationsInput | number | null
    depth_level?: IntFieldUpdateOperationsInput | number
    dir_name?: StringFieldUpdateOperationsInput | string
    dir_slug?: StringFieldUpdateOperationsInput | string
    path_in_slug?: StringFieldUpdateOperationsInput | string
    path_in_id?: StringFieldUpdateOperationsInput | string
    total_size_bytes?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at_unix?: BigIntFieldUpdateOperationsInput | bigint | number
    updated_at_unix?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    other_directories?: directoriesUncheckedUpdateManyWithoutDirectoriesNestedInput
    files?: filesUncheckedUpdateManyWithoutDirectoriesNestedInput
    fs_access_tokens?: fs_access_tokensUncheckedUpdateOneWithoutDirectoriesNestedInput
  }

  export type directoriesUncheckedUpdateManyWithoutBucketsInput = {
    dir_id?: IntFieldUpdateOperationsInput | number
    parent_dir_id?: NullableIntFieldUpdateOperationsInput | number | null
    depth_level?: IntFieldUpdateOperationsInput | number
    dir_name?: StringFieldUpdateOperationsInput | string
    dir_slug?: StringFieldUpdateOperationsInput | string
    path_in_slug?: StringFieldUpdateOperationsInput | string
    path_in_id?: StringFieldUpdateOperationsInput | string
    total_size_bytes?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at_unix?: BigIntFieldUpdateOperationsInput | bigint | number
    updated_at_unix?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
  }

  export type filesUpdateWithoutBucketsInput = {
    file_name?: StringFieldUpdateOperationsInput | string
    file_slug?: StringFieldUpdateOperationsInput | string
    mime_type?: StringFieldUpdateOperationsInput | string
    size_bytes?: BigIntFieldUpdateOperationsInput | bigint | number
    checksum_sha256?: NullableStringFieldUpdateOperationsInput | string | null
    status?: Enumfiles_statusFieldUpdateOperationsInput | $Enums.files_status
    uploaded_by?: IntFieldUpdateOperationsInput | number
    created_at_unix?: BigIntFieldUpdateOperationsInput | bigint | number
    updated_at_unix?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    directories?: directoriesUpdateOneWithoutFilesNestedInput
  }

  export type filesUncheckedUpdateWithoutBucketsInput = {
    file_id?: IntFieldUpdateOperationsInput | number
    parent_dir_id?: NullableIntFieldUpdateOperationsInput | number | null
    file_name?: StringFieldUpdateOperationsInput | string
    file_slug?: StringFieldUpdateOperationsInput | string
    mime_type?: StringFieldUpdateOperationsInput | string
    size_bytes?: BigIntFieldUpdateOperationsInput | bigint | number
    checksum_sha256?: NullableStringFieldUpdateOperationsInput | string | null
    status?: Enumfiles_statusFieldUpdateOperationsInput | $Enums.files_status
    uploaded_by?: IntFieldUpdateOperationsInput | number
    created_at_unix?: BigIntFieldUpdateOperationsInput | bigint | number
    updated_at_unix?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
  }

  export type filesUncheckedUpdateManyWithoutBucketsInput = {
    file_id?: IntFieldUpdateOperationsInput | number
    parent_dir_id?: NullableIntFieldUpdateOperationsInput | number | null
    file_name?: StringFieldUpdateOperationsInput | string
    file_slug?: StringFieldUpdateOperationsInput | string
    mime_type?: StringFieldUpdateOperationsInput | string
    size_bytes?: BigIntFieldUpdateOperationsInput | bigint | number
    checksum_sha256?: NullableStringFieldUpdateOperationsInput | string | null
    status?: Enumfiles_statusFieldUpdateOperationsInput | $Enums.files_status
    uploaded_by?: IntFieldUpdateOperationsInput | number
    created_at_unix?: BigIntFieldUpdateOperationsInput | bigint | number
    updated_at_unix?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
  }

  export type fs_access_tokensUpdateWithoutBucketsInput = {
    token_random_code?: IntFieldUpdateOperationsInput | number
    token_name?: StringFieldUpdateOperationsInput | string
    token_slug?: StringFieldUpdateOperationsInput | string
    issued_to?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at_unix?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    created_at_unix?: BigIntFieldUpdateOperationsInput | bigint | number
    directories?: directoriesUpdateOneRequiredWithoutFs_access_tokensNestedInput
  }

  export type fs_access_tokensUncheckedUpdateWithoutBucketsInput = {
    token_id?: IntFieldUpdateOperationsInput | number
    dir_id?: IntFieldUpdateOperationsInput | number
    token_random_code?: IntFieldUpdateOperationsInput | number
    token_name?: StringFieldUpdateOperationsInput | string
    token_slug?: StringFieldUpdateOperationsInput | string
    issued_to?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at_unix?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    created_at_unix?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type fs_access_tokensUncheckedUpdateManyWithoutBucketsInput = {
    token_id?: IntFieldUpdateOperationsInput | number
    dir_id?: IntFieldUpdateOperationsInput | number
    token_random_code?: IntFieldUpdateOperationsInput | number
    token_name?: StringFieldUpdateOperationsInput | string
    token_slug?: StringFieldUpdateOperationsInput | string
    issued_to?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at_unix?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    created_at_unix?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type directoriesCreateManyDirectoriesInput = {
    dir_id?: number
    bucket_id: number
    depth_level: number
    dir_name: string
    dir_slug: string
    path_in_slug: string
    path_in_id: string
    total_size_bytes?: bigint | number
    created_at_unix: bigint | number
    updated_at_unix?: bigint | number | null
  }

  export type filesCreateManyDirectoriesInput = {
    file_id?: number
    bucket_id: number
    file_name: string
    file_slug: string
    mime_type: string
    size_bytes: bigint | number
    checksum_sha256?: string | null
    status?: $Enums.files_status
    uploaded_by: number
    created_at_unix: bigint | number
    updated_at_unix?: bigint | number | null
  }

  export type directoriesUpdateWithoutDirectoriesInput = {
    depth_level?: IntFieldUpdateOperationsInput | number
    dir_name?: StringFieldUpdateOperationsInput | string
    dir_slug?: StringFieldUpdateOperationsInput | string
    path_in_slug?: StringFieldUpdateOperationsInput | string
    path_in_id?: StringFieldUpdateOperationsInput | string
    total_size_bytes?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at_unix?: BigIntFieldUpdateOperationsInput | bigint | number
    updated_at_unix?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    buckets?: bucketsUpdateOneRequiredWithoutDirectoriesNestedInput
    other_directories?: directoriesUpdateManyWithoutDirectoriesNestedInput
    files?: filesUpdateManyWithoutDirectoriesNestedInput
    fs_access_tokens?: fs_access_tokensUpdateOneWithoutDirectoriesNestedInput
  }

  export type directoriesUncheckedUpdateWithoutDirectoriesInput = {
    dir_id?: IntFieldUpdateOperationsInput | number
    bucket_id?: IntFieldUpdateOperationsInput | number
    depth_level?: IntFieldUpdateOperationsInput | number
    dir_name?: StringFieldUpdateOperationsInput | string
    dir_slug?: StringFieldUpdateOperationsInput | string
    path_in_slug?: StringFieldUpdateOperationsInput | string
    path_in_id?: StringFieldUpdateOperationsInput | string
    total_size_bytes?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at_unix?: BigIntFieldUpdateOperationsInput | bigint | number
    updated_at_unix?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    other_directories?: directoriesUncheckedUpdateManyWithoutDirectoriesNestedInput
    files?: filesUncheckedUpdateManyWithoutDirectoriesNestedInput
    fs_access_tokens?: fs_access_tokensUncheckedUpdateOneWithoutDirectoriesNestedInput
  }

  export type directoriesUncheckedUpdateManyWithoutDirectoriesInput = {
    dir_id?: IntFieldUpdateOperationsInput | number
    bucket_id?: IntFieldUpdateOperationsInput | number
    depth_level?: IntFieldUpdateOperationsInput | number
    dir_name?: StringFieldUpdateOperationsInput | string
    dir_slug?: StringFieldUpdateOperationsInput | string
    path_in_slug?: StringFieldUpdateOperationsInput | string
    path_in_id?: StringFieldUpdateOperationsInput | string
    total_size_bytes?: BigIntFieldUpdateOperationsInput | bigint | number
    created_at_unix?: BigIntFieldUpdateOperationsInput | bigint | number
    updated_at_unix?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
  }

  export type filesUpdateWithoutDirectoriesInput = {
    file_name?: StringFieldUpdateOperationsInput | string
    file_slug?: StringFieldUpdateOperationsInput | string
    mime_type?: StringFieldUpdateOperationsInput | string
    size_bytes?: BigIntFieldUpdateOperationsInput | bigint | number
    checksum_sha256?: NullableStringFieldUpdateOperationsInput | string | null
    status?: Enumfiles_statusFieldUpdateOperationsInput | $Enums.files_status
    uploaded_by?: IntFieldUpdateOperationsInput | number
    created_at_unix?: BigIntFieldUpdateOperationsInput | bigint | number
    updated_at_unix?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    buckets?: bucketsUpdateOneRequiredWithoutFilesNestedInput
  }

  export type filesUncheckedUpdateWithoutDirectoriesInput = {
    file_id?: IntFieldUpdateOperationsInput | number
    bucket_id?: IntFieldUpdateOperationsInput | number
    file_name?: StringFieldUpdateOperationsInput | string
    file_slug?: StringFieldUpdateOperationsInput | string
    mime_type?: StringFieldUpdateOperationsInput | string
    size_bytes?: BigIntFieldUpdateOperationsInput | bigint | number
    checksum_sha256?: NullableStringFieldUpdateOperationsInput | string | null
    status?: Enumfiles_statusFieldUpdateOperationsInput | $Enums.files_status
    uploaded_by?: IntFieldUpdateOperationsInput | number
    created_at_unix?: BigIntFieldUpdateOperationsInput | bigint | number
    updated_at_unix?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
  }

  export type filesUncheckedUpdateManyWithoutDirectoriesInput = {
    file_id?: IntFieldUpdateOperationsInput | number
    bucket_id?: IntFieldUpdateOperationsInput | number
    file_name?: StringFieldUpdateOperationsInput | string
    file_slug?: StringFieldUpdateOperationsInput | string
    mime_type?: StringFieldUpdateOperationsInput | string
    size_bytes?: BigIntFieldUpdateOperationsInput | bigint | number
    checksum_sha256?: NullableStringFieldUpdateOperationsInput | string | null
    status?: Enumfiles_statusFieldUpdateOperationsInput | $Enums.files_status
    uploaded_by?: IntFieldUpdateOperationsInput | number
    created_at_unix?: BigIntFieldUpdateOperationsInput | bigint | number
    updated_at_unix?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}