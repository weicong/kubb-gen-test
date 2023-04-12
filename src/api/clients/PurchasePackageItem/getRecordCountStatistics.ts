
import client from "../../../utils/axios-client";
import type { GetRecordCountStatisticsResponse, GetRecordCountStatisticsQueryParams } from "../../models/PurchasePackageItem/GetRecordCountStatistics";

      /**
* @link /api/services/app/PurchasePackageItem/GetRecordCountStatistics
*/
      export function getRecordCountStatistics <TData = GetRecordCountStatisticsResponse>( params?: GetRecordCountStatisticsQueryParams) {
        return client<TData>({
          method: "get",
          url: `/api/services/app/PurchasePackageItem/GetRecordCountStatistics`,
          params,
        });
      };
    