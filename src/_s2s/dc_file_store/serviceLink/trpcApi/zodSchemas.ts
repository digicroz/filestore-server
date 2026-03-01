import { bucketsZodSchema } from "./modules/buckets/bucketsZod.js";
import { fsAccessZodSchema } from "./modules/fsAccess/fsAccessZod.js";
import { usersZodSchema } from "./modules/users/usersZod.js";

export const serviceLinkZodSchemas = {
    buckets: bucketsZodSchema,
    users: usersZodSchema,
    fsAccess: fsAccessZodSchema,
};
