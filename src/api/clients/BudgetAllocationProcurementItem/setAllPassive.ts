
import client from "../../../utils/axios-client";
import type { SetAllPassiveRequest, SetAllPassiveResponse } from "../../models/BudgetAllocationProcurementItem/SetAllPassive";

      /**
* @link /api/services/app/BudgetAllocationProcurementItem/SetAllPassive
*/
      export function setAllPassive <TData = SetAllPassiveResponse, TVariables = SetAllPassiveRequest>( data: TVariables, ) {
        return client<TData, TVariables>({
          method: "post",
          url: `/api/services/app/BudgetAllocationProcurementItem/SetAllPassive`,
          data,
          
        });
      };
    