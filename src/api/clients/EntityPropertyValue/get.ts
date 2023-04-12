
import client from "../../../utils/axios-client";
import type { GetResponse, GetQueryParams } from "../../models/EntityPropertyValue/Get";

      /**
* @link /api/services/app/EntityPropertyValue/Get
*/
      export function get <TData = GetResponse>( params?: GetQueryParams) {
        return client<TData>({
          method: "get",
          url: `/api/services/app/EntityPropertyValue/Get`,
          params,
        });
      };
    