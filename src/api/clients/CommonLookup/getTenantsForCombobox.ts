
import client from "../../../utils/axios-client";
import type { GetTenantsForComboboxResponse } from "../../models/CommonLookup/GetTenantsForCombobox";

      /**
* @link /api/services/app/CommonLookup/GetTenantsForCombobox
*/
      export function getTenantsForCombobox <TData = GetTenantsForComboboxResponse>( ) {
        return client<TData>({
          method: "get",
          url: `/api/services/app/CommonLookup/GetTenantsForCombobox`,
          
        });
      };
    