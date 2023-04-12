
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { ClearCustomCssRequest, ClearCustomCssResponse } from "../../models/TenantSettings/ClearCustomCss";

        /**
* @link /api/services/app/TenantSettings/ClearCustomCss
*/
        export function useClearCustomCss <TData = ClearCustomCssResponse, TError = unknown, TVariables = ClearCustomCssRequest>(  options?: {
          mutation?: UseMutationOptions<TData, TError, TVariables>
        }) {
          const { mutation: mutationOptions } = options ?? {};

          return useMutation<TData, TError, TVariables>({
            mutationFn: (data) => {
              return client<TData, TVariables>({
                method: "post",
                url: `/api/services/app/TenantSettings/ClearCustomCss`,
                data,
                
              });
            },
            ...mutationOptions
          });
        };
    