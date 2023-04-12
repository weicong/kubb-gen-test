
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { ResendRequest, ResendResponse, ResendQueryParams } from "../../models/WebhookSendAttempt/Resend";

        /**
* @link /api/services/app/WebhookSendAttempt/Resend
*/
        export function useResend <TData = ResendResponse, TError = unknown, TVariables = ResendRequest>( params?: ResendQueryParams, options?: {
          mutation?: UseMutationOptions<TData, TError, TVariables>
        }) {
          const { mutation: mutationOptions } = options ?? {};

          return useMutation<TData, TError, TVariables>({
            mutationFn: (data) => {
              return client<TData, TVariables>({
                method: "post",
                url: `/api/services/app/WebhookSendAttempt/Resend`,
                data,
                params,
              });
            },
            ...mutationOptions
          });
        };
    