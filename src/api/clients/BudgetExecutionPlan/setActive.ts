
import client from "../../../utils/axios-client";
import type { SetActiveRequest, SetActiveResponse } from "../../models/BudgetExecutionPlan/SetActive";

      /**
* @link /api/services/app/BudgetExecutionPlan/SetActive
*/
      export function setActive <TData = SetActiveResponse, TVariables = SetActiveRequest>( data: TVariables, ) {
        return client<TData, TVariables>({
          method: "post",
          url: `/api/services/app/BudgetExecutionPlan/SetActive`,
          data,
          
        });
      };
    