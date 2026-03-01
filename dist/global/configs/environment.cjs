'use strict';

var dotenv = require('dotenv');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var dotenv__default = /*#__PURE__*/_interopDefault(dotenv);

// src/global/configs/environment.ts
dotenv__default.default.config();
exports.isDevelopmentEnvironment = false;
exports.isDeveloperAdarsh = false;
exports.currentEnvironment = "production_remote";
if (process.env.DEVELOPMENT_ENVIRONMENT === "local") {
  exports.isDevelopmentEnvironment = true;
  exports.currentEnvironment = "development_local";
} else if (process.env.DEVELOPMENT_ENVIRONMENT === "remote") {
  exports.isDevelopmentEnvironment = true;
  exports.currentEnvironment = "development_remote";
}
if (process.env.DEVELOPER_NAME === "adarsh") {
  exports.isDeveloperAdarsh = true;
}
exports.s2sEnvironment = "production_remote";
if (process.env.S2S_ENVIRONMENT === "dev_local") {
  exports.s2sEnvironment = "development_local";
} else if (process.env.S2S_ENVIRONMENT === "dev_remote") {
  exports.s2sEnvironment = "development_remote";
}
//# sourceMappingURL=environment.cjs.map
//# sourceMappingURL=environment.cjs.map