
import client from "../../../utils/axios-client";
import type { RemoveRoleFromOrganizationUnitRequest, RemoveRoleFromOrganizationUnitResponse, RemoveRoleFromOrganizationUnitQueryParams } from "../../models/OrganizationUnit/RemoveRoleFromOrganizationUnit";

      /**
* @link /api/services/app/OrganizationUnit/RemoveRoleFromOrganizationUnit
*/
      export function removeRoleFromOrganizationUnit <TData = RemoveRoleFromOrganizationUnitResponse, TVariables = RemoveRoleFromOrganizationUnitRequest>( data: TVariables, params?: RemoveRoleFromOrganizationUnitQueryParams) {
        return client<TData, TVariables>({
          method: "delete",
          url: `/api/services/app/OrganizationUnit/RemoveRoleFromOrganizationUnit`,
          data,
          params,
        });
      };
    