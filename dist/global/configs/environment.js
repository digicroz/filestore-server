import dotenv from 'dotenv';

// src/global/configs/environment.ts
dotenv.config();
var isDevelopmentEnvironment = false;
var isDeveloperAdarsh = false;
var currentEnvironment = "production_remote";
if (process.env.DEVELOPMENT_ENVIRONMENT === "local") {
  isDevelopmentEnvironment = true;
  currentEnvironment = "development_local";
} else if (process.env.DEVELOPMENT_ENVIRONMENT === "remote") {
  isDevelopmentEnvironment = true;
  currentEnvironment = "development_remote";
}
if (process.env.DEVELOPER_NAME === "adarsh") {
  isDeveloperAdarsh = true;
}
var s2sEnvironment = "production_remote";
if (process.env.S2S_ENVIRONMENT === "dev_local") {
  s2sEnvironment = "development_local";
} else if (process.env.S2S_ENVIRONMENT === "dev_remote") {
  s2sEnvironment = "development_remote";
}

export { currentEnvironment, isDeveloperAdarsh, isDevelopmentEnvironment, s2sEnvironment };
//# sourceMappingURL=environment.js.map
//# sourceMappingURL=environment.js.map