
import client from "../../../utils/axios-client";
import type { RemoveRequest, RemoveResponse, RemoveQueryParams } from "../../models/BudgetAllocationProcurement/Remove";

      /**
* @link /api/services/app/BudgetAllocationProcurement/Delete
*/
      export function remove <TData = RemoveResponse, TVariables = RemoveRequest>( data: TVariables, params?: RemoveQueryParams) {
        return client<TData, TVariables>({
          method: "delete",
          url: `/api/services/app/BudgetAllocationProcurement/Delete`,
          data,
          params,
        });
      };
    