
import client from "../../../utils/axios-client";
import type { SaveBudgetExecutionPlanItemListRequest, SaveBudgetExecutionPlanItemListResponse } from "../../models/BudgetExecutionPlan/SaveBudgetExecutionPlanItemList";

      /**
* @summary 保存非政采预算项季度用款情况
* @link /api/services/app/BudgetExecutionPlan/SaveBudgetExecutionPlanItemList
*/
      export function saveBudgetExecutionPlanItemList <TData = SaveBudgetExecutionPlanItemListResponse, TVariables = SaveBudgetExecutionPlanItemListRequest>( data: TVariables, ) {
        return client<TData, TVariables>({
          method: "post",
          url: `/api/services/app/BudgetExecutionPlan/SaveBudgetExecutionPlanItemList`,
          data,
          
        });
      };
    