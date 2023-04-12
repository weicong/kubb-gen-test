
import client from "../../../utils/axios-client";
import type { FindRolesRequest, FindRolesResponse } from "../../models/OrganizationUnit/FindRoles";

      /**
* @link /api/services/app/OrganizationUnit/FindRoles
*/
      export function findRoles <TData = FindRolesResponse, TVariables = FindRolesRequest>( data: TVariables, ) {
        return client<TData, TVariables>({
          method: "post",
          url: `/api/services/app/OrganizationUnit/FindRoles`,
          data,
          
        });
      };
    