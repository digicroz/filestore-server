import { inferRouterInputs, inferRouterOutputs } from "@trpc/server";
import { createTRPCProxyClient, httpBatchLink } from "@trpc/client";
import superjson from "superjson";

import { serviceLinkTrpcRouterTypes } from "@dcFileStoreJsBase/serviceLink/trpcApi/trpcRouter.js";
import { serviceLinkZodSchemas } from "@dcFileStoreTsBase/trpcApi/zodSchemas.js";
import { backendEndpoint } from "@dcFileStoreServerB2f/constants/development.js";
export const dcFileStoreZodSchemas = serviceLinkZodSchemas;

export type TDcFileStoreInput = inferRouterInputs<serviceLinkTrpcRouterTypes>;
export type TDcFileStoreOutput = inferRouterOutputs<serviceLinkTrpcRouterTypes>;

type TDcFileStoreS2SInput = {
  s2sEnvironment?:
    | "development_local"
    | "development_remote"
    | "production_remote";
};

export const dcFileStoreS2S = ({
  s2sEnvironment = "production_remote",
}: TDcFileStoreS2SInput) => {
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
