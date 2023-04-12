
import client from "../../../utils/axios-client";
import type { GetEditionTenantStatisticsResponse, GetEditionTenantStatisticsQueryParams } from "../../models/HostDashboard/GetEditionTenantStatistics";

      /**
* @link /api/services/app/HostDashboard/GetEditionTenantStatistics
*/
      export function getEditionTenantStatistics <TData = GetEditionTenantStatisticsResponse>( params?: GetEditionTenantStatisticsQueryParams) {
        return client<TData>({
          method: "get",
          url: `/api/services/app/HostDashboard/GetEditionTenantStatistics`,
          params,
        });
      };
    