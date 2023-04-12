
import client from "../../../utils/axios-client";
import type { GetTotalDataResponse, GetTotalDataQueryParams } from "../../models/SalaryDetail/GetTotalData";

      /**
* @link /api/services/app/SalaryDetail/GetTotalData
*/
      export function getTotalData <TData = GetTotalDataResponse>( params?: GetTotalDataQueryParams) {
        return client<TData>({
          method: "get",
          url: `/api/services/app/SalaryDetail/GetTotalData`,
          params,
        });
      };
    