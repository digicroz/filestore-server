import dotenv from "dotenv";
dotenv.config();
export let isDevelopmentEnvironment: boolean = false;

export let isDeveloperAdarsh: boolean = false;

export let currentEnvironment: "development_local" | "development_remote" | "production_remote" =
    "production_remote";

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

export let s2sEnvironment: "development_local" | "development_remote" | "production_remote" =
    "production_remote";

if (process.env.S2S_ENVIRONMENT === "dev_local") {
    s2sEnvironment = "development_local";
} else if (process.env.S2S_ENVIRONMENT === "dev_remote") {
    s2sEnvironment = "development_remote";
}
