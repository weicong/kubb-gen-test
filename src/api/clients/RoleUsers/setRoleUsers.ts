
import client from "../../../utils/axios-client";
import type { SetRoleUsersRequest, SetRoleUsersResponse } from "../../models/RoleUsers/SetRoleUsers";

      /**
* @link /api/services/app/RoleUsers/SetRoleUsers
*/
      export function setRoleUsers <TData = SetRoleUsersResponse, TVariables = SetRoleUsersRequest>( data: TVariables, ) {
        return client<TData, TVariables>({
          method: "post",
          url: `/api/services/app/RoleUsers/SetRoleUsers`,
          data,
          
        });
      };
    