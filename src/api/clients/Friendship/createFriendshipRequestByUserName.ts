
import client from "../../../utils/axios-client";
import type { CreateFriendshipRequestByUserNameRequest, CreateFriendshipRequestByUserNameResponse } from "../../models/Friendship/CreateFriendshipRequestByUserName";

      /**
* @link /api/services/app/Friendship/CreateFriendshipRequestByUserName
*/
      export function createFriendshipRequestByUserName <TData = CreateFriendshipRequestByUserNameResponse, TVariables = CreateFriendshipRequestByUserNameRequest>( data: TVariables, ) {
        return client<TData, TVariables>({
          method: "post",
          url: `/api/services/app/Friendship/CreateFriendshipRequestByUserName`,
          data,
          
        });
      };
    