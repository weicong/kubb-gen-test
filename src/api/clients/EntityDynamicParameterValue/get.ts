
import client from "../../../utils/axios-client";
import type { GetResponse, GetQueryParams } from "../../models/EntityDynamicParameterValue/Get";

      /**
* @link /api/services/app/EntityDynamicParameterValue/Get
*/
      export function get <TData = GetResponse>( params?: GetQueryParams) {
        return client<TData>({
          method: "get",
          url: `/api/services/app/EntityDynamicParameterValue/Get`,
          params,
        });
      };
    