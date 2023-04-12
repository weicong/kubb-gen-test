
import client from "../../../utils/axios-client";
import type { GetAllWidgetDefinitionsResponse, GetAllWidgetDefinitionsQueryParams } from "../../models/DashboardCustomization/GetAllWidgetDefinitions";

      /**
* @link /api/services/app/DashboardCustomization/GetAllWidgetDefinitions
*/
      export function getAllWidgetDefinitions <TData = GetAllWidgetDefinitionsResponse>( params?: GetAllWidgetDefinitionsQueryParams) {
        return client<TData>({
          method: "get",
          url: `/api/services/app/DashboardCustomization/GetAllWidgetDefinitions`,
          params,
        });
      };
    