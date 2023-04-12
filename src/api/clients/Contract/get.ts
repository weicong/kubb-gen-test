
import client from "../../../utils/axios-client";
import type { GetResponse, GetQueryParams } from "../../models/Contract/Get";

      /**
* @summary 获取单条 Dto
* @link /api/services/app/Contract/Get
*/
      export function get <TData = GetResponse>( params?: GetQueryParams) {
        return client<TData>({
          method: "get",
          url: `/api/services/app/Contract/Get`,
          params,
        });
      };
    