
import client from "../../../utils/axios-client";
import type { GetLinkedUsersResponse, GetLinkedUsersQueryParams } from "../../models/UserLink/GetLinkedUsers";

      /**
* @link /api/services/app/UserLink/GetLinkedUsers
*/
      export function getLinkedUsers <TData = GetLinkedUsersResponse>( params?: GetLinkedUsersQueryParams) {
        return client<TData>({
          method: "get",
          url: `/api/services/app/UserLink/GetLinkedUsers`,
          params,
        });
      };
    