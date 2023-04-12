
import client from "../../../utils/axios-client";
import type { GetRolesResponse, GetRolesQueryParams } from "../../models/Role/GetRoles";

      /**
* @link /api/services/app/Role/GetRoles
*/
      export function getRoles <TData = GetRolesResponse>( params?: GetRolesQueryParams) {
        return client<TData>({
          method: "get",
          url: `/api/services/app/Role/GetRoles`,
          params,
        });
      };
    