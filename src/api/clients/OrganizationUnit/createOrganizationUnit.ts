
import client from "../../../utils/axios-client";
import type { CreateOrganizationUnitRequest, CreateOrganizationUnitResponse } from "../../models/OrganizationUnit/CreateOrganizationUnit";

      /**
* @link /api/services/app/OrganizationUnit/CreateOrganizationUnit
*/
      export function createOrganizationUnit <TData = CreateOrganizationUnitResponse, TVariables = CreateOrganizationUnitRequest>( data: TVariables, ) {
        return client<TData, TVariables>({
          method: "post",
          url: `/api/services/app/OrganizationUnit/CreateOrganizationUnit`,
          data,
          
        });
      };
    