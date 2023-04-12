
import client from "../../../utils/axios-client";
import type { MoveOrganizationUnitRequest, MoveOrganizationUnitResponse } from "../../models/OrganizationUnit/MoveOrganizationUnit";

      /**
* @link /api/services/app/OrganizationUnit/MoveOrganizationUnit
*/
      export function moveOrganizationUnit <TData = MoveOrganizationUnitResponse, TVariables = MoveOrganizationUnitRequest>( data: TVariables, ) {
        return client<TData, TVariables>({
          method: "post",
          url: `/api/services/app/OrganizationUnit/MoveOrganizationUnit`,
          data,
          
        });
      };
    