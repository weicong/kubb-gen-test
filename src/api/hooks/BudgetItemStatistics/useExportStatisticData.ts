
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { ExportStatisticDataRequest, ExportStatisticDataResponse } from "../../models/BudgetItemStatistics/ExportStatisticData";

        /**
* @link /api/services/app/BudgetItemStatistics/ExportStatisticData
*/
        export function useExportStatisticData <TData = ExportStatisticDataResponse, TError = unknown, TVariables = ExportStatisticDataRequest>(  options?: {
          mutation?: UseMutationOptions<TData, TError, TVariables>
        }) {
          const { mutation: mutationOptions } = options ?? {};

          return useMutation<TData, TError, TVariables>({
            mutationFn: (data) => {
              return client<TData, TVariables>({
                method: "post",
                url: `/api/services/app/BudgetItemStatistics/ExportStatisticData`,
                data,
                
              });
            },
            ...mutationOptions
          });
        };
    