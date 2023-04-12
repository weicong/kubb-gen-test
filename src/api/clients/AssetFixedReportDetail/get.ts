
import client from "../../../utils/axios-client";
import type { GetResponse, GetQueryParams } from "../../models/AssetFixedReportDetail/Get";

      /**
* @link /api/services/app/AssetFixedReportDetail/Get
*/
      export function get <TData = GetResponse>( params?: GetQueryParams) {
        return client<TData>({
          method: "get",
          url: `/api/services/app/AssetFixedReportDetail/Get`,
          params,
        });
      };
    