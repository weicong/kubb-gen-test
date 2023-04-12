
import client from "../../../utils/axios-client";
import type { GetStatisticDataResponse, GetStatisticDataQueryParams } from "../../models/BudgetItemStatistics/GetStatisticData";

      /**
* @link /api/services/app/BudgetItemStatistics/GetStatisticData
*/
      export function getStatisticData <TData = GetStatisticDataResponse>( params?: GetStatisticDataQueryParams) {
        return client<TData>({
          method: "get",
          url: `/api/services/app/BudgetItemStatistics/GetStatisticData`,
          params,
        });
      };
    