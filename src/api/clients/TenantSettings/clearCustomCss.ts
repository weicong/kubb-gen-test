
import client from "../../../utils/axios-client";
import type { ClearCustomCssRequest, ClearCustomCssResponse } from "../../models/TenantSettings/ClearCustomCss";

      /**
* @link /api/services/app/TenantSettings/ClearCustomCss
*/
      export function clearCustomCss <TData = ClearCustomCssResponse, TVariables = ClearCustomCssRequest>( data: TVariables, ) {
        return client<TData, TVariables>({
          method: "post",
          url: `/api/services/app/TenantSettings/ClearCustomCss`,
          data,
          
        });
      };
    