
import client from "../../../utils/axios-client";
import type { GetResponse, GetQueryParams } from "../../models/AssetFixedReport/Get";

      /**
* @link /api/services/app/AssetFixedReport/Get
*/
      export function get <TData = GetResponse>( params?: GetQueryParams) {
        return client<TData>({
          method: "get",
          url: `/api/services/app/AssetFixedReport/Get`,
          params,
        });
      };
    