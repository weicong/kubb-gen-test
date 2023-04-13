
import client from "../../../utils/axios-client";
import type { ResetPasswordRequest, ResetPasswordResponse } from "../../models/UserModels/ResetPassword";

      /**
* @link /api/services/app/User/ResetPassword
*/
      export function resetPassword <TData = ResetPasswordResponse, TVariables = ResetPasswordRequest>( data: TVariables, ) {
        return client<TData, TVariables>({
          method: "post",
          url: `/api/services/app/User/ResetPassword`,
          data,
          
        });
      };
    