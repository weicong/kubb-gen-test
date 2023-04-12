
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { AddUsersToOrganizationUnitRequest, AddUsersToOrganizationUnitResponse } from "../../models/OrganizationUnit/AddUsersToOrganizationUnit";

        /**
* @link /api/services/app/OrganizationUnit/AddUsersToOrganizationUnit
*/
        export function useAddUsersToOrganizationUnit <TData = AddUsersToOrganizationUnitResponse, TError = unknown, TVariables = AddUsersToOrganizationUnitRequest>(  options?: {
          mutation?: UseMutationOptions<TData, TError, TVariables>
        }) {
          const { mutation: mutationOptions } = options ?? {};

          return useMutation<TData, TError, TVariables>({
            mutationFn: (data) => {
              return client<TData, TVariables>({
                method: "post",
                url: `/api/services/app/OrganizationUnit/AddUsersToOrganizationUnit`,
                data,
                
              });
            },
            ...mutationOptions
          });
        };
    