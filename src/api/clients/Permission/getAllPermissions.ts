
import client from "../../../utils/axios-client";
import type { GetAllPermissionsResponse } from "../../models/Permission/GetAllPermissions";

      /**
* @link /api/services/app/Permission/GetAllPermissions
*/
      export function getAllPermissions <TData = GetAllPermissionsResponse>( ) {
        return client<TData>({
          method: "get",
          url: `/api/services/app/Permission/GetAllPermissions`,
          
        });
      };
    