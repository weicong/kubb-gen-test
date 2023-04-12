
import client from "../../../utils/axios-client";
import type { GetSubscriptionResponse, GetSubscriptionQueryParams } from "../../models/WebhookSubscription/GetSubscription";

      /**
* @link /api/services/app/WebhookSubscription/GetSubscription
*/
      export function getSubscription <TData = GetSubscriptionResponse>( params?: GetSubscriptionQueryParams) {
        return client<TData>({
          method: "get",
          url: `/api/services/app/WebhookSubscription/GetSubscription`,
          params,
        });
      };
    