
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { RemoveRoleFromOrganizationUnitRequest, RemoveRoleFromOrganizationUnitResponse, RemoveRoleFromOrganizationUnitQueryParams } from "../../models/OrganizationUnit/RemoveRoleFromOrganizationUnit";

        /**
* @link /api/services/app/OrganizationUnit/RemoveRoleFromOrganizationUnit
*/
        export function useRemoveRoleFromOrganizationUnit <TData = RemoveRoleFromOrganizationUnitResponse, TError = unknown, TVariables = RemoveRoleFromOrganizationUnitRequest>( params?: RemoveRoleFromOrganizationUnitQueryParams, options?: {
          mutation?: UseMutationOptions<TData, TError, TVariables>
        }) {
          const { mutation: mutationOptions } = options ?? {};

          return useMutation<TData, TError, TVariables>({
            mutationFn: (data) => {
              return client<TData, TVariables>({
                method: "delete",
                url: `/api/services/app/OrganizationUnit/RemoveRoleFromOrganizationUnit`,
                data,
                params,
              });
            },
            ...mutationOptions
          });
        };
    