
import client from "../../../utils/axios-client";
import type { UpdateAllSettingsRequest, UpdateAllSettingsResponse } from "../../models/HostSettings/UpdateAllSettings";

      /**
* @link /api/services/app/HostSettings/UpdateAllSettings
*/
      export function updateAllSettings <TData = UpdateAllSettingsResponse, TVariables = UpdateAllSettingsRequest>( data: TVariables, ) {
        return client<TData, TVariables>({
          method: "put",
          url: `/api/services/app/HostSettings/UpdateAllSettings`,
          data,
          
        });
      };
    