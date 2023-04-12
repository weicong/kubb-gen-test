
import client from "../../../utils/axios-client";
import type { ExportStatisticDataRequest, ExportStatisticDataResponse } from "../../models/BudgetItemStatistics/ExportStatisticData";

      /**
* @link /api/services/app/BudgetItemStatistics/ExportStatisticData
*/
      export function exportStatisticData <TData = ExportStatisticDataResponse, TVariables = ExportStatisticDataRequest>( data: TVariables, ) {
        return client<TData, TVariables>({
          method: "post",
          url: `/api/services/app/BudgetItemStatistics/ExportStatisticData`,
          data,
          
        });
      };
    