
import client from "../../../utils/axios-client";
import type { SaveBudgetItemExecutionQuarterListRequest, SaveBudgetItemExecutionQuarterListResponse } from "../../models/BudgetExecutionPlan/SaveBudgetItemExecutionQuarterList";

      /**
* @summary 保存政采预算项季度
* @link /api/services/app/BudgetExecutionPlan/SaveBudgetItemExecutionQuarterList
*/
      export function saveBudgetItemExecutionQuarterList <TData = SaveBudgetItemExecutionQuarterListResponse, TVariables = SaveBudgetItemExecutionQuarterListRequest>( data: TVariables, ) {
        return client<TData, TVariables>({
          method: "post",
          url: `/api/services/app/BudgetExecutionPlan/SaveBudgetItemExecutionQuarterList`,
          data,
          
        });
      };
    