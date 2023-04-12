
import client from "../../../utils/axios-client";
import type { GetResponse, GetQueryParams } from "../../models/AssetFixed/Get";

      /**
* @link /api/services/app/AssetFixed/Get
*/
      export function get <TData = GetResponse>( params?: GetQueryParams) {
        return client<TData>({
          method: "get",
          url: `/api/services/app/AssetFixed/Get`,
          params,
        });
      };
    