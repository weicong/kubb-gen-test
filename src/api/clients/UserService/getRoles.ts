
import client from "../../../utils/axios-client";
import type { GetRolesResponse } from "../../models/UserModels/GetRoles";

      /**
* @link /api/services/app/User/GetRoles
*/
      export function getRoles <TData = GetRolesResponse>( ) {
        return client<TData>({
          method: "get",
          url: `/api/services/app/User/GetRoles`,
          
        });
      };
    