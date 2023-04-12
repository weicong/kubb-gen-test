
import client from "../../../utils/axios-client";
import type { GetTenantCountResponse, GetTenantCountQueryParams } from "../../models/Edition/GetTenantCount";

      /**
* @link /api/services/app/Edition/GetTenantCount
*/
      export function getTenantCount <TData = GetTenantCountResponse>( params?: GetTenantCountQueryParams) {
        return client<TData>({
          method: "get",
          url: `/api/services/app/Edition/GetTenantCount`,
          params,
        });
      };
    