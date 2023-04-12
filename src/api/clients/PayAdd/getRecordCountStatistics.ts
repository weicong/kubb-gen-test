
import client from "../../../utils/axios-client";
import type { GetRecordCountStatisticsResponse, GetRecordCountStatisticsQueryParams } from "../../models/PayAdd/GetRecordCountStatistics";

      /**
* @link /api/services/app/PayAdd/GetRecordCountStatistics
*/
      export function getRecordCountStatistics <TData = GetRecordCountStatisticsResponse>( params?: GetRecordCountStatisticsQueryParams) {
        return client<TData>({
          method: "get",
          url: `/api/services/app/PayAdd/GetRecordCountStatistics`,
          params,
        });
      };
    