
import client from "../../../utils/axios-client";
import type { ExportBudgetItemStatisticsRequest, ExportBudgetItemStatisticsResponse } from "../../models/BudgetItem/ExportBudgetItemStatistics";

      /**
* @link /api/services/app/BudgetItem/ExportBudgetItemStatistics
*/
      export function exportBudgetItemStatistics <TData = ExportBudgetItemStatisticsResponse, TVariables = ExportBudgetItemStatisticsRequest>( data: TVariables, ) {
        return client<TData, TVariables>({
          method: "post",
          url: `/api/services/app/BudgetItem/ExportBudgetItemStatistics`,
          data,
          
        });
      };
    