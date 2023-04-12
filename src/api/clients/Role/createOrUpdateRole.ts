
import client from "../../../utils/axios-client";
import type { CreateOrUpdateRoleRequest, CreateOrUpdateRoleResponse } from "../../models/Role/CreateOrUpdateRole";

      /**
* @link /api/services/app/Role/CreateOrUpdateRole
*/
      export function createOrUpdateRole <TData = CreateOrUpdateRoleResponse, TVariables = CreateOrUpdateRoleRequest>( data: TVariables, ) {
        return client<TData, TVariables>({
          method: "post",
          url: `/api/services/app/Role/CreateOrUpdateRole`,
          data,
          
        });
      };
    