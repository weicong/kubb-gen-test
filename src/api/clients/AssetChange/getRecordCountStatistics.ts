
import client from "../../../utils/axios-client";
import type { GetRecordCountStatisticsResponse, GetRecordCountStatisticsQueryParams } from "../../models/AssetChange/GetRecordCountStatistics";

      /**
* @link /api/services/app/AssetChange/GetRecordCountStatistics
*/
      export function getRecordCountStatistics <TData = GetRecordCountStatisticsResponse>( params?: GetRecordCountStatisticsQueryParams) {
        return client<TData>({
          method: "get",
          url: `/api/services/app/AssetChange/GetRecordCountStatistics`,
          params,
        });
      };
    