
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { RemoveUserFromOrganizationUnitRequest, RemoveUserFromOrganizationUnitResponse, RemoveUserFromOrganizationUnitQueryParams } from "../../models/OrganizationUnit/RemoveUserFromOrganizationUnit";

        /**
* @link /api/services/app/OrganizationUnit/RemoveUserFromOrganizationUnit
*/
        export function useRemoveUserFromOrganizationUnit <TData = RemoveUserFromOrganizationUnitResponse, TError = unknown, TVariables = RemoveUserFromOrganizationUnitRequest>( params?: RemoveUserFromOrganizationUnitQueryParams, options?: {
          mutation?: UseMutationOptions<TData, TError, TVariables>
        }) {
          const { mutation: mutationOptions } = options ?? {};

          return useMutation<TData, TError, TVariables>({
            mutationFn: (data) => {
              return client<TData, TVariables>({
                method: "delete",
                url: `/api/services/app/OrganizationUnit/RemoveUserFromOrganizationUnit`,
                data,
                params,
              });
            },
            ...mutationOptions
          });
        };
    