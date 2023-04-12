
import client from "../../../utils/axios-client";
import type { DeleteRoleRequest, DeleteRoleResponse, DeleteRoleQueryParams } from "../../models/Role/DeleteRole";

      /**
* @link /api/services/app/Role/DeleteRole
*/
      export function deleteRole <TData = DeleteRoleResponse, TVariables = DeleteRoleRequest>( data: TVariables, params?: DeleteRoleQueryParams) {
        return client<TData, TVariables>({
          method: "delete",
          url: `/api/services/app/Role/DeleteRole`,
          data,
          params,
        });
      };
    