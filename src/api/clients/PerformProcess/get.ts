
import client from "../../../utils/axios-client";
import type { GetResponse, GetQueryParams } from "../../models/PerformProcess/Get";

      /**
* @link /api/services/app/PerformProcess/Get
*/
      export function get <TData = GetResponse>( params?: GetQueryParams) {
        return client<TData>({
          method: "get",
          url: `/api/services/app/PerformProcess/Get`,
          params,
        });
      };
    