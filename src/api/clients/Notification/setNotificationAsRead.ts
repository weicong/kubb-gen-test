
import client from "../../../utils/axios-client";
import type { SetNotificationAsReadRequest, SetNotificationAsReadResponse } from "../../models/Notification/SetNotificationAsRead";

      /**
* @link /api/services/app/Notification/SetNotificationAsRead
*/
      export function setNotificationAsRead <TData = SetNotificationAsReadResponse, TVariables = SetNotificationAsReadRequest>( data: TVariables, ) {
        return client<TData, TVariables>({
          method: "post",
          url: `/api/services/app/Notification/SetNotificationAsRead`,
          data,
          
        });
      };
    