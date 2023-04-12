
import client from "../../../utils/axios-client";
import type { GetAllResponse, GetAllQueryParams } from "../../models/AssetFixedReportDetail/GetAll";

      /**
* @link /api/services/app/AssetFixedReportDetail/GetAll
*/
      export function getAll <TData = GetAllResponse>( params?: GetAllQueryParams) {
        return client<TData>({
          method: "get",
          url: `/api/services/app/AssetFixedReportDetail/GetAll`,
          params,
        });
      };
    