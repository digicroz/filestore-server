// src/_s2s/dc_file_store/serverB2f/constants/development.ts
var localHostname = "localhost";
var localPort = 3223;
var localTunnelSubdomain = "shared-two-dev";
var backendEndpoint = {
  development: {
    local: `http://${localHostname}:${localPort}`,
    remote: `https://s1-api-dev.digicroz.com`
  },
  production: {
    remote: "https://s1-api.digicroz.com"
  }
};

export { backendEndpoint, localPort, localTunnelSubdomain };
//# sourceMappingURL=development.js.map
//# sourceMappingURL=development.js.map