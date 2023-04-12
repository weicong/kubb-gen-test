
import client from "../../../utils/axios-client";
import type { RemoveRequest, RemoveResponse, RemoveQueryParams } from "../../models/BudgetAllocationItem/Remove";

      /**
* @link /api/services/app/BudgetAllocationItem/Delete
*/
      export function remove <TData = RemoveResponse, TVariables = RemoveRequest>( data: TVariables, params?: RemoveQueryParams) {
        return client<TData, TVariables>({
          method: "delete",
          url: `/api/services/app/BudgetAllocationItem/Delete`,
          data,
          params,
        });
      };
    