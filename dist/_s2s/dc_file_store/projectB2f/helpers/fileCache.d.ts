type TCacheControlPreset = {
    preset: "infinite" | "one-day" | "one-hour" | "no-cache";
};
type TCacheControlCustom = {
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
export type TCacheControl = TCacheControlPreset | TCacheControlCustom;
export declare const resolveCacheControl: (cacheControl?: TCacheControl) => string | undefined;
export {};
//# sourceMappingURL=fileCache.d.ts.map