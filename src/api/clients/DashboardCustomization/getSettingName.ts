
import client from "../../../utils/axios-client";
import type { GetSettingNameResponse, GetSettingNameQueryParams } from "../../models/DashboardCustomization/GetSettingName";

      /**
* @link /api/services/app/DashboardCustomization/GetSettingName
*/
      export function getSettingName <TData = GetSettingNameResponse>( params?: GetSettingNameQueryParams) {
        return client<TData>({
          method: "get",
          url: `/api/services/app/DashboardCustomization/GetSettingName`,
          params,
        });
      };
    