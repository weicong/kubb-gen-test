
import client from "../../../utils/axios-client";
import type { GetAllSettingsResponse } from "../../models/HostSettings/GetAllSettings";

      /**
* @link /api/services/app/HostSettings/GetAllSettings
*/
      export function getAllSettings <TData = GetAllSettingsResponse>( ) {
        return client<TData>({
          method: "get",
          url: `/api/services/app/HostSettings/GetAllSettings`,
          
        });
      };
    