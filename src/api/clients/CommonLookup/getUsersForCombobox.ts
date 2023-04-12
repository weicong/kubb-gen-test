
import client from "../../../utils/axios-client";
import type { GetUsersForComboboxResponse, GetUsersForComboboxQueryParams } from "../../models/CommonLookup/GetUsersForCombobox";

      /**
* @link /api/services/app/CommonLookup/GetUsersForCombobox
*/
      export function getUsersForCombobox <TData = GetUsersForComboboxResponse>( params?: GetUsersForComboboxQueryParams) {
        return client<TData>({
          method: "get",
          url: `/api/services/app/CommonLookup/GetUsersForCombobox`,
          params,
        });
      };
    