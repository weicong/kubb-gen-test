
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { ClearAllCachesRequest, ClearAllCachesResponse } from "../../models/Caching/ClearAllCaches";

        /**
* @link /api/services/app/Caching/ClearAllCaches
*/
        export function useClearAllCaches <TData = ClearAllCachesResponse, TError = unknown, TVariables = ClearAllCachesRequest>(  options?: {
          mutation?: UseMutationOptions<TData, TError, TVariables>
        }) {
          const { mutation: mutationOptions } = options ?? {};

          return useMutation<TData, TError, TVariables>({
            mutationFn: (data) => {
              return client<TData, TVariables>({
                method: "post",
                url: `/api/services/app/Caching/ClearAllCaches`,
                data,
                
              });
            },
            ...mutationOptions
          });
        };
    