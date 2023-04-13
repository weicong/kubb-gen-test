
import client from "../../../utils/axios-client";
import type { GetResponse, GetQueryParams } from "../../models/UserModels/Get";

      /**
* @link /api/services/app/User/Get
*/
      export function get <TData = GetResponse>( params?: GetQueryParams) {
        return client<TData>({
          method: "get",
          url: `/api/services/app/User/Get`,
          params,
        });
      };
    