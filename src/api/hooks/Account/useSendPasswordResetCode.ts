
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { SendPasswordResetCodeRequest, SendPasswordResetCodeResponse } from "../../models/Account/SendPasswordResetCode";

        /**
* @link /api/services/app/Account/SendPasswordResetCode
*/
        export function useSendPasswordResetCode <TData = SendPasswordResetCodeResponse, TError = unknown, TVariables = SendPasswordResetCodeRequest>(  options?: {
          mutation?: UseMutationOptions<TData, TError, TVariables>
        }) {
          const { mutation: mutationOptions } = options ?? {};

          return useMutation<TData, TError, TVariables>({
            mutationFn: (data) => {
              return client<TData, TVariables>({
                method: "post",
                url: `/api/services/app/Account/SendPasswordResetCode`,
                data,
                
              });
            },
            ...mutationOptions
          });
        };
    