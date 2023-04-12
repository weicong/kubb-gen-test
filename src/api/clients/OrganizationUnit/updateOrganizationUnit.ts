
import client from "../../../utils/axios-client";
import type { UpdateOrganizationUnitRequest, UpdateOrganizationUnitResponse } from "../../models/OrganizationUnit/UpdateOrganizationUnit";

      /**
* @link /api/services/app/OrganizationUnit/UpdateOrganizationUnit
*/
      export function updateOrganizationUnit <TData = UpdateOrganizationUnitResponse, TVariables = UpdateOrganizationUnitRequest>( data: TVariables, ) {
        return client<TData, TVariables>({
          method: "put",
          url: `/api/services/app/OrganizationUnit/UpdateOrganizationUnit`,
          data,
          
        });
      };
    