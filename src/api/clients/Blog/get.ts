
import client from "../../../utils/axios-client";
import type { GetResponse, GetQueryParams } from "../../models/Blog/Get";

      /**
* @link /api/services/app/Blog/Get
*/
      export function get <TData = GetResponse>( params?: GetQueryParams) {
        return client<TData>({
          method: "get",
          url: `/api/services/app/Blog/Get`,
          params,
        });
      };
    