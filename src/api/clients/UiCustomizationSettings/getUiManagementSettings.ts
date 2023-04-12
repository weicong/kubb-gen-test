
import client from "../../../utils/axios-client";
import type { GetUiManagementSettingsResponse } from "../../models/UiCustomizationSettings/GetUiManagementSettings";

      /**
* @link /api/services/app/UiCustomizationSettings/GetUiManagementSettings
*/
      export function getUiManagementSettings <TData = GetUiManagementSettingsResponse>( ) {
        return client<TData>({
          method: "get",
          url: `/api/services/app/UiCustomizationSettings/GetUiManagementSettings`,
          
        });
      };
    