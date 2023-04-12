
import client from "../../../utils/axios-client";
import type { GetSalesSummaryResponse, GetSalesSummaryQueryParams } from "../../models/TenantDashboard/GetSalesSummary";

      /**
* @link /api/services/app/TenantDashboard/GetSalesSummary
*/
      export function getSalesSummary <TData = GetSalesSummaryResponse>( params?: GetSalesSummaryQueryParams) {
        return client<TData>({
          method: "get",
          url: `/api/services/app/TenantDashboard/GetSalesSummary`,
          params,
        });
      };
    