
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { DelegateNewUserRequest, DelegateNewUserResponse } from "../../models/UserDelegation/DelegateNewUser";

        /**
* @link /api/services/app/UserDelegation/DelegateNewUser
*/
        export function useDelegateNewUser <TData = DelegateNewUserResponse, TError = unknown, TVariables = DelegateNewUserRequest>(  options?: {
          mutation?: UseMutationOptions<TData, TError, TVariables>
        }) {
          const { mutation: mutationOptions } = options ?? {};

          return useMutation<TData, TError, TVariables>({
            mutationFn: (data) => {
              return client<TData, TVariables>({
                method: "post",
                url: `/api/services/app/UserDelegation/DelegateNewUser`,
                data,
                
              });
            },
            ...mutationOptions
          });
        };
    