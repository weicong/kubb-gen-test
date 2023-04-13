
import client from "../../../utils/axios-client";
import type { GetAllResponse, GetAllQueryParams } from "../../models/RoleModels/GetAll";

      /**
* @link /api/services/app/Role/GetAll
*/
      export function getAll <TData = GetAllResponse>( params?: GetAllQueryParams) {
        return client<TData>({
          method: "get",
          url: `/api/services/app/Role/GetAll`,
          params,
        });
      };
    