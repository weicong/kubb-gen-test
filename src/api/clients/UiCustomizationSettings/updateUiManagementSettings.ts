
import client from "../../../utils/axios-client";
import type { UpdateUiManagementSettingsRequest, UpdateUiManagementSettingsResponse } from "../../models/UiCustomizationSettings/UpdateUiManagementSettings";

      /**
* @link /api/services/app/UiCustomizationSettings/UpdateUiManagementSettings
*/
      export function updateUiManagementSettings <TData = UpdateUiManagementSettingsResponse, TVariables = UpdateUiManagementSettingsRequest>( data: TVariables, ) {
        return client<TData, TVariables>({
          method: "put",
          url: `/api/services/app/UiCustomizationSettings/UpdateUiManagementSettings`,
          data,
          
        });
      };
    