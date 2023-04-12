
import client from "../../../utils/axios-client";
import type { DeleteNotificationRequest, DeleteNotificationResponse, DeleteNotificationQueryParams } from "../../models/Notification/DeleteNotification";

      /**
* @link /api/services/app/Notification/DeleteNotification
*/
      export function deleteNotification <TData = DeleteNotificationResponse, TVariables = DeleteNotificationRequest>( data: TVariables, params?: DeleteNotificationQueryParams) {
        return client<TData, TVariables>({
          method: "delete",
          url: `/api/services/app/Notification/DeleteNotification`,
          data,
          params,
        });
      };
    