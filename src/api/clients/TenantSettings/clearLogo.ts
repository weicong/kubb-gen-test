
import client from "../../../utils/axios-client";
import type { ClearLogoRequest, ClearLogoResponse } from "../../models/TenantSettings/ClearLogo";

      /**
* @link /api/services/app/TenantSettings/ClearLogo
*/
      export function clearLogo <TData = ClearLogoResponse, TVariables = ClearLogoRequest>( data: TVariables, ) {
        return client<TData, TVariables>({
          method: "post",
          url: `/api/services/app/TenantSettings/ClearLogo`,
          data,
          
        });
      };
    