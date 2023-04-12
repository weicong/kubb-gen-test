
import client from "../../../utils/axios-client";
import type { FlattenRequest, FlattenResponse } from "../../models/BudgetItemStatistics/Flatten";

      /**
* @link /api/services/app/BudgetItemStatistics/Flatten
*/
      export function flatten <TData = FlattenResponse, TVariables = FlattenRequest>( data: TVariables, ) {
        return client<TData, TVariables>({
          method: "post",
          url: `/api/services/app/BudgetItemStatistics/Flatten`,
          data,
          
        });
      };
    