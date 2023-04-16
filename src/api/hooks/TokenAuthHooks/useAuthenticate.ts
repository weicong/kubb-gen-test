import type { useMutation, UseMutationOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { AuthenticateRequest, AuthenticateResponse } from "../../models/TokenAuthModels/Authenticate";


        /**
* @link /api/TokenAuth/Authenticate
*/
        export function useAuthenticate <TData = AuthenticateResponse, TError = unknown, TVariables = AuthenticateRequest>(  options?: {
          mutation?: UseMutationOptions<TData, TError, TVariables>
        }) {
          const { mutation: mutationOptions } = options ?? {};

          return useMutation<TData, TError, TVariables>({
            mutationFn: (data) => {
              return client<TData, TVariables>({
                method: "post",
                url: `/api/TokenAuth/Authenticate`,
                data,
                
              });
            },
            ...mutationOptions
          });
        };
    