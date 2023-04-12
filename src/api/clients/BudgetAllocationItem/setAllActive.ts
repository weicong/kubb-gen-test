
import client from "../../../utils/axios-client";
import type { SetAllActiveRequest, SetAllActiveResponse } from "../../models/BudgetAllocationItem/SetAllActive";

      /**
* @link /api/services/app/BudgetAllocationItem/SetAllActive
*/
      export function setAllActive <TData = SetAllActiveResponse, TVariables = SetAllActiveRequest>( data: TVariables, ) {
        return client<TData, TVariables>({
          method: "post",
          url: `/api/services/app/BudgetAllocationItem/SetAllActive`,
          data,
          
        });
      };
    