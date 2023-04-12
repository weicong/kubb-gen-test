
import client from "../../../utils/axios-client";
import type { GetAllSendAttemptsOfWebhookEventResponse, GetAllSendAttemptsOfWebhookEventQueryParams } from "../../models/WebhookSendAttempt/GetAllSendAttemptsOfWebhookEvent";

      /**
* @link /api/services/app/WebhookSendAttempt/GetAllSendAttemptsOfWebhookEvent
*/
      export function getAllSendAttemptsOfWebhookEvent <TData = GetAllSendAttemptsOfWebhookEventResponse>( params?: GetAllSendAttemptsOfWebhookEventQueryParams) {
        return client<TData>({
          method: "get",
          url: `/api/services/app/WebhookSendAttempt/GetAllSendAttemptsOfWebhookEvent`,
          params,
        });
      };
    