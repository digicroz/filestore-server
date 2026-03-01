import { inferRouterInputs, inferRouterOutputs } from "@trpc/server";
import { createTRPCProxyClient, httpBatchLink } from "@trpc/client";
import superjson from "superjson";

import { serviceLinkZodSchemas } from "@dcFileStoreTsBase/trpcApi/zodSchemas.js";
import { encodeToBase64 } from "@digicroz/js-kit";
import { backendEndpoint } from "@dcFileStoreServerB2f/constants/development.js";
import { s2sEnvironment } from "@global/configs/environment.js";
import { serviceLinkTrpcRouterTypes } from "@dcFileStoreJsBase/serviceLink/trpcApi/trpcRouter.js";
export const dcFileStoreZodSchemas = serviceLinkZodSchemas;

export type TDcFileStoreInput = inferRouterInputs<serviceLinkTrpcRouterTypes>;
export type TDcFileStoreOutput = inferRouterOutputs<serviceLinkTrpcRouterTypes>;



let backendHost = "";

if (s2sEnvironment === "development_local") {
    backendHost = backendEndpoint.development.local;
} else if (s2sEnvironment === "development_remote") {
    backendHost = backendEndpoint.development.remote;
} else if (s2sEnvironment === "production_remote") {
    backendHost = backendEndpoint.production.remote;
}

const headerFn = () => {
    //  console.log("headerFn: " + accessToken.current);
    return {
        // Authorization: `Bearer ${base64Token}`,
    };
};

const trpcBaseUrl = backendHost + `/trpc/dcFileStore/serviceLink`;

export const dcFileStoreS2S = () => {
    return createTRPCProxyClient<serviceLinkTrpcRouterTypes>({
        links: [
            httpBatchLink({
                url: `${trpcBaseUrl}`,
                // headers: headerFn,
            }),
        ],

        transformer: superjson,
    });
};
