
import client from "../../../utils/axios-client";
import type { SetPassiveRequest, SetPassiveResponse } from "../../models/BudgetAllocationProcurementItem/SetPassive";

      /**
* @link /api/services/app/BudgetAllocationProcurementItem/SetPassive
*/
      export function setPassive <TData = SetPassiveResponse, TVariables = SetPassiveRequest>( data: TVariables, ) {
        return client<TData, TVariables>({
          method: "post",
          url: `/api/services/app/BudgetAllocationProcurementItem/SetPassive`,
          data,
          
        });
      };
    