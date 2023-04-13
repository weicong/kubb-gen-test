
import client from "../../../utils/axios-client";
import type { GetAllPermissionsResponse } from "../../models/RoleModels/GetAllPermissions";

      /**
* @link /api/services/app/Role/GetAllPermissions
*/
      export function getAllPermissions <TData = GetAllPermissionsResponse>( ) {
        return client<TData>({
          method: "get",
          url: `/api/services/app/Role/GetAllPermissions`,
          
        });
      };
    