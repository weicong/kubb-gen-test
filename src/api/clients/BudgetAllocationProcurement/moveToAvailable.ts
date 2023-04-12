
import client from "../../../utils/axios-client";
import type { MoveToAvailableRequest, MoveToAvailableResponse } from "../../models/BudgetAllocationProcurement/MoveToAvailable";

      /**
* @link /api/services/app/BudgetAllocationProcurement/MoveToAvailable
*/
      export function moveToAvailable <TData = MoveToAvailableResponse, TVariables = MoveToAvailableRequest>( data: TVariables, ) {
        return client<TData, TVariables>({
          method: "post",
          url: `/api/services/app/BudgetAllocationProcurement/MoveToAvailable`,
          data,
          
        });
      };
    