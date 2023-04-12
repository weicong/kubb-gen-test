
import client from "../../../utils/axios-client";
import type { ResetPasswordRequest, ResetPasswordResponse } from "../../models/Account/ResetPassword";

      /**
* @link /api/services/app/Account/ResetPassword
*/
      export function resetPassword <TData = ResetPasswordResponse, TVariables = ResetPasswordRequest>( data: TVariables, ) {
        return client<TData, TVariables>({
          method: "post",
          url: `/api/services/app/Account/ResetPassword`,
          data,
          
        });
      };
    