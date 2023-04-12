
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { ImpersonatedAuthenticateRequest, ImpersonatedAuthenticateResponse, ImpersonatedAuthenticateQueryParams } from "../../models/TokenAuth/ImpersonatedAuthenticate";

        /**
* @link /api/TokenAuth/ImpersonatedAuthenticate
*/
        export function useImpersonatedAuthenticate <TData = ImpersonatedAuthenticateResponse, TError = unknown, TVariables = ImpersonatedAuthenticateRequest>( params?: ImpersonatedAuthenticateQueryParams, options?: {
          mutation?: UseMutationOptions<TData, TError, TVariables>
        }) {
          const { mutation: mutationOptions } = options ?? {};

          return useMutation<TData, TError, TVariables>({
            mutationFn: (data) => {
              return client<TData, TVariables>({
                method: "post",
                url: `/api/TokenAuth/ImpersonatedAuthenticate`,
                data,
                params,
              });
            },
            ...mutationOptions
          });
        };
    