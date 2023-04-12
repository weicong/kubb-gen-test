
import client from "../../../utils/axios-client";
import type { GetUsersResponse, GetUsersQueryParams } from "../../models/User/GetUsers";

      /**
* @link /api/services/app/User/GetUsers
*/
      export function getUsers <TData = GetUsersResponse>( params?: GetUsersQueryParams) {
        return client<TData>({
          method: "get",
          url: `/api/services/app/User/GetUsers`,
          params,
        });
      };
    