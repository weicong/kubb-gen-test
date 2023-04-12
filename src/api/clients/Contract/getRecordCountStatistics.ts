
import client from "../../../utils/axios-client";
import type { GetRecordCountStatisticsResponse, GetRecordCountStatisticsQueryParams } from "../../models/Contract/GetRecordCountStatistics";

      /**
* @link /api/services/app/Contract/GetRecordCountStatistics
*/
      export function getRecordCountStatistics <TData = GetRecordCountStatisticsResponse>( params?: GetRecordCountStatisticsQueryParams) {
        return client<TData>({
          method: "get",
          url: `/api/services/app/Contract/GetRecordCountStatistics`,
          params,
        });
      };
    