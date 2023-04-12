
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { DeleteTenantRequest, DeleteTenantResponse, DeleteTenantQueryParams } from "../../models/Tenant/DeleteTenant";

        /**
* @link /api/services/app/Tenant/DeleteTenant
*/
        export function useDeleteTenant <TData = DeleteTenantResponse, TError = unknown, TVariables = DeleteTenantRequest>( params?: DeleteTenantQueryParams, options?: {
          mutation?: UseMutationOptions<TData, TError, TVariables>
        }) {
          const { mutation: mutationOptions } = options ?? {};

          return useMutation<TData, TError, TVariables>({
            mutationFn: (data) => {
              return client<TData, TVariables>({
                method: "delete",
                url: `/api/services/app/Tenant/DeleteTenant`,
                data,
                params,
              });
            },
            ...mutationOptions
          });
        };
    