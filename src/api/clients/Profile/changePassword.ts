
import client from "../../../utils/axios-client";
import type { ChangePasswordRequest, ChangePasswordResponse } from "../../models/Profile/ChangePassword";

      /**
* @link /api/services/app/Profile/ChangePassword
*/
      export function changePassword <TData = ChangePasswordResponse, TVariables = ChangePasswordRequest>( data: TVariables, ) {
        return client<TData, TVariables>({
          method: "post",
          url: `/api/services/app/Profile/ChangePassword`,
          data,
          
        });
      };
    