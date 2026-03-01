type ValueOf<T> = T[keyof T];

type NonEmptyArray<T> = [T, ...T[]];

type MustInclude<T, U extends T[]> = [T] extends [ValueOf<U>] ? U : never;

function stringUnionToArray<T>() {
    return <U extends NonEmptyArray<T>>(...elements: MustInclude<T, U>) => elements;
}
function arrayToObject<T extends string | number | symbol>(arr: T[]): { [K in T]: K } {
    return arr.reduce(
        (acc, curr) => {
            acc[curr] = curr;
            return acc;
        },
        {} as { [K in T]: K }
    );
}

/** Data for enums */

// const users_statusArr = stringUnionToArray<$Enums.users_status>()("active", "banned", "suspended");

// export const users_statusData = {
//     array: users_statusArr,
//     object: arrayToObject(users_statusArr),
// };
