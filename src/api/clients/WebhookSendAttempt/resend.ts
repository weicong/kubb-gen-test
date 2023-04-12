
import client from "../../../utils/axios-client";
import type { ResendRequest, ResendResponse, ResendQueryParams } from "../../models/WebhookSendAttempt/Resend";

      /**
* @link /api/services/app/WebhookSendAttempt/Resend
*/
      export function resend <TData = ResendResponse, TVariables = ResendRequest>( data: TVariables, params?: ResendQueryParams) {
        return client<TData, TVariables>({
          method: "post",
          url: `/api/services/app/WebhookSendAttempt/Resend`,
          data,
          params,
        });
      };
    