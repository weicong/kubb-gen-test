
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { UnblockUserRequest, UnblockUserResponse } from "../../models/Friendship/UnblockUser";

        /**
* @link /api/services/app/Friendship/UnblockUser
*/
        export function useUnblockUser <TData = UnblockUserResponse, TError = unknown, TVariables = UnblockUserRequest>(  options?: {
          mutation?: UseMutationOptions<TData, TError, TVariables>
        }) {
          const { mutation: mutationOptions } = options ?? {};

          return useMutation<TData, TError, TVariables>({
            mutationFn: (data) => {
              return client<TData, TVariables>({
                method: "post",
                url: `/api/services/app/Friendship/UnblockUser`,
                data,
                
              });
            },
            ...mutationOptions
          });
        };
    