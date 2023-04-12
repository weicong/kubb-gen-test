
import client from "../../../utils/axios-client";
import type { UpdateUserPermissionsRequest, UpdateUserPermissionsResponse } from "../../models/User/UpdateUserPermissions";

      /**
* @link /api/services/app/User/UpdateUserPermissions
*/
      export function updateUserPermissions <TData = UpdateUserPermissionsResponse, TVariables = UpdateUserPermissionsRequest>( data: TVariables, ) {
        return client<TData, TVariables>({
          method: "put",
          url: `/api/services/app/User/UpdateUserPermissions`,
          data,
          
        });
      };
    