
import client from "../../../utils/axios-client";
import type { GetListResponse, GetListQueryParams } from "../../models/Evaluation/GetList";

      /**
* @link /api/services/app/Evaluation/GetList
*/
      export function getList <TData = GetListResponse>( params?: GetListQueryParams) {
        return client<TData>({
          method: "get",
          url: `/api/services/app/Evaluation/GetList`,
          params,
        });
      };
    