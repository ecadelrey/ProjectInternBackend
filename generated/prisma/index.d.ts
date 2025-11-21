
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
 * Model Role
 * 
 */
export type Role = $Result.DefaultSelection<Prisma.$RolePayload>
/**
 * Model Engineer
 * 
 */
export type Engineer = $Result.DefaultSelection<Prisma.$EngineerPayload>
/**
 * Model Project
 * 
 */
export type Project = $Result.DefaultSelection<Prisma.$ProjectPayload>
/**
 * Model Task
 * 
 */
export type Task = $Result.DefaultSelection<Prisma.$TaskPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const ProjectType: {
  NEW_PROJECT: 'NEW_PROJECT',
  OLD_PROJECT: 'OLD_PROJECT'
};

export type ProjectType = (typeof ProjectType)[keyof typeof ProjectType]


export const ProjectLevel: {
  HIGH: 'HIGH',
  MID: 'MID',
  LOW: 'LOW'
};

export type ProjectLevel = (typeof ProjectLevel)[keyof typeof ProjectLevel]


export const ProjectStatus: {
  TO_DO: 'TO_DO',
  IN_PROGRESS: 'IN_PROGRESS',
  COMPLETED: 'COMPLETED'
};

export type ProjectStatus = (typeof ProjectStatus)[keyof typeof ProjectStatus]

}

export type ProjectType = $Enums.ProjectType

export const ProjectType: typeof $Enums.ProjectType

export type ProjectLevel = $Enums.ProjectLevel

export const ProjectLevel: typeof $Enums.ProjectLevel

export type ProjectStatus = $Enums.ProjectStatus

export const ProjectStatus: typeof $Enums.ProjectStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Roles
 * const roles = await prisma.role.findMany()
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
   * // Fetch zero or more Roles
   * const roles = await prisma.role.findMany()
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
   * `prisma.role`: Exposes CRUD operations for the **Role** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Roles
    * const roles = await prisma.role.findMany()
    * ```
    */
  get role(): Prisma.RoleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.engineer`: Exposes CRUD operations for the **Engineer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Engineers
    * const engineers = await prisma.engineer.findMany()
    * ```
    */
  get engineer(): Prisma.EngineerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.project`: Exposes CRUD operations for the **Project** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Projects
    * const projects = await prisma.project.findMany()
    * ```
    */
  get project(): Prisma.ProjectDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.task`: Exposes CRUD operations for the **Task** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tasks
    * const tasks = await prisma.task.findMany()
    * ```
    */
  get task(): Prisma.TaskDelegate<ExtArgs, ClientOptions>;
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
    Role: 'Role',
    Engineer: 'Engineer',
    Project: 'Project',
    Task: 'Task'
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
      modelProps: "role" | "engineer" | "project" | "task"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Role: {
        payload: Prisma.$RolePayload<ExtArgs>
        fields: Prisma.RoleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          findFirst: {
            args: Prisma.RoleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          findMany: {
            args: Prisma.RoleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>[]
          }
          create: {
            args: Prisma.RoleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          createMany: {
            args: Prisma.RoleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RoleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>[]
          }
          delete: {
            args: Prisma.RoleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          update: {
            args: Prisma.RoleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          deleteMany: {
            args: Prisma.RoleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RoleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RoleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>[]
          }
          upsert: {
            args: Prisma.RoleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          aggregate: {
            args: Prisma.RoleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRole>
          }
          groupBy: {
            args: Prisma.RoleGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoleGroupByOutputType>[]
          }
          count: {
            args: Prisma.RoleCountArgs<ExtArgs>
            result: $Utils.Optional<RoleCountAggregateOutputType> | number
          }
        }
      }
      Engineer: {
        payload: Prisma.$EngineerPayload<ExtArgs>
        fields: Prisma.EngineerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EngineerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EngineerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EngineerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EngineerPayload>
          }
          findFirst: {
            args: Prisma.EngineerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EngineerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EngineerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EngineerPayload>
          }
          findMany: {
            args: Prisma.EngineerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EngineerPayload>[]
          }
          create: {
            args: Prisma.EngineerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EngineerPayload>
          }
          createMany: {
            args: Prisma.EngineerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EngineerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EngineerPayload>[]
          }
          delete: {
            args: Prisma.EngineerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EngineerPayload>
          }
          update: {
            args: Prisma.EngineerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EngineerPayload>
          }
          deleteMany: {
            args: Prisma.EngineerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EngineerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EngineerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EngineerPayload>[]
          }
          upsert: {
            args: Prisma.EngineerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EngineerPayload>
          }
          aggregate: {
            args: Prisma.EngineerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEngineer>
          }
          groupBy: {
            args: Prisma.EngineerGroupByArgs<ExtArgs>
            result: $Utils.Optional<EngineerGroupByOutputType>[]
          }
          count: {
            args: Prisma.EngineerCountArgs<ExtArgs>
            result: $Utils.Optional<EngineerCountAggregateOutputType> | number
          }
        }
      }
      Project: {
        payload: Prisma.$ProjectPayload<ExtArgs>
        fields: Prisma.ProjectFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjectFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjectFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findFirst: {
            args: Prisma.ProjectFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjectFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findMany: {
            args: Prisma.ProjectFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          create: {
            args: Prisma.ProjectCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          createMany: {
            args: Prisma.ProjectCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProjectCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          delete: {
            args: Prisma.ProjectDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          update: {
            args: Prisma.ProjectUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          deleteMany: {
            args: Prisma.ProjectDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProjectUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProjectUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          upsert: {
            args: Prisma.ProjectUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          aggregate: {
            args: Prisma.ProjectAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProject>
          }
          groupBy: {
            args: Prisma.ProjectGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProjectCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectCountAggregateOutputType> | number
          }
        }
      }
      Task: {
        payload: Prisma.$TaskPayload<ExtArgs>
        fields: Prisma.TaskFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TaskFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TaskFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          findFirst: {
            args: Prisma.TaskFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TaskFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          findMany: {
            args: Prisma.TaskFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>[]
          }
          create: {
            args: Prisma.TaskCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          createMany: {
            args: Prisma.TaskCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TaskCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>[]
          }
          delete: {
            args: Prisma.TaskDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          update: {
            args: Prisma.TaskUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          deleteMany: {
            args: Prisma.TaskDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TaskUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TaskUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>[]
          }
          upsert: {
            args: Prisma.TaskUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          aggregate: {
            args: Prisma.TaskAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTask>
          }
          groupBy: {
            args: Prisma.TaskGroupByArgs<ExtArgs>
            result: $Utils.Optional<TaskGroupByOutputType>[]
          }
          count: {
            args: Prisma.TaskCountArgs<ExtArgs>
            result: $Utils.Optional<TaskCountAggregateOutputType> | number
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
    role?: RoleOmit
    engineer?: EngineerOmit
    project?: ProjectOmit
    task?: TaskOmit
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
   * Count Type RoleCountOutputType
   */

  export type RoleCountOutputType = {
    engineers: number
  }

  export type RoleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    engineers?: boolean | RoleCountOutputTypeCountEngineersArgs
  }

  // Custom InputTypes
  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoleCountOutputType
     */
    select?: RoleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeCountEngineersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EngineerWhereInput
  }


  /**
   * Count Type EngineerCountOutputType
   */

  export type EngineerCountOutputType = {
    projects: number
    tasks: number
  }

  export type EngineerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projects?: boolean | EngineerCountOutputTypeCountProjectsArgs
    tasks?: boolean | EngineerCountOutputTypeCountTasksArgs
  }

  // Custom InputTypes
  /**
   * EngineerCountOutputType without action
   */
  export type EngineerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EngineerCountOutputType
     */
    select?: EngineerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EngineerCountOutputType without action
   */
  export type EngineerCountOutputTypeCountProjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWhereInput
  }

  /**
   * EngineerCountOutputType without action
   */
  export type EngineerCountOutputTypeCountTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskWhereInput
  }


  /**
   * Count Type ProjectCountOutputType
   */

  export type ProjectCountOutputType = {
    tasks: number
  }

  export type ProjectCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tasks?: boolean | ProjectCountOutputTypeCountTasksArgs
  }

  // Custom InputTypes
  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectCountOutputType
     */
    select?: ProjectCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Role
   */

  export type AggregateRole = {
    _count: RoleCountAggregateOutputType | null
    _avg: RoleAvgAggregateOutputType | null
    _sum: RoleSumAggregateOutputType | null
    _min: RoleMinAggregateOutputType | null
    _max: RoleMaxAggregateOutputType | null
  }

  export type RoleAvgAggregateOutputType = {
    id_role: number | null
  }

  export type RoleSumAggregateOutputType = {
    id_role: number | null
  }

  export type RoleMinAggregateOutputType = {
    id_role: number | null
    role: string | null
  }

  export type RoleMaxAggregateOutputType = {
    id_role: number | null
    role: string | null
  }

  export type RoleCountAggregateOutputType = {
    id_role: number
    role: number
    _all: number
  }


  export type RoleAvgAggregateInputType = {
    id_role?: true
  }

  export type RoleSumAggregateInputType = {
    id_role?: true
  }

  export type RoleMinAggregateInputType = {
    id_role?: true
    role?: true
  }

  export type RoleMaxAggregateInputType = {
    id_role?: true
    role?: true
  }

  export type RoleCountAggregateInputType = {
    id_role?: true
    role?: true
    _all?: true
  }

  export type RoleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Role to aggregate.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Roles
    **/
    _count?: true | RoleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RoleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RoleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoleMaxAggregateInputType
  }

  export type GetRoleAggregateType<T extends RoleAggregateArgs> = {
        [P in keyof T & keyof AggregateRole]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRole[P]>
      : GetScalarType<T[P], AggregateRole[P]>
  }




  export type RoleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoleWhereInput
    orderBy?: RoleOrderByWithAggregationInput | RoleOrderByWithAggregationInput[]
    by: RoleScalarFieldEnum[] | RoleScalarFieldEnum
    having?: RoleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoleCountAggregateInputType | true
    _avg?: RoleAvgAggregateInputType
    _sum?: RoleSumAggregateInputType
    _min?: RoleMinAggregateInputType
    _max?: RoleMaxAggregateInputType
  }

  export type RoleGroupByOutputType = {
    id_role: number
    role: string
    _count: RoleCountAggregateOutputType | null
    _avg: RoleAvgAggregateOutputType | null
    _sum: RoleSumAggregateOutputType | null
    _min: RoleMinAggregateOutputType | null
    _max: RoleMaxAggregateOutputType | null
  }

  type GetRoleGroupByPayload<T extends RoleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoleGroupByOutputType[P]>
            : GetScalarType<T[P], RoleGroupByOutputType[P]>
        }
      >
    >


  export type RoleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_role?: boolean
    role?: boolean
    engineers?: boolean | Role$engineersArgs<ExtArgs>
    _count?: boolean | RoleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["role"]>

  export type RoleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_role?: boolean
    role?: boolean
  }, ExtArgs["result"]["role"]>

  export type RoleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_role?: boolean
    role?: boolean
  }, ExtArgs["result"]["role"]>

  export type RoleSelectScalar = {
    id_role?: boolean
    role?: boolean
  }

  export type RoleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_role" | "role", ExtArgs["result"]["role"]>
  export type RoleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    engineers?: boolean | Role$engineersArgs<ExtArgs>
    _count?: boolean | RoleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RoleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type RoleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $RolePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Role"
    objects: {
      engineers: Prisma.$EngineerPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_role: number
      role: string
    }, ExtArgs["result"]["role"]>
    composites: {}
  }

  type RoleGetPayload<S extends boolean | null | undefined | RoleDefaultArgs> = $Result.GetResult<Prisma.$RolePayload, S>

  type RoleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RoleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RoleCountAggregateInputType | true
    }

  export interface RoleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Role'], meta: { name: 'Role' } }
    /**
     * Find zero or one Role that matches the filter.
     * @param {RoleFindUniqueArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RoleFindUniqueArgs>(args: SelectSubset<T, RoleFindUniqueArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Role that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RoleFindUniqueOrThrowArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RoleFindUniqueOrThrowArgs>(args: SelectSubset<T, RoleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Role that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindFirstArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RoleFindFirstArgs>(args?: SelectSubset<T, RoleFindFirstArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Role that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindFirstOrThrowArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RoleFindFirstOrThrowArgs>(args?: SelectSubset<T, RoleFindFirstOrThrowArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Roles
     * const roles = await prisma.role.findMany()
     * 
     * // Get first 10 Roles
     * const roles = await prisma.role.findMany({ take: 10 })
     * 
     * // Only select the `id_role`
     * const roleWithId_roleOnly = await prisma.role.findMany({ select: { id_role: true } })
     * 
     */
    findMany<T extends RoleFindManyArgs>(args?: SelectSubset<T, RoleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Role.
     * @param {RoleCreateArgs} args - Arguments to create a Role.
     * @example
     * // Create one Role
     * const Role = await prisma.role.create({
     *   data: {
     *     // ... data to create a Role
     *   }
     * })
     * 
     */
    create<T extends RoleCreateArgs>(args: SelectSubset<T, RoleCreateArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Roles.
     * @param {RoleCreateManyArgs} args - Arguments to create many Roles.
     * @example
     * // Create many Roles
     * const role = await prisma.role.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RoleCreateManyArgs>(args?: SelectSubset<T, RoleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Roles and returns the data saved in the database.
     * @param {RoleCreateManyAndReturnArgs} args - Arguments to create many Roles.
     * @example
     * // Create many Roles
     * const role = await prisma.role.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Roles and only return the `id_role`
     * const roleWithId_roleOnly = await prisma.role.createManyAndReturn({
     *   select: { id_role: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RoleCreateManyAndReturnArgs>(args?: SelectSubset<T, RoleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Role.
     * @param {RoleDeleteArgs} args - Arguments to delete one Role.
     * @example
     * // Delete one Role
     * const Role = await prisma.role.delete({
     *   where: {
     *     // ... filter to delete one Role
     *   }
     * })
     * 
     */
    delete<T extends RoleDeleteArgs>(args: SelectSubset<T, RoleDeleteArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Role.
     * @param {RoleUpdateArgs} args - Arguments to update one Role.
     * @example
     * // Update one Role
     * const role = await prisma.role.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RoleUpdateArgs>(args: SelectSubset<T, RoleUpdateArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Roles.
     * @param {RoleDeleteManyArgs} args - Arguments to filter Roles to delete.
     * @example
     * // Delete a few Roles
     * const { count } = await prisma.role.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RoleDeleteManyArgs>(args?: SelectSubset<T, RoleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Roles
     * const role = await prisma.role.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RoleUpdateManyArgs>(args: SelectSubset<T, RoleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roles and returns the data updated in the database.
     * @param {RoleUpdateManyAndReturnArgs} args - Arguments to update many Roles.
     * @example
     * // Update many Roles
     * const role = await prisma.role.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Roles and only return the `id_role`
     * const roleWithId_roleOnly = await prisma.role.updateManyAndReturn({
     *   select: { id_role: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RoleUpdateManyAndReturnArgs>(args: SelectSubset<T, RoleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Role.
     * @param {RoleUpsertArgs} args - Arguments to update or create a Role.
     * @example
     * // Update or create a Role
     * const role = await prisma.role.upsert({
     *   create: {
     *     // ... data to create a Role
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Role we want to update
     *   }
     * })
     */
    upsert<T extends RoleUpsertArgs>(args: SelectSubset<T, RoleUpsertArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleCountArgs} args - Arguments to filter Roles to count.
     * @example
     * // Count the number of Roles
     * const count = await prisma.role.count({
     *   where: {
     *     // ... the filter for the Roles we want to count
     *   }
     * })
    **/
    count<T extends RoleCountArgs>(
      args?: Subset<T, RoleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RoleAggregateArgs>(args: Subset<T, RoleAggregateArgs>): Prisma.PrismaPromise<GetRoleAggregateType<T>>

    /**
     * Group by Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleGroupByArgs} args - Group by arguments.
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
      T extends RoleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoleGroupByArgs['orderBy'] }
        : { orderBy?: RoleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RoleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Role model
   */
  readonly fields: RoleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Role.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    engineers<T extends Role$engineersArgs<ExtArgs> = {}>(args?: Subset<T, Role$engineersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EngineerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Role model
   */
  interface RoleFieldRefs {
    readonly id_role: FieldRef<"Role", 'Int'>
    readonly role: FieldRef<"Role", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Role findUnique
   */
  export type RoleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role findUniqueOrThrow
   */
  export type RoleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role findFirst
   */
  export type RoleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     */
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role findFirstOrThrow
   */
  export type RoleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     */
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role findMany
   */
  export type RoleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Roles to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role create
   */
  export type RoleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The data needed to create a Role.
     */
    data: XOR<RoleCreateInput, RoleUncheckedCreateInput>
  }

  /**
   * Role createMany
   */
  export type RoleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Roles.
     */
    data: RoleCreateManyInput | RoleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Role createManyAndReturn
   */
  export type RoleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * The data used to create many Roles.
     */
    data: RoleCreateManyInput | RoleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Role update
   */
  export type RoleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The data needed to update a Role.
     */
    data: XOR<RoleUpdateInput, RoleUncheckedUpdateInput>
    /**
     * Choose, which Role to update.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role updateMany
   */
  export type RoleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Roles.
     */
    data: XOR<RoleUpdateManyMutationInput, RoleUncheckedUpdateManyInput>
    /**
     * Filter which Roles to update
     */
    where?: RoleWhereInput
    /**
     * Limit how many Roles to update.
     */
    limit?: number
  }

  /**
   * Role updateManyAndReturn
   */
  export type RoleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * The data used to update Roles.
     */
    data: XOR<RoleUpdateManyMutationInput, RoleUncheckedUpdateManyInput>
    /**
     * Filter which Roles to update
     */
    where?: RoleWhereInput
    /**
     * Limit how many Roles to update.
     */
    limit?: number
  }

  /**
   * Role upsert
   */
  export type RoleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The filter to search for the Role to update in case it exists.
     */
    where: RoleWhereUniqueInput
    /**
     * In case the Role found by the `where` argument doesn't exist, create a new Role with this data.
     */
    create: XOR<RoleCreateInput, RoleUncheckedCreateInput>
    /**
     * In case the Role was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoleUpdateInput, RoleUncheckedUpdateInput>
  }

  /**
   * Role delete
   */
  export type RoleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter which Role to delete.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role deleteMany
   */
  export type RoleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Roles to delete
     */
    where?: RoleWhereInput
    /**
     * Limit how many Roles to delete.
     */
    limit?: number
  }

  /**
   * Role.engineers
   */
  export type Role$engineersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Engineer
     */
    select?: EngineerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Engineer
     */
    omit?: EngineerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EngineerInclude<ExtArgs> | null
    where?: EngineerWhereInput
    orderBy?: EngineerOrderByWithRelationInput | EngineerOrderByWithRelationInput[]
    cursor?: EngineerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EngineerScalarFieldEnum | EngineerScalarFieldEnum[]
  }

  /**
   * Role without action
   */
  export type RoleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
  }


  /**
   * Model Engineer
   */

  export type AggregateEngineer = {
    _count: EngineerCountAggregateOutputType | null
    _avg: EngineerAvgAggregateOutputType | null
    _sum: EngineerSumAggregateOutputType | null
    _min: EngineerMinAggregateOutputType | null
    _max: EngineerMaxAggregateOutputType | null
  }

  export type EngineerAvgAggregateOutputType = {
    SAP: number | null
    id_role: number | null
  }

  export type EngineerSumAggregateOutputType = {
    SAP: number | null
    id_role: number | null
  }

  export type EngineerMinAggregateOutputType = {
    SAP: number | null
    id_role: number | null
    name: string | null
  }

  export type EngineerMaxAggregateOutputType = {
    SAP: number | null
    id_role: number | null
    name: string | null
  }

  export type EngineerCountAggregateOutputType = {
    SAP: number
    id_role: number
    name: number
    _all: number
  }


  export type EngineerAvgAggregateInputType = {
    SAP?: true
    id_role?: true
  }

  export type EngineerSumAggregateInputType = {
    SAP?: true
    id_role?: true
  }

  export type EngineerMinAggregateInputType = {
    SAP?: true
    id_role?: true
    name?: true
  }

  export type EngineerMaxAggregateInputType = {
    SAP?: true
    id_role?: true
    name?: true
  }

  export type EngineerCountAggregateInputType = {
    SAP?: true
    id_role?: true
    name?: true
    _all?: true
  }

  export type EngineerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Engineer to aggregate.
     */
    where?: EngineerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Engineers to fetch.
     */
    orderBy?: EngineerOrderByWithRelationInput | EngineerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EngineerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Engineers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Engineers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Engineers
    **/
    _count?: true | EngineerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EngineerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EngineerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EngineerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EngineerMaxAggregateInputType
  }

  export type GetEngineerAggregateType<T extends EngineerAggregateArgs> = {
        [P in keyof T & keyof AggregateEngineer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEngineer[P]>
      : GetScalarType<T[P], AggregateEngineer[P]>
  }




  export type EngineerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EngineerWhereInput
    orderBy?: EngineerOrderByWithAggregationInput | EngineerOrderByWithAggregationInput[]
    by: EngineerScalarFieldEnum[] | EngineerScalarFieldEnum
    having?: EngineerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EngineerCountAggregateInputType | true
    _avg?: EngineerAvgAggregateInputType
    _sum?: EngineerSumAggregateInputType
    _min?: EngineerMinAggregateInputType
    _max?: EngineerMaxAggregateInputType
  }

  export type EngineerGroupByOutputType = {
    SAP: number
    id_role: number
    name: string
    _count: EngineerCountAggregateOutputType | null
    _avg: EngineerAvgAggregateOutputType | null
    _sum: EngineerSumAggregateOutputType | null
    _min: EngineerMinAggregateOutputType | null
    _max: EngineerMaxAggregateOutputType | null
  }

  type GetEngineerGroupByPayload<T extends EngineerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EngineerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EngineerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EngineerGroupByOutputType[P]>
            : GetScalarType<T[P], EngineerGroupByOutputType[P]>
        }
      >
    >


  export type EngineerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    SAP?: boolean
    id_role?: boolean
    name?: boolean
    role?: boolean | RoleDefaultArgs<ExtArgs>
    projects?: boolean | Engineer$projectsArgs<ExtArgs>
    tasks?: boolean | Engineer$tasksArgs<ExtArgs>
    _count?: boolean | EngineerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["engineer"]>

  export type EngineerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    SAP?: boolean
    id_role?: boolean
    name?: boolean
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["engineer"]>

  export type EngineerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    SAP?: boolean
    id_role?: boolean
    name?: boolean
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["engineer"]>

  export type EngineerSelectScalar = {
    SAP?: boolean
    id_role?: boolean
    name?: boolean
  }

  export type EngineerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"SAP" | "id_role" | "name", ExtArgs["result"]["engineer"]>
  export type EngineerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role?: boolean | RoleDefaultArgs<ExtArgs>
    projects?: boolean | Engineer$projectsArgs<ExtArgs>
    tasks?: boolean | Engineer$tasksArgs<ExtArgs>
    _count?: boolean | EngineerCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EngineerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }
  export type EngineerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }

  export type $EngineerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Engineer"
    objects: {
      role: Prisma.$RolePayload<ExtArgs>
      projects: Prisma.$ProjectPayload<ExtArgs>[]
      tasks: Prisma.$TaskPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      SAP: number
      id_role: number
      name: string
    }, ExtArgs["result"]["engineer"]>
    composites: {}
  }

  type EngineerGetPayload<S extends boolean | null | undefined | EngineerDefaultArgs> = $Result.GetResult<Prisma.$EngineerPayload, S>

  type EngineerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EngineerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EngineerCountAggregateInputType | true
    }

  export interface EngineerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Engineer'], meta: { name: 'Engineer' } }
    /**
     * Find zero or one Engineer that matches the filter.
     * @param {EngineerFindUniqueArgs} args - Arguments to find a Engineer
     * @example
     * // Get one Engineer
     * const engineer = await prisma.engineer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EngineerFindUniqueArgs>(args: SelectSubset<T, EngineerFindUniqueArgs<ExtArgs>>): Prisma__EngineerClient<$Result.GetResult<Prisma.$EngineerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Engineer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EngineerFindUniqueOrThrowArgs} args - Arguments to find a Engineer
     * @example
     * // Get one Engineer
     * const engineer = await prisma.engineer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EngineerFindUniqueOrThrowArgs>(args: SelectSubset<T, EngineerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EngineerClient<$Result.GetResult<Prisma.$EngineerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Engineer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EngineerFindFirstArgs} args - Arguments to find a Engineer
     * @example
     * // Get one Engineer
     * const engineer = await prisma.engineer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EngineerFindFirstArgs>(args?: SelectSubset<T, EngineerFindFirstArgs<ExtArgs>>): Prisma__EngineerClient<$Result.GetResult<Prisma.$EngineerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Engineer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EngineerFindFirstOrThrowArgs} args - Arguments to find a Engineer
     * @example
     * // Get one Engineer
     * const engineer = await prisma.engineer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EngineerFindFirstOrThrowArgs>(args?: SelectSubset<T, EngineerFindFirstOrThrowArgs<ExtArgs>>): Prisma__EngineerClient<$Result.GetResult<Prisma.$EngineerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Engineers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EngineerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Engineers
     * const engineers = await prisma.engineer.findMany()
     * 
     * // Get first 10 Engineers
     * const engineers = await prisma.engineer.findMany({ take: 10 })
     * 
     * // Only select the `SAP`
     * const engineerWithSAPOnly = await prisma.engineer.findMany({ select: { SAP: true } })
     * 
     */
    findMany<T extends EngineerFindManyArgs>(args?: SelectSubset<T, EngineerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EngineerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Engineer.
     * @param {EngineerCreateArgs} args - Arguments to create a Engineer.
     * @example
     * // Create one Engineer
     * const Engineer = await prisma.engineer.create({
     *   data: {
     *     // ... data to create a Engineer
     *   }
     * })
     * 
     */
    create<T extends EngineerCreateArgs>(args: SelectSubset<T, EngineerCreateArgs<ExtArgs>>): Prisma__EngineerClient<$Result.GetResult<Prisma.$EngineerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Engineers.
     * @param {EngineerCreateManyArgs} args - Arguments to create many Engineers.
     * @example
     * // Create many Engineers
     * const engineer = await prisma.engineer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EngineerCreateManyArgs>(args?: SelectSubset<T, EngineerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Engineers and returns the data saved in the database.
     * @param {EngineerCreateManyAndReturnArgs} args - Arguments to create many Engineers.
     * @example
     * // Create many Engineers
     * const engineer = await prisma.engineer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Engineers and only return the `SAP`
     * const engineerWithSAPOnly = await prisma.engineer.createManyAndReturn({
     *   select: { SAP: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EngineerCreateManyAndReturnArgs>(args?: SelectSubset<T, EngineerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EngineerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Engineer.
     * @param {EngineerDeleteArgs} args - Arguments to delete one Engineer.
     * @example
     * // Delete one Engineer
     * const Engineer = await prisma.engineer.delete({
     *   where: {
     *     // ... filter to delete one Engineer
     *   }
     * })
     * 
     */
    delete<T extends EngineerDeleteArgs>(args: SelectSubset<T, EngineerDeleteArgs<ExtArgs>>): Prisma__EngineerClient<$Result.GetResult<Prisma.$EngineerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Engineer.
     * @param {EngineerUpdateArgs} args - Arguments to update one Engineer.
     * @example
     * // Update one Engineer
     * const engineer = await prisma.engineer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EngineerUpdateArgs>(args: SelectSubset<T, EngineerUpdateArgs<ExtArgs>>): Prisma__EngineerClient<$Result.GetResult<Prisma.$EngineerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Engineers.
     * @param {EngineerDeleteManyArgs} args - Arguments to filter Engineers to delete.
     * @example
     * // Delete a few Engineers
     * const { count } = await prisma.engineer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EngineerDeleteManyArgs>(args?: SelectSubset<T, EngineerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Engineers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EngineerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Engineers
     * const engineer = await prisma.engineer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EngineerUpdateManyArgs>(args: SelectSubset<T, EngineerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Engineers and returns the data updated in the database.
     * @param {EngineerUpdateManyAndReturnArgs} args - Arguments to update many Engineers.
     * @example
     * // Update many Engineers
     * const engineer = await prisma.engineer.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Engineers and only return the `SAP`
     * const engineerWithSAPOnly = await prisma.engineer.updateManyAndReturn({
     *   select: { SAP: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EngineerUpdateManyAndReturnArgs>(args: SelectSubset<T, EngineerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EngineerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Engineer.
     * @param {EngineerUpsertArgs} args - Arguments to update or create a Engineer.
     * @example
     * // Update or create a Engineer
     * const engineer = await prisma.engineer.upsert({
     *   create: {
     *     // ... data to create a Engineer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Engineer we want to update
     *   }
     * })
     */
    upsert<T extends EngineerUpsertArgs>(args: SelectSubset<T, EngineerUpsertArgs<ExtArgs>>): Prisma__EngineerClient<$Result.GetResult<Prisma.$EngineerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Engineers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EngineerCountArgs} args - Arguments to filter Engineers to count.
     * @example
     * // Count the number of Engineers
     * const count = await prisma.engineer.count({
     *   where: {
     *     // ... the filter for the Engineers we want to count
     *   }
     * })
    **/
    count<T extends EngineerCountArgs>(
      args?: Subset<T, EngineerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EngineerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Engineer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EngineerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EngineerAggregateArgs>(args: Subset<T, EngineerAggregateArgs>): Prisma.PrismaPromise<GetEngineerAggregateType<T>>

    /**
     * Group by Engineer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EngineerGroupByArgs} args - Group by arguments.
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
      T extends EngineerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EngineerGroupByArgs['orderBy'] }
        : { orderBy?: EngineerGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EngineerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEngineerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Engineer model
   */
  readonly fields: EngineerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Engineer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EngineerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    role<T extends RoleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoleDefaultArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    projects<T extends Engineer$projectsArgs<ExtArgs> = {}>(args?: Subset<T, Engineer$projectsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tasks<T extends Engineer$tasksArgs<ExtArgs> = {}>(args?: Subset<T, Engineer$tasksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Engineer model
   */
  interface EngineerFieldRefs {
    readonly SAP: FieldRef<"Engineer", 'Int'>
    readonly id_role: FieldRef<"Engineer", 'Int'>
    readonly name: FieldRef<"Engineer", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Engineer findUnique
   */
  export type EngineerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Engineer
     */
    select?: EngineerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Engineer
     */
    omit?: EngineerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EngineerInclude<ExtArgs> | null
    /**
     * Filter, which Engineer to fetch.
     */
    where: EngineerWhereUniqueInput
  }

  /**
   * Engineer findUniqueOrThrow
   */
  export type EngineerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Engineer
     */
    select?: EngineerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Engineer
     */
    omit?: EngineerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EngineerInclude<ExtArgs> | null
    /**
     * Filter, which Engineer to fetch.
     */
    where: EngineerWhereUniqueInput
  }

  /**
   * Engineer findFirst
   */
  export type EngineerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Engineer
     */
    select?: EngineerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Engineer
     */
    omit?: EngineerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EngineerInclude<ExtArgs> | null
    /**
     * Filter, which Engineer to fetch.
     */
    where?: EngineerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Engineers to fetch.
     */
    orderBy?: EngineerOrderByWithRelationInput | EngineerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Engineers.
     */
    cursor?: EngineerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Engineers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Engineers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Engineers.
     */
    distinct?: EngineerScalarFieldEnum | EngineerScalarFieldEnum[]
  }

  /**
   * Engineer findFirstOrThrow
   */
  export type EngineerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Engineer
     */
    select?: EngineerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Engineer
     */
    omit?: EngineerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EngineerInclude<ExtArgs> | null
    /**
     * Filter, which Engineer to fetch.
     */
    where?: EngineerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Engineers to fetch.
     */
    orderBy?: EngineerOrderByWithRelationInput | EngineerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Engineers.
     */
    cursor?: EngineerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Engineers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Engineers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Engineers.
     */
    distinct?: EngineerScalarFieldEnum | EngineerScalarFieldEnum[]
  }

  /**
   * Engineer findMany
   */
  export type EngineerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Engineer
     */
    select?: EngineerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Engineer
     */
    omit?: EngineerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EngineerInclude<ExtArgs> | null
    /**
     * Filter, which Engineers to fetch.
     */
    where?: EngineerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Engineers to fetch.
     */
    orderBy?: EngineerOrderByWithRelationInput | EngineerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Engineers.
     */
    cursor?: EngineerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Engineers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Engineers.
     */
    skip?: number
    distinct?: EngineerScalarFieldEnum | EngineerScalarFieldEnum[]
  }

  /**
   * Engineer create
   */
  export type EngineerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Engineer
     */
    select?: EngineerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Engineer
     */
    omit?: EngineerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EngineerInclude<ExtArgs> | null
    /**
     * The data needed to create a Engineer.
     */
    data: XOR<EngineerCreateInput, EngineerUncheckedCreateInput>
  }

  /**
   * Engineer createMany
   */
  export type EngineerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Engineers.
     */
    data: EngineerCreateManyInput | EngineerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Engineer createManyAndReturn
   */
  export type EngineerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Engineer
     */
    select?: EngineerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Engineer
     */
    omit?: EngineerOmit<ExtArgs> | null
    /**
     * The data used to create many Engineers.
     */
    data: EngineerCreateManyInput | EngineerCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EngineerIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Engineer update
   */
  export type EngineerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Engineer
     */
    select?: EngineerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Engineer
     */
    omit?: EngineerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EngineerInclude<ExtArgs> | null
    /**
     * The data needed to update a Engineer.
     */
    data: XOR<EngineerUpdateInput, EngineerUncheckedUpdateInput>
    /**
     * Choose, which Engineer to update.
     */
    where: EngineerWhereUniqueInput
  }

  /**
   * Engineer updateMany
   */
  export type EngineerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Engineers.
     */
    data: XOR<EngineerUpdateManyMutationInput, EngineerUncheckedUpdateManyInput>
    /**
     * Filter which Engineers to update
     */
    where?: EngineerWhereInput
    /**
     * Limit how many Engineers to update.
     */
    limit?: number
  }

  /**
   * Engineer updateManyAndReturn
   */
  export type EngineerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Engineer
     */
    select?: EngineerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Engineer
     */
    omit?: EngineerOmit<ExtArgs> | null
    /**
     * The data used to update Engineers.
     */
    data: XOR<EngineerUpdateManyMutationInput, EngineerUncheckedUpdateManyInput>
    /**
     * Filter which Engineers to update
     */
    where?: EngineerWhereInput
    /**
     * Limit how many Engineers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EngineerIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Engineer upsert
   */
  export type EngineerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Engineer
     */
    select?: EngineerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Engineer
     */
    omit?: EngineerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EngineerInclude<ExtArgs> | null
    /**
     * The filter to search for the Engineer to update in case it exists.
     */
    where: EngineerWhereUniqueInput
    /**
     * In case the Engineer found by the `where` argument doesn't exist, create a new Engineer with this data.
     */
    create: XOR<EngineerCreateInput, EngineerUncheckedCreateInput>
    /**
     * In case the Engineer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EngineerUpdateInput, EngineerUncheckedUpdateInput>
  }

  /**
   * Engineer delete
   */
  export type EngineerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Engineer
     */
    select?: EngineerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Engineer
     */
    omit?: EngineerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EngineerInclude<ExtArgs> | null
    /**
     * Filter which Engineer to delete.
     */
    where: EngineerWhereUniqueInput
  }

  /**
   * Engineer deleteMany
   */
  export type EngineerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Engineers to delete
     */
    where?: EngineerWhereInput
    /**
     * Limit how many Engineers to delete.
     */
    limit?: number
  }

  /**
   * Engineer.projects
   */
  export type Engineer$projectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    where?: ProjectWhereInput
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    cursor?: ProjectWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Engineer.tasks
   */
  export type Engineer$tasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    where?: TaskWhereInput
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    cursor?: TaskWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Engineer without action
   */
  export type EngineerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Engineer
     */
    select?: EngineerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Engineer
     */
    omit?: EngineerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EngineerInclude<ExtArgs> | null
  }


  /**
   * Model Project
   */

  export type AggregateProject = {
    _count: ProjectCountAggregateOutputType | null
    _avg: ProjectAvgAggregateOutputType | null
    _sum: ProjectSumAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  export type ProjectAvgAggregateOutputType = {
    id_project: number | null
    SAP: number | null
    project_progress: number | null
  }

  export type ProjectSumAggregateOutputType = {
    id_project: number | null
    SAP: number | null
    project_progress: number | null
  }

  export type ProjectMinAggregateOutputType = {
    id_project: number | null
    SAP: number | null
    project_name: string | null
    project_type: $Enums.ProjectType | null
    level: $Enums.ProjectLevel | null
    req_date: Date | null
    plan_start_date: Date | null
    plan_end_date: Date | null
    actual_start: Date | null
    actual_end: Date | null
    live_date: Date | null
    project_progress: number | null
    remark: string | null
    status: $Enums.ProjectStatus | null
  }

  export type ProjectMaxAggregateOutputType = {
    id_project: number | null
    SAP: number | null
    project_name: string | null
    project_type: $Enums.ProjectType | null
    level: $Enums.ProjectLevel | null
    req_date: Date | null
    plan_start_date: Date | null
    plan_end_date: Date | null
    actual_start: Date | null
    actual_end: Date | null
    live_date: Date | null
    project_progress: number | null
    remark: string | null
    status: $Enums.ProjectStatus | null
  }

  export type ProjectCountAggregateOutputType = {
    id_project: number
    SAP: number
    project_name: number
    project_type: number
    level: number
    req_date: number
    plan_start_date: number
    plan_end_date: number
    actual_start: number
    actual_end: number
    live_date: number
    project_progress: number
    remark: number
    status: number
    _all: number
  }


  export type ProjectAvgAggregateInputType = {
    id_project?: true
    SAP?: true
    project_progress?: true
  }

  export type ProjectSumAggregateInputType = {
    id_project?: true
    SAP?: true
    project_progress?: true
  }

  export type ProjectMinAggregateInputType = {
    id_project?: true
    SAP?: true
    project_name?: true
    project_type?: true
    level?: true
    req_date?: true
    plan_start_date?: true
    plan_end_date?: true
    actual_start?: true
    actual_end?: true
    live_date?: true
    project_progress?: true
    remark?: true
    status?: true
  }

  export type ProjectMaxAggregateInputType = {
    id_project?: true
    SAP?: true
    project_name?: true
    project_type?: true
    level?: true
    req_date?: true
    plan_start_date?: true
    plan_end_date?: true
    actual_start?: true
    actual_end?: true
    live_date?: true
    project_progress?: true
    remark?: true
    status?: true
  }

  export type ProjectCountAggregateInputType = {
    id_project?: true
    SAP?: true
    project_name?: true
    project_type?: true
    level?: true
    req_date?: true
    plan_start_date?: true
    plan_end_date?: true
    actual_start?: true
    actual_end?: true
    live_date?: true
    project_progress?: true
    remark?: true
    status?: true
    _all?: true
  }

  export type ProjectAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Project to aggregate.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Projects
    **/
    _count?: true | ProjectCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProjectAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProjectSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectMaxAggregateInputType
  }

  export type GetProjectAggregateType<T extends ProjectAggregateArgs> = {
        [P in keyof T & keyof AggregateProject]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProject[P]>
      : GetScalarType<T[P], AggregateProject[P]>
  }




  export type ProjectGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWhereInput
    orderBy?: ProjectOrderByWithAggregationInput | ProjectOrderByWithAggregationInput[]
    by: ProjectScalarFieldEnum[] | ProjectScalarFieldEnum
    having?: ProjectScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectCountAggregateInputType | true
    _avg?: ProjectAvgAggregateInputType
    _sum?: ProjectSumAggregateInputType
    _min?: ProjectMinAggregateInputType
    _max?: ProjectMaxAggregateInputType
  }

  export type ProjectGroupByOutputType = {
    id_project: number
    SAP: number
    project_name: string
    project_type: $Enums.ProjectType
    level: $Enums.ProjectLevel
    req_date: Date | null
    plan_start_date: Date | null
    plan_end_date: Date | null
    actual_start: Date | null
    actual_end: Date | null
    live_date: Date | null
    project_progress: number
    remark: string | null
    status: $Enums.ProjectStatus
    _count: ProjectCountAggregateOutputType | null
    _avg: ProjectAvgAggregateOutputType | null
    _sum: ProjectSumAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  type GetProjectGroupByPayload<T extends ProjectGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectGroupByOutputType[P]>
        }
      >
    >


  export type ProjectSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_project?: boolean
    SAP?: boolean
    project_name?: boolean
    project_type?: boolean
    level?: boolean
    req_date?: boolean
    plan_start_date?: boolean
    plan_end_date?: boolean
    actual_start?: boolean
    actual_end?: boolean
    live_date?: boolean
    project_progress?: boolean
    remark?: boolean
    status?: boolean
    engineer?: boolean | EngineerDefaultArgs<ExtArgs>
    tasks?: boolean | Project$tasksArgs<ExtArgs>
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_project?: boolean
    SAP?: boolean
    project_name?: boolean
    project_type?: boolean
    level?: boolean
    req_date?: boolean
    plan_start_date?: boolean
    plan_end_date?: boolean
    actual_start?: boolean
    actual_end?: boolean
    live_date?: boolean
    project_progress?: boolean
    remark?: boolean
    status?: boolean
    engineer?: boolean | EngineerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_project?: boolean
    SAP?: boolean
    project_name?: boolean
    project_type?: boolean
    level?: boolean
    req_date?: boolean
    plan_start_date?: boolean
    plan_end_date?: boolean
    actual_start?: boolean
    actual_end?: boolean
    live_date?: boolean
    project_progress?: boolean
    remark?: boolean
    status?: boolean
    engineer?: boolean | EngineerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectScalar = {
    id_project?: boolean
    SAP?: boolean
    project_name?: boolean
    project_type?: boolean
    level?: boolean
    req_date?: boolean
    plan_start_date?: boolean
    plan_end_date?: boolean
    actual_start?: boolean
    actual_end?: boolean
    live_date?: boolean
    project_progress?: boolean
    remark?: boolean
    status?: boolean
  }

  export type ProjectOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_project" | "SAP" | "project_name" | "project_type" | "level" | "req_date" | "plan_start_date" | "plan_end_date" | "actual_start" | "actual_end" | "live_date" | "project_progress" | "remark" | "status", ExtArgs["result"]["project"]>
  export type ProjectInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    engineer?: boolean | EngineerDefaultArgs<ExtArgs>
    tasks?: boolean | Project$tasksArgs<ExtArgs>
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProjectIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    engineer?: boolean | EngineerDefaultArgs<ExtArgs>
  }
  export type ProjectIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    engineer?: boolean | EngineerDefaultArgs<ExtArgs>
  }

  export type $ProjectPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Project"
    objects: {
      engineer: Prisma.$EngineerPayload<ExtArgs>
      tasks: Prisma.$TaskPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_project: number
      SAP: number
      project_name: string
      project_type: $Enums.ProjectType
      level: $Enums.ProjectLevel
      req_date: Date | null
      plan_start_date: Date | null
      plan_end_date: Date | null
      actual_start: Date | null
      actual_end: Date | null
      live_date: Date | null
      project_progress: number
      remark: string | null
      status: $Enums.ProjectStatus
    }, ExtArgs["result"]["project"]>
    composites: {}
  }

  type ProjectGetPayload<S extends boolean | null | undefined | ProjectDefaultArgs> = $Result.GetResult<Prisma.$ProjectPayload, S>

  type ProjectCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProjectFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProjectCountAggregateInputType | true
    }

  export interface ProjectDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Project'], meta: { name: 'Project' } }
    /**
     * Find zero or one Project that matches the filter.
     * @param {ProjectFindUniqueArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProjectFindUniqueArgs>(args: SelectSubset<T, ProjectFindUniqueArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Project that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProjectFindUniqueOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProjectFindUniqueOrThrowArgs>(args: SelectSubset<T, ProjectFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Project that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProjectFindFirstArgs>(args?: SelectSubset<T, ProjectFindFirstArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Project that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProjectFindFirstOrThrowArgs>(args?: SelectSubset<T, ProjectFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Projects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Projects
     * const projects = await prisma.project.findMany()
     * 
     * // Get first 10 Projects
     * const projects = await prisma.project.findMany({ take: 10 })
     * 
     * // Only select the `id_project`
     * const projectWithId_projectOnly = await prisma.project.findMany({ select: { id_project: true } })
     * 
     */
    findMany<T extends ProjectFindManyArgs>(args?: SelectSubset<T, ProjectFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Project.
     * @param {ProjectCreateArgs} args - Arguments to create a Project.
     * @example
     * // Create one Project
     * const Project = await prisma.project.create({
     *   data: {
     *     // ... data to create a Project
     *   }
     * })
     * 
     */
    create<T extends ProjectCreateArgs>(args: SelectSubset<T, ProjectCreateArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Projects.
     * @param {ProjectCreateManyArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProjectCreateManyArgs>(args?: SelectSubset<T, ProjectCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Projects and returns the data saved in the database.
     * @param {ProjectCreateManyAndReturnArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Projects and only return the `id_project`
     * const projectWithId_projectOnly = await prisma.project.createManyAndReturn({
     *   select: { id_project: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProjectCreateManyAndReturnArgs>(args?: SelectSubset<T, ProjectCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Project.
     * @param {ProjectDeleteArgs} args - Arguments to delete one Project.
     * @example
     * // Delete one Project
     * const Project = await prisma.project.delete({
     *   where: {
     *     // ... filter to delete one Project
     *   }
     * })
     * 
     */
    delete<T extends ProjectDeleteArgs>(args: SelectSubset<T, ProjectDeleteArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Project.
     * @param {ProjectUpdateArgs} args - Arguments to update one Project.
     * @example
     * // Update one Project
     * const project = await prisma.project.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProjectUpdateArgs>(args: SelectSubset<T, ProjectUpdateArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Projects.
     * @param {ProjectDeleteManyArgs} args - Arguments to filter Projects to delete.
     * @example
     * // Delete a few Projects
     * const { count } = await prisma.project.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProjectDeleteManyArgs>(args?: SelectSubset<T, ProjectDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProjectUpdateManyArgs>(args: SelectSubset<T, ProjectUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects and returns the data updated in the database.
     * @param {ProjectUpdateManyAndReturnArgs} args - Arguments to update many Projects.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Projects and only return the `id_project`
     * const projectWithId_projectOnly = await prisma.project.updateManyAndReturn({
     *   select: { id_project: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProjectUpdateManyAndReturnArgs>(args: SelectSubset<T, ProjectUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Project.
     * @param {ProjectUpsertArgs} args - Arguments to update or create a Project.
     * @example
     * // Update or create a Project
     * const project = await prisma.project.upsert({
     *   create: {
     *     // ... data to create a Project
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Project we want to update
     *   }
     * })
     */
    upsert<T extends ProjectUpsertArgs>(args: SelectSubset<T, ProjectUpsertArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectCountArgs} args - Arguments to filter Projects to count.
     * @example
     * // Count the number of Projects
     * const count = await prisma.project.count({
     *   where: {
     *     // ... the filter for the Projects we want to count
     *   }
     * })
    **/
    count<T extends ProjectCountArgs>(
      args?: Subset<T, ProjectCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProjectAggregateArgs>(args: Subset<T, ProjectAggregateArgs>): Prisma.PrismaPromise<GetProjectAggregateType<T>>

    /**
     * Group by Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectGroupByArgs} args - Group by arguments.
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
      T extends ProjectGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectGroupByArgs['orderBy'] }
        : { orderBy?: ProjectGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProjectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Project model
   */
  readonly fields: ProjectFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Project.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjectClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    engineer<T extends EngineerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EngineerDefaultArgs<ExtArgs>>): Prisma__EngineerClient<$Result.GetResult<Prisma.$EngineerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tasks<T extends Project$tasksArgs<ExtArgs> = {}>(args?: Subset<T, Project$tasksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Project model
   */
  interface ProjectFieldRefs {
    readonly id_project: FieldRef<"Project", 'Int'>
    readonly SAP: FieldRef<"Project", 'Int'>
    readonly project_name: FieldRef<"Project", 'String'>
    readonly project_type: FieldRef<"Project", 'ProjectType'>
    readonly level: FieldRef<"Project", 'ProjectLevel'>
    readonly req_date: FieldRef<"Project", 'DateTime'>
    readonly plan_start_date: FieldRef<"Project", 'DateTime'>
    readonly plan_end_date: FieldRef<"Project", 'DateTime'>
    readonly actual_start: FieldRef<"Project", 'DateTime'>
    readonly actual_end: FieldRef<"Project", 'DateTime'>
    readonly live_date: FieldRef<"Project", 'DateTime'>
    readonly project_progress: FieldRef<"Project", 'Int'>
    readonly remark: FieldRef<"Project", 'String'>
    readonly status: FieldRef<"Project", 'ProjectStatus'>
  }
    

  // Custom InputTypes
  /**
   * Project findUnique
   */
  export type ProjectFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project findUniqueOrThrow
   */
  export type ProjectFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project findFirst
   */
  export type ProjectFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project findFirstOrThrow
   */
  export type ProjectFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project findMany
   */
  export type ProjectFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Projects to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project create
   */
  export type ProjectCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The data needed to create a Project.
     */
    data: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
  }

  /**
   * Project createMany
   */
  export type ProjectCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Projects.
     */
    data: ProjectCreateManyInput | ProjectCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Project createManyAndReturn
   */
  export type ProjectCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * The data used to create many Projects.
     */
    data: ProjectCreateManyInput | ProjectCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Project update
   */
  export type ProjectUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The data needed to update a Project.
     */
    data: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
    /**
     * Choose, which Project to update.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project updateMany
   */
  export type ProjectUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Projects.
     */
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyInput>
    /**
     * Filter which Projects to update
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to update.
     */
    limit?: number
  }

  /**
   * Project updateManyAndReturn
   */
  export type ProjectUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * The data used to update Projects.
     */
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyInput>
    /**
     * Filter which Projects to update
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Project upsert
   */
  export type ProjectUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The filter to search for the Project to update in case it exists.
     */
    where: ProjectWhereUniqueInput
    /**
     * In case the Project found by the `where` argument doesn't exist, create a new Project with this data.
     */
    create: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
    /**
     * In case the Project was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
  }

  /**
   * Project delete
   */
  export type ProjectDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter which Project to delete.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project deleteMany
   */
  export type ProjectDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Projects to delete
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to delete.
     */
    limit?: number
  }

  /**
   * Project.tasks
   */
  export type Project$tasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    where?: TaskWhereInput
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    cursor?: TaskWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Project without action
   */
  export type ProjectDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
  }


  /**
   * Model Task
   */

  export type AggregateTask = {
    _count: TaskCountAggregateOutputType | null
    _avg: TaskAvgAggregateOutputType | null
    _sum: TaskSumAggregateOutputType | null
    _min: TaskMinAggregateOutputType | null
    _max: TaskMaxAggregateOutputType | null
  }

  export type TaskAvgAggregateOutputType = {
    id_task: number | null
    id_project: number | null
    SAP: number | null
    task_progress: number | null
  }

  export type TaskSumAggregateOutputType = {
    id_task: number | null
    id_project: number | null
    SAP: number | null
    task_progress: number | null
  }

  export type TaskMinAggregateOutputType = {
    id_task: number | null
    id_project: number | null
    SAP: number | null
    task_group: string | null
    task_detail: string | null
    plan_start_date: Date | null
    plan_end_date: Date | null
    actual_start: Date | null
    actual_end: Date | null
    platform: string | null
    task_progress: number | null
    status: $Enums.ProjectStatus | null
  }

  export type TaskMaxAggregateOutputType = {
    id_task: number | null
    id_project: number | null
    SAP: number | null
    task_group: string | null
    task_detail: string | null
    plan_start_date: Date | null
    plan_end_date: Date | null
    actual_start: Date | null
    actual_end: Date | null
    platform: string | null
    task_progress: number | null
    status: $Enums.ProjectStatus | null
  }

  export type TaskCountAggregateOutputType = {
    id_task: number
    id_project: number
    SAP: number
    task_group: number
    task_detail: number
    plan_start_date: number
    plan_end_date: number
    actual_start: number
    actual_end: number
    platform: number
    task_progress: number
    status: number
    _all: number
  }


  export type TaskAvgAggregateInputType = {
    id_task?: true
    id_project?: true
    SAP?: true
    task_progress?: true
  }

  export type TaskSumAggregateInputType = {
    id_task?: true
    id_project?: true
    SAP?: true
    task_progress?: true
  }

  export type TaskMinAggregateInputType = {
    id_task?: true
    id_project?: true
    SAP?: true
    task_group?: true
    task_detail?: true
    plan_start_date?: true
    plan_end_date?: true
    actual_start?: true
    actual_end?: true
    platform?: true
    task_progress?: true
    status?: true
  }

  export type TaskMaxAggregateInputType = {
    id_task?: true
    id_project?: true
    SAP?: true
    task_group?: true
    task_detail?: true
    plan_start_date?: true
    plan_end_date?: true
    actual_start?: true
    actual_end?: true
    platform?: true
    task_progress?: true
    status?: true
  }

  export type TaskCountAggregateInputType = {
    id_task?: true
    id_project?: true
    SAP?: true
    task_group?: true
    task_detail?: true
    plan_start_date?: true
    plan_end_date?: true
    actual_start?: true
    actual_end?: true
    platform?: true
    task_progress?: true
    status?: true
    _all?: true
  }

  export type TaskAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Task to aggregate.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tasks
    **/
    _count?: true | TaskCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TaskAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TaskSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TaskMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TaskMaxAggregateInputType
  }

  export type GetTaskAggregateType<T extends TaskAggregateArgs> = {
        [P in keyof T & keyof AggregateTask]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTask[P]>
      : GetScalarType<T[P], AggregateTask[P]>
  }




  export type TaskGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskWhereInput
    orderBy?: TaskOrderByWithAggregationInput | TaskOrderByWithAggregationInput[]
    by: TaskScalarFieldEnum[] | TaskScalarFieldEnum
    having?: TaskScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TaskCountAggregateInputType | true
    _avg?: TaskAvgAggregateInputType
    _sum?: TaskSumAggregateInputType
    _min?: TaskMinAggregateInputType
    _max?: TaskMaxAggregateInputType
  }

  export type TaskGroupByOutputType = {
    id_task: number
    id_project: number
    SAP: number
    task_group: string
    task_detail: string
    plan_start_date: Date | null
    plan_end_date: Date | null
    actual_start: Date | null
    actual_end: Date | null
    platform: string | null
    task_progress: number
    status: $Enums.ProjectStatus
    _count: TaskCountAggregateOutputType | null
    _avg: TaskAvgAggregateOutputType | null
    _sum: TaskSumAggregateOutputType | null
    _min: TaskMinAggregateOutputType | null
    _max: TaskMaxAggregateOutputType | null
  }

  type GetTaskGroupByPayload<T extends TaskGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TaskGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TaskGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TaskGroupByOutputType[P]>
            : GetScalarType<T[P], TaskGroupByOutputType[P]>
        }
      >
    >


  export type TaskSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_task?: boolean
    id_project?: boolean
    SAP?: boolean
    task_group?: boolean
    task_detail?: boolean
    plan_start_date?: boolean
    plan_end_date?: boolean
    actual_start?: boolean
    actual_end?: boolean
    platform?: boolean
    task_progress?: boolean
    status?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    engineer?: boolean | EngineerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["task"]>

  export type TaskSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_task?: boolean
    id_project?: boolean
    SAP?: boolean
    task_group?: boolean
    task_detail?: boolean
    plan_start_date?: boolean
    plan_end_date?: boolean
    actual_start?: boolean
    actual_end?: boolean
    platform?: boolean
    task_progress?: boolean
    status?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    engineer?: boolean | EngineerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["task"]>

  export type TaskSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_task?: boolean
    id_project?: boolean
    SAP?: boolean
    task_group?: boolean
    task_detail?: boolean
    plan_start_date?: boolean
    plan_end_date?: boolean
    actual_start?: boolean
    actual_end?: boolean
    platform?: boolean
    task_progress?: boolean
    status?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    engineer?: boolean | EngineerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["task"]>

  export type TaskSelectScalar = {
    id_task?: boolean
    id_project?: boolean
    SAP?: boolean
    task_group?: boolean
    task_detail?: boolean
    plan_start_date?: boolean
    plan_end_date?: boolean
    actual_start?: boolean
    actual_end?: boolean
    platform?: boolean
    task_progress?: boolean
    status?: boolean
  }

  export type TaskOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_task" | "id_project" | "SAP" | "task_group" | "task_detail" | "plan_start_date" | "plan_end_date" | "actual_start" | "actual_end" | "platform" | "task_progress" | "status", ExtArgs["result"]["task"]>
  export type TaskInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    engineer?: boolean | EngineerDefaultArgs<ExtArgs>
  }
  export type TaskIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    engineer?: boolean | EngineerDefaultArgs<ExtArgs>
  }
  export type TaskIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    engineer?: boolean | EngineerDefaultArgs<ExtArgs>
  }

  export type $TaskPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Task"
    objects: {
      project: Prisma.$ProjectPayload<ExtArgs>
      engineer: Prisma.$EngineerPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_task: number
      id_project: number
      SAP: number
      task_group: string
      task_detail: string
      plan_start_date: Date | null
      plan_end_date: Date | null
      actual_start: Date | null
      actual_end: Date | null
      platform: string | null
      task_progress: number
      status: $Enums.ProjectStatus
    }, ExtArgs["result"]["task"]>
    composites: {}
  }

  type TaskGetPayload<S extends boolean | null | undefined | TaskDefaultArgs> = $Result.GetResult<Prisma.$TaskPayload, S>

  type TaskCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TaskFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TaskCountAggregateInputType | true
    }

  export interface TaskDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Task'], meta: { name: 'Task' } }
    /**
     * Find zero or one Task that matches the filter.
     * @param {TaskFindUniqueArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TaskFindUniqueArgs>(args: SelectSubset<T, TaskFindUniqueArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Task that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TaskFindUniqueOrThrowArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TaskFindUniqueOrThrowArgs>(args: SelectSubset<T, TaskFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Task that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskFindFirstArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TaskFindFirstArgs>(args?: SelectSubset<T, TaskFindFirstArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Task that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskFindFirstOrThrowArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TaskFindFirstOrThrowArgs>(args?: SelectSubset<T, TaskFindFirstOrThrowArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tasks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tasks
     * const tasks = await prisma.task.findMany()
     * 
     * // Get first 10 Tasks
     * const tasks = await prisma.task.findMany({ take: 10 })
     * 
     * // Only select the `id_task`
     * const taskWithId_taskOnly = await prisma.task.findMany({ select: { id_task: true } })
     * 
     */
    findMany<T extends TaskFindManyArgs>(args?: SelectSubset<T, TaskFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Task.
     * @param {TaskCreateArgs} args - Arguments to create a Task.
     * @example
     * // Create one Task
     * const Task = await prisma.task.create({
     *   data: {
     *     // ... data to create a Task
     *   }
     * })
     * 
     */
    create<T extends TaskCreateArgs>(args: SelectSubset<T, TaskCreateArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tasks.
     * @param {TaskCreateManyArgs} args - Arguments to create many Tasks.
     * @example
     * // Create many Tasks
     * const task = await prisma.task.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TaskCreateManyArgs>(args?: SelectSubset<T, TaskCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tasks and returns the data saved in the database.
     * @param {TaskCreateManyAndReturnArgs} args - Arguments to create many Tasks.
     * @example
     * // Create many Tasks
     * const task = await prisma.task.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tasks and only return the `id_task`
     * const taskWithId_taskOnly = await prisma.task.createManyAndReturn({
     *   select: { id_task: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TaskCreateManyAndReturnArgs>(args?: SelectSubset<T, TaskCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Task.
     * @param {TaskDeleteArgs} args - Arguments to delete one Task.
     * @example
     * // Delete one Task
     * const Task = await prisma.task.delete({
     *   where: {
     *     // ... filter to delete one Task
     *   }
     * })
     * 
     */
    delete<T extends TaskDeleteArgs>(args: SelectSubset<T, TaskDeleteArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Task.
     * @param {TaskUpdateArgs} args - Arguments to update one Task.
     * @example
     * // Update one Task
     * const task = await prisma.task.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TaskUpdateArgs>(args: SelectSubset<T, TaskUpdateArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tasks.
     * @param {TaskDeleteManyArgs} args - Arguments to filter Tasks to delete.
     * @example
     * // Delete a few Tasks
     * const { count } = await prisma.task.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TaskDeleteManyArgs>(args?: SelectSubset<T, TaskDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tasks
     * const task = await prisma.task.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TaskUpdateManyArgs>(args: SelectSubset<T, TaskUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tasks and returns the data updated in the database.
     * @param {TaskUpdateManyAndReturnArgs} args - Arguments to update many Tasks.
     * @example
     * // Update many Tasks
     * const task = await prisma.task.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tasks and only return the `id_task`
     * const taskWithId_taskOnly = await prisma.task.updateManyAndReturn({
     *   select: { id_task: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TaskUpdateManyAndReturnArgs>(args: SelectSubset<T, TaskUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Task.
     * @param {TaskUpsertArgs} args - Arguments to update or create a Task.
     * @example
     * // Update or create a Task
     * const task = await prisma.task.upsert({
     *   create: {
     *     // ... data to create a Task
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Task we want to update
     *   }
     * })
     */
    upsert<T extends TaskUpsertArgs>(args: SelectSubset<T, TaskUpsertArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskCountArgs} args - Arguments to filter Tasks to count.
     * @example
     * // Count the number of Tasks
     * const count = await prisma.task.count({
     *   where: {
     *     // ... the filter for the Tasks we want to count
     *   }
     * })
    **/
    count<T extends TaskCountArgs>(
      args?: Subset<T, TaskCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TaskCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Task.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TaskAggregateArgs>(args: Subset<T, TaskAggregateArgs>): Prisma.PrismaPromise<GetTaskAggregateType<T>>

    /**
     * Group by Task.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskGroupByArgs} args - Group by arguments.
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
      T extends TaskGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TaskGroupByArgs['orderBy'] }
        : { orderBy?: TaskGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TaskGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTaskGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Task model
   */
  readonly fields: TaskFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Task.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TaskClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    project<T extends ProjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectDefaultArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    engineer<T extends EngineerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EngineerDefaultArgs<ExtArgs>>): Prisma__EngineerClient<$Result.GetResult<Prisma.$EngineerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Task model
   */
  interface TaskFieldRefs {
    readonly id_task: FieldRef<"Task", 'Int'>
    readonly id_project: FieldRef<"Task", 'Int'>
    readonly SAP: FieldRef<"Task", 'Int'>
    readonly task_group: FieldRef<"Task", 'String'>
    readonly task_detail: FieldRef<"Task", 'String'>
    readonly plan_start_date: FieldRef<"Task", 'DateTime'>
    readonly plan_end_date: FieldRef<"Task", 'DateTime'>
    readonly actual_start: FieldRef<"Task", 'DateTime'>
    readonly actual_end: FieldRef<"Task", 'DateTime'>
    readonly platform: FieldRef<"Task", 'String'>
    readonly task_progress: FieldRef<"Task", 'Int'>
    readonly status: FieldRef<"Task", 'ProjectStatus'>
  }
    

  // Custom InputTypes
  /**
   * Task findUnique
   */
  export type TaskFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task findUniqueOrThrow
   */
  export type TaskFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task findFirst
   */
  export type TaskFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tasks.
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tasks.
     */
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Task findFirstOrThrow
   */
  export type TaskFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tasks.
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tasks.
     */
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Task findMany
   */
  export type TaskFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Tasks to fetch.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tasks.
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Task create
   */
  export type TaskCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * The data needed to create a Task.
     */
    data: XOR<TaskCreateInput, TaskUncheckedCreateInput>
  }

  /**
   * Task createMany
   */
  export type TaskCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tasks.
     */
    data: TaskCreateManyInput | TaskCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Task createManyAndReturn
   */
  export type TaskCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * The data used to create many Tasks.
     */
    data: TaskCreateManyInput | TaskCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Task update
   */
  export type TaskUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * The data needed to update a Task.
     */
    data: XOR<TaskUpdateInput, TaskUncheckedUpdateInput>
    /**
     * Choose, which Task to update.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task updateMany
   */
  export type TaskUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tasks.
     */
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyInput>
    /**
     * Filter which Tasks to update
     */
    where?: TaskWhereInput
    /**
     * Limit how many Tasks to update.
     */
    limit?: number
  }

  /**
   * Task updateManyAndReturn
   */
  export type TaskUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * The data used to update Tasks.
     */
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyInput>
    /**
     * Filter which Tasks to update
     */
    where?: TaskWhereInput
    /**
     * Limit how many Tasks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Task upsert
   */
  export type TaskUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * The filter to search for the Task to update in case it exists.
     */
    where: TaskWhereUniqueInput
    /**
     * In case the Task found by the `where` argument doesn't exist, create a new Task with this data.
     */
    create: XOR<TaskCreateInput, TaskUncheckedCreateInput>
    /**
     * In case the Task was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TaskUpdateInput, TaskUncheckedUpdateInput>
  }

  /**
   * Task delete
   */
  export type TaskDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter which Task to delete.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task deleteMany
   */
  export type TaskDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tasks to delete
     */
    where?: TaskWhereInput
    /**
     * Limit how many Tasks to delete.
     */
    limit?: number
  }

  /**
   * Task without action
   */
  export type TaskDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
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


  export const RoleScalarFieldEnum: {
    id_role: 'id_role',
    role: 'role'
  };

  export type RoleScalarFieldEnum = (typeof RoleScalarFieldEnum)[keyof typeof RoleScalarFieldEnum]


  export const EngineerScalarFieldEnum: {
    SAP: 'SAP',
    id_role: 'id_role',
    name: 'name'
  };

  export type EngineerScalarFieldEnum = (typeof EngineerScalarFieldEnum)[keyof typeof EngineerScalarFieldEnum]


  export const ProjectScalarFieldEnum: {
    id_project: 'id_project',
    SAP: 'SAP',
    project_name: 'project_name',
    project_type: 'project_type',
    level: 'level',
    req_date: 'req_date',
    plan_start_date: 'plan_start_date',
    plan_end_date: 'plan_end_date',
    actual_start: 'actual_start',
    actual_end: 'actual_end',
    live_date: 'live_date',
    project_progress: 'project_progress',
    remark: 'remark',
    status: 'status'
  };

  export type ProjectScalarFieldEnum = (typeof ProjectScalarFieldEnum)[keyof typeof ProjectScalarFieldEnum]


  export const TaskScalarFieldEnum: {
    id_task: 'id_task',
    id_project: 'id_project',
    SAP: 'SAP',
    task_group: 'task_group',
    task_detail: 'task_detail',
    plan_start_date: 'plan_start_date',
    plan_end_date: 'plan_end_date',
    actual_start: 'actual_start',
    actual_end: 'actual_end',
    platform: 'platform',
    task_progress: 'task_progress',
    status: 'status'
  };

  export type TaskScalarFieldEnum = (typeof TaskScalarFieldEnum)[keyof typeof TaskScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'ProjectType'
   */
  export type EnumProjectTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProjectType'>
    


  /**
   * Reference to a field of type 'ProjectType[]'
   */
  export type ListEnumProjectTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProjectType[]'>
    


  /**
   * Reference to a field of type 'ProjectLevel'
   */
  export type EnumProjectLevelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProjectLevel'>
    


  /**
   * Reference to a field of type 'ProjectLevel[]'
   */
  export type ListEnumProjectLevelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProjectLevel[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'ProjectStatus'
   */
  export type EnumProjectStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProjectStatus'>
    


  /**
   * Reference to a field of type 'ProjectStatus[]'
   */
  export type ListEnumProjectStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProjectStatus[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type RoleWhereInput = {
    AND?: RoleWhereInput | RoleWhereInput[]
    OR?: RoleWhereInput[]
    NOT?: RoleWhereInput | RoleWhereInput[]
    id_role?: IntFilter<"Role"> | number
    role?: StringFilter<"Role"> | string
    engineers?: EngineerListRelationFilter
  }

  export type RoleOrderByWithRelationInput = {
    id_role?: SortOrder
    role?: SortOrder
    engineers?: EngineerOrderByRelationAggregateInput
  }

  export type RoleWhereUniqueInput = Prisma.AtLeast<{
    id_role?: number
    AND?: RoleWhereInput | RoleWhereInput[]
    OR?: RoleWhereInput[]
    NOT?: RoleWhereInput | RoleWhereInput[]
    role?: StringFilter<"Role"> | string
    engineers?: EngineerListRelationFilter
  }, "id_role">

  export type RoleOrderByWithAggregationInput = {
    id_role?: SortOrder
    role?: SortOrder
    _count?: RoleCountOrderByAggregateInput
    _avg?: RoleAvgOrderByAggregateInput
    _max?: RoleMaxOrderByAggregateInput
    _min?: RoleMinOrderByAggregateInput
    _sum?: RoleSumOrderByAggregateInput
  }

  export type RoleScalarWhereWithAggregatesInput = {
    AND?: RoleScalarWhereWithAggregatesInput | RoleScalarWhereWithAggregatesInput[]
    OR?: RoleScalarWhereWithAggregatesInput[]
    NOT?: RoleScalarWhereWithAggregatesInput | RoleScalarWhereWithAggregatesInput[]
    id_role?: IntWithAggregatesFilter<"Role"> | number
    role?: StringWithAggregatesFilter<"Role"> | string
  }

  export type EngineerWhereInput = {
    AND?: EngineerWhereInput | EngineerWhereInput[]
    OR?: EngineerWhereInput[]
    NOT?: EngineerWhereInput | EngineerWhereInput[]
    SAP?: IntFilter<"Engineer"> | number
    id_role?: IntFilter<"Engineer"> | number
    name?: StringFilter<"Engineer"> | string
    role?: XOR<RoleScalarRelationFilter, RoleWhereInput>
    projects?: ProjectListRelationFilter
    tasks?: TaskListRelationFilter
  }

  export type EngineerOrderByWithRelationInput = {
    SAP?: SortOrder
    id_role?: SortOrder
    name?: SortOrder
    role?: RoleOrderByWithRelationInput
    projects?: ProjectOrderByRelationAggregateInput
    tasks?: TaskOrderByRelationAggregateInput
  }

  export type EngineerWhereUniqueInput = Prisma.AtLeast<{
    SAP?: number
    AND?: EngineerWhereInput | EngineerWhereInput[]
    OR?: EngineerWhereInput[]
    NOT?: EngineerWhereInput | EngineerWhereInput[]
    id_role?: IntFilter<"Engineer"> | number
    name?: StringFilter<"Engineer"> | string
    role?: XOR<RoleScalarRelationFilter, RoleWhereInput>
    projects?: ProjectListRelationFilter
    tasks?: TaskListRelationFilter
  }, "SAP">

  export type EngineerOrderByWithAggregationInput = {
    SAP?: SortOrder
    id_role?: SortOrder
    name?: SortOrder
    _count?: EngineerCountOrderByAggregateInput
    _avg?: EngineerAvgOrderByAggregateInput
    _max?: EngineerMaxOrderByAggregateInput
    _min?: EngineerMinOrderByAggregateInput
    _sum?: EngineerSumOrderByAggregateInput
  }

  export type EngineerScalarWhereWithAggregatesInput = {
    AND?: EngineerScalarWhereWithAggregatesInput | EngineerScalarWhereWithAggregatesInput[]
    OR?: EngineerScalarWhereWithAggregatesInput[]
    NOT?: EngineerScalarWhereWithAggregatesInput | EngineerScalarWhereWithAggregatesInput[]
    SAP?: IntWithAggregatesFilter<"Engineer"> | number
    id_role?: IntWithAggregatesFilter<"Engineer"> | number
    name?: StringWithAggregatesFilter<"Engineer"> | string
  }

  export type ProjectWhereInput = {
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    id_project?: IntFilter<"Project"> | number
    SAP?: IntFilter<"Project"> | number
    project_name?: StringFilter<"Project"> | string
    project_type?: EnumProjectTypeFilter<"Project"> | $Enums.ProjectType
    level?: EnumProjectLevelFilter<"Project"> | $Enums.ProjectLevel
    req_date?: DateTimeNullableFilter<"Project"> | Date | string | null
    plan_start_date?: DateTimeNullableFilter<"Project"> | Date | string | null
    plan_end_date?: DateTimeNullableFilter<"Project"> | Date | string | null
    actual_start?: DateTimeNullableFilter<"Project"> | Date | string | null
    actual_end?: DateTimeNullableFilter<"Project"> | Date | string | null
    live_date?: DateTimeNullableFilter<"Project"> | Date | string | null
    project_progress?: IntFilter<"Project"> | number
    remark?: StringNullableFilter<"Project"> | string | null
    status?: EnumProjectStatusFilter<"Project"> | $Enums.ProjectStatus
    engineer?: XOR<EngineerScalarRelationFilter, EngineerWhereInput>
    tasks?: TaskListRelationFilter
  }

  export type ProjectOrderByWithRelationInput = {
    id_project?: SortOrder
    SAP?: SortOrder
    project_name?: SortOrder
    project_type?: SortOrder
    level?: SortOrder
    req_date?: SortOrderInput | SortOrder
    plan_start_date?: SortOrderInput | SortOrder
    plan_end_date?: SortOrderInput | SortOrder
    actual_start?: SortOrderInput | SortOrder
    actual_end?: SortOrderInput | SortOrder
    live_date?: SortOrderInput | SortOrder
    project_progress?: SortOrder
    remark?: SortOrderInput | SortOrder
    status?: SortOrder
    engineer?: EngineerOrderByWithRelationInput
    tasks?: TaskOrderByRelationAggregateInput
  }

  export type ProjectWhereUniqueInput = Prisma.AtLeast<{
    id_project?: number
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    SAP?: IntFilter<"Project"> | number
    project_name?: StringFilter<"Project"> | string
    project_type?: EnumProjectTypeFilter<"Project"> | $Enums.ProjectType
    level?: EnumProjectLevelFilter<"Project"> | $Enums.ProjectLevel
    req_date?: DateTimeNullableFilter<"Project"> | Date | string | null
    plan_start_date?: DateTimeNullableFilter<"Project"> | Date | string | null
    plan_end_date?: DateTimeNullableFilter<"Project"> | Date | string | null
    actual_start?: DateTimeNullableFilter<"Project"> | Date | string | null
    actual_end?: DateTimeNullableFilter<"Project"> | Date | string | null
    live_date?: DateTimeNullableFilter<"Project"> | Date | string | null
    project_progress?: IntFilter<"Project"> | number
    remark?: StringNullableFilter<"Project"> | string | null
    status?: EnumProjectStatusFilter<"Project"> | $Enums.ProjectStatus
    engineer?: XOR<EngineerScalarRelationFilter, EngineerWhereInput>
    tasks?: TaskListRelationFilter
  }, "id_project">

  export type ProjectOrderByWithAggregationInput = {
    id_project?: SortOrder
    SAP?: SortOrder
    project_name?: SortOrder
    project_type?: SortOrder
    level?: SortOrder
    req_date?: SortOrderInput | SortOrder
    plan_start_date?: SortOrderInput | SortOrder
    plan_end_date?: SortOrderInput | SortOrder
    actual_start?: SortOrderInput | SortOrder
    actual_end?: SortOrderInput | SortOrder
    live_date?: SortOrderInput | SortOrder
    project_progress?: SortOrder
    remark?: SortOrderInput | SortOrder
    status?: SortOrder
    _count?: ProjectCountOrderByAggregateInput
    _avg?: ProjectAvgOrderByAggregateInput
    _max?: ProjectMaxOrderByAggregateInput
    _min?: ProjectMinOrderByAggregateInput
    _sum?: ProjectSumOrderByAggregateInput
  }

  export type ProjectScalarWhereWithAggregatesInput = {
    AND?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    OR?: ProjectScalarWhereWithAggregatesInput[]
    NOT?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    id_project?: IntWithAggregatesFilter<"Project"> | number
    SAP?: IntWithAggregatesFilter<"Project"> | number
    project_name?: StringWithAggregatesFilter<"Project"> | string
    project_type?: EnumProjectTypeWithAggregatesFilter<"Project"> | $Enums.ProjectType
    level?: EnumProjectLevelWithAggregatesFilter<"Project"> | $Enums.ProjectLevel
    req_date?: DateTimeNullableWithAggregatesFilter<"Project"> | Date | string | null
    plan_start_date?: DateTimeNullableWithAggregatesFilter<"Project"> | Date | string | null
    plan_end_date?: DateTimeNullableWithAggregatesFilter<"Project"> | Date | string | null
    actual_start?: DateTimeNullableWithAggregatesFilter<"Project"> | Date | string | null
    actual_end?: DateTimeNullableWithAggregatesFilter<"Project"> | Date | string | null
    live_date?: DateTimeNullableWithAggregatesFilter<"Project"> | Date | string | null
    project_progress?: IntWithAggregatesFilter<"Project"> | number
    remark?: StringNullableWithAggregatesFilter<"Project"> | string | null
    status?: EnumProjectStatusWithAggregatesFilter<"Project"> | $Enums.ProjectStatus
  }

  export type TaskWhereInput = {
    AND?: TaskWhereInput | TaskWhereInput[]
    OR?: TaskWhereInput[]
    NOT?: TaskWhereInput | TaskWhereInput[]
    id_task?: IntFilter<"Task"> | number
    id_project?: IntFilter<"Task"> | number
    SAP?: IntFilter<"Task"> | number
    task_group?: StringFilter<"Task"> | string
    task_detail?: StringFilter<"Task"> | string
    plan_start_date?: DateTimeNullableFilter<"Task"> | Date | string | null
    plan_end_date?: DateTimeNullableFilter<"Task"> | Date | string | null
    actual_start?: DateTimeNullableFilter<"Task"> | Date | string | null
    actual_end?: DateTimeNullableFilter<"Task"> | Date | string | null
    platform?: StringNullableFilter<"Task"> | string | null
    task_progress?: IntFilter<"Task"> | number
    status?: EnumProjectStatusFilter<"Task"> | $Enums.ProjectStatus
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
    engineer?: XOR<EngineerScalarRelationFilter, EngineerWhereInput>
  }

  export type TaskOrderByWithRelationInput = {
    id_task?: SortOrder
    id_project?: SortOrder
    SAP?: SortOrder
    task_group?: SortOrder
    task_detail?: SortOrder
    plan_start_date?: SortOrderInput | SortOrder
    plan_end_date?: SortOrderInput | SortOrder
    actual_start?: SortOrderInput | SortOrder
    actual_end?: SortOrderInput | SortOrder
    platform?: SortOrderInput | SortOrder
    task_progress?: SortOrder
    status?: SortOrder
    project?: ProjectOrderByWithRelationInput
    engineer?: EngineerOrderByWithRelationInput
  }

  export type TaskWhereUniqueInput = Prisma.AtLeast<{
    id_task?: number
    AND?: TaskWhereInput | TaskWhereInput[]
    OR?: TaskWhereInput[]
    NOT?: TaskWhereInput | TaskWhereInput[]
    id_project?: IntFilter<"Task"> | number
    SAP?: IntFilter<"Task"> | number
    task_group?: StringFilter<"Task"> | string
    task_detail?: StringFilter<"Task"> | string
    plan_start_date?: DateTimeNullableFilter<"Task"> | Date | string | null
    plan_end_date?: DateTimeNullableFilter<"Task"> | Date | string | null
    actual_start?: DateTimeNullableFilter<"Task"> | Date | string | null
    actual_end?: DateTimeNullableFilter<"Task"> | Date | string | null
    platform?: StringNullableFilter<"Task"> | string | null
    task_progress?: IntFilter<"Task"> | number
    status?: EnumProjectStatusFilter<"Task"> | $Enums.ProjectStatus
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
    engineer?: XOR<EngineerScalarRelationFilter, EngineerWhereInput>
  }, "id_task">

  export type TaskOrderByWithAggregationInput = {
    id_task?: SortOrder
    id_project?: SortOrder
    SAP?: SortOrder
    task_group?: SortOrder
    task_detail?: SortOrder
    plan_start_date?: SortOrderInput | SortOrder
    plan_end_date?: SortOrderInput | SortOrder
    actual_start?: SortOrderInput | SortOrder
    actual_end?: SortOrderInput | SortOrder
    platform?: SortOrderInput | SortOrder
    task_progress?: SortOrder
    status?: SortOrder
    _count?: TaskCountOrderByAggregateInput
    _avg?: TaskAvgOrderByAggregateInput
    _max?: TaskMaxOrderByAggregateInput
    _min?: TaskMinOrderByAggregateInput
    _sum?: TaskSumOrderByAggregateInput
  }

  export type TaskScalarWhereWithAggregatesInput = {
    AND?: TaskScalarWhereWithAggregatesInput | TaskScalarWhereWithAggregatesInput[]
    OR?: TaskScalarWhereWithAggregatesInput[]
    NOT?: TaskScalarWhereWithAggregatesInput | TaskScalarWhereWithAggregatesInput[]
    id_task?: IntWithAggregatesFilter<"Task"> | number
    id_project?: IntWithAggregatesFilter<"Task"> | number
    SAP?: IntWithAggregatesFilter<"Task"> | number
    task_group?: StringWithAggregatesFilter<"Task"> | string
    task_detail?: StringWithAggregatesFilter<"Task"> | string
    plan_start_date?: DateTimeNullableWithAggregatesFilter<"Task"> | Date | string | null
    plan_end_date?: DateTimeNullableWithAggregatesFilter<"Task"> | Date | string | null
    actual_start?: DateTimeNullableWithAggregatesFilter<"Task"> | Date | string | null
    actual_end?: DateTimeNullableWithAggregatesFilter<"Task"> | Date | string | null
    platform?: StringNullableWithAggregatesFilter<"Task"> | string | null
    task_progress?: IntWithAggregatesFilter<"Task"> | number
    status?: EnumProjectStatusWithAggregatesFilter<"Task"> | $Enums.ProjectStatus
  }

  export type RoleCreateInput = {
    role: string
    engineers?: EngineerCreateNestedManyWithoutRoleInput
  }

  export type RoleUncheckedCreateInput = {
    id_role?: number
    role: string
    engineers?: EngineerUncheckedCreateNestedManyWithoutRoleInput
  }

  export type RoleUpdateInput = {
    role?: StringFieldUpdateOperationsInput | string
    engineers?: EngineerUpdateManyWithoutRoleNestedInput
  }

  export type RoleUncheckedUpdateInput = {
    id_role?: IntFieldUpdateOperationsInput | number
    role?: StringFieldUpdateOperationsInput | string
    engineers?: EngineerUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type RoleCreateManyInput = {
    id_role?: number
    role: string
  }

  export type RoleUpdateManyMutationInput = {
    role?: StringFieldUpdateOperationsInput | string
  }

  export type RoleUncheckedUpdateManyInput = {
    id_role?: IntFieldUpdateOperationsInput | number
    role?: StringFieldUpdateOperationsInput | string
  }

  export type EngineerCreateInput = {
    SAP: number
    name: string
    role: RoleCreateNestedOneWithoutEngineersInput
    projects?: ProjectCreateNestedManyWithoutEngineerInput
    tasks?: TaskCreateNestedManyWithoutEngineerInput
  }

  export type EngineerUncheckedCreateInput = {
    SAP: number
    id_role: number
    name: string
    projects?: ProjectUncheckedCreateNestedManyWithoutEngineerInput
    tasks?: TaskUncheckedCreateNestedManyWithoutEngineerInput
  }

  export type EngineerUpdateInput = {
    SAP?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    role?: RoleUpdateOneRequiredWithoutEngineersNestedInput
    projects?: ProjectUpdateManyWithoutEngineerNestedInput
    tasks?: TaskUpdateManyWithoutEngineerNestedInput
  }

  export type EngineerUncheckedUpdateInput = {
    SAP?: IntFieldUpdateOperationsInput | number
    id_role?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    projects?: ProjectUncheckedUpdateManyWithoutEngineerNestedInput
    tasks?: TaskUncheckedUpdateManyWithoutEngineerNestedInput
  }

  export type EngineerCreateManyInput = {
    SAP: number
    id_role: number
    name: string
  }

  export type EngineerUpdateManyMutationInput = {
    SAP?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type EngineerUncheckedUpdateManyInput = {
    SAP?: IntFieldUpdateOperationsInput | number
    id_role?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ProjectCreateInput = {
    project_name: string
    project_type: $Enums.ProjectType
    level: $Enums.ProjectLevel
    req_date?: Date | string | null
    plan_start_date?: Date | string | null
    plan_end_date?: Date | string | null
    actual_start?: Date | string | null
    actual_end?: Date | string | null
    live_date?: Date | string | null
    project_progress?: number
    remark?: string | null
    status?: $Enums.ProjectStatus
    engineer: EngineerCreateNestedOneWithoutProjectsInput
    tasks?: TaskCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateInput = {
    id_project?: number
    SAP: number
    project_name: string
    project_type: $Enums.ProjectType
    level: $Enums.ProjectLevel
    req_date?: Date | string | null
    plan_start_date?: Date | string | null
    plan_end_date?: Date | string | null
    actual_start?: Date | string | null
    actual_end?: Date | string | null
    live_date?: Date | string | null
    project_progress?: number
    remark?: string | null
    status?: $Enums.ProjectStatus
    tasks?: TaskUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectUpdateInput = {
    project_name?: StringFieldUpdateOperationsInput | string
    project_type?: EnumProjectTypeFieldUpdateOperationsInput | $Enums.ProjectType
    level?: EnumProjectLevelFieldUpdateOperationsInput | $Enums.ProjectLevel
    req_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    plan_start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    plan_end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actual_start?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actual_end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    live_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    project_progress?: IntFieldUpdateOperationsInput | number
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    engineer?: EngineerUpdateOneRequiredWithoutProjectsNestedInput
    tasks?: TaskUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateInput = {
    id_project?: IntFieldUpdateOperationsInput | number
    SAP?: IntFieldUpdateOperationsInput | number
    project_name?: StringFieldUpdateOperationsInput | string
    project_type?: EnumProjectTypeFieldUpdateOperationsInput | $Enums.ProjectType
    level?: EnumProjectLevelFieldUpdateOperationsInput | $Enums.ProjectLevel
    req_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    plan_start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    plan_end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actual_start?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actual_end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    live_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    project_progress?: IntFieldUpdateOperationsInput | number
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    tasks?: TaskUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectCreateManyInput = {
    id_project?: number
    SAP: number
    project_name: string
    project_type: $Enums.ProjectType
    level: $Enums.ProjectLevel
    req_date?: Date | string | null
    plan_start_date?: Date | string | null
    plan_end_date?: Date | string | null
    actual_start?: Date | string | null
    actual_end?: Date | string | null
    live_date?: Date | string | null
    project_progress?: number
    remark?: string | null
    status?: $Enums.ProjectStatus
  }

  export type ProjectUpdateManyMutationInput = {
    project_name?: StringFieldUpdateOperationsInput | string
    project_type?: EnumProjectTypeFieldUpdateOperationsInput | $Enums.ProjectType
    level?: EnumProjectLevelFieldUpdateOperationsInput | $Enums.ProjectLevel
    req_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    plan_start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    plan_end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actual_start?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actual_end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    live_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    project_progress?: IntFieldUpdateOperationsInput | number
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
  }

  export type ProjectUncheckedUpdateManyInput = {
    id_project?: IntFieldUpdateOperationsInput | number
    SAP?: IntFieldUpdateOperationsInput | number
    project_name?: StringFieldUpdateOperationsInput | string
    project_type?: EnumProjectTypeFieldUpdateOperationsInput | $Enums.ProjectType
    level?: EnumProjectLevelFieldUpdateOperationsInput | $Enums.ProjectLevel
    req_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    plan_start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    plan_end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actual_start?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actual_end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    live_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    project_progress?: IntFieldUpdateOperationsInput | number
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
  }

  export type TaskCreateInput = {
    task_group: string
    task_detail: string
    plan_start_date?: Date | string | null
    plan_end_date?: Date | string | null
    actual_start?: Date | string | null
    actual_end?: Date | string | null
    platform?: string | null
    task_progress?: number
    status?: $Enums.ProjectStatus
    project: ProjectCreateNestedOneWithoutTasksInput
    engineer: EngineerCreateNestedOneWithoutTasksInput
  }

  export type TaskUncheckedCreateInput = {
    id_task?: number
    id_project: number
    SAP: number
    task_group: string
    task_detail: string
    plan_start_date?: Date | string | null
    plan_end_date?: Date | string | null
    actual_start?: Date | string | null
    actual_end?: Date | string | null
    platform?: string | null
    task_progress?: number
    status?: $Enums.ProjectStatus
  }

  export type TaskUpdateInput = {
    task_group?: StringFieldUpdateOperationsInput | string
    task_detail?: StringFieldUpdateOperationsInput | string
    plan_start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    plan_end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actual_start?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actual_end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    platform?: NullableStringFieldUpdateOperationsInput | string | null
    task_progress?: IntFieldUpdateOperationsInput | number
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    project?: ProjectUpdateOneRequiredWithoutTasksNestedInput
    engineer?: EngineerUpdateOneRequiredWithoutTasksNestedInput
  }

  export type TaskUncheckedUpdateInput = {
    id_task?: IntFieldUpdateOperationsInput | number
    id_project?: IntFieldUpdateOperationsInput | number
    SAP?: IntFieldUpdateOperationsInput | number
    task_group?: StringFieldUpdateOperationsInput | string
    task_detail?: StringFieldUpdateOperationsInput | string
    plan_start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    plan_end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actual_start?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actual_end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    platform?: NullableStringFieldUpdateOperationsInput | string | null
    task_progress?: IntFieldUpdateOperationsInput | number
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
  }

  export type TaskCreateManyInput = {
    id_task?: number
    id_project: number
    SAP: number
    task_group: string
    task_detail: string
    plan_start_date?: Date | string | null
    plan_end_date?: Date | string | null
    actual_start?: Date | string | null
    actual_end?: Date | string | null
    platform?: string | null
    task_progress?: number
    status?: $Enums.ProjectStatus
  }

  export type TaskUpdateManyMutationInput = {
    task_group?: StringFieldUpdateOperationsInput | string
    task_detail?: StringFieldUpdateOperationsInput | string
    plan_start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    plan_end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actual_start?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actual_end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    platform?: NullableStringFieldUpdateOperationsInput | string | null
    task_progress?: IntFieldUpdateOperationsInput | number
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
  }

  export type TaskUncheckedUpdateManyInput = {
    id_task?: IntFieldUpdateOperationsInput | number
    id_project?: IntFieldUpdateOperationsInput | number
    SAP?: IntFieldUpdateOperationsInput | number
    task_group?: StringFieldUpdateOperationsInput | string
    task_detail?: StringFieldUpdateOperationsInput | string
    plan_start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    plan_end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actual_start?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actual_end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    platform?: NullableStringFieldUpdateOperationsInput | string | null
    task_progress?: IntFieldUpdateOperationsInput | number
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EngineerListRelationFilter = {
    every?: EngineerWhereInput
    some?: EngineerWhereInput
    none?: EngineerWhereInput
  }

  export type EngineerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RoleCountOrderByAggregateInput = {
    id_role?: SortOrder
    role?: SortOrder
  }

  export type RoleAvgOrderByAggregateInput = {
    id_role?: SortOrder
  }

  export type RoleMaxOrderByAggregateInput = {
    id_role?: SortOrder
    role?: SortOrder
  }

  export type RoleMinOrderByAggregateInput = {
    id_role?: SortOrder
    role?: SortOrder
  }

  export type RoleSumOrderByAggregateInput = {
    id_role?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type RoleScalarRelationFilter = {
    is?: RoleWhereInput
    isNot?: RoleWhereInput
  }

  export type ProjectListRelationFilter = {
    every?: ProjectWhereInput
    some?: ProjectWhereInput
    none?: ProjectWhereInput
  }

  export type TaskListRelationFilter = {
    every?: TaskWhereInput
    some?: TaskWhereInput
    none?: TaskWhereInput
  }

  export type ProjectOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TaskOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EngineerCountOrderByAggregateInput = {
    SAP?: SortOrder
    id_role?: SortOrder
    name?: SortOrder
  }

  export type EngineerAvgOrderByAggregateInput = {
    SAP?: SortOrder
    id_role?: SortOrder
  }

  export type EngineerMaxOrderByAggregateInput = {
    SAP?: SortOrder
    id_role?: SortOrder
    name?: SortOrder
  }

  export type EngineerMinOrderByAggregateInput = {
    SAP?: SortOrder
    id_role?: SortOrder
    name?: SortOrder
  }

  export type EngineerSumOrderByAggregateInput = {
    SAP?: SortOrder
    id_role?: SortOrder
  }

  export type EnumProjectTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ProjectType | EnumProjectTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ProjectType[] | ListEnumProjectTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProjectType[] | ListEnumProjectTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumProjectTypeFilter<$PrismaModel> | $Enums.ProjectType
  }

  export type EnumProjectLevelFilter<$PrismaModel = never> = {
    equals?: $Enums.ProjectLevel | EnumProjectLevelFieldRefInput<$PrismaModel>
    in?: $Enums.ProjectLevel[] | ListEnumProjectLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProjectLevel[] | ListEnumProjectLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumProjectLevelFilter<$PrismaModel> | $Enums.ProjectLevel
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumProjectStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ProjectStatus | EnumProjectStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProjectStatus[] | ListEnumProjectStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProjectStatus[] | ListEnumProjectStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumProjectStatusFilter<$PrismaModel> | $Enums.ProjectStatus
  }

  export type EngineerScalarRelationFilter = {
    is?: EngineerWhereInput
    isNot?: EngineerWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ProjectCountOrderByAggregateInput = {
    id_project?: SortOrder
    SAP?: SortOrder
    project_name?: SortOrder
    project_type?: SortOrder
    level?: SortOrder
    req_date?: SortOrder
    plan_start_date?: SortOrder
    plan_end_date?: SortOrder
    actual_start?: SortOrder
    actual_end?: SortOrder
    live_date?: SortOrder
    project_progress?: SortOrder
    remark?: SortOrder
    status?: SortOrder
  }

  export type ProjectAvgOrderByAggregateInput = {
    id_project?: SortOrder
    SAP?: SortOrder
    project_progress?: SortOrder
  }

  export type ProjectMaxOrderByAggregateInput = {
    id_project?: SortOrder
    SAP?: SortOrder
    project_name?: SortOrder
    project_type?: SortOrder
    level?: SortOrder
    req_date?: SortOrder
    plan_start_date?: SortOrder
    plan_end_date?: SortOrder
    actual_start?: SortOrder
    actual_end?: SortOrder
    live_date?: SortOrder
    project_progress?: SortOrder
    remark?: SortOrder
    status?: SortOrder
  }

  export type ProjectMinOrderByAggregateInput = {
    id_project?: SortOrder
    SAP?: SortOrder
    project_name?: SortOrder
    project_type?: SortOrder
    level?: SortOrder
    req_date?: SortOrder
    plan_start_date?: SortOrder
    plan_end_date?: SortOrder
    actual_start?: SortOrder
    actual_end?: SortOrder
    live_date?: SortOrder
    project_progress?: SortOrder
    remark?: SortOrder
    status?: SortOrder
  }

  export type ProjectSumOrderByAggregateInput = {
    id_project?: SortOrder
    SAP?: SortOrder
    project_progress?: SortOrder
  }

  export type EnumProjectTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProjectType | EnumProjectTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ProjectType[] | ListEnumProjectTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProjectType[] | ListEnumProjectTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumProjectTypeWithAggregatesFilter<$PrismaModel> | $Enums.ProjectType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProjectTypeFilter<$PrismaModel>
    _max?: NestedEnumProjectTypeFilter<$PrismaModel>
  }

  export type EnumProjectLevelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProjectLevel | EnumProjectLevelFieldRefInput<$PrismaModel>
    in?: $Enums.ProjectLevel[] | ListEnumProjectLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProjectLevel[] | ListEnumProjectLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumProjectLevelWithAggregatesFilter<$PrismaModel> | $Enums.ProjectLevel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProjectLevelFilter<$PrismaModel>
    _max?: NestedEnumProjectLevelFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumProjectStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProjectStatus | EnumProjectStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProjectStatus[] | ListEnumProjectStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProjectStatus[] | ListEnumProjectStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumProjectStatusWithAggregatesFilter<$PrismaModel> | $Enums.ProjectStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProjectStatusFilter<$PrismaModel>
    _max?: NestedEnumProjectStatusFilter<$PrismaModel>
  }

  export type ProjectScalarRelationFilter = {
    is?: ProjectWhereInput
    isNot?: ProjectWhereInput
  }

  export type TaskCountOrderByAggregateInput = {
    id_task?: SortOrder
    id_project?: SortOrder
    SAP?: SortOrder
    task_group?: SortOrder
    task_detail?: SortOrder
    plan_start_date?: SortOrder
    plan_end_date?: SortOrder
    actual_start?: SortOrder
    actual_end?: SortOrder
    platform?: SortOrder
    task_progress?: SortOrder
    status?: SortOrder
  }

  export type TaskAvgOrderByAggregateInput = {
    id_task?: SortOrder
    id_project?: SortOrder
    SAP?: SortOrder
    task_progress?: SortOrder
  }

  export type TaskMaxOrderByAggregateInput = {
    id_task?: SortOrder
    id_project?: SortOrder
    SAP?: SortOrder
    task_group?: SortOrder
    task_detail?: SortOrder
    plan_start_date?: SortOrder
    plan_end_date?: SortOrder
    actual_start?: SortOrder
    actual_end?: SortOrder
    platform?: SortOrder
    task_progress?: SortOrder
    status?: SortOrder
  }

  export type TaskMinOrderByAggregateInput = {
    id_task?: SortOrder
    id_project?: SortOrder
    SAP?: SortOrder
    task_group?: SortOrder
    task_detail?: SortOrder
    plan_start_date?: SortOrder
    plan_end_date?: SortOrder
    actual_start?: SortOrder
    actual_end?: SortOrder
    platform?: SortOrder
    task_progress?: SortOrder
    status?: SortOrder
  }

  export type TaskSumOrderByAggregateInput = {
    id_task?: SortOrder
    id_project?: SortOrder
    SAP?: SortOrder
    task_progress?: SortOrder
  }

  export type EngineerCreateNestedManyWithoutRoleInput = {
    create?: XOR<EngineerCreateWithoutRoleInput, EngineerUncheckedCreateWithoutRoleInput> | EngineerCreateWithoutRoleInput[] | EngineerUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: EngineerCreateOrConnectWithoutRoleInput | EngineerCreateOrConnectWithoutRoleInput[]
    createMany?: EngineerCreateManyRoleInputEnvelope
    connect?: EngineerWhereUniqueInput | EngineerWhereUniqueInput[]
  }

  export type EngineerUncheckedCreateNestedManyWithoutRoleInput = {
    create?: XOR<EngineerCreateWithoutRoleInput, EngineerUncheckedCreateWithoutRoleInput> | EngineerCreateWithoutRoleInput[] | EngineerUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: EngineerCreateOrConnectWithoutRoleInput | EngineerCreateOrConnectWithoutRoleInput[]
    createMany?: EngineerCreateManyRoleInputEnvelope
    connect?: EngineerWhereUniqueInput | EngineerWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EngineerUpdateManyWithoutRoleNestedInput = {
    create?: XOR<EngineerCreateWithoutRoleInput, EngineerUncheckedCreateWithoutRoleInput> | EngineerCreateWithoutRoleInput[] | EngineerUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: EngineerCreateOrConnectWithoutRoleInput | EngineerCreateOrConnectWithoutRoleInput[]
    upsert?: EngineerUpsertWithWhereUniqueWithoutRoleInput | EngineerUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: EngineerCreateManyRoleInputEnvelope
    set?: EngineerWhereUniqueInput | EngineerWhereUniqueInput[]
    disconnect?: EngineerWhereUniqueInput | EngineerWhereUniqueInput[]
    delete?: EngineerWhereUniqueInput | EngineerWhereUniqueInput[]
    connect?: EngineerWhereUniqueInput | EngineerWhereUniqueInput[]
    update?: EngineerUpdateWithWhereUniqueWithoutRoleInput | EngineerUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: EngineerUpdateManyWithWhereWithoutRoleInput | EngineerUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: EngineerScalarWhereInput | EngineerScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EngineerUncheckedUpdateManyWithoutRoleNestedInput = {
    create?: XOR<EngineerCreateWithoutRoleInput, EngineerUncheckedCreateWithoutRoleInput> | EngineerCreateWithoutRoleInput[] | EngineerUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: EngineerCreateOrConnectWithoutRoleInput | EngineerCreateOrConnectWithoutRoleInput[]
    upsert?: EngineerUpsertWithWhereUniqueWithoutRoleInput | EngineerUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: EngineerCreateManyRoleInputEnvelope
    set?: EngineerWhereUniqueInput | EngineerWhereUniqueInput[]
    disconnect?: EngineerWhereUniqueInput | EngineerWhereUniqueInput[]
    delete?: EngineerWhereUniqueInput | EngineerWhereUniqueInput[]
    connect?: EngineerWhereUniqueInput | EngineerWhereUniqueInput[]
    update?: EngineerUpdateWithWhereUniqueWithoutRoleInput | EngineerUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: EngineerUpdateManyWithWhereWithoutRoleInput | EngineerUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: EngineerScalarWhereInput | EngineerScalarWhereInput[]
  }

  export type RoleCreateNestedOneWithoutEngineersInput = {
    create?: XOR<RoleCreateWithoutEngineersInput, RoleUncheckedCreateWithoutEngineersInput>
    connectOrCreate?: RoleCreateOrConnectWithoutEngineersInput
    connect?: RoleWhereUniqueInput
  }

  export type ProjectCreateNestedManyWithoutEngineerInput = {
    create?: XOR<ProjectCreateWithoutEngineerInput, ProjectUncheckedCreateWithoutEngineerInput> | ProjectCreateWithoutEngineerInput[] | ProjectUncheckedCreateWithoutEngineerInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutEngineerInput | ProjectCreateOrConnectWithoutEngineerInput[]
    createMany?: ProjectCreateManyEngineerInputEnvelope
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
  }

  export type TaskCreateNestedManyWithoutEngineerInput = {
    create?: XOR<TaskCreateWithoutEngineerInput, TaskUncheckedCreateWithoutEngineerInput> | TaskCreateWithoutEngineerInput[] | TaskUncheckedCreateWithoutEngineerInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutEngineerInput | TaskCreateOrConnectWithoutEngineerInput[]
    createMany?: TaskCreateManyEngineerInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type ProjectUncheckedCreateNestedManyWithoutEngineerInput = {
    create?: XOR<ProjectCreateWithoutEngineerInput, ProjectUncheckedCreateWithoutEngineerInput> | ProjectCreateWithoutEngineerInput[] | ProjectUncheckedCreateWithoutEngineerInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutEngineerInput | ProjectCreateOrConnectWithoutEngineerInput[]
    createMany?: ProjectCreateManyEngineerInputEnvelope
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
  }

  export type TaskUncheckedCreateNestedManyWithoutEngineerInput = {
    create?: XOR<TaskCreateWithoutEngineerInput, TaskUncheckedCreateWithoutEngineerInput> | TaskCreateWithoutEngineerInput[] | TaskUncheckedCreateWithoutEngineerInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutEngineerInput | TaskCreateOrConnectWithoutEngineerInput[]
    createMany?: TaskCreateManyEngineerInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type RoleUpdateOneRequiredWithoutEngineersNestedInput = {
    create?: XOR<RoleCreateWithoutEngineersInput, RoleUncheckedCreateWithoutEngineersInput>
    connectOrCreate?: RoleCreateOrConnectWithoutEngineersInput
    upsert?: RoleUpsertWithoutEngineersInput
    connect?: RoleWhereUniqueInput
    update?: XOR<XOR<RoleUpdateToOneWithWhereWithoutEngineersInput, RoleUpdateWithoutEngineersInput>, RoleUncheckedUpdateWithoutEngineersInput>
  }

  export type ProjectUpdateManyWithoutEngineerNestedInput = {
    create?: XOR<ProjectCreateWithoutEngineerInput, ProjectUncheckedCreateWithoutEngineerInput> | ProjectCreateWithoutEngineerInput[] | ProjectUncheckedCreateWithoutEngineerInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutEngineerInput | ProjectCreateOrConnectWithoutEngineerInput[]
    upsert?: ProjectUpsertWithWhereUniqueWithoutEngineerInput | ProjectUpsertWithWhereUniqueWithoutEngineerInput[]
    createMany?: ProjectCreateManyEngineerInputEnvelope
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    update?: ProjectUpdateWithWhereUniqueWithoutEngineerInput | ProjectUpdateWithWhereUniqueWithoutEngineerInput[]
    updateMany?: ProjectUpdateManyWithWhereWithoutEngineerInput | ProjectUpdateManyWithWhereWithoutEngineerInput[]
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
  }

  export type TaskUpdateManyWithoutEngineerNestedInput = {
    create?: XOR<TaskCreateWithoutEngineerInput, TaskUncheckedCreateWithoutEngineerInput> | TaskCreateWithoutEngineerInput[] | TaskUncheckedCreateWithoutEngineerInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutEngineerInput | TaskCreateOrConnectWithoutEngineerInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutEngineerInput | TaskUpsertWithWhereUniqueWithoutEngineerInput[]
    createMany?: TaskCreateManyEngineerInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutEngineerInput | TaskUpdateWithWhereUniqueWithoutEngineerInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutEngineerInput | TaskUpdateManyWithWhereWithoutEngineerInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type ProjectUncheckedUpdateManyWithoutEngineerNestedInput = {
    create?: XOR<ProjectCreateWithoutEngineerInput, ProjectUncheckedCreateWithoutEngineerInput> | ProjectCreateWithoutEngineerInput[] | ProjectUncheckedCreateWithoutEngineerInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutEngineerInput | ProjectCreateOrConnectWithoutEngineerInput[]
    upsert?: ProjectUpsertWithWhereUniqueWithoutEngineerInput | ProjectUpsertWithWhereUniqueWithoutEngineerInput[]
    createMany?: ProjectCreateManyEngineerInputEnvelope
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    update?: ProjectUpdateWithWhereUniqueWithoutEngineerInput | ProjectUpdateWithWhereUniqueWithoutEngineerInput[]
    updateMany?: ProjectUpdateManyWithWhereWithoutEngineerInput | ProjectUpdateManyWithWhereWithoutEngineerInput[]
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
  }

  export type TaskUncheckedUpdateManyWithoutEngineerNestedInput = {
    create?: XOR<TaskCreateWithoutEngineerInput, TaskUncheckedCreateWithoutEngineerInput> | TaskCreateWithoutEngineerInput[] | TaskUncheckedCreateWithoutEngineerInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutEngineerInput | TaskCreateOrConnectWithoutEngineerInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutEngineerInput | TaskUpsertWithWhereUniqueWithoutEngineerInput[]
    createMany?: TaskCreateManyEngineerInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutEngineerInput | TaskUpdateWithWhereUniqueWithoutEngineerInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutEngineerInput | TaskUpdateManyWithWhereWithoutEngineerInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type EngineerCreateNestedOneWithoutProjectsInput = {
    create?: XOR<EngineerCreateWithoutProjectsInput, EngineerUncheckedCreateWithoutProjectsInput>
    connectOrCreate?: EngineerCreateOrConnectWithoutProjectsInput
    connect?: EngineerWhereUniqueInput
  }

  export type TaskCreateNestedManyWithoutProjectInput = {
    create?: XOR<TaskCreateWithoutProjectInput, TaskUncheckedCreateWithoutProjectInput> | TaskCreateWithoutProjectInput[] | TaskUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutProjectInput | TaskCreateOrConnectWithoutProjectInput[]
    createMany?: TaskCreateManyProjectInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type TaskUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<TaskCreateWithoutProjectInput, TaskUncheckedCreateWithoutProjectInput> | TaskCreateWithoutProjectInput[] | TaskUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutProjectInput | TaskCreateOrConnectWithoutProjectInput[]
    createMany?: TaskCreateManyProjectInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type EnumProjectTypeFieldUpdateOperationsInput = {
    set?: $Enums.ProjectType
  }

  export type EnumProjectLevelFieldUpdateOperationsInput = {
    set?: $Enums.ProjectLevel
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumProjectStatusFieldUpdateOperationsInput = {
    set?: $Enums.ProjectStatus
  }

  export type EngineerUpdateOneRequiredWithoutProjectsNestedInput = {
    create?: XOR<EngineerCreateWithoutProjectsInput, EngineerUncheckedCreateWithoutProjectsInput>
    connectOrCreate?: EngineerCreateOrConnectWithoutProjectsInput
    upsert?: EngineerUpsertWithoutProjectsInput
    connect?: EngineerWhereUniqueInput
    update?: XOR<XOR<EngineerUpdateToOneWithWhereWithoutProjectsInput, EngineerUpdateWithoutProjectsInput>, EngineerUncheckedUpdateWithoutProjectsInput>
  }

  export type TaskUpdateManyWithoutProjectNestedInput = {
    create?: XOR<TaskCreateWithoutProjectInput, TaskUncheckedCreateWithoutProjectInput> | TaskCreateWithoutProjectInput[] | TaskUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutProjectInput | TaskCreateOrConnectWithoutProjectInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutProjectInput | TaskUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: TaskCreateManyProjectInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutProjectInput | TaskUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutProjectInput | TaskUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type TaskUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<TaskCreateWithoutProjectInput, TaskUncheckedCreateWithoutProjectInput> | TaskCreateWithoutProjectInput[] | TaskUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutProjectInput | TaskCreateOrConnectWithoutProjectInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutProjectInput | TaskUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: TaskCreateManyProjectInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutProjectInput | TaskUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutProjectInput | TaskUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type ProjectCreateNestedOneWithoutTasksInput = {
    create?: XOR<ProjectCreateWithoutTasksInput, ProjectUncheckedCreateWithoutTasksInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutTasksInput
    connect?: ProjectWhereUniqueInput
  }

  export type EngineerCreateNestedOneWithoutTasksInput = {
    create?: XOR<EngineerCreateWithoutTasksInput, EngineerUncheckedCreateWithoutTasksInput>
    connectOrCreate?: EngineerCreateOrConnectWithoutTasksInput
    connect?: EngineerWhereUniqueInput
  }

  export type ProjectUpdateOneRequiredWithoutTasksNestedInput = {
    create?: XOR<ProjectCreateWithoutTasksInput, ProjectUncheckedCreateWithoutTasksInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutTasksInput
    upsert?: ProjectUpsertWithoutTasksInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutTasksInput, ProjectUpdateWithoutTasksInput>, ProjectUncheckedUpdateWithoutTasksInput>
  }

  export type EngineerUpdateOneRequiredWithoutTasksNestedInput = {
    create?: XOR<EngineerCreateWithoutTasksInput, EngineerUncheckedCreateWithoutTasksInput>
    connectOrCreate?: EngineerCreateOrConnectWithoutTasksInput
    upsert?: EngineerUpsertWithoutTasksInput
    connect?: EngineerWhereUniqueInput
    update?: XOR<XOR<EngineerUpdateToOneWithWhereWithoutTasksInput, EngineerUpdateWithoutTasksInput>, EngineerUncheckedUpdateWithoutTasksInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedEnumProjectTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ProjectType | EnumProjectTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ProjectType[] | ListEnumProjectTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProjectType[] | ListEnumProjectTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumProjectTypeFilter<$PrismaModel> | $Enums.ProjectType
  }

  export type NestedEnumProjectLevelFilter<$PrismaModel = never> = {
    equals?: $Enums.ProjectLevel | EnumProjectLevelFieldRefInput<$PrismaModel>
    in?: $Enums.ProjectLevel[] | ListEnumProjectLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProjectLevel[] | ListEnumProjectLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumProjectLevelFilter<$PrismaModel> | $Enums.ProjectLevel
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumProjectStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ProjectStatus | EnumProjectStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProjectStatus[] | ListEnumProjectStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProjectStatus[] | ListEnumProjectStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumProjectStatusFilter<$PrismaModel> | $Enums.ProjectStatus
  }

  export type NestedEnumProjectTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProjectType | EnumProjectTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ProjectType[] | ListEnumProjectTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProjectType[] | ListEnumProjectTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumProjectTypeWithAggregatesFilter<$PrismaModel> | $Enums.ProjectType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProjectTypeFilter<$PrismaModel>
    _max?: NestedEnumProjectTypeFilter<$PrismaModel>
  }

  export type NestedEnumProjectLevelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProjectLevel | EnumProjectLevelFieldRefInput<$PrismaModel>
    in?: $Enums.ProjectLevel[] | ListEnumProjectLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProjectLevel[] | ListEnumProjectLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumProjectLevelWithAggregatesFilter<$PrismaModel> | $Enums.ProjectLevel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProjectLevelFilter<$PrismaModel>
    _max?: NestedEnumProjectLevelFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedEnumProjectStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProjectStatus | EnumProjectStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProjectStatus[] | ListEnumProjectStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProjectStatus[] | ListEnumProjectStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumProjectStatusWithAggregatesFilter<$PrismaModel> | $Enums.ProjectStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProjectStatusFilter<$PrismaModel>
    _max?: NestedEnumProjectStatusFilter<$PrismaModel>
  }

  export type EngineerCreateWithoutRoleInput = {
    SAP: number
    name: string
    projects?: ProjectCreateNestedManyWithoutEngineerInput
    tasks?: TaskCreateNestedManyWithoutEngineerInput
  }

  export type EngineerUncheckedCreateWithoutRoleInput = {
    SAP: number
    name: string
    projects?: ProjectUncheckedCreateNestedManyWithoutEngineerInput
    tasks?: TaskUncheckedCreateNestedManyWithoutEngineerInput
  }

  export type EngineerCreateOrConnectWithoutRoleInput = {
    where: EngineerWhereUniqueInput
    create: XOR<EngineerCreateWithoutRoleInput, EngineerUncheckedCreateWithoutRoleInput>
  }

  export type EngineerCreateManyRoleInputEnvelope = {
    data: EngineerCreateManyRoleInput | EngineerCreateManyRoleInput[]
    skipDuplicates?: boolean
  }

  export type EngineerUpsertWithWhereUniqueWithoutRoleInput = {
    where: EngineerWhereUniqueInput
    update: XOR<EngineerUpdateWithoutRoleInput, EngineerUncheckedUpdateWithoutRoleInput>
    create: XOR<EngineerCreateWithoutRoleInput, EngineerUncheckedCreateWithoutRoleInput>
  }

  export type EngineerUpdateWithWhereUniqueWithoutRoleInput = {
    where: EngineerWhereUniqueInput
    data: XOR<EngineerUpdateWithoutRoleInput, EngineerUncheckedUpdateWithoutRoleInput>
  }

  export type EngineerUpdateManyWithWhereWithoutRoleInput = {
    where: EngineerScalarWhereInput
    data: XOR<EngineerUpdateManyMutationInput, EngineerUncheckedUpdateManyWithoutRoleInput>
  }

  export type EngineerScalarWhereInput = {
    AND?: EngineerScalarWhereInput | EngineerScalarWhereInput[]
    OR?: EngineerScalarWhereInput[]
    NOT?: EngineerScalarWhereInput | EngineerScalarWhereInput[]
    SAP?: IntFilter<"Engineer"> | number
    id_role?: IntFilter<"Engineer"> | number
    name?: StringFilter<"Engineer"> | string
  }

  export type RoleCreateWithoutEngineersInput = {
    role: string
  }

  export type RoleUncheckedCreateWithoutEngineersInput = {
    id_role?: number
    role: string
  }

  export type RoleCreateOrConnectWithoutEngineersInput = {
    where: RoleWhereUniqueInput
    create: XOR<RoleCreateWithoutEngineersInput, RoleUncheckedCreateWithoutEngineersInput>
  }

  export type ProjectCreateWithoutEngineerInput = {
    project_name: string
    project_type: $Enums.ProjectType
    level: $Enums.ProjectLevel
    req_date?: Date | string | null
    plan_start_date?: Date | string | null
    plan_end_date?: Date | string | null
    actual_start?: Date | string | null
    actual_end?: Date | string | null
    live_date?: Date | string | null
    project_progress?: number
    remark?: string | null
    status?: $Enums.ProjectStatus
    tasks?: TaskCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutEngineerInput = {
    id_project?: number
    project_name: string
    project_type: $Enums.ProjectType
    level: $Enums.ProjectLevel
    req_date?: Date | string | null
    plan_start_date?: Date | string | null
    plan_end_date?: Date | string | null
    actual_start?: Date | string | null
    actual_end?: Date | string | null
    live_date?: Date | string | null
    project_progress?: number
    remark?: string | null
    status?: $Enums.ProjectStatus
    tasks?: TaskUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutEngineerInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutEngineerInput, ProjectUncheckedCreateWithoutEngineerInput>
  }

  export type ProjectCreateManyEngineerInputEnvelope = {
    data: ProjectCreateManyEngineerInput | ProjectCreateManyEngineerInput[]
    skipDuplicates?: boolean
  }

  export type TaskCreateWithoutEngineerInput = {
    task_group: string
    task_detail: string
    plan_start_date?: Date | string | null
    plan_end_date?: Date | string | null
    actual_start?: Date | string | null
    actual_end?: Date | string | null
    platform?: string | null
    task_progress?: number
    status?: $Enums.ProjectStatus
    project: ProjectCreateNestedOneWithoutTasksInput
  }

  export type TaskUncheckedCreateWithoutEngineerInput = {
    id_task?: number
    id_project: number
    task_group: string
    task_detail: string
    plan_start_date?: Date | string | null
    plan_end_date?: Date | string | null
    actual_start?: Date | string | null
    actual_end?: Date | string | null
    platform?: string | null
    task_progress?: number
    status?: $Enums.ProjectStatus
  }

  export type TaskCreateOrConnectWithoutEngineerInput = {
    where: TaskWhereUniqueInput
    create: XOR<TaskCreateWithoutEngineerInput, TaskUncheckedCreateWithoutEngineerInput>
  }

  export type TaskCreateManyEngineerInputEnvelope = {
    data: TaskCreateManyEngineerInput | TaskCreateManyEngineerInput[]
    skipDuplicates?: boolean
  }

  export type RoleUpsertWithoutEngineersInput = {
    update: XOR<RoleUpdateWithoutEngineersInput, RoleUncheckedUpdateWithoutEngineersInput>
    create: XOR<RoleCreateWithoutEngineersInput, RoleUncheckedCreateWithoutEngineersInput>
    where?: RoleWhereInput
  }

  export type RoleUpdateToOneWithWhereWithoutEngineersInput = {
    where?: RoleWhereInput
    data: XOR<RoleUpdateWithoutEngineersInput, RoleUncheckedUpdateWithoutEngineersInput>
  }

  export type RoleUpdateWithoutEngineersInput = {
    role?: StringFieldUpdateOperationsInput | string
  }

  export type RoleUncheckedUpdateWithoutEngineersInput = {
    id_role?: IntFieldUpdateOperationsInput | number
    role?: StringFieldUpdateOperationsInput | string
  }

  export type ProjectUpsertWithWhereUniqueWithoutEngineerInput = {
    where: ProjectWhereUniqueInput
    update: XOR<ProjectUpdateWithoutEngineerInput, ProjectUncheckedUpdateWithoutEngineerInput>
    create: XOR<ProjectCreateWithoutEngineerInput, ProjectUncheckedCreateWithoutEngineerInput>
  }

  export type ProjectUpdateWithWhereUniqueWithoutEngineerInput = {
    where: ProjectWhereUniqueInput
    data: XOR<ProjectUpdateWithoutEngineerInput, ProjectUncheckedUpdateWithoutEngineerInput>
  }

  export type ProjectUpdateManyWithWhereWithoutEngineerInput = {
    where: ProjectScalarWhereInput
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyWithoutEngineerInput>
  }

  export type ProjectScalarWhereInput = {
    AND?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
    OR?: ProjectScalarWhereInput[]
    NOT?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
    id_project?: IntFilter<"Project"> | number
    SAP?: IntFilter<"Project"> | number
    project_name?: StringFilter<"Project"> | string
    project_type?: EnumProjectTypeFilter<"Project"> | $Enums.ProjectType
    level?: EnumProjectLevelFilter<"Project"> | $Enums.ProjectLevel
    req_date?: DateTimeNullableFilter<"Project"> | Date | string | null
    plan_start_date?: DateTimeNullableFilter<"Project"> | Date | string | null
    plan_end_date?: DateTimeNullableFilter<"Project"> | Date | string | null
    actual_start?: DateTimeNullableFilter<"Project"> | Date | string | null
    actual_end?: DateTimeNullableFilter<"Project"> | Date | string | null
    live_date?: DateTimeNullableFilter<"Project"> | Date | string | null
    project_progress?: IntFilter<"Project"> | number
    remark?: StringNullableFilter<"Project"> | string | null
    status?: EnumProjectStatusFilter<"Project"> | $Enums.ProjectStatus
  }

  export type TaskUpsertWithWhereUniqueWithoutEngineerInput = {
    where: TaskWhereUniqueInput
    update: XOR<TaskUpdateWithoutEngineerInput, TaskUncheckedUpdateWithoutEngineerInput>
    create: XOR<TaskCreateWithoutEngineerInput, TaskUncheckedCreateWithoutEngineerInput>
  }

  export type TaskUpdateWithWhereUniqueWithoutEngineerInput = {
    where: TaskWhereUniqueInput
    data: XOR<TaskUpdateWithoutEngineerInput, TaskUncheckedUpdateWithoutEngineerInput>
  }

  export type TaskUpdateManyWithWhereWithoutEngineerInput = {
    where: TaskScalarWhereInput
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyWithoutEngineerInput>
  }

  export type TaskScalarWhereInput = {
    AND?: TaskScalarWhereInput | TaskScalarWhereInput[]
    OR?: TaskScalarWhereInput[]
    NOT?: TaskScalarWhereInput | TaskScalarWhereInput[]
    id_task?: IntFilter<"Task"> | number
    id_project?: IntFilter<"Task"> | number
    SAP?: IntFilter<"Task"> | number
    task_group?: StringFilter<"Task"> | string
    task_detail?: StringFilter<"Task"> | string
    plan_start_date?: DateTimeNullableFilter<"Task"> | Date | string | null
    plan_end_date?: DateTimeNullableFilter<"Task"> | Date | string | null
    actual_start?: DateTimeNullableFilter<"Task"> | Date | string | null
    actual_end?: DateTimeNullableFilter<"Task"> | Date | string | null
    platform?: StringNullableFilter<"Task"> | string | null
    task_progress?: IntFilter<"Task"> | number
    status?: EnumProjectStatusFilter<"Task"> | $Enums.ProjectStatus
  }

  export type EngineerCreateWithoutProjectsInput = {
    SAP: number
    name: string
    role: RoleCreateNestedOneWithoutEngineersInput
    tasks?: TaskCreateNestedManyWithoutEngineerInput
  }

  export type EngineerUncheckedCreateWithoutProjectsInput = {
    SAP: number
    id_role: number
    name: string
    tasks?: TaskUncheckedCreateNestedManyWithoutEngineerInput
  }

  export type EngineerCreateOrConnectWithoutProjectsInput = {
    where: EngineerWhereUniqueInput
    create: XOR<EngineerCreateWithoutProjectsInput, EngineerUncheckedCreateWithoutProjectsInput>
  }

  export type TaskCreateWithoutProjectInput = {
    task_group: string
    task_detail: string
    plan_start_date?: Date | string | null
    plan_end_date?: Date | string | null
    actual_start?: Date | string | null
    actual_end?: Date | string | null
    platform?: string | null
    task_progress?: number
    status?: $Enums.ProjectStatus
    engineer: EngineerCreateNestedOneWithoutTasksInput
  }

  export type TaskUncheckedCreateWithoutProjectInput = {
    id_task?: number
    SAP: number
    task_group: string
    task_detail: string
    plan_start_date?: Date | string | null
    plan_end_date?: Date | string | null
    actual_start?: Date | string | null
    actual_end?: Date | string | null
    platform?: string | null
    task_progress?: number
    status?: $Enums.ProjectStatus
  }

  export type TaskCreateOrConnectWithoutProjectInput = {
    where: TaskWhereUniqueInput
    create: XOR<TaskCreateWithoutProjectInput, TaskUncheckedCreateWithoutProjectInput>
  }

  export type TaskCreateManyProjectInputEnvelope = {
    data: TaskCreateManyProjectInput | TaskCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type EngineerUpsertWithoutProjectsInput = {
    update: XOR<EngineerUpdateWithoutProjectsInput, EngineerUncheckedUpdateWithoutProjectsInput>
    create: XOR<EngineerCreateWithoutProjectsInput, EngineerUncheckedCreateWithoutProjectsInput>
    where?: EngineerWhereInput
  }

  export type EngineerUpdateToOneWithWhereWithoutProjectsInput = {
    where?: EngineerWhereInput
    data: XOR<EngineerUpdateWithoutProjectsInput, EngineerUncheckedUpdateWithoutProjectsInput>
  }

  export type EngineerUpdateWithoutProjectsInput = {
    SAP?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    role?: RoleUpdateOneRequiredWithoutEngineersNestedInput
    tasks?: TaskUpdateManyWithoutEngineerNestedInput
  }

  export type EngineerUncheckedUpdateWithoutProjectsInput = {
    SAP?: IntFieldUpdateOperationsInput | number
    id_role?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    tasks?: TaskUncheckedUpdateManyWithoutEngineerNestedInput
  }

  export type TaskUpsertWithWhereUniqueWithoutProjectInput = {
    where: TaskWhereUniqueInput
    update: XOR<TaskUpdateWithoutProjectInput, TaskUncheckedUpdateWithoutProjectInput>
    create: XOR<TaskCreateWithoutProjectInput, TaskUncheckedCreateWithoutProjectInput>
  }

  export type TaskUpdateWithWhereUniqueWithoutProjectInput = {
    where: TaskWhereUniqueInput
    data: XOR<TaskUpdateWithoutProjectInput, TaskUncheckedUpdateWithoutProjectInput>
  }

  export type TaskUpdateManyWithWhereWithoutProjectInput = {
    where: TaskScalarWhereInput
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyWithoutProjectInput>
  }

  export type ProjectCreateWithoutTasksInput = {
    project_name: string
    project_type: $Enums.ProjectType
    level: $Enums.ProjectLevel
    req_date?: Date | string | null
    plan_start_date?: Date | string | null
    plan_end_date?: Date | string | null
    actual_start?: Date | string | null
    actual_end?: Date | string | null
    live_date?: Date | string | null
    project_progress?: number
    remark?: string | null
    status?: $Enums.ProjectStatus
    engineer: EngineerCreateNestedOneWithoutProjectsInput
  }

  export type ProjectUncheckedCreateWithoutTasksInput = {
    id_project?: number
    SAP: number
    project_name: string
    project_type: $Enums.ProjectType
    level: $Enums.ProjectLevel
    req_date?: Date | string | null
    plan_start_date?: Date | string | null
    plan_end_date?: Date | string | null
    actual_start?: Date | string | null
    actual_end?: Date | string | null
    live_date?: Date | string | null
    project_progress?: number
    remark?: string | null
    status?: $Enums.ProjectStatus
  }

  export type ProjectCreateOrConnectWithoutTasksInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutTasksInput, ProjectUncheckedCreateWithoutTasksInput>
  }

  export type EngineerCreateWithoutTasksInput = {
    SAP: number
    name: string
    role: RoleCreateNestedOneWithoutEngineersInput
    projects?: ProjectCreateNestedManyWithoutEngineerInput
  }

  export type EngineerUncheckedCreateWithoutTasksInput = {
    SAP: number
    id_role: number
    name: string
    projects?: ProjectUncheckedCreateNestedManyWithoutEngineerInput
  }

  export type EngineerCreateOrConnectWithoutTasksInput = {
    where: EngineerWhereUniqueInput
    create: XOR<EngineerCreateWithoutTasksInput, EngineerUncheckedCreateWithoutTasksInput>
  }

  export type ProjectUpsertWithoutTasksInput = {
    update: XOR<ProjectUpdateWithoutTasksInput, ProjectUncheckedUpdateWithoutTasksInput>
    create: XOR<ProjectCreateWithoutTasksInput, ProjectUncheckedCreateWithoutTasksInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutTasksInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutTasksInput, ProjectUncheckedUpdateWithoutTasksInput>
  }

  export type ProjectUpdateWithoutTasksInput = {
    project_name?: StringFieldUpdateOperationsInput | string
    project_type?: EnumProjectTypeFieldUpdateOperationsInput | $Enums.ProjectType
    level?: EnumProjectLevelFieldUpdateOperationsInput | $Enums.ProjectLevel
    req_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    plan_start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    plan_end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actual_start?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actual_end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    live_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    project_progress?: IntFieldUpdateOperationsInput | number
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    engineer?: EngineerUpdateOneRequiredWithoutProjectsNestedInput
  }

  export type ProjectUncheckedUpdateWithoutTasksInput = {
    id_project?: IntFieldUpdateOperationsInput | number
    SAP?: IntFieldUpdateOperationsInput | number
    project_name?: StringFieldUpdateOperationsInput | string
    project_type?: EnumProjectTypeFieldUpdateOperationsInput | $Enums.ProjectType
    level?: EnumProjectLevelFieldUpdateOperationsInput | $Enums.ProjectLevel
    req_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    plan_start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    plan_end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actual_start?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actual_end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    live_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    project_progress?: IntFieldUpdateOperationsInput | number
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
  }

  export type EngineerUpsertWithoutTasksInput = {
    update: XOR<EngineerUpdateWithoutTasksInput, EngineerUncheckedUpdateWithoutTasksInput>
    create: XOR<EngineerCreateWithoutTasksInput, EngineerUncheckedCreateWithoutTasksInput>
    where?: EngineerWhereInput
  }

  export type EngineerUpdateToOneWithWhereWithoutTasksInput = {
    where?: EngineerWhereInput
    data: XOR<EngineerUpdateWithoutTasksInput, EngineerUncheckedUpdateWithoutTasksInput>
  }

  export type EngineerUpdateWithoutTasksInput = {
    SAP?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    role?: RoleUpdateOneRequiredWithoutEngineersNestedInput
    projects?: ProjectUpdateManyWithoutEngineerNestedInput
  }

  export type EngineerUncheckedUpdateWithoutTasksInput = {
    SAP?: IntFieldUpdateOperationsInput | number
    id_role?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    projects?: ProjectUncheckedUpdateManyWithoutEngineerNestedInput
  }

  export type EngineerCreateManyRoleInput = {
    SAP: number
    name: string
  }

  export type EngineerUpdateWithoutRoleInput = {
    SAP?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    projects?: ProjectUpdateManyWithoutEngineerNestedInput
    tasks?: TaskUpdateManyWithoutEngineerNestedInput
  }

  export type EngineerUncheckedUpdateWithoutRoleInput = {
    SAP?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    projects?: ProjectUncheckedUpdateManyWithoutEngineerNestedInput
    tasks?: TaskUncheckedUpdateManyWithoutEngineerNestedInput
  }

  export type EngineerUncheckedUpdateManyWithoutRoleInput = {
    SAP?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ProjectCreateManyEngineerInput = {
    id_project?: number
    project_name: string
    project_type: $Enums.ProjectType
    level: $Enums.ProjectLevel
    req_date?: Date | string | null
    plan_start_date?: Date | string | null
    plan_end_date?: Date | string | null
    actual_start?: Date | string | null
    actual_end?: Date | string | null
    live_date?: Date | string | null
    project_progress?: number
    remark?: string | null
    status?: $Enums.ProjectStatus
  }

  export type TaskCreateManyEngineerInput = {
    id_task?: number
    id_project: number
    task_group: string
    task_detail: string
    plan_start_date?: Date | string | null
    plan_end_date?: Date | string | null
    actual_start?: Date | string | null
    actual_end?: Date | string | null
    platform?: string | null
    task_progress?: number
    status?: $Enums.ProjectStatus
  }

  export type ProjectUpdateWithoutEngineerInput = {
    project_name?: StringFieldUpdateOperationsInput | string
    project_type?: EnumProjectTypeFieldUpdateOperationsInput | $Enums.ProjectType
    level?: EnumProjectLevelFieldUpdateOperationsInput | $Enums.ProjectLevel
    req_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    plan_start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    plan_end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actual_start?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actual_end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    live_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    project_progress?: IntFieldUpdateOperationsInput | number
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    tasks?: TaskUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutEngineerInput = {
    id_project?: IntFieldUpdateOperationsInput | number
    project_name?: StringFieldUpdateOperationsInput | string
    project_type?: EnumProjectTypeFieldUpdateOperationsInput | $Enums.ProjectType
    level?: EnumProjectLevelFieldUpdateOperationsInput | $Enums.ProjectLevel
    req_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    plan_start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    plan_end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actual_start?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actual_end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    live_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    project_progress?: IntFieldUpdateOperationsInput | number
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    tasks?: TaskUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateManyWithoutEngineerInput = {
    id_project?: IntFieldUpdateOperationsInput | number
    project_name?: StringFieldUpdateOperationsInput | string
    project_type?: EnumProjectTypeFieldUpdateOperationsInput | $Enums.ProjectType
    level?: EnumProjectLevelFieldUpdateOperationsInput | $Enums.ProjectLevel
    req_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    plan_start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    plan_end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actual_start?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actual_end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    live_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    project_progress?: IntFieldUpdateOperationsInput | number
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
  }

  export type TaskUpdateWithoutEngineerInput = {
    task_group?: StringFieldUpdateOperationsInput | string
    task_detail?: StringFieldUpdateOperationsInput | string
    plan_start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    plan_end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actual_start?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actual_end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    platform?: NullableStringFieldUpdateOperationsInput | string | null
    task_progress?: IntFieldUpdateOperationsInput | number
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    project?: ProjectUpdateOneRequiredWithoutTasksNestedInput
  }

  export type TaskUncheckedUpdateWithoutEngineerInput = {
    id_task?: IntFieldUpdateOperationsInput | number
    id_project?: IntFieldUpdateOperationsInput | number
    task_group?: StringFieldUpdateOperationsInput | string
    task_detail?: StringFieldUpdateOperationsInput | string
    plan_start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    plan_end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actual_start?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actual_end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    platform?: NullableStringFieldUpdateOperationsInput | string | null
    task_progress?: IntFieldUpdateOperationsInput | number
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
  }

  export type TaskUncheckedUpdateManyWithoutEngineerInput = {
    id_task?: IntFieldUpdateOperationsInput | number
    id_project?: IntFieldUpdateOperationsInput | number
    task_group?: StringFieldUpdateOperationsInput | string
    task_detail?: StringFieldUpdateOperationsInput | string
    plan_start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    plan_end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actual_start?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actual_end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    platform?: NullableStringFieldUpdateOperationsInput | string | null
    task_progress?: IntFieldUpdateOperationsInput | number
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
  }

  export type TaskCreateManyProjectInput = {
    id_task?: number
    SAP: number
    task_group: string
    task_detail: string
    plan_start_date?: Date | string | null
    plan_end_date?: Date | string | null
    actual_start?: Date | string | null
    actual_end?: Date | string | null
    platform?: string | null
    task_progress?: number
    status?: $Enums.ProjectStatus
  }

  export type TaskUpdateWithoutProjectInput = {
    task_group?: StringFieldUpdateOperationsInput | string
    task_detail?: StringFieldUpdateOperationsInput | string
    plan_start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    plan_end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actual_start?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actual_end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    platform?: NullableStringFieldUpdateOperationsInput | string | null
    task_progress?: IntFieldUpdateOperationsInput | number
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
    engineer?: EngineerUpdateOneRequiredWithoutTasksNestedInput
  }

  export type TaskUncheckedUpdateWithoutProjectInput = {
    id_task?: IntFieldUpdateOperationsInput | number
    SAP?: IntFieldUpdateOperationsInput | number
    task_group?: StringFieldUpdateOperationsInput | string
    task_detail?: StringFieldUpdateOperationsInput | string
    plan_start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    plan_end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actual_start?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actual_end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    platform?: NullableStringFieldUpdateOperationsInput | string | null
    task_progress?: IntFieldUpdateOperationsInput | number
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
  }

  export type TaskUncheckedUpdateManyWithoutProjectInput = {
    id_task?: IntFieldUpdateOperationsInput | number
    SAP?: IntFieldUpdateOperationsInput | number
    task_group?: StringFieldUpdateOperationsInput | string
    task_detail?: StringFieldUpdateOperationsInput | string
    plan_start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    plan_end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actual_start?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actual_end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    platform?: NullableStringFieldUpdateOperationsInput | string | null
    task_progress?: IntFieldUpdateOperationsInput | number
    status?: EnumProjectStatusFieldUpdateOperationsInput | $Enums.ProjectStatus
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