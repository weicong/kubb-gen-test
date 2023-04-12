
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { UnlockTenantAdminRequest, UnlockTenantAdminResponse } from "../../models/Tenant/UnlockTenantAdmin";

        /**
* @link /api/services/app/Tenant/UnlockTenantAdmin
*/
        export function useUnlockTenantAdmin <TData = UnlockTenantAdminResponse, TError = unknown, TVariables = UnlockTenantAdminRequest>(  options?: {
          mutation?: UseMutationOptions<TData, TError, TVariables>
        }) {
          const { mutation: mutationOptions } = options ?? {};

          return useMutation<TData, TError, TVariables>({
            mutationFn: (data) => {
              return client<TData, TVariables>({
                method: "post",
                url: `/api/services/app/Tenant/UnlockTenantAdmin`,
                data,
                
              });
            },
            ...mutationOptions
          });
        };
    