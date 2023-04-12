
import client from "../../../utils/axios-client";
import type { GetProfitShareResponse } from "../../models/TenantDashboard/GetProfitShare";

      /**
* @link /api/services/app/TenantDashboard/GetProfitShare
*/
      export function getProfitShare <TData = GetProfitShareResponse>( ) {
        return client<TData>({
          method: "get",
          url: `/api/services/app/TenantDashboard/GetProfitShare`,
          
        });
      };
    