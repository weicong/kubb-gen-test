
import client from "../../../utils/axios-client";
import type { GetOrganizationUnitsResponse, GetOrganizationUnitsQueryParams } from "../../models/ExpenditureCatalog/GetOrganizationUnits";

      /**
* @link /api/services/app/ExpenditureCatalog/GetOrganizationUnits
*/
      export function getOrganizationUnits <TData = GetOrganizationUnitsResponse>( params?: GetOrganizationUnitsQueryParams) {
        return client<TData>({
          method: "get",
          url: `/api/services/app/ExpenditureCatalog/GetOrganizationUnits`,
          params,
        });
      };
    