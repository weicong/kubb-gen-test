
import client from "../../../utils/axios-client";
import type { UnlockTenantAdminRequest, UnlockTenantAdminResponse } from "../../models/Tenant/UnlockTenantAdmin";

      /**
* @link /api/services/app/Tenant/UnlockTenantAdmin
*/
      export function unlockTenantAdmin <TData = UnlockTenantAdminResponse, TVariables = UnlockTenantAdminRequest>( data: TVariables, ) {
        return client<TData, TVariables>({
          method: "post",
          url: `/api/services/app/Tenant/UnlockTenantAdmin`,
          data,
          
        });
      };
    