
import client from "../../../utils/axios-client";
import type { GetActiveUserDelegationsResponse } from "../../models/UserDelegation/GetActiveUserDelegations";

      /**
* @summary Returns active user delegations for current user
* @link /api/services/app/UserDelegation/GetActiveUserDelegations
*/
      export function getActiveUserDelegations <TData = GetActiveUserDelegationsResponse>( ) {
        return client<TData>({
          method: "get",
          url: `/api/services/app/UserDelegation/GetActiveUserDelegations`,
          
        });
      };
    