
import client from "../../../utils/axios-client";
import type { GetTopStatsResponse } from "../../models/TenantDashboard/GetTopStats";

      /**
* @link /api/services/app/TenantDashboard/GetTopStats
*/
      export function getTopStats <TData = GetTopStatsResponse>( ) {
        return client<TData>({
          method: "get",
          url: `/api/services/app/TenantDashboard/GetTopStats`,
          
        });
      };
    