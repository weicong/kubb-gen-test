
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { UpdateUserPermissionsRequest, UpdateUserPermissionsResponse } from "../../models/User/UpdateUserPermissions";

        /**
* @link /api/services/app/User/UpdateUserPermissions
*/
        export function useUpdateUserPermissions <TData = UpdateUserPermissionsResponse, TError = unknown, TVariables = UpdateUserPermissionsRequest>(  options?: {
          mutation?: UseMutationOptions<TData, TError, TVariables>
        }) {
          const { mutation: mutationOptions } = options ?? {};

          return useMutation<TData, TError, TVariables>({
            mutationFn: (data) => {
              return client<TData, TVariables>({
                method: "put",
                url: `/api/services/app/User/UpdateUserPermissions`,
                data,
                
              });
            },
            ...mutationOptions
          });
        };
    