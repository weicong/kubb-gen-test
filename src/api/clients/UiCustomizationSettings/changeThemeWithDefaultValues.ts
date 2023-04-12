
import client from "../../../utils/axios-client";
import type { ChangeThemeWithDefaultValuesRequest, ChangeThemeWithDefaultValuesResponse, ChangeThemeWithDefaultValuesQueryParams } from "../../models/UiCustomizationSettings/ChangeThemeWithDefaultValues";

      /**
* @link /api/services/app/UiCustomizationSettings/ChangeThemeWithDefaultValues
*/
      export function changeThemeWithDefaultValues <TData = ChangeThemeWithDefaultValuesResponse, TVariables = ChangeThemeWithDefaultValuesRequest>( data: TVariables, params?: ChangeThemeWithDefaultValuesQueryParams) {
        return client<TData, TVariables>({
          method: "post",
          url: `/api/services/app/UiCustomizationSettings/ChangeThemeWithDefaultValues`,
          data,
          params,
        });
      };
    