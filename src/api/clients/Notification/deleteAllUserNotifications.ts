
import client from "../../../utils/axios-client";
import type { DeleteAllUserNotificationsRequest, DeleteAllUserNotificationsResponse, DeleteAllUserNotificationsQueryParams } from "../../models/Notification/DeleteAllUserNotifications";

      /**
* @link /api/services/app/Notification/DeleteAllUserNotifications
*/
      export function deleteAllUserNotifications <TData = DeleteAllUserNotificationsResponse, TVariables = DeleteAllUserNotificationsRequest>( data: TVariables, params?: DeleteAllUserNotificationsQueryParams) {
        return client<TData, TVariables>({
          method: "delete",
          url: `/api/services/app/Notification/DeleteAllUserNotifications`,
          data,
          params,
        });
      };
    