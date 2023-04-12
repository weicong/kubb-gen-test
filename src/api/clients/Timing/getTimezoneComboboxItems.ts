
import client from "../../../utils/axios-client";
import type { GetTimezoneComboboxItemsResponse, GetTimezoneComboboxItemsQueryParams } from "../../models/Timing/GetTimezoneComboboxItems";

      /**
* @link /api/services/app/Timing/GetTimezoneComboboxItems
*/
      export function getTimezoneComboboxItems <TData = GetTimezoneComboboxItemsResponse>( params?: GetTimezoneComboboxItemsQueryParams) {
        return client<TData>({
          method: "get",
          url: `/api/services/app/Timing/GetTimezoneComboboxItems`,
          params,
        });
      };
    