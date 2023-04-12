
import client from "../../../utils/axios-client";
import type { GetOrganizationUnitRolesResponse, GetOrganizationUnitRolesQueryParams } from "../../models/OrganizationUnit/GetOrganizationUnitRoles";

      /**
* @link /api/services/app/OrganizationUnit/GetOrganizationUnitRoles
*/
      export function getOrganizationUnitRoles <TData = GetOrganizationUnitRolesResponse>( params?: GetOrganizationUnitRolesQueryParams) {
        return client<TData>({
          method: "get",
          url: `/api/services/app/OrganizationUnit/GetOrganizationUnitRoles`,
          params,
        });
      };
    