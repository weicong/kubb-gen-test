
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { UpdateTenantRequest, UpdateTenantResponse } from "../../models/Tenant/UpdateTenant";

        /**
* @link /api/services/app/Tenant/UpdateTenant
*/
        export function useUpdateTenant <TData = UpdateTenantResponse, TError = unknown, TVariables = UpdateTenantRequest>(  options?: {
          mutation?: UseMutationOptions<TData, TError, TVariables>
        }) {
          const { mutation: mutationOptions } = options ?? {};

          return useMutation<TData, TError, TVariables>({
            mutationFn: (data) => {
              return client<TData, TVariables>({
                method: "put",
                url: `/api/services/app/Tenant/UpdateTenant`,
                data,
                
              });
            },
            ...mutationOptions
          });
        };
    