
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { ResolveTenantIdRequest, ResolveTenantIdResponse } from "../../models/Account/ResolveTenantId";

        /**
* @link /api/services/app/Account/ResolveTenantId
*/
        export function useResolveTenantId <TData = ResolveTenantIdResponse, TError = unknown, TVariables = ResolveTenantIdRequest>(  options?: {
          mutation?: UseMutationOptions<TData, TError, TVariables>
        }) {
          const { mutation: mutationOptions } = options ?? {};

          return useMutation<TData, TError, TVariables>({
            mutationFn: (data) => {
              return client<TData, TVariables>({
                method: "post",
                url: `/api/services/app/Account/ResolveTenantId`,
                data,
                
              });
            },
            ...mutationOptions
          });
        };
    