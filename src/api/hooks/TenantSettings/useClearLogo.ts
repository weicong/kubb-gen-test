
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { ClearLogoRequest, ClearLogoResponse } from "../../models/TenantSettings/ClearLogo";

        /**
* @link /api/services/app/TenantSettings/ClearLogo
*/
        export function useClearLogo <TData = ClearLogoResponse, TError = unknown, TVariables = ClearLogoRequest>(  options?: {
          mutation?: UseMutationOptions<TData, TError, TVariables>
        }) {
          const { mutation: mutationOptions } = options ?? {};

          return useMutation<TData, TError, TVariables>({
            mutationFn: (data) => {
              return client<TData, TVariables>({
                method: "post",
                url: `/api/services/app/TenantSettings/ClearLogo`,
                data,
                
              });
            },
            ...mutationOptions
          });
        };
    