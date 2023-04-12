
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { CreateTenantRequest, CreateTenantResponse } from "../../models/Tenant/CreateTenant";

        /**
* @link /api/services/app/Tenant/CreateTenant
*/
        export function useCreateTenant <TData = CreateTenantResponse, TError = unknown, TVariables = CreateTenantRequest>(  options?: {
          mutation?: UseMutationOptions<TData, TError, TVariables>
        }) {
          const { mutation: mutationOptions } = options ?? {};

          return useMutation<TData, TError, TVariables>({
            mutationFn: (data) => {
              return client<TData, TVariables>({
                method: "post",
                url: `/api/services/app/Tenant/CreateTenant`,
                data,
                
              });
            },
            ...mutationOptions
          });
        };
    