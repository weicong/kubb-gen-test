
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { MoveOrganizationUnitRequest, MoveOrganizationUnitResponse } from "../../models/OrganizationUnit/MoveOrganizationUnit";

        /**
* @link /api/services/app/OrganizationUnit/MoveOrganizationUnit
*/
        export function useMoveOrganizationUnit <TData = MoveOrganizationUnitResponse, TError = unknown, TVariables = MoveOrganizationUnitRequest>(  options?: {
          mutation?: UseMutationOptions<TData, TError, TVariables>
        }) {
          const { mutation: mutationOptions } = options ?? {};

          return useMutation<TData, TError, TVariables>({
            mutationFn: (data) => {
              return client<TData, TVariables>({
                method: "post",
                url: `/api/services/app/OrganizationUnit/MoveOrganizationUnit`,
                data,
                
              });
            },
            ...mutationOptions
          });
        };
    