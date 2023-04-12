
import client from "../../../utils/axios-client";
import type { UpdateQuarterRequest, UpdateQuarterResponse } from "../../models/BudgetAllocationProcurementItem/UpdateQuarter";

      /**
* @summary 更新季度
* @link /api/services/app/BudgetAllocationProcurementItem/UpdateQuarter
*/
      export function updateQuarter <TData = UpdateQuarterResponse, TVariables = UpdateQuarterRequest>( data: TVariables, ) {
        return client<TData, TVariables>({
          method: "put",
          url: `/api/services/app/BudgetAllocationProcurementItem/UpdateQuarter`,
          data,
          
        });
      };
    