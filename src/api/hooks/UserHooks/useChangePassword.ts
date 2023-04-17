import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { ChangePasswordRequest, ChangePasswordResponse } from "../../models/UserModels/ChangePassword";


        /**
* @link /api/services/app/User/ChangePassword
*/
        export function useChangePassword <TData = ChangePasswordResponse, TError = unknown, TVariables = ChangePasswordRequest>(  options?: {
          mutation?: UseMutationOptions<TData, TError, TVariables>
        }) {
          const { mutation: mutationOptions } = options ?? {};

          return useMutation<TData, TError, TVariables>({
            mutationFn: (data) => {
              return client<TData, TVariables>({
                method: "post",
                url: `/api/services/app/User/ChangePassword`,
                data,
                
              });
            },
            ...mutationOptions
          });
        };
    