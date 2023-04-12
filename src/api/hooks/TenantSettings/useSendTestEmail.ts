
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { SendTestEmailRequest, SendTestEmailResponse } from "../../models/TenantSettings/SendTestEmail";

        /**
* @link /api/services/app/TenantSettings/SendTestEmail
*/
        export function useSendTestEmail <TData = SendTestEmailResponse, TError = unknown, TVariables = SendTestEmailRequest>(  options?: {
          mutation?: UseMutationOptions<TData, TError, TVariables>
        }) {
          const { mutation: mutationOptions } = options ?? {};

          return useMutation<TData, TError, TVariables>({
            mutationFn: (data) => {
              return client<TData, TVariables>({
                method: "post",
                url: `/api/services/app/TenantSettings/SendTestEmail`,
                data,
                
              });
            },
            ...mutationOptions
          });
        };
    