
import client from "../../../utils/axios-client";
import type { SetAllPassiveRequest, SetAllPassiveResponse } from "../../models/BudgetAllocationItem/SetAllPassive";

      /**
* @link /api/services/app/BudgetAllocationItem/SetAllPassive
*/
      export function setAllPassive <TData = SetAllPassiveResponse, TVariables = SetAllPassiveRequest>( data: TVariables, ) {
        return client<TData, TVariables>({
          method: "post",
          url: `/api/services/app/BudgetAllocationItem/SetAllPassive`,
          data,
          
        });
      };
    