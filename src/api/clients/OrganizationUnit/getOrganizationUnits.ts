
import client from "../../../utils/axios-client";
import type { GetOrganizationUnitsResponse } from "../../models/OrganizationUnit/GetOrganizationUnits";

      /**
* @link /api/services/app/OrganizationUnit/GetOrganizationUnits
*/
      export function getOrganizationUnits <TData = GetOrganizationUnitsResponse>( ) {
        return client<TData>({
          method: "get",
          url: `/api/services/app/OrganizationUnit/GetOrganizationUnits`,
          
        });
      };
    