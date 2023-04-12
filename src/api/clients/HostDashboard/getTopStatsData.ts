
import client from "../../../utils/axios-client";
import type { GetTopStatsDataResponse, GetTopStatsDataQueryParams } from "../../models/HostDashboard/GetTopStatsData";

      /**
* @link /api/services/app/HostDashboard/GetTopStatsData
*/
      export function getTopStatsData <TData = GetTopStatsDataResponse>( params?: GetTopStatsDataQueryParams) {
        return client<TData>({
          method: "get",
          url: `/api/services/app/HostDashboard/GetTopStatsData`,
          params,
        });
      };
    