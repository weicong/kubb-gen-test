
import client from "../../../utils/axios-client";
import type { GetOrganizationUnitsForComboboxResponse, GetOrganizationUnitsForComboboxQueryParams } from "../../models/PayUserDetail/GetOrganizationUnitsForCombobox";

      /**
* @link /api/services/app/PayUserDetail/GetOrganizationUnitsForCombobox
*/
      export function getOrganizationUnitsForCombobox <TData = GetOrganizationUnitsForComboboxResponse>( params?: GetOrganizationUnitsForComboboxQueryParams) {
        return client<TData>({
          method: "get",
          url: `/api/services/app/PayUserDetail/GetOrganizationUnitsForCombobox`,
          params,
        });
      };
    