
import client from "../../../utils/axios-client";
import type { UnlockUserRequest, UnlockUserResponse } from "../../models/User/UnlockUser";

      /**
* @link /api/services/app/User/UnlockUser
*/
      export function unlockUser <TData = UnlockUserResponse, TVariables = UnlockUserRequest>( data: TVariables, ) {
        return client<TData, TVariables>({
          method: "post",
          url: `/api/services/app/User/UnlockUser`,
          data,
          
        });
      };
    