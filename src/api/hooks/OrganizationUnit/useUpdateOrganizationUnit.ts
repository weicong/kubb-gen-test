
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { UpdateOrganizationUnitRequest, UpdateOrganizationUnitResponse } from "../../models/OrganizationUnit/UpdateOrganizationUnit";

        /**
* @link /api/services/app/OrganizationUnit/UpdateOrganizationUnit
*/
        export function useUpdateOrganizationUnit <TData = UpdateOrganizationUnitResponse, TError = unknown, TVariables = UpdateOrganizationUnitRequest>(  options?: {
          mutation?: UseMutationOptions<TData, TError, TVariables>
        }) {
          const { mutation: mutationOptions } = options ?? {};

          return useMutation<TData, TError, TVariables>({
            mutationFn: (data) => {
              return client<TData, TVariables>({
                method: "put",
                url: `/api/services/app/OrganizationUnit/UpdateOrganizationUnit`,
                data,
                
              });
            },
            ...mutationOptions
          });
        };
    