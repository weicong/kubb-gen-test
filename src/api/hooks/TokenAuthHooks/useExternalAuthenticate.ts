import type { useMutation, UseMutationOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { ExternalAuthenticateRequest, ExternalAuthenticateResponse } from "../../models/TokenAuthModels/ExternalAuthenticate";


        /**
* @link /api/TokenAuth/ExternalAuthenticate
*/
        export function useExternalAuthenticate <TData = ExternalAuthenticateResponse, TError = unknown, TVariables = ExternalAuthenticateRequest>(  options?: {
          mutation?: UseMutationOptions<TData, TError, TVariables>
        }) {
          const { mutation: mutationOptions } = options ?? {};

          return useMutation<TData, TError, TVariables>({
            mutationFn: (data) => {
              return client<TData, TVariables>({
                method: "post",
                url: `/api/TokenAuth/ExternalAuthenticate`,
                data,
                
              });
            },
            ...mutationOptions
          });
        };
    