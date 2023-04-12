
import client from "../../../utils/axios-client";
import type { DeleteOrganizationUnitRequest, DeleteOrganizationUnitResponse, DeleteOrganizationUnitQueryParams } from "../../models/OrganizationUnit/DeleteOrganizationUnit";

      /**
* @link /api/services/app/OrganizationUnit/DeleteOrganizationUnit
*/
      export function deleteOrganizationUnit <TData = DeleteOrganizationUnitResponse, TVariables = DeleteOrganizationUnitRequest>( data: TVariables, params?: DeleteOrganizationUnitQueryParams) {
        return client<TData, TVariables>({
          method: "delete",
          url: `/api/services/app/OrganizationUnit/DeleteOrganizationUnit`,
          data,
          params,
        });
      };
    