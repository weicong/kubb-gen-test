
import client from "../../../utils/axios-client";
import type { GetDelegatedUsersResponse, GetDelegatedUsersQueryParams } from "../../models/UserDelegation/GetDelegatedUsers";

      /**
* @link /api/services/app/UserDelegation/GetDelegatedUsers
*/
      export function getDelegatedUsers <TData = GetDelegatedUsersResponse>( params?: GetDelegatedUsersQueryParams) {
        return client<TData>({
          method: "get",
          url: `/api/services/app/UserDelegation/GetDelegatedUsers`,
          params,
        });
      };
    