
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { UpdateGoogleAuthenticatorKeyRequest, UpdateGoogleAuthenticatorKeyResponse } from "../../models/Profile/UpdateGoogleAuthenticatorKey";

        /**
* @link /api/services/app/Profile/UpdateGoogleAuthenticatorKey
*/
        export function useUpdateGoogleAuthenticatorKey <TData = UpdateGoogleAuthenticatorKeyResponse, TError = unknown, TVariables = UpdateGoogleAuthenticatorKeyRequest>(  options?: {
          mutation?: UseMutationOptions<TData, TError, TVariables>
        }) {
          const { mutation: mutationOptions } = options ?? {};

          return useMutation<TData, TError, TVariables>({
            mutationFn: (data) => {
              return client<TData, TVariables>({
                method: "put",
                url: `/api/services/app/Profile/UpdateGoogleAuthenticatorKey`,
                data,
                
              });
            },
            ...mutationOptions
          });
        };
    