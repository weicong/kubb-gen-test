
import client from "../../../utils/axios-client";
import type { CreateFriendshipRequestRequest, CreateFriendshipRequestResponse } from "../../models/Friendship/CreateFriendshipRequest";

      /**
* @link /api/services/app/Friendship/CreateFriendshipRequest
*/
      export function createFriendshipRequest <TData = CreateFriendshipRequestResponse, TVariables = CreateFriendshipRequestRequest>( data: TVariables, ) {
        return client<TData, TVariables>({
          method: "post",
          url: `/api/services/app/Friendship/CreateFriendshipRequest`,
          data,
          
        });
      };
    