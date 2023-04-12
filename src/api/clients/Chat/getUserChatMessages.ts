
import client from "../../../utils/axios-client";
import type { GetUserChatMessagesResponse, GetUserChatMessagesQueryParams } from "../../models/Chat/GetUserChatMessages";

      /**
* @link /api/services/app/Chat/GetUserChatMessages
*/
      export function getUserChatMessages <TData = GetUserChatMessagesResponse>( params?: GetUserChatMessagesQueryParams) {
        return client<TData>({
          method: "get",
          url: `/api/services/app/Chat/GetUserChatMessages`,
          params,
        });
      };
    