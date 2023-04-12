
import client from "../../../utils/axios-client";
import type { UpdateNotificationSettingsRequest, UpdateNotificationSettingsResponse } from "../../models/Notification/UpdateNotificationSettings";

      /**
* @link /api/services/app/Notification/UpdateNotificationSettings
*/
      export function updateNotificationSettings <TData = UpdateNotificationSettingsResponse, TVariables = UpdateNotificationSettingsRequest>( data: TVariables, ) {
        return client<TData, TVariables>({
          method: "put",
          url: `/api/services/app/Notification/UpdateNotificationSettings`,
          data,
          
        });
      };
    