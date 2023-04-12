
import client from "../../../utils/axios-client";
import type { ResetUserSpecificPermissionsRequest, ResetUserSpecificPermissionsResponse } from "../../models/User/ResetUserSpecificPermissions";

      /**
* @link /api/services/app/User/ResetUserSpecificPermissions
*/
      export function resetUserSpecificPermissions <TData = ResetUserSpecificPermissionsResponse, TVariables = ResetUserSpecificPermissionsRequest>( data: TVariables, ) {
        return client<TData, TVariables>({
          method: "post",
          url: `/api/services/app/User/ResetUserSpecificPermissions`,
          data,
          
        });
      };
    