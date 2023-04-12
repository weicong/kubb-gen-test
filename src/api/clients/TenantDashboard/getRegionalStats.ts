
import client from "../../../utils/axios-client";
import type { GetRegionalStatsResponse } from "../../models/TenantDashboard/GetRegionalStats";

      /**
* @link /api/services/app/TenantDashboard/GetRegionalStats
*/
      export function getRegionalStats <TData = GetRegionalStatsResponse>( ) {
        return client<TData>({
          method: "get",
          url: `/api/services/app/TenantDashboard/GetRegionalStats`,
          
        });
      };
    