
import client from "../../../utils/axios-client";
import type { AcceptFriendshipRequestRequest, AcceptFriendshipRequestResponse } from "../../models/Friendship/AcceptFriendshipRequest";

      /**
* @link /api/services/app/Friendship/AcceptFriendshipRequest
*/
      export function acceptFriendshipRequest <TData = AcceptFriendshipRequestResponse, TVariables = AcceptFriendshipRequestRequest>( data: TVariables, ) {
        return client<TData, TVariables>({
          method: "post",
          url: `/api/services/app/Friendship/AcceptFriendshipRequest`,
          data,
          
        });
      };
    