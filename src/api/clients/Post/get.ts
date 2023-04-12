
import client from "../../../utils/axios-client";
import type { GetResponse, GetQueryParams } from "../../models/Post/Get";

      /**
* @link /api/services/app/Post/Get
*/
      export function get <TData = GetResponse>( params?: GetQueryParams) {
        return client<TData>({
          method: "get",
          url: `/api/services/app/Post/Get`,
          params,
        });
      };
    