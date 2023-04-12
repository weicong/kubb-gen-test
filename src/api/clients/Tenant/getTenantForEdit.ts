
import client from "../../../utils/axios-client";
import type { GetTenantForEditResponse, GetTenantForEditQueryParams } from "../../models/Tenant/GetTenantForEdit";

      /**
* @link /api/services/app/Tenant/GetTenantForEdit
*/
      export function getTenantForEdit <TData = GetTenantForEditResponse>( params?: GetTenantForEditQueryParams) {
        return client<TData>({
          method: "get",
          url: `/api/services/app/Tenant/GetTenantForEdit`,
          params,
        });
      };
    