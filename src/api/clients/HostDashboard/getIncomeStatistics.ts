
import client from "../../../utils/axios-client";
import type { GetIncomeStatisticsResponse, GetIncomeStatisticsQueryParams } from "../../models/HostDashboard/GetIncomeStatistics";

      /**
* @link /api/services/app/HostDashboard/GetIncomeStatistics
*/
      export function getIncomeStatistics <TData = GetIncomeStatisticsResponse>( params?: GetIncomeStatisticsQueryParams) {
        return client<TData>({
          method: "get",
          url: `/api/services/app/HostDashboard/GetIncomeStatistics`,
          params,
        });
      };
    