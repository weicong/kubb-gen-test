
import client from "../../../utils/axios-client";
import type { GetResponse, GetQueryParams } from "../../models/EntityDynamicParameter/Get";

      /**
* @link /api/services/app/EntityDynamicParameter/Get
*/
      export function get <TData = GetResponse>( params?: GetQueryParams) {
        return client<TData>({
          method: "get",
          url: `/api/services/app/EntityDynamicParameter/Get`,
          params,
        });
      };
    