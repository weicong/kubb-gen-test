
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { SetActiveRequest, SetActiveResponse } from "../../models/BudgetAllocationOrganizationUnitQuarterStatus/SetActive";

        /**
* @link /api/services/app/BudgetAllocationOrganizationUnitQuarterStatus/SetActive
*/
        export function useSetActive <TData = SetActiveResponse, TError = unknown, TVariables = SetActiveRequest>(  options?: {
          mutation?: UseMutationOptions<TData, TError, TVariables>
        }) {
          const { mutation: mutationOptions } = options ?? {};

          return useMutation<TData, TError, TVariables>({
            mutationFn: (data) => {
              return client<TData, TVariables>({
                method: "post",
                url: `/api/services/app/BudgetAllocationOrganizationUnitQuarterStatus/SetActive`,
                data,
                
              });
            },
            ...mutationOptions
          });
        };
    