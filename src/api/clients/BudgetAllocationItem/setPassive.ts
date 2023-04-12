
import client from "../../../utils/axios-client";
import type { SetPassiveRequest, SetPassiveResponse } from "../../models/BudgetAllocationItem/SetPassive";

      /**
* @link /api/services/app/BudgetAllocationItem/SetPassive
*/
      export function setPassive <TData = SetPassiveResponse, TVariables = SetPassiveRequest>( data: TVariables, ) {
        return client<TData, TVariables>({
          method: "post",
          url: `/api/services/app/BudgetAllocationItem/SetPassive`,
          data,
          
        });
      };
    