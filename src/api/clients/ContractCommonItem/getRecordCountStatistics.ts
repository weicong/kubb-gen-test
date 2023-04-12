
import client from "../../../utils/axios-client";
import type { GetRecordCountStatisticsResponse, GetRecordCountStatisticsQueryParams } from "../../models/ContractCommonItem/GetRecordCountStatistics";

      /**
* @link /api/services/app/ContractCommonItem/GetRecordCountStatistics
*/
      export function getRecordCountStatistics <TData = GetRecordCountStatisticsResponse>( params?: GetRecordCountStatisticsQueryParams) {
        return client<TData>({
          method: "get",
          url: `/api/services/app/ContractCommonItem/GetRecordCountStatistics`,
          params,
        });
      };
    