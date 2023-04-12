
import client from "../../../utils/axios-client";
import type { UseSystemDefaultSettingsRequest, UseSystemDefaultSettingsResponse } from "../../models/UiCustomizationSettings/UseSystemDefaultSettings";

      /**
* @link /api/services/app/UiCustomizationSettings/UseSystemDefaultSettings
*/
      export function useSystemDefaultSettings <TData = UseSystemDefaultSettingsResponse, TVariables = UseSystemDefaultSettingsRequest>( data: TVariables, ) {
        return client<TData, TVariables>({
          method: "post",
          url: `/api/services/app/UiCustomizationSettings/UseSystemDefaultSettings`,
          data,
          
        });
      };
    