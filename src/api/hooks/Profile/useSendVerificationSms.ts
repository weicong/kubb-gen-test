
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { SendVerificationSmsRequest, SendVerificationSmsResponse } from "../../models/Profile/SendVerificationSms";

        /**
* @link /api/services/app/Profile/SendVerificationSms
*/
        export function useSendVerificationSms <TData = SendVerificationSmsResponse, TError = unknown, TVariables = SendVerificationSmsRequest>(  options?: {
          mutation?: UseMutationOptions<TData, TError, TVariables>
        }) {
          const { mutation: mutationOptions } = options ?? {};

          return useMutation<TData, TError, TVariables>({
            mutationFn: (data) => {
              return client<TData, TVariables>({
                method: "post",
                url: `/api/services/app/Profile/SendVerificationSms`,
                data,
                
              });
            },
            ...mutationOptions
          });
        };
    