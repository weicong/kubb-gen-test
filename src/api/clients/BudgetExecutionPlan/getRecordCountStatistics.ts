
import client from "../../../utils/axios-client";
import type { GetRecordCountStatisticsResponse, GetRecordCountStatisticsQueryParams } from "../../models/BudgetExecutionPlan/GetRecordCountStatistics";

      /**
* @link /api/services/app/BudgetExecutionPlan/GetRecordCountStatistics
*/
      export function getRecordCountStatistics <TData = GetRecordCountStatisticsResponse>( params?: GetRecordCountStatisticsQueryParams) {
        return client<TData>({
          method: "get",
          url: `/api/services/app/BudgetExecutionPlan/GetRecordCountStatistics`,
          params,
        });
      };
    