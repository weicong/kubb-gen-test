
import client from "../../../utils/axios-client";
import type { ChangePasswordRequest, ChangePasswordResponse } from "../../models/UserModels/ChangePassword";

      /**
* @link /api/services/app/User/ChangePassword
*/
      export function changePassword <TData = ChangePasswordResponse, TVariables = ChangePasswordRequest>( data: TVariables, ) {
        return client<TData, TVariables>({
          method: "post",
          url: `/api/services/app/User/ChangePassword`,
          data,
          
        });
      };
    