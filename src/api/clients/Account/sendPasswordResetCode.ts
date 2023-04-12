
import client from "../../../utils/axios-client";
import type { SendPasswordResetCodeRequest, SendPasswordResetCodeResponse } from "../../models/Account/SendPasswordResetCode";

      /**
* @link /api/services/app/Account/SendPasswordResetCode
*/
      export function sendPasswordResetCode <TData = SendPasswordResetCodeResponse, TVariables = SendPasswordResetCodeRequest>( data: TVariables, ) {
        return client<TData, TVariables>({
          method: "post",
          url: `/api/services/app/Account/SendPasswordResetCode`,
          data,
          
        });
      };
    