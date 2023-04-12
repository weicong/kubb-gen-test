
import client from "../../../utils/axios-client";
import type { GetAllSubscriptionsIfFeaturesGrantedResponse, GetAllSubscriptionsIfFeaturesGrantedQueryParams } from "../../models/WebhookSubscription/GetAllSubscriptionsIfFeaturesGranted";

      /**
* @link /api/services/app/WebhookSubscription/GetAllSubscriptionsIfFeaturesGranted
*/
      export function getAllSubscriptionsIfFeaturesGranted <TData = GetAllSubscriptionsIfFeaturesGrantedResponse>( params?: GetAllSubscriptionsIfFeaturesGrantedQueryParams) {
        return client<TData>({
          method: "get",
          url: `/api/services/app/WebhookSubscription/GetAllSubscriptionsIfFeaturesGranted`,
          params,
        });
      };
    