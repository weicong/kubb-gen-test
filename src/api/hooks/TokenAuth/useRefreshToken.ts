
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { RefreshTokenRequest, RefreshTokenResponse, RefreshTokenQueryParams } from "../../models/TokenAuth/RefreshToken";

        /**
* @link /api/TokenAuth/RefreshToken
*/
        export function useRefreshToken <TData = RefreshTokenResponse, TError = unknown, TVariables = RefreshTokenRequest>( params?: RefreshTokenQueryParams, options?: {
          mutation?: UseMutationOptions<TData, TError, TVariables>
        }) {
          const { mutation: mutationOptions } = options ?? {};

          return useMutation<TData, TError, TVariables>({
            mutationFn: (data) => {
              return client<TData, TVariables>({
                method: "post",
                url: `/api/TokenAuth/RefreshToken`,
                data,
                params,
              });
            },
            ...mutationOptions
          });
        };
    