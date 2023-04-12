
import client from "../../../utils/axios-client";
import type { GetExecutionQuarterStatisticsResponse, GetExecutionQuarterStatisticsQueryParams } from "../../models/BudgetExecutionPlan/GetExecutionQuarterStatistics";

      /**
* @summary 获取用款计划（审批单、非政采预算项季度用款情况、政采预算项）
* @link /api/services/app/BudgetExecutionPlan/GetExecutionQuarterStatistics
*/
      export function getExecutionQuarterStatistics <TData = GetExecutionQuarterStatisticsResponse>( params?: GetExecutionQuarterStatisticsQueryParams) {
        return client<TData>({
          method: "get",
          url: `/api/services/app/BudgetExecutionPlan/GetExecutionQuarterStatistics`,
          params,
        });
      };
    