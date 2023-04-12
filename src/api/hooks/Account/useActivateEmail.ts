
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { ActivateEmailRequest, ActivateEmailResponse } from "../../models/Account/ActivateEmail";

        /**
* @link /api/services/app/Account/ActivateEmail
*/
        export function useActivateEmail <TData = ActivateEmailResponse, TError = unknown, TVariables = ActivateEmailRequest>(  options?: {
          mutation?: UseMutationOptions<TData, TError, TVariables>
        }) {
          const { mutation: mutationOptions } = options ?? {};

          return useMutation<TData, TError, TVariables>({
            mutationFn: (data) => {
              return client<TData, TVariables>({
                method: "post",
                url: `/api/services/app/Account/ActivateEmail`,
                data,
                
              });
            },
            ...mutationOptions
          });
        };
    