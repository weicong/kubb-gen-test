
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { DeleteOrganizationUnitRequest, DeleteOrganizationUnitResponse, DeleteOrganizationUnitQueryParams } from "../../models/OrganizationUnit/DeleteOrganizationUnit";

        /**
* @link /api/services/app/OrganizationUnit/DeleteOrganizationUnit
*/
        export function useDeleteOrganizationUnit <TData = DeleteOrganizationUnitResponse, TError = unknown, TVariables = DeleteOrganizationUnitRequest>( params?: DeleteOrganizationUnitQueryParams, options?: {
          mutation?: UseMutationOptions<TData, TError, TVariables>
        }) {
          const { mutation: mutationOptions } = options ?? {};

          return useMutation<TData, TError, TVariables>({
            mutationFn: (data) => {
              return client<TData, TVariables>({
                method: "delete",
                url: `/api/services/app/OrganizationUnit/DeleteOrganizationUnit`,
                data,
                params,
              });
            },
            ...mutationOptions
          });
        };
    