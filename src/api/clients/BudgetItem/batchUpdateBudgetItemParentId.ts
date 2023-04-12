
import client from "../../../utils/axios-client";
import type { BatchUpdateBudgetItemParentIdRequest, BatchUpdateBudgetItemParentIdResponse } from "../../models/BudgetItem/BatchUpdateBudgetItemParentId";

      /**
* @summary 批量修改ParentId
* @link /api/services/app/BudgetItem/BatchUpdateBudgetItemParentId
*/
      export function batchUpdateBudgetItemParentId <TData = BatchUpdateBudgetItemParentIdResponse, TVariables = BatchUpdateBudgetItemParentIdRequest>( data: TVariables, ) {
        return client<TData, TVariables>({
          method: "post",
          url: `/api/services/app/BudgetItem/BatchUpdateBudgetItemParentId`,
          data,
          
        });
      };
    