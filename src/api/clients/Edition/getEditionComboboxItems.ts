
import client from "../../../utils/axios-client";
import type { GetEditionComboboxItemsResponse, GetEditionComboboxItemsQueryParams } from "../../models/Edition/GetEditionComboboxItems";

      /**
* @link /api/services/app/Edition/GetEditionComboboxItems
*/
      export function getEditionComboboxItems <TData = GetEditionComboboxItemsResponse>( params?: GetEditionComboboxItemsQueryParams) {
        return client<TData>({
          method: "get",
          url: `/api/services/app/Edition/GetEditionComboboxItems`,
          params,
        });
      };
    