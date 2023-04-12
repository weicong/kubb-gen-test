
import client from "../../../utils/axios-client";
import type { GetSubscriptionExpiringTenantsDataResponse } from "../../models/HostDashboard/GetSubscriptionExpiringTenantsData";

      /**
* @link /api/services/app/HostDashboard/GetSubscriptionExpiringTenantsData
*/
      export function getSubscriptionExpiringTenantsData <TData = GetSubscriptionExpiringTenantsDataResponse>( ) {
        return client<TData>({
          method: "get",
          url: `/api/services/app/HostDashboard/GetSubscriptionExpiringTenantsData`,
          
        });
      };
    