
import client from "../../../utils/axios-client";
import type { GetBudgetItemStatisticsResponse, GetBudgetItemStatisticsQueryParams } from "../../models/BudgetItem/GetBudgetItemStatistics";

      /**
* @link /api/services/app/BudgetItem/GetBudgetItemStatistics
*/
      export function getBudgetItemStatistics <TData = GetBudgetItemStatisticsResponse>( params?: GetBudgetItemStatisticsQueryParams) {
        return client<TData>({
          method: "get",
          url: `/api/services/app/BudgetItem/GetBudgetItemStatistics`,
          params,
        });
      };
    