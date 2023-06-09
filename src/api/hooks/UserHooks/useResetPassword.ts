import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { ResetPasswordRequest, ResetPasswordResponse } from "../../models/UserModels/ResetPassword";


        /**
* @link /api/services/app/User/ResetPassword
*/
        export function useResetPassword <TData = ResetPasswordResponse, TError = unknown, TVariables = ResetPasswordRequest>(  options?: {
          mutation?: UseMutationOptions<TData, TError, TVariables>
        }) {
          const { mutation: mutationOptions } = options ?? {};

          return useMutation<TData, TError, TVariables>({
            mutationFn: (data) => {
              return client<TData, TVariables>({
                method: "post",
                url: `/api/services/app/User/ResetPassword`,
                data,
                
              });
            },
            ...mutationOptions
          });
        };
    