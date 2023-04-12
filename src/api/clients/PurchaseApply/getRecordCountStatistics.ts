
import client from "../../../utils/axios-client";
import type { GetRecordCountStatisticsResponse, GetRecordCountStatisticsQueryParams } from "../../models/PurchaseApply/GetRecordCountStatistics";

      /**
* @link /api/services/app/PurchaseApply/GetRecordCountStatistics
*/
      export function getRecordCountStatistics <TData = GetRecordCountStatisticsResponse>( params?: GetRecordCountStatisticsQueryParams) {
        return client<TData>({
          method: "get",
          url: `/api/services/app/PurchaseApply/GetRecordCountStatistics`,
          params,
        });
      };
    