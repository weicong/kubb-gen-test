
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { UpdateTenantFeaturesRequest, UpdateTenantFeaturesResponse } from "../../models/Tenant/UpdateTenantFeatures";

        /**
* @link /api/services/app/Tenant/UpdateTenantFeatures
*/
        export function useUpdateTenantFeatures <TData = UpdateTenantFeaturesResponse, TError = unknown, TVariables = UpdateTenantFeaturesRequest>(  options?: {
          mutation?: UseMutationOptions<TData, TError, TVariables>
        }) {
          const { mutation: mutationOptions } = options ?? {};

          return useMutation<TData, TError, TVariables>({
            mutationFn: (data) => {
              return client<TData, TVariables>({
                method: "put",
                url: `/api/services/app/Tenant/UpdateTenantFeatures`,
                data,
                
              });
            },
            ...mutationOptions
          });
        };
    