
import client from "../../../utils/axios-client";
import type { ResetTenantSpecificFeaturesRequest, ResetTenantSpecificFeaturesResponse } from "../../models/Tenant/ResetTenantSpecificFeatures";

      /**
* @link /api/services/app/Tenant/ResetTenantSpecificFeatures
*/
      export function resetTenantSpecificFeatures <TData = ResetTenantSpecificFeaturesResponse, TVariables = ResetTenantSpecificFeaturesRequest>( data: TVariables, ) {
        return client<TData, TVariables>({
          method: "post",
          url: `/api/services/app/Tenant/ResetTenantSpecificFeatures`,
          data,
          
        });
      };
    