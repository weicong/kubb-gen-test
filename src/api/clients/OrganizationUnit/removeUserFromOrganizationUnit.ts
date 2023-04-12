
import client from "../../../utils/axios-client";
import type { RemoveUserFromOrganizationUnitRequest, RemoveUserFromOrganizationUnitResponse, RemoveUserFromOrganizationUnitQueryParams } from "../../models/OrganizationUnit/RemoveUserFromOrganizationUnit";

      /**
* @link /api/services/app/OrganizationUnit/RemoveUserFromOrganizationUnit
*/
      export function removeUserFromOrganizationUnit <TData = RemoveUserFromOrganizationUnitResponse, TVariables = RemoveUserFromOrganizationUnitRequest>( data: TVariables, params?: RemoveUserFromOrganizationUnitQueryParams) {
        return client<TData, TVariables>({
          method: "delete",
          url: `/api/services/app/OrganizationUnit/RemoveUserFromOrganizationUnit`,
          data,
          params,
        });
      };
    