
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { ClearCacheRequest, ClearCacheResponse } from "../../models/Caching/ClearCache";

        /**
* @link /api/services/app/Caching/ClearCache
*/
        export function useClearCache <TData = ClearCacheResponse, TError = unknown, TVariables = ClearCacheRequest>(  options?: {
          mutation?: UseMutationOptions<TData, TError, TVariables>
        }) {
          const { mutation: mutationOptions } = options ?? {};

          return useMutation<TData, TError, TVariables>({
            mutationFn: (data) => {
              return client<TData, TVariables>({
                method: "post",
                url: `/api/services/app/Caching/ClearCache`,
                data,
                
              });
            },
            ...mutationOptions
          });
        };
    