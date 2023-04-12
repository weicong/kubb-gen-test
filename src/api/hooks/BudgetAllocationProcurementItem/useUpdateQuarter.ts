
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { UpdateQuarterRequest, UpdateQuarterResponse } from "../../models/BudgetAllocationProcurementItem/UpdateQuarter";

        /**
* @summary 更新季度
* @link /api/services/app/BudgetAllocationProcurementItem/UpdateQuarter
*/
        export function useUpdateQuarter <TData = UpdateQuarterResponse, TError = unknown, TVariables = UpdateQuarterRequest>(  options?: {
          mutation?: UseMutationOptions<TData, TError, TVariables>
        }) {
          const { mutation: mutationOptions } = options ?? {};

          return useMutation<TData, TError, TVariables>({
            mutationFn: (data) => {
              return client<TData, TVariables>({
                method: "put",
                url: `/api/services/app/BudgetAllocationProcurementItem/UpdateQuarter`,
                data,
                
              });
            },
            ...mutationOptions
          });
        };
    