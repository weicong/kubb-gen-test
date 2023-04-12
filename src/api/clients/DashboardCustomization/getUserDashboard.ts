
import client from "../../../utils/axios-client";
import type { GetUserDashboardResponse, GetUserDashboardQueryParams } from "../../models/DashboardCustomization/GetUserDashboard";

      /**
* @link /api/services/app/DashboardCustomization/GetUserDashboard
*/
      export function getUserDashboard <TData = GetUserDashboardResponse>( params?: GetUserDashboardQueryParams) {
        return client<TData>({
          method: "get",
          url: `/api/services/app/DashboardCustomization/GetUserDashboard`,
          params,
        });
      };
    