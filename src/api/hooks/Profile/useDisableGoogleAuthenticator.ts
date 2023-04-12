
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { DisableGoogleAuthenticatorRequest, DisableGoogleAuthenticatorResponse } from "../../models/Profile/DisableGoogleAuthenticator";

        /**
* @link /api/services/app/Profile/DisableGoogleAuthenticator
*/
        export function useDisableGoogleAuthenticator <TData = DisableGoogleAuthenticatorResponse, TError = unknown, TVariables = DisableGoogleAuthenticatorRequest>(  options?: {
          mutation?: UseMutationOptions<TData, TError, TVariables>
        }) {
          const { mutation: mutationOptions } = options ?? {};

          return useMutation<TData, TError, TVariables>({
            mutationFn: (data) => {
              return client<TData, TVariables>({
                method: "post",
                url: `/api/services/app/Profile/DisableGoogleAuthenticator`,
                data,
                
              });
            },
            ...mutationOptions
          });
        };
    