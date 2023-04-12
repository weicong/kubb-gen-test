
import client from "../../../utils/axios-client";
import type { UpdateTenantRequest, UpdateTenantResponse } from "../../models/Tenant/UpdateTenant";

      /**
* @link /api/services/app/Tenant/UpdateTenant
*/
      export function updateTenant <TData = UpdateTenantResponse, TVariables = UpdateTenantRequest>( data: TVariables, ) {
        return client<TData, TVariables>({
          method: "put",
          url: `/api/services/app/Tenant/UpdateTenant`,
          data,
          
        });
      };
    