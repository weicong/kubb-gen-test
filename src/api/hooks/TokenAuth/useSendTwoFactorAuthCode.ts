
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { SendTwoFactorAuthCodeRequest, SendTwoFactorAuthCodeResponse } from "../../models/TokenAuth/SendTwoFactorAuthCode";

        /**
* @link /api/TokenAuth/SendTwoFactorAuthCode
*/
        export function useSendTwoFactorAuthCode <TData = SendTwoFactorAuthCodeResponse, TError = unknown, TVariables = SendTwoFactorAuthCodeRequest>(  options?: {
          mutation?: UseMutationOptions<TData, TError, TVariables>
        }) {
          const { mutation: mutationOptions } = options ?? {};

          return useMutation<TData, TError, TVariables>({
            mutationFn: (data) => {
              return client<TData, TVariables>({
                method: "post",
                url: `/api/TokenAuth/SendTwoFactorAuthCode`,
                data,
                
              });
            },
            ...mutationOptions
          });
        };
    