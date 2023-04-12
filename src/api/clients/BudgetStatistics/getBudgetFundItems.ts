
import client from "../../../utils/axios-client";
import type { GetBudgetFundItemsResponse, GetBudgetFundItemsQueryParams } from "../../models/BudgetStatistics/GetBudgetFundItems";

      /**
* @summary 获取支出科目
* @link /api/services/app/BudgetStatistics/GetBudgetFundItems
*/
      export function getBudgetFundItems <TData = GetBudgetFundItemsResponse>( params?: GetBudgetFundItemsQueryParams) {
        return client<TData>({
          method: "get",
          url: `/api/services/app/BudgetStatistics/GetBudgetFundItems`,
          params,
        });
      };
    