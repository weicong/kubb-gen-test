
import client from "../../../utils/axios-client";
import type { GetMonthlyBudgetStatisticDataResponse, GetMonthlyBudgetStatisticDataQueryParams } from "../../models/BudgetItemStatistics/GetMonthlyBudgetStatisticData";

      /**
* @link /api/services/app/BudgetItemStatistics/GetMonthlyBudgetStatisticData
*/
      export function getMonthlyBudgetStatisticData <TData = GetMonthlyBudgetStatisticDataResponse>( params?: GetMonthlyBudgetStatisticDataQueryParams) {
        return client<TData>({
          method: "get",
          url: `/api/services/app/BudgetItemStatistics/GetMonthlyBudgetStatisticData`,
          params,
        });
      };
    