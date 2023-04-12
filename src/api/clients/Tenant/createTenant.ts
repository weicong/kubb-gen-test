
import client from "../../../utils/axios-client";
import type { CreateTenantRequest, CreateTenantResponse } from "../../models/Tenant/CreateTenant";

      /**
* @link /api/services/app/Tenant/CreateTenant
*/
      export function createTenant <TData = CreateTenantResponse, TVariables = CreateTenantRequest>( data: TVariables, ) {
        return client<TData, TVariables>({
          method: "post",
          url: `/api/services/app/Tenant/CreateTenant`,
          data,
          
        });
      };
    