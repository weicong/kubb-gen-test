
import client from "../../../utils/axios-client";
import type { PublishTestWebhookRequest, PublishTestWebhookResponse } from "../../models/WebhookSubscription/PublishTestWebhook";

      /**
* @link /api/services/app/WebhookSubscription/PublishTestWebhook
*/
      export function publishTestWebhook <TData = PublishTestWebhookResponse, TVariables = PublishTestWebhookRequest>( data: TVariables, ) {
        return client<TData, TVariables>({
          method: "post",
          url: `/api/services/app/WebhookSubscription/PublishTestWebhook`,
          data,
          
        });
      };
    