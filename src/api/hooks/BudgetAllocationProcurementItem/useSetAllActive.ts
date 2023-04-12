
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { SetAllActiveRequest, SetAllActiveResponse } from "../../models/BudgetAllocationProcurementItem/SetAllActive";

        /**
* @link /api/services/app/BudgetAllocationProcurementItem/SetAllActive
*/
        export function useSetAllActive <TData = SetAllActiveResponse, TError = unknown, TVariables = SetAllActiveRequest>(  options?: {
          mutation?: UseMutationOptions<TData, TError, TVariables>
        }) {
          const { mutation: mutationOptions } = options ?? {};

          return useMutation<TData, TError, TVariables>({
            mutationFn: (data) => {
              return client<TData, TVariables>({
                method: "post",
                url: `/api/services/app/BudgetAllocationProcurementItem/SetAllActive`,
                data,
                
              });
            },
            ...mutationOptions
          });
        };
    