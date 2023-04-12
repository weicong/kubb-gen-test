
import client from "../../../utils/axios-client";
import type { AddRolesToOrganizationUnitRequest, AddRolesToOrganizationUnitResponse } from "../../models/OrganizationUnit/AddRolesToOrganizationUnit";

      /**
* @link /api/services/app/OrganizationUnit/AddRolesToOrganizationUnit
*/
      export function addRolesToOrganizationUnit <TData = AddRolesToOrganizationUnitResponse, TVariables = AddRolesToOrganizationUnitRequest>( data: TVariables, ) {
        return client<TData, TVariables>({
          method: "post",
          url: `/api/services/app/OrganizationUnit/AddRolesToOrganizationUnit`,
          data,
          
        });
      };
    