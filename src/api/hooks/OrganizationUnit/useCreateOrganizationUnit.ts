
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { CreateOrganizationUnitRequest, CreateOrganizationUnitResponse } from "../../models/OrganizationUnit/CreateOrganizationUnit";

        /**
* @link /api/services/app/OrganizationUnit/CreateOrganizationUnit
*/
        export function useCreateOrganizationUnit <TData = CreateOrganizationUnitResponse, TError = unknown, TVariables = CreateOrganizationUnitRequest>(  options?: {
          mutation?: UseMutationOptions<TData, TError, TVariables>
        }) {
          const { mutation: mutationOptions } = options ?? {};

          return useMutation<TData, TError, TVariables>({
            mutationFn: (data) => {
              return client<TData, TVariables>({
                method: "post",
                url: `/api/services/app/OrganizationUnit/CreateOrganizationUnit`,
                data,
                
              });
            },
            ...mutationOptions
          });
        };
    