
import client from "../../../utils/axios-client";
import type { GetEditionsForComboboxResponse, GetEditionsForComboboxQueryParams } from "../../models/CommonLookup/GetEditionsForCombobox";

      /**
* @link /api/services/app/CommonLookup/GetEditionsForCombobox
*/
      export function getEditionsForCombobox <TData = GetEditionsForComboboxResponse>( params?: GetEditionsForComboboxQueryParams) {
        return client<TData>({
          method: "get",
          url: `/api/services/app/CommonLookup/GetEditionsForCombobox`,
          params,
        });
      };
    