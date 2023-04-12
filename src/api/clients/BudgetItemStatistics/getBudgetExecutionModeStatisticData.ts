
import client from "../../../utils/axios-client";
import type { GetBudgetExecutionModeStatisticDataResponse, GetBudgetExecutionModeStatisticDataQueryParams } from "../../models/BudgetItemStatistics/GetBudgetExecutionModeStatisticData";

      /**
* @link /api/services/app/BudgetItemStatistics/GetBudgetExecutionModeStatisticData
*/
      export function getBudgetExecutionModeStatisticData <TData = GetBudgetExecutionModeStatisticDataResponse>( params?: GetBudgetExecutionModeStatisticDataQueryParams) {
        return client<TData>({
          method: "get",
          url: `/api/services/app/BudgetItemStatistics/GetBudgetExecutionModeStatisticData`,
          params,
        });
      };
    