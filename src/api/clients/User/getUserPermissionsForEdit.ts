
import client from "../../../utils/axios-client";
import type { GetUserPermissionsForEditResponse, GetUserPermissionsForEditQueryParams } from "../../models/User/GetUserPermissionsForEdit";

      /**
* @link /api/services/app/User/GetUserPermissionsForEdit
*/
      export function getUserPermissionsForEdit <TData = GetUserPermissionsForEditResponse>( params?: GetUserPermissionsForEditQueryParams) {
        return client<TData>({
          method: "get",
          url: `/api/services/app/User/GetUserPermissionsForEdit`,
          params,
        });
      };
    