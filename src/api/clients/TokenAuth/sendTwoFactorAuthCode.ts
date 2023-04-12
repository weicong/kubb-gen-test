
import client from "../../../utils/axios-client";
import type { SendTwoFactorAuthCodeRequest, SendTwoFactorAuthCodeResponse } from "../../models/TokenAuth/SendTwoFactorAuthCode";

      /**
* @link /api/TokenAuth/SendTwoFactorAuthCode
*/
      export function sendTwoFactorAuthCode <TData = SendTwoFactorAuthCodeResponse, TVariables = SendTwoFactorAuthCodeRequest>( data: TVariables, ) {
        return client<TData, TVariables>({
          method: "post",
          url: `/api/TokenAuth/SendTwoFactorAuthCode`,
          data,
          
        });
      };
    