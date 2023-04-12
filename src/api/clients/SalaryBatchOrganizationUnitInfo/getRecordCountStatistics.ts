
import client from "../../../utils/axios-client";
import type { GetRecordCountStatisticsResponse, GetRecordCountStatisticsQueryParams } from "../../models/SalaryBatchOrganizationUnitInfo/GetRecordCountStatistics";

      /**
* @link /api/services/app/SalaryBatchOrganizationUnitInfo/GetRecordCountStatistics
*/
      export function getRecordCountStatistics <TData = GetRecordCountStatisticsResponse>( params?: GetRecordCountStatisticsQueryParams) {
        return client<TData>({
          method: "get",
          url: `/api/services/app/SalaryBatchOrganizationUnitInfo/GetRecordCountStatistics`,
          params,
        });
      };
    