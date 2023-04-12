
import client from "../../../utils/axios-client";
import type { GetDailySalesResponse } from "../../models/TenantDashboard/GetDailySales";

      /**
* @link /api/services/app/TenantDashboard/GetDailySales
*/
      export function getDailySales <TData = GetDailySalesResponse>( ) {
        return client<TData>({
          method: "get",
          url: `/api/services/app/TenantDashboard/GetDailySales`,
          
        });
      };
    