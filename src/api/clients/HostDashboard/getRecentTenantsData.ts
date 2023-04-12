
import client from "../../../utils/axios-client";
import type { GetRecentTenantsDataResponse } from "../../models/HostDashboard/GetRecentTenantsData";

      /**
* @link /api/services/app/HostDashboard/GetRecentTenantsData
*/
      export function getRecentTenantsData <TData = GetRecentTenantsDataResponse>( ) {
        return client<TData>({
          method: "get",
          url: `/api/services/app/HostDashboard/GetRecentTenantsData`,
          
        });
      };
    