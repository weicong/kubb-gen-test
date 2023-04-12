
import client from "../../../utils/axios-client";
import type { GetTenantFeaturesForEditResponse, GetTenantFeaturesForEditQueryParams } from "../../models/Tenant/GetTenantFeaturesForEdit";

      /**
* @link /api/services/app/Tenant/GetTenantFeaturesForEdit
*/
      export function getTenantFeaturesForEdit <TData = GetTenantFeaturesForEditResponse>( params?: GetTenantFeaturesForEditQueryParams) {
        return client<TData>({
          method: "get",
          url: `/api/services/app/Tenant/GetTenantFeaturesForEdit`,
          params,
        });
      };
    