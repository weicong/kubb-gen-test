
import client from "../../../utils/axios-client";
import type { IsTenantAvailableRequest, IsTenantAvailableResponse } from "../../models/Account/IsTenantAvailable";

      /**
* @link /api/services/app/Account/IsTenantAvailable
*/
      export function isTenantAvailable <TData = IsTenantAvailableResponse, TVariables = IsTenantAvailableRequest>( data: TVariables, ) {
        return client<TData, TVariables>({
          method: "post",
          url: `/api/services/app/Account/IsTenantAvailable`,
          data,
          
        });
      };
    