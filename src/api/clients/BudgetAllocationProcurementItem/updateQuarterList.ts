
import client from "../../../utils/axios-client";
import type { UpdateQuarterListRequest, UpdateQuarterListResponse } from "../../models/BudgetAllocationProcurementItem/UpdateQuarterList";

      /**
* @summary 以列表更新季度
* @link /api/services/app/BudgetAllocationProcurementItem/UpdateQuarterList
*/
      export function updateQuarterList <TData = UpdateQuarterListResponse, TVariables = UpdateQuarterListRequest>( data: TVariables, ) {
        return client<TData, TVariables>({
          method: "put",
          url: `/api/services/app/BudgetAllocationProcurementItem/UpdateQuarterList`,
          data,
          
        });
      };
    