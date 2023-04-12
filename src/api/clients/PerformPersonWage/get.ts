
import client from "../../../utils/axios-client";
import type { GetResponse, GetQueryParams } from "../../models/PerformPersonWage/Get";

      /**
* @link /api/services/app/PerformPersonWage/Get
*/
      export function get <TData = GetResponse>( params?: GetQueryParams) {
        return client<TData>({
          method: "get",
          url: `/api/services/app/PerformPersonWage/Get`,
          params,
        });
      };
    