
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { FindRolesRequest, FindRolesResponse } from "../../models/OrganizationUnit/FindRoles";

        /**
* @link /api/services/app/OrganizationUnit/FindRoles
*/
        export function useFindRoles <TData = FindRolesResponse, TError = unknown, TVariables = FindRolesRequest>(  options?: {
          mutation?: UseMutationOptions<TData, TError, TVariables>
        }) {
          const { mutation: mutationOptions } = options ?? {};

          return useMutation<TData, TError, TVariables>({
            mutationFn: (data) => {
              return client<TData, TVariables>({
                method: "post",
                url: `/api/services/app/OrganizationUnit/FindRoles`,
                data,
                
              });
            },
            ...mutationOptions
          });
        };
    