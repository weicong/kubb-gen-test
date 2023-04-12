
import client from "../../../utils/axios-client";
import type { BlockUserRequest, BlockUserResponse } from "../../models/Friendship/BlockUser";

      /**
* @link /api/services/app/Friendship/BlockUser
*/
      export function blockUser <TData = BlockUserResponse, TVariables = BlockUserRequest>( data: TVariables, ) {
        return client<TData, TVariables>({
          method: "post",
          url: `/api/services/app/Friendship/BlockUser`,
          data,
          
        });
      };
    