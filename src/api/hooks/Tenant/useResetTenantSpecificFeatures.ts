
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { ResetTenantSpecificFeaturesRequest, ResetTenantSpecificFeaturesResponse } from "../../models/Tenant/ResetTenantSpecificFeatures";

        /**
* @link /api/services/app/Tenant/ResetTenantSpecificFeatures
*/
        export function useResetTenantSpecificFeatures <TData = ResetTenantSpecificFeaturesResponse, TError = unknown, TVariables = ResetTenantSpecificFeaturesRequest>(  options?: {
          mutation?: UseMutationOptions<TData, TError, TVariables>
        }) {
          const { mutation: mutationOptions } = options ?? {};

          return useMutation<TData, TError, TVariables>({
            mutationFn: (data) => {
              return client<TData, TVariables>({
                method: "post",
                url: `/api/services/app/Tenant/ResetTenantSpecificFeatures`,
                data,
                
              });
            },
            ...mutationOptions
          });
        };
    