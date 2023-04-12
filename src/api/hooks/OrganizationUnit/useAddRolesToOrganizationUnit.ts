
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { AddRolesToOrganizationUnitRequest, AddRolesToOrganizationUnitResponse } from "../../models/OrganizationUnit/AddRolesToOrganizationUnit";

        /**
* @link /api/services/app/OrganizationUnit/AddRolesToOrganizationUnit
*/
        export function useAddRolesToOrganizationUnit <TData = AddRolesToOrganizationUnitResponse, TError = unknown, TVariables = AddRolesToOrganizationUnitRequest>(  options?: {
          mutation?: UseMutationOptions<TData, TError, TVariables>
        }) {
          const { mutation: mutationOptions } = options ?? {};

          return useMutation<TData, TError, TVariables>({
            mutationFn: (data) => {
              return client<TData, TVariables>({
                method: "post",
                url: `/api/services/app/OrganizationUnit/AddRolesToOrganizationUnit`,
                data,
                
              });
            },
            ...mutationOptions
          });
        };
    