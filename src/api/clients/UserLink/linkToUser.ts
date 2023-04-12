
import client from "../../../utils/axios-client";
import type { LinkToUserRequest, LinkToUserResponse } from "../../models/UserLink/LinkToUser";

      /**
* @link /api/services/app/UserLink/LinkToUser
*/
      export function linkToUser <TData = LinkToUserResponse, TVariables = LinkToUserRequest>( data: TVariables, ) {
        return client<TData, TVariables>({
          method: "post",
          url: `/api/services/app/UserLink/LinkToUser`,
          data,
          
        });
      };
    