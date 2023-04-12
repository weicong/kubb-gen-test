
import client from "../../../utils/axios-client";
import type { UnblockUserRequest, UnblockUserResponse } from "../../models/Friendship/UnblockUser";

      /**
* @link /api/services/app/Friendship/UnblockUser
*/
      export function unblockUser <TData = UnblockUserResponse, TVariables = UnblockUserRequest>( data: TVariables, ) {
        return client<TData, TVariables>({
          method: "post",
          url: `/api/services/app/Friendship/UnblockUser`,
          data,
          
        });
      };
    