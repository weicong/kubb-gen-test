
import client from "../../../utils/axios-client";
import type { ActivateWebhookSubscriptionRequest, ActivateWebhookSubscriptionResponse } from "../../models/WebhookSubscription/ActivateWebhookSubscription";

      /**
* @link /api/services/app/WebhookSubscription/ActivateWebhookSubscription
*/
      export function activateWebhookSubscription <TData = ActivateWebhookSubscriptionResponse, TVariables = ActivateWebhookSubscriptionRequest>( data: TVariables, ) {
        return client<TData, TVariables>({
          method: "post",
          url: `/api/services/app/WebhookSubscription/ActivateWebhookSubscription`,
          data,
          
        });
      };
    