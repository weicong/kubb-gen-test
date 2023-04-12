
import client from "../../../utils/axios-client";
import type { DeleteTenantRequest, DeleteTenantResponse, DeleteTenantQueryParams } from "../../models/Tenant/DeleteTenant";

      /**
* @link /api/services/app/Tenant/DeleteTenant
*/
      export function deleteTenant <TData = DeleteTenantResponse, TVariables = DeleteTenantRequest>( data: TVariables, params?: DeleteTenantQueryParams) {
        return client<TData, TVariables>({
          method: "delete",
          url: `/api/services/app/Tenant/DeleteTenant`,
          data,
          params,
        });
      };
    