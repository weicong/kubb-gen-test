
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { DeleteRoleRequest, DeleteRoleResponse, DeleteRoleQueryParams } from "../../models/Role/DeleteRole";

        /**
* @link /api/services/app/Role/DeleteRole
*/
        export function useDeleteRole <TData = DeleteRoleResponse, TError = unknown, TVariables = DeleteRoleRequest>( params?: DeleteRoleQueryParams, options?: {
          mutation?: UseMutationOptions<TData, TError, TVariables>
        }) {
          const { mutation: mutationOptions } = options ?? {};

          return useMutation<TData, TError, TVariables>({
            mutationFn: (data) => {
              return client<TData, TVariables>({
                method: "delete",
                url: `/api/services/app/Role/DeleteRole`,
                data,
                params,
              });
            },
            ...mutationOptions
          });
        };
    