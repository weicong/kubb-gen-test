
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { DeleteUserRequest, DeleteUserResponse, DeleteUserQueryParams } from "../../models/User/DeleteUser";

        /**
* @link /api/services/app/User/DeleteUser
*/
        export function useDeleteUser <TData = DeleteUserResponse, TError = unknown, TVariables = DeleteUserRequest>( params?: DeleteUserQueryParams, options?: {
          mutation?: UseMutationOptions<TData, TError, TVariables>
        }) {
          const { mutation: mutationOptions } = options ?? {};

          return useMutation<TData, TError, TVariables>({
            mutationFn: (data) => {
              return client<TData, TVariables>({
                method: "delete",
                url: `/api/services/app/User/DeleteUser`,
                data,
                params,
              });
            },
            ...mutationOptions
          });
        };
    