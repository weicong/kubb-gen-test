
import client from "../../../utils/axios-client";
import type { CheckAmountRequest, CheckAmountResponse } from "../../models/BudgetAllocationDetail/CheckAmount";

      /**
* @link /api/services/app/BudgetAllocationDetail/CheckAmount
*/
      export function checkAmount <TData = CheckAmountResponse, TVariables = CheckAmountRequest>( data: TVariables, ) {
        return client<TData, TVariables>({
          method: "post",
          url: `/api/services/app/BudgetAllocationDetail/CheckAmount`,
          data,
          
        });
      };
    