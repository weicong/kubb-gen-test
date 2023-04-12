
import client from "../../../utils/axios-client";
import type { UpdateSubscriptionRequest, UpdateSubscriptionResponse } from "../../models/WebhookSubscription/UpdateSubscription";

      /**
* @link /api/services/app/WebhookSubscription/UpdateSubscription
*/
      export function updateSubscription <TData = UpdateSubscriptionResponse, TVariables = UpdateSubscriptionRequest>( data: TVariables, ) {
        return client<TData, TVariables>({
          method: "put",
          url: `/api/services/app/WebhookSubscription/UpdateSubscription`,
          data,
          
        });
      };
    