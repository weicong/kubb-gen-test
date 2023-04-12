
import client from "../../../utils/axios-client";
import type { GetResponse, GetQueryParams } from "../../models/DynamicParameter/Get";

      /**
* @link /api/services/app/DynamicParameter/Get
*/
      export function get <TData = GetResponse>( params?: GetQueryParams) {
        return client<TData>({
          method: "get",
          url: `/api/services/app/DynamicParameter/Get`,
          params,
        });
      };
    