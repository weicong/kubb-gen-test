
import client from "../../../utils/axios-client";
import type { GetAllSettingsResponse } from "../../models/TenantSettings/GetAllSettings";

      /**
* @link /api/services/app/TenantSettings/GetAllSettings
*/
      export function getAllSettings <TData = GetAllSettingsResponse>( ) {
        return client<TData>({
          method: "get",
          url: `/api/services/app/TenantSettings/GetAllSettings`,
          
        });
      };
    