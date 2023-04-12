
import client from "../../../utils/axios-client";
import type { SendTestEmailRequest, SendTestEmailResponse } from "../../models/TenantSettings/SendTestEmail";

      /**
* @link /api/services/app/TenantSettings/SendTestEmail
*/
      export function sendTestEmail <TData = SendTestEmailResponse, TVariables = SendTestEmailRequest>( data: TVariables, ) {
        return client<TData, TVariables>({
          method: "post",
          url: `/api/services/app/TenantSettings/SendTestEmail`,
          data,
          
        });
      };
    