
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { RegisterTenantRequest, RegisterTenantResponse } from "../../models/TenantRegistration/RegisterTenant";

        /**
* @link /api/services/app/TenantRegistration/RegisterTenant
*/
        export function useRegisterTenant <TData = RegisterTenantResponse, TError = unknown, TVariables = RegisterTenantRequest>(  options?: {
          mutation?: UseMutationOptions<TData, TError, TVariables>
        }) {
          const { mutation: mutationOptions } = options ?? {};

          return useMutation<TData, TError, TVariables>({
            mutationFn: (data) => {
              return client<TData, TVariables>({
                method: "post",
                url: `/api/services/app/TenantRegistration/RegisterTenant`,
                data,
                
              });
            },
            ...mutationOptions
          });
        };
    