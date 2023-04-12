
import client from "../../../utils/axios-client";
import type { GetNotificationSettingsResponse } from "../../models/Notification/GetNotificationSettings";

      /**
* @link /api/services/app/Notification/GetNotificationSettings
*/
      export function getNotificationSettings <TData = GetNotificationSettingsResponse>( ) {
        return client<TData>({
          method: "get",
          url: `/api/services/app/Notification/GetNotificationSettings`,
          
        });
      };
    