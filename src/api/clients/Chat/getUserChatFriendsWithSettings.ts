
import client from "../../../utils/axios-client";
import type { GetUserChatFriendsWithSettingsResponse } from "../../models/Chat/GetUserChatFriendsWithSettings";

      /**
* @link /api/services/app/Chat/GetUserChatFriendsWithSettings
*/
      export function getUserChatFriendsWithSettings <TData = GetUserChatFriendsWithSettingsResponse>( ) {
        return client<TData>({
          method: "get",
          url: `/api/services/app/Chat/GetUserChatFriendsWithSettings`,
          
        });
      };
    