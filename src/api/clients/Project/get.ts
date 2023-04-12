
import client from "../../../utils/axios-client";
import type { GetResponse, GetQueryParams } from "../../models/Project/Get";

      /**
* @link /api/services/app/Project/Get
*/
      export function get <TData = GetResponse>( params?: GetQueryParams) {
        return client<TData>({
          method: "get",
          url: `/api/services/app/Project/Get`,
          params,
        });
      };
    