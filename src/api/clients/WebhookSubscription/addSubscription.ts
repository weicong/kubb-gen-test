
import client from "../../../utils/axios-client";
import type { AddSubscriptionRequest, AddSubscriptionResponse } from "../../models/WebhookSubscription/AddSubscription";

      /**
* @link /api/services/app/WebhookSubscription/AddSubscription
*/
      export function addSubscription <TData = AddSubscriptionResponse, TVariables = AddSubscriptionRequest>( data: TVariables, ) {
        return client<TData, TVariables>({
          method: "post",
          url: `/api/services/app/WebhookSubscription/AddSubscription`,
          data,
          
        });
      };
    