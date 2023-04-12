
import client from "../../../utils/axios-client";
import type { SetAllNotificationsAsReadRequest, SetAllNotificationsAsReadResponse } from "../../models/Notification/SetAllNotificationsAsRead";

      /**
* @link /api/services/app/Notification/SetAllNotificationsAsRead
*/
      export function setAllNotificationsAsRead <TData = SetAllNotificationsAsReadResponse, TVariables = SetAllNotificationsAsReadRequest>( data: TVariables, ) {
        return client<TData, TVariables>({
          method: "post",
          url: `/api/services/app/Notification/SetAllNotificationsAsRead`,
          data,
          
        });
      };
    