
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { SendEmailActivationLinkRequest, SendEmailActivationLinkResponse } from "../../models/Account/SendEmailActivationLink";

        /**
* @link /api/services/app/Account/SendEmailActivationLink
*/
        export function useSendEmailActivationLink <TData = SendEmailActivationLinkResponse, TError = unknown, TVariables = SendEmailActivationLinkRequest>(  options?: {
          mutation?: UseMutationOptions<TData, TError, TVariables>
        }) {
          const { mutation: mutationOptions } = options ?? {};

          return useMutation<TData, TError, TVariables>({
            mutationFn: (data) => {
              return client<TData, TVariables>({
                method: "post",
                url: `/api/services/app/Account/SendEmailActivationLink`,
                data,
                
              });
            },
            ...mutationOptions
          });
        };
    