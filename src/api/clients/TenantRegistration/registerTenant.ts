
import client from "../../../utils/axios-client";
import type { RegisterTenantRequest, RegisterTenantResponse } from "../../models/TenantRegistration/RegisterTenant";

      /**
* @link /api/services/app/TenantRegistration/RegisterTenant
*/
      export function registerTenant <TData = RegisterTenantResponse, TVariables = RegisterTenantRequest>( data: TVariables, ) {
        return client<TData, TVariables>({
          method: "post",
          url: `/api/services/app/TenantRegistration/RegisterTenant`,
          data,
          
        });
      };
    