
import client from "../../../utils/axios-client";
import type { ResolveTenantIdRequest, ResolveTenantIdResponse } from "../../models/Account/ResolveTenantId";

      /**
* @link /api/services/app/Account/ResolveTenantId
*/
      export function resolveTenantId <TData = ResolveTenantIdResponse, TVariables = ResolveTenantIdRequest>( data: TVariables, ) {
        return client<TData, TVariables>({
          method: "post",
          url: `/api/services/app/Account/ResolveTenantId`,
          data,
          
        });
      };
    