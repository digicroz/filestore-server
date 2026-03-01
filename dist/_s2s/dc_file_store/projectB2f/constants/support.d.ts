declare const supportMethodIconsNamesArr: readonly ["whatsapp", "email", "instagram", "phone", "telegram", "discord"];
export type TSupportMethodIconsNames = typeof supportMethodIconsNamesArr[number];
type TSupportMethodIconsNamesObj = {
    [K in TSupportMethodIconsNames]: K;
};
export declare const supportMethodIconsNames: {
    arr: readonly ["whatsapp", "email", "instagram", "phone", "telegram", "discord"];
    obj: TSupportMethodIconsNamesObj;
};
export {};
//# sourceMappingURL=support.d.ts.map