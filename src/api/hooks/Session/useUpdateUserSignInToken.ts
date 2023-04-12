
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { UpdateUserSignInTokenRequest, UpdateUserSignInTokenResponse } from "../../models/Session/UpdateUserSignInToken";

        /**
* @link /api/services/app/Session/UpdateUserSignInToken
*/
        export function useUpdateUserSignInToken <TData = UpdateUserSignInTokenResponse, TError = unknown, TVariables = UpdateUserSignInTokenRequest>(  options?: {
          mutation?: UseMutationOptions<TData, TError, TVariables>
        }) {
          const { mutation: mutationOptions } = options ?? {};

          return useMutation<TData, TError, TVariables>({
            mutationFn: (data) => {
              return client<TData, TVariables>({
                method: "put",
                url: `/api/services/app/Session/UpdateUserSignInToken`,
                data,
                
              });
            },
            ...mutationOptions
          });
        };
    