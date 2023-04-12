
import client from "../../../utils/axios-client";
import type { GetSeniorUserStatisticsResponse, GetSeniorUserStatisticsQueryParams } from "../../models/SalaryDetail/GetSeniorUserStatistics";

      /**
* @link /api/services/app/SalaryDetail/GetSeniorUserStatistics
*/
      export function getSeniorUserStatistics <TData = GetSeniorUserStatisticsResponse>( params?: GetSeniorUserStatisticsQueryParams) {
        return client<TData>({
          method: "get",
          url: `/api/services/app/SalaryDetail/GetSeniorUserStatistics`,
          params,
        });
      };
    