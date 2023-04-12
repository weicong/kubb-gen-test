
import client from "../../../utils/axios-client";
import type { GetAllSubscriptionsResponse } from "../../models/WebhookSubscription/GetAllSubscriptions";

      /**
* @link /api/services/app/WebhookSubscription/GetAllSubscriptions
*/
      export function getAllSubscriptions <TData = GetAllSubscriptionsResponse>( ) {
        return client<TData>({
          method: "get",
          url: `/api/services/app/WebhookSubscription/GetAllSubscriptions`,
          
        });
      };
    