
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { UnlockUserRequest, UnlockUserResponse } from "../../models/User/UnlockUser";

        /**
* @link /api/services/app/User/UnlockUser
*/
        export function useUnlockUser <TData = UnlockUserResponse, TError = unknown, TVariables = UnlockUserRequest>(  options?: {
          mutation?: UseMutationOptions<TData, TError, TVariables>
        }) {
          const { mutation: mutationOptions } = options ?? {};

          return useMutation<TData, TError, TVariables>({
            mutationFn: (data) => {
              return client<TData, TVariables>({
                method: "post",
                url: `/api/services/app/User/UnlockUser`,
                data,
                
              });
            },
            ...mutationOptions
          });
        };
    