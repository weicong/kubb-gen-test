
import client from "../../../utils/axios-client";
import type { IsSubscribedRequest, IsSubscribedResponse, IsSubscribedQueryParams } from "../../models/WebhookSubscription/IsSubscribed";

      /**
* @link /api/services/app/WebhookSubscription/IsSubscribed
*/
      export function isSubscribed <TData = IsSubscribedResponse, TVariables = IsSubscribedRequest>( data: TVariables, params?: IsSubscribedQueryParams) {
        return client<TData, TVariables>({
          method: "post",
          url: `/api/services/app/WebhookSubscription/IsSubscribed`,
          data,
          params,
        });
      };
    