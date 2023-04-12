
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { DelegatedImpersonateRequest, DelegatedImpersonateResponse } from "../../models/Account/DelegatedImpersonate";

        /**
* @link /api/services/app/Account/DelegatedImpersonate
*/
        export function useDelegatedImpersonate <TData = DelegatedImpersonateResponse, TError = unknown, TVariables = DelegatedImpersonateRequest>(  options?: {
          mutation?: UseMutationOptions<TData, TError, TVariables>
        }) {
          const { mutation: mutationOptions } = options ?? {};

          return useMutation<TData, TError, TVariables>({
            mutationFn: (data) => {
              return client<TData, TVariables>({
                method: "post",
                url: `/api/services/app/Account/DelegatedImpersonate`,
                data,
                
              });
            },
            ...mutationOptions
          });
        };
    