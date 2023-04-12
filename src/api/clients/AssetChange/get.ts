
import client from "../../../utils/axios-client";
import type { GetResponse, GetQueryParams } from "../../models/AssetChange/Get";

      /**
* @summary 获取单条 Dto
* @link /api/services/app/AssetChange/Get
*/
      export function get <TData = GetResponse>( params?: GetQueryParams) {
        return client<TData>({
          method: "get",
          url: `/api/services/app/AssetChange/Get`,
          params,
        });
      };
    