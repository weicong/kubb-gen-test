
import client from "../../../utils/axios-client";
import type { UnlinkUserRequest, UnlinkUserResponse } from "../../models/UserLink/UnlinkUser";

      /**
* @link /api/services/app/UserLink/UnlinkUser
*/
      export function unlinkUser <TData = UnlinkUserResponse, TVariables = UnlinkUserRequest>( data: TVariables, ) {
        return client<TData, TVariables>({
          method: "post",
          url: `/api/services/app/UserLink/UnlinkUser`,
          data,
          
        });
      };
    