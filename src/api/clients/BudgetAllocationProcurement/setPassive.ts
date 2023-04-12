
import client from "../../../utils/axios-client";
import type { SetPassiveRequest, SetPassiveResponse } from "../../models/BudgetAllocationProcurement/SetPassive";

      /**
* @link /api/services/app/BudgetAllocationProcurement/SetPassive
*/
      export function setPassive <TData = SetPassiveResponse, TVariables = SetPassiveRequest>( data: TVariables, ) {
        return client<TData, TVariables>({
          method: "post",
          url: `/api/services/app/BudgetAllocationProcurement/SetPassive`,
          data,
          
        });
      };
    