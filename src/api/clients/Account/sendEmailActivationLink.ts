
import client from "../../../utils/axios-client";
import type { SendEmailActivationLinkRequest, SendEmailActivationLinkResponse } from "../../models/Account/SendEmailActivationLink";

      /**
* @link /api/services/app/Account/SendEmailActivationLink
*/
      export function sendEmailActivationLink <TData = SendEmailActivationLinkResponse, TVariables = SendEmailActivationLinkRequest>( data: TVariables, ) {
        return client<TData, TVariables>({
          method: "post",
          url: `/api/services/app/Account/SendEmailActivationLink`,
          data,
          
        });
      };
    