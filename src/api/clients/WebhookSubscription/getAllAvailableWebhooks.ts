
import client from "../../../utils/axios-client";
import type { GetAllAvailableWebhooksResponse } from "../../models/WebhookSubscription/GetAllAvailableWebhooks";

      /**
* @link /api/services/app/WebhookSubscription/GetAllAvailableWebhooks
*/
      export function getAllAvailableWebhooks <TData = GetAllAvailableWebhooksResponse>( ) {
        return client<TData>({
          method: "get",
          url: `/api/services/app/WebhookSubscription/GetAllAvailableWebhooks`,
          
        });
      };
    