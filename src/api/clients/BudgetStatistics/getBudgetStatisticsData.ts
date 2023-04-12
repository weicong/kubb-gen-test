
import client from "../../../utils/axios-client";
import type { GetBudgetStatisticsDataResponse, GetBudgetStatisticsDataQueryParams } from "../../models/BudgetStatistics/GetBudgetStatisticsData";

      /**
* @link /api/services/app/BudgetStatistics/GetBudgetStatisticsData
*/
      export function getBudgetStatisticsData <TData = GetBudgetStatisticsDataResponse>( params?: GetBudgetStatisticsDataQueryParams) {
        return client<TData>({
          method: "get",
          url: `/api/services/app/BudgetStatistics/GetBudgetStatisticsData`,
          params,
        });
      };
    