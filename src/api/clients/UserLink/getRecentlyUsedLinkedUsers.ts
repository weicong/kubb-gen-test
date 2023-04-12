
import client from "../../../utils/axios-client";
import type { GetRecentlyUsedLinkedUsersResponse } from "../../models/UserLink/GetRecentlyUsedLinkedUsers";

      /**
* @link /api/services/app/UserLink/GetRecentlyUsedLinkedUsers
*/
      export function getRecentlyUsedLinkedUsers <TData = GetRecentlyUsedLinkedUsersResponse>( ) {
        return client<TData>({
          method: "get",
          url: `/api/services/app/UserLink/GetRecentlyUsedLinkedUsers`,
          
        });
      };
    