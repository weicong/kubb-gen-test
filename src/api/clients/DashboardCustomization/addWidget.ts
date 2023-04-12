
import client from "../../../utils/axios-client";
import type { AddWidgetRequest, AddWidgetResponse } from "../../models/DashboardCustomization/AddWidget";

      /**
* @link /api/services/app/DashboardCustomization/AddWidget
*/
      export function addWidget <TData = AddWidgetResponse, TVariables = AddWidgetRequest>( data: TVariables, ) {
        return client<TData, TVariables>({
          method: "post",
          url: `/api/services/app/DashboardCustomization/AddWidget`,
          data,
          
        });
      };
    