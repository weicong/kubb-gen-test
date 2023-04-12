
import client from "../../../utils/axios-client";
import type { SendVerificationSmsRequest, SendVerificationSmsResponse } from "../../models/Profile/SendVerificationSms";

      /**
* @link /api/services/app/Profile/SendVerificationSms
*/
      export function sendVerificationSms <TData = SendVerificationSmsResponse, TVariables = SendVerificationSmsRequest>( data: TVariables, ) {
        return client<TData, TVariables>({
          method: "post",
          url: `/api/services/app/Profile/SendVerificationSms`,
          data,
          
        });
      };
    