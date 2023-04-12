
import client from "../../../utils/axios-client";
import type { GetBudgetExecuteItemsResponse, GetBudgetExecuteItemsQueryParams } from "../../models/BudgetStatistics/GetBudgetExecuteItems";

      /**
* @summary 预算执行记录
* @link /api/services/app/BudgetStatistics/GetBudgetExecuteItems
*/
      export function getBudgetExecuteItems <TData = GetBudgetExecuteItemsResponse>( params?: GetBudgetExecuteItemsQueryParams) {
        return client<TData>({
          method: "get",
          url: `/api/services/app/BudgetStatistics/GetBudgetExecuteItems`,
          params,
        });
      };
    