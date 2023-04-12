
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { CreateOrUpdateRoleRequest, CreateOrUpdateRoleResponse } from "../../models/Role/CreateOrUpdateRole";

        /**
* @link /api/services/app/Role/CreateOrUpdateRole
*/
        export function useCreateOrUpdateRole <TData = CreateOrUpdateRoleResponse, TError = unknown, TVariables = CreateOrUpdateRoleRequest>(  options?: {
          mutation?: UseMutationOptions<TData, TError, TVariables>
        }) {
          const { mutation: mutationOptions } = options ?? {};

          return useMutation<TData, TError, TVariables>({
            mutationFn: (data) => {
              return client<TData, TVariables>({
                method: "post",
                url: `/api/services/app/Role/CreateOrUpdateRole`,
                data,
                
              });
            },
            ...mutationOptions
          });
        };
    