
import client from "../../../utils/axios-client";
import type { GetGeneralStatsResponse } from "../../models/TenantDashboard/GetGeneralStats";

      /**
* @link /api/services/app/TenantDashboard/GetGeneralStats
*/
      export function getGeneralStats <TData = GetGeneralStatsResponse>( ) {
        return client<TData>({
          method: "get",
          url: `/api/services/app/TenantDashboard/GetGeneralStats`,
          
        });
      };
    