
import client from "../../../utils/axios-client";
import type { GetUsersForComboboxResponse, GetUsersForComboboxQueryParams } from "../../models/PayUserDetail/GetUsersForCombobox";

      /**
* @link /api/services/app/PayUserDetail/GetUsersForCombobox
*/
      export function getUsersForCombobox <TData = GetUsersForComboboxResponse>( params?: GetUsersForComboboxQueryParams) {
        return client<TData>({
          method: "get",
          url: `/api/services/app/PayUserDetail/GetUsersForCombobox`,
          params,
        });
      };
    