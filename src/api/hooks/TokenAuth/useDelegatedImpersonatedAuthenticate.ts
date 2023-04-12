
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { DelegatedImpersonatedAuthenticateRequest, DelegatedImpersonatedAuthenticateResponse, DelegatedImpersonatedAuthenticateQueryParams } from "../../models/TokenAuth/DelegatedImpersonatedAuthenticate";

        /**
* @link /api/TokenAuth/DelegatedImpersonatedAuthenticate
*/
        export function useDelegatedImpersonatedAuthenticate <TData = DelegatedImpersonatedAuthenticateResponse, TError = unknown, TVariables = DelegatedImpersonatedAuthenticateRequest>( params?: DelegatedImpersonatedAuthenticateQueryParams, options?: {
          mutation?: UseMutationOptions<TData, TError, TVariables>
        }) {
          const { mutation: mutationOptions } = options ?? {};

          return useMutation<TData, TError, TVariables>({
            mutationFn: (data) => {
              return client<TData, TVariables>({
                method: "post",
                url: `/api/TokenAuth/DelegatedImpersonatedAuthenticate`,
                data,
                params,
              });
            },
            ...mutationOptions
          });
        };
    