
import client from "../../../utils/axios-client";
import type { GetTenantsResponse, GetTenantsQueryParams } from "../../models/Tenant/GetTenants";

      /**
* @link /api/services/app/Tenant/GetTenants
*/
      export function getTenants <TData = GetTenantsResponse>( params?: GetTenantsQueryParams) {
        return client<TData>({
          method: "get",
          url: `/api/services/app/Tenant/GetTenants`,
          params,
        });
      };
    