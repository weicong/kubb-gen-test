
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { IsTenantAvailableRequest, IsTenantAvailableResponse } from "../../models/Account/IsTenantAvailable";

        /**
* @link /api/services/app/Account/IsTenantAvailable
*/
        export function useIsTenantAvailable <TData = IsTenantAvailableResponse, TError = unknown, TVariables = IsTenantAvailableRequest>(  options?: {
          mutation?: UseMutationOptions<TData, TError, TVariables>
        }) {
          const { mutation: mutationOptions } = options ?? {};

          return useMutation<TData, TError, TVariables>({
            mutationFn: (data) => {
              return client<TData, TVariables>({
                method: "post",
                url: `/api/services/app/Account/IsTenantAvailable`,
                data,
                
              });
            },
            ...mutationOptions
          });
        };
    