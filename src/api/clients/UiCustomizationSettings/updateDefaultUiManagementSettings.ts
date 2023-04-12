
import client from "../../../utils/axios-client";
import type { UpdateDefaultUiManagementSettingsRequest, UpdateDefaultUiManagementSettingsResponse } from "../../models/UiCustomizationSettings/UpdateDefaultUiManagementSettings";

      /**
* @link /api/services/app/UiCustomizationSettings/UpdateDefaultUiManagementSettings
*/
      export function updateDefaultUiManagementSettings <TData = UpdateDefaultUiManagementSettingsResponse, TVariables = UpdateDefaultUiManagementSettingsRequest>( data: TVariables, ) {
        return client<TData, TVariables>({
          method: "put",
          url: `/api/services/app/UiCustomizationSettings/UpdateDefaultUiManagementSettings`,
          data,
          
        });
      };
    