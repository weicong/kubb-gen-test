
import client from "../../../utils/axios-client";
import type { GetOrganizationUnitsForComboboxResponse, GetOrganizationUnitsForComboboxQueryParams } from "../../models/CommonLookup/GetOrganizationUnitsForCombobox";

      /**
* @link /api/services/app/CommonLookup/GetOrganizationUnitsForCombobox
*/
      export function getOrganizationUnitsForCombobox <TData = GetOrganizationUnitsForComboboxResponse>( params?: GetOrganizationUnitsForComboboxQueryParams) {
        return client<TData>({
          method: "get",
          url: `/api/services/app/CommonLookup/GetOrganizationUnitsForCombobox`,
          params,
        });
      };
    