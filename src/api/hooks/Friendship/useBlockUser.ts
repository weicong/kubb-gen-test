
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { BlockUserRequest, BlockUserResponse } from "../../models/Friendship/BlockUser";

        /**
* @link /api/services/app/Friendship/BlockUser
*/
        export function useBlockUser <TData = BlockUserResponse, TError = unknown, TVariables = BlockUserRequest>(  options?: {
          mutation?: UseMutationOptions<TData, TError, TVariables>
        }) {
          const { mutation: mutationOptions } = options ?? {};

          return useMutation<TData, TError, TVariables>({
            mutationFn: (data) => {
              return client<TData, TVariables>({
                method: "post",
                url: `/api/services/app/Friendship/BlockUser`,
                data,
                
              });
            },
            ...mutationOptions
          });
        };
    