
import client from "../../../utils/axios-client";
import type { UpdateRequest, UpdateResponse } from "../../models/BudgetAllocationProcurement/Update";

      /**
* @link /api/services/app/BudgetAllocationProcurement/Update
*/
      export function update <TData = UpdateResponse, TVariables = UpdateRequest>( data: TVariables, ) {
        return client<TData, TVariables>({
          method: "put",
          url: `/api/services/app/BudgetAllocationProcurement/Update`,
          data,
          
        });
      };
    