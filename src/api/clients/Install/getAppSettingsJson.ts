
import client from "../../../utils/axios-client";
import type { GetAppSettingsJsonResponse } from "../../models/Install/GetAppSettingsJson";

      /**
* @link /api/services/app/Install/GetAppSettingsJson
*/
      export function getAppSettingsJson <TData = GetAppSettingsJsonResponse>( ) {
        return client<TData>({
          method: "get",
          url: `/api/services/app/Install/GetAppSettingsJson`,
          
        });
      };
    