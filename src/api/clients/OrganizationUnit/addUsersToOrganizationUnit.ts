
import client from "../../../utils/axios-client";
import type { AddUsersToOrganizationUnitRequest, AddUsersToOrganizationUnitResponse } from "../../models/OrganizationUnit/AddUsersToOrganizationUnit";

      /**
* @link /api/services/app/OrganizationUnit/AddUsersToOrganizationUnit
*/
      export function addUsersToOrganizationUnit <TData = AddUsersToOrganizationUnitResponse, TVariables = AddUsersToOrganizationUnitRequest>( data: TVariables, ) {
        return client<TData, TVariables>({
          method: "post",
          url: `/api/services/app/OrganizationUnit/AddUsersToOrganizationUnit`,
          data,
          
        });
      };
    