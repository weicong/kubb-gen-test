
import client from "../../../utils/axios-client";
import type { GetAllResponse, GetAllQueryParams } from "../../models/Post/GetAll";

      /**
* @summary 获取全部
* @link /api/services/app/Post/GetAll
*/
      export function getAll <TData = GetAllResponse>( params?: GetAllQueryParams) {
        return client<TData>({
          method: "get",
          url: `/api/services/app/Post/GetAll`,
          params,
        });
      };
    