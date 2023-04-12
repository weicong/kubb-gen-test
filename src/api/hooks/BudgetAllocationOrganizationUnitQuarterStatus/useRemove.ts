
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { RemoveRequest, RemoveResponse, RemoveQueryParams } from "../../models/BudgetAllocationOrganizationUnitQuarterStatus/Remove";

        /**
* @link /api/services/app/BudgetAllocationOrganizationUnitQuarterStatus/Delete
*/
        export function useRemove <TData = RemoveResponse, TError = unknown, TVariables = RemoveRequest>( params?: RemoveQueryParams, options?: {
          mutation?: UseMutationOptions<TData, TError, TVariables>
        }) {
          const { mutation: mutationOptions } = options ?? {};

          return useMutation<TData, TError, TVariables>({
            mutationFn: (data) => {
              return client<TData, TVariables>({
                method: "delete",
                url: `/api/services/app/BudgetAllocationOrganizationUnitQuarterStatus/Delete`,
                data,
                params,
              });
            },
            ...mutationOptions
          });
        };
    