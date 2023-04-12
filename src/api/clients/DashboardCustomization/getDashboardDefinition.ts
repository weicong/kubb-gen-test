
import client from "../../../utils/axios-client";
import type { GetDashboardDefinitionResponse, GetDashboardDefinitionQueryParams } from "../../models/DashboardCustomization/GetDashboardDefinition";

      /**
* @link /api/services/app/DashboardCustomization/GetDashboardDefinition
*/
      export function getDashboardDefinition <TData = GetDashboardDefinitionResponse>( params?: GetDashboardDefinitionQueryParams) {
        return client<TData>({
          method: "get",
          url: `/api/services/app/DashboardCustomization/GetDashboardDefinition`,
          params,
        });
      };
    