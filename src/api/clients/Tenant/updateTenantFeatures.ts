
import client from "../../../utils/axios-client";
import type { UpdateTenantFeaturesRequest, UpdateTenantFeaturesResponse } from "../../models/Tenant/UpdateTenantFeatures";

      /**
* @link /api/services/app/Tenant/UpdateTenantFeatures
*/
      export function updateTenantFeatures <TData = UpdateTenantFeaturesResponse, TVariables = UpdateTenantFeaturesRequest>( data: TVariables, ) {
        return client<TData, TVariables>({
          method: "put",
          url: `/api/services/app/Tenant/UpdateTenantFeatures`,
          data,
          
        });
      };
    