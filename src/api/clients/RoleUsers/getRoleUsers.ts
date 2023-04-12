
import client from "../../../utils/axios-client";
import type { GetRoleUsersResponse, GetRoleUsersQueryParams } from "../../models/RoleUsers/GetRoleUsers";

      /**
* @link /api/services/app/RoleUsers/GetRoleUsers
*/
      export function getRoleUsers <TData = GetRoleUsersResponse>( params?: GetRoleUsersQueryParams) {
        return client<TData>({
          method: "get",
          url: `/api/services/app/RoleUsers/GetRoleUsers`,
          params,
        });
      };
    