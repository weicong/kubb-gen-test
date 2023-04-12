
import client from "../../../utils/axios-client";
import type { GetRecordCountStatisticsResponse, GetRecordCountStatisticsQueryParams } from "../../models/BudgetAllocationOrganizationUnitQuarterStatus/GetRecordCountStatistics";

      /**
* @link /api/services/app/BudgetAllocationOrganizationUnitQuarterStatus/GetRecordCountStatistics
*/
      export function getRecordCountStatistics <TData = GetRecordCountStatisticsResponse>( params?: GetRecordCountStatisticsQueryParams) {
        return client<TData>({
          method: "get",
          url: `/api/services/app/BudgetAllocationOrganizationUnitQuarterStatus/GetRecordCountStatistics`,
          params,
        });
      };
    