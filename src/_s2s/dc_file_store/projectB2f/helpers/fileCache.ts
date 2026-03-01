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

const CACHE_CONTROL_PRESETS: Record<TCacheControlPreset["preset"], string> = {
    infinite: "public, max-age=31536000, immutable",
    "one-day": "public, max-age=86400",
    "one-hour": "public, max-age=3600",
    "no-cache": "no-store, no-cache",
};

export const resolveCacheControl = (cacheControl?: TCacheControl): string | undefined => {
    if (!cacheControl) return undefined;

    if ("preset" in cacheControl) {
        return CACHE_CONTROL_PRESETS[cacheControl.preset];
    }

    const directives: string[] = [];
    if (cacheControl.public) directives.push("public");
    if (cacheControl.private) directives.push("private");
    if (cacheControl.noCache) directives.push("no-cache");
    if (cacheControl.noStore) directives.push("no-store");
    if (cacheControl.maxAge !== undefined) directives.push(`max-age=${cacheControl.maxAge}`);
    if (cacheControl.sMaxAge !== undefined) directives.push(`s-maxage=${cacheControl.sMaxAge}`);
    if (cacheControl.mustRevalidate) directives.push("must-revalidate");
    if (cacheControl.proxyRevalidate) directives.push("proxy-revalidate");
    if (cacheControl.immutable) directives.push("immutable");
    if (cacheControl.staleWhileRevalidate !== undefined)
        directives.push(`stale-while-revalidate=${cacheControl.staleWhileRevalidate}`);

    return directives.length > 0 ? directives.join(", ") : undefined;
};
