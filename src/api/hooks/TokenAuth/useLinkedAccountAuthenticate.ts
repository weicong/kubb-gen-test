
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { LinkedAccountAuthenticateRequest, LinkedAccountAuthenticateResponse, LinkedAccountAuthenticateQueryParams } from "../../models/TokenAuth/LinkedAccountAuthenticate";

        /**
* @link /api/TokenAuth/LinkedAccountAuthenticate
*/
        export function useLinkedAccountAuthenticate <TData = LinkedAccountAuthenticateResponse, TError = unknown, TVariables = LinkedAccountAuthenticateRequest>( params?: LinkedAccountAuthenticateQueryParams, options?: {
          mutation?: UseMutationOptions<TData, TError, TVariables>
        }) {
          const { mutation: mutationOptions } = options ?? {};

          return useMutation<TData, TError, TVariables>({
            mutationFn: (data) => {
              return client<TData, TVariables>({
                method: "post",
                url: `/api/TokenAuth/LinkedAccountAuthenticate`,
                data,
                params,
              });
            },
            ...mutationOptions
          });
        };
    