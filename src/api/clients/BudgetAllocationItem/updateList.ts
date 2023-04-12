
import client from "../../../utils/axios-client";
import type { UpdateListRequest, UpdateListResponse } from "../../models/BudgetAllocationItem/UpdateList";

      /**
* @link /api/services/app/BudgetAllocationItem/UpdateList
*/
      export function updateList <TData = UpdateListResponse, TVariables = UpdateListRequest>( data: TVariables, ) {
        return client<TData, TVariables>({
          method: "put",
          url: `/api/services/app/BudgetAllocationItem/UpdateList`,
          data,
          
        });
      };
    