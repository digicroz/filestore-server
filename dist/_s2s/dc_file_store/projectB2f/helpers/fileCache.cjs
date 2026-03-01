'use strict';

// src/_s2s/dc_file_store/projectB2f/helpers/fileCache.ts
var CACHE_CONTROL_PRESETS = {
  infinite: "public, max-age=31536000, immutable",
  "one-day": "public, max-age=86400",
  "one-hour": "public, max-age=3600",
  "no-cache": "no-store, no-cache"
};
var resolveCacheControl = (cacheControl) => {
  if (!cacheControl) return void 0;
  if ("preset" in cacheControl) {
    return CACHE_CONTROL_PRESETS[cacheControl.preset];
  }
  const directives = [];
  if (cacheControl.public) directives.push("public");
  if (cacheControl.private) directives.push("private");
  if (cacheControl.noCache) directives.push("no-cache");
  if (cacheControl.noStore) directives.push("no-store");
  if (cacheControl.maxAge !== void 0) directives.push(`max-age=${cacheControl.maxAge}`);
  if (cacheControl.sMaxAge !== void 0) directives.push(`s-maxage=${cacheControl.sMaxAge}`);
  if (cacheControl.mustRevalidate) directives.push("must-revalidate");
  if (cacheControl.proxyRevalidate) directives.push("proxy-revalidate");
  if (cacheControl.immutable) directives.push("immutable");
  if (cacheControl.staleWhileRevalidate !== void 0)
    directives.push(`stale-while-revalidate=${cacheControl.staleWhileRevalidate}`);
  return directives.length > 0 ? directives.join(", ") : void 0;
};

exports.resolveCacheControl = resolveCacheControl;
//# sourceMappingURL=fileCache.cjs.map
//# sourceMappingURL=fileCache.cjs.map