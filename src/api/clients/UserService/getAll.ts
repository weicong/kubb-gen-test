
import client from "../../../utils/axios-client";
import type { GetAllResponse, GetAllQueryParams } from "../../models/UserModels/GetAll";

      /**
* @link /api/services/app/User/GetAll
*/
      export function getAll <TData = GetAllResponse>( params?: GetAllQueryParams) {
        return client<TData>({
          method: "get",
          url: `/api/services/app/User/GetAll`,
          params,
        });
      };
    