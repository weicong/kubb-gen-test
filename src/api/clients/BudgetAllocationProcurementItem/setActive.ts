
import client from "../../../utils/axios-client";
import type { SetActiveRequest, SetActiveResponse } from "../../models/BudgetAllocationProcurementItem/SetActive";

      /**
* @link /api/services/app/BudgetAllocationProcurementItem/SetActive
*/
      export function setActive <TData = SetActiveResponse, TVariables = SetActiveRequest>( data: TVariables, ) {
        return client<TData, TVariables>({
          method: "post",
          url: `/api/services/app/BudgetAllocationProcurementItem/SetActive`,
          data,
          
        });
      };
    