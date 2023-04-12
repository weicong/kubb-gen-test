
import client from "../../../utils/axios-client";
import type { GetDashboardDataResponse, GetDashboardDataQueryParams } from "../../models/TenantDashboard/GetDashboardData";

      /**
* @link /api/services/app/TenantDashboard/GetDashboardData
*/
      export function getDashboardData <TData = GetDashboardDataResponse>( params?: GetDashboardDataQueryParams) {
        return client<TData>({
          method: "get",
          url: `/api/services/app/TenantDashboard/GetDashboardData`,
          params,
        });
      };
    