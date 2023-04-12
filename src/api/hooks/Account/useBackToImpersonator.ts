
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { BackToImpersonatorRequest, BackToImpersonatorResponse } from "../../models/Account/BackToImpersonator";

        /**
* @link /api/services/app/Account/BackToImpersonator
*/
        export function useBackToImpersonator <TData = BackToImpersonatorResponse, TError = unknown, TVariables = BackToImpersonatorRequest>(  options?: {
          mutation?: UseMutationOptions<TData, TError, TVariables>
        }) {
          const { mutation: mutationOptions } = options ?? {};

          return useMutation<TData, TError, TVariables>({
            mutationFn: (data) => {
              return client<TData, TVariables>({
                method: "post",
                url: `/api/services/app/Account/BackToImpersonator`,
                data,
                
              });
            },
            ...mutationOptions
          });
        };
    