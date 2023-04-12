
import client from "../../../utils/axios-client";
import type { UpdateBudgetItemStatusRequest, UpdateBudgetItemStatusResponse } from "../../models/BudgetItem/UpdateBudgetItemStatus";

      /**
* @description 可以禁用、更改使用科室
* @summary 更新状态
* @link /api/services/app/BudgetItem/UpdateBudgetItemStatus
*/
      export function updateBudgetItemStatus <TData = UpdateBudgetItemStatusResponse, TVariables = UpdateBudgetItemStatusRequest>( data: TVariables, ) {
        return client<TData, TVariables>({
          method: "put",
          url: `/api/services/app/BudgetItem/UpdateBudgetItemStatus`,
          data,
          
        });
      };
    