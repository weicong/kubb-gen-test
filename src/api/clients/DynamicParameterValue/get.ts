
import client from "../../../utils/axios-client";
import type { GetResponse, GetQueryParams } from "../../models/DynamicParameterValue/Get";

      /**
* @link /api/services/app/DynamicParameterValue/Get
*/
      export function get <TData = GetResponse>( params?: GetQueryParams) {
        return client<TData>({
          method: "get",
          url: `/api/services/app/DynamicParameterValue/Get`,
          params,
        });
      };
    