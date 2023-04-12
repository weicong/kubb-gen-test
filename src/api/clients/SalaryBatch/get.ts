
import client from "../../../utils/axios-client";
import type { GetResponse, GetQueryParams } from "../../models/SalaryBatch/Get";

      /**
* @link /api/services/app/SalaryBatch/Get
*/
      export function get <TData = GetResponse>( params?: GetQueryParams) {
        return client<TData>({
          method: "get",
          url: `/api/services/app/SalaryBatch/Get`,
          params,
        });
      };
    