
import client from "../../../utils/axios-client";
import type { GetRoleForEditResponse, GetRoleForEditQueryParams } from "../../models/RoleModels/GetRoleForEdit";

      /**
* @link /api/services/app/Role/GetRoleForEdit
*/
      export function getRoleForEdit <TData = GetRoleForEditResponse>( params?: GetRoleForEditQueryParams) {
        return client<TData>({
          method: "get",
          url: `/api/services/app/Role/GetRoleForEdit`,
          params,
        });
      };
    