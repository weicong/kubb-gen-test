
import client from "../../../utils/axios-client";
import type { GetRecordCountStatisticsResponse, GetRecordCountStatisticsQueryParams } from "../../models/PayAdjust/GetRecordCountStatistics";

      /**
* @link /api/services/app/PayAdjust/GetRecordCountStatistics
*/
      export function getRecordCountStatistics <TData = GetRecordCountStatisticsResponse>( params?: GetRecordCountStatisticsQueryParams) {
        return client<TData>({
          method: "get",
          url: `/api/services/app/PayAdjust/GetRecordCountStatistics`,
          params,
        });
      };
    