
import client from "../../../utils/axios-client";
import type { MarkAllUnreadMessagesOfUserAsReadRequest, MarkAllUnreadMessagesOfUserAsReadResponse } from "../../models/Chat/MarkAllUnreadMessagesOfUserAsRead";

      /**
* @link /api/services/app/Chat/MarkAllUnreadMessagesOfUserAsRead
*/
      export function markAllUnreadMessagesOfUserAsRead <TData = MarkAllUnreadMessagesOfUserAsReadResponse, TVariables = MarkAllUnreadMessagesOfUserAsReadRequest>( data: TVariables, ) {
        return client<TData, TVariables>({
          method: "post",
          url: `/api/services/app/Chat/MarkAllUnreadMessagesOfUserAsRead`,
          data,
          
        });
      };
    