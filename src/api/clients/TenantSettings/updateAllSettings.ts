
import client from "../../../utils/axios-client";
import type { UpdateAllSettingsRequest, UpdateAllSettingsResponse } from "../../models/TenantSettings/UpdateAllSettings";

      /**
* @link /api/services/app/TenantSettings/UpdateAllSettings
*/
      export function updateAllSettings <TData = UpdateAllSettingsResponse, TVariables = UpdateAllSettingsRequest>( data: TVariables, ) {
        return client<TData, TVariables>({
          method: "put",
          url: `/api/services/app/TenantSettings/UpdateAllSettings`,
          data,
          
        });
      };
    