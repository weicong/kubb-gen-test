
import client from "../../../utils/axios-client";
import type { GetUserNotificationsResponse, GetUserNotificationsQueryParams } from "../../models/Notification/GetUserNotifications";

      /**
* @link /api/services/app/Notification/GetUserNotifications
*/
      export function getUserNotifications <TData = GetUserNotificationsResponse>( params?: GetUserNotificationsQueryParams) {
        return client<TData>({
          method: "get",
          url: `/api/services/app/Notification/GetUserNotifications`,
          params,
        });
      };
    