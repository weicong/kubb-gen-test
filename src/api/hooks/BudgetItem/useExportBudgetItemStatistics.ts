
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { ExportBudgetItemStatisticsRequest, ExportBudgetItemStatisticsResponse } from "../../models/BudgetItem/ExportBudgetItemStatistics";

        /**
* @link /api/services/app/BudgetItem/ExportBudgetItemStatistics
*/
        export function useExportBudgetItemStatistics <TData = ExportBudgetItemStatisticsResponse, TError = unknown, TVariables = ExportBudgetItemStatisticsRequest>(  options?: {
          mutation?: UseMutationOptions<TData, TError, TVariables>
        }) {
          const { mutation: mutationOptions } = options ?? {};

          return useMutation<TData, TError, TVariables>({
            mutationFn: (data) => {
              return client<TData, TVariables>({
                method: "post",
                url: `/api/services/app/BudgetItem/ExportBudgetItemStatistics`,
                data,
                
              });
            },
            ...mutationOptions
          });
        };
    