
import client from "../../../utils/axios-client";
import type { SetAllActiveRequest, SetAllActiveResponse } from "../../models/BudgetAllocationProcurementItem/SetAllActive";

      /**
* @link /api/services/app/BudgetAllocationProcurementItem/SetAllActive
*/
      export function setAllActive <TData = SetAllActiveResponse, TVariables = SetAllActiveRequest>( data: TVariables, ) {
        return client<TData, TVariables>({
          method: "post",
          url: `/api/services/app/BudgetAllocationProcurementItem/SetAllActive`,
          data,
          
        });
      };
    