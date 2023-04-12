
import client from "../../../utils/axios-client";
import type { RemoveDelegationRequest, RemoveDelegationResponse, RemoveDelegationQueryParams } from "../../models/UserDelegation/RemoveDelegation";

      /**
* @link /api/services/app/UserDelegation/RemoveDelegation
*/
      export function removeDelegation <TData = RemoveDelegationResponse, TVariables = RemoveDelegationRequest>( data: TVariables, params?: RemoveDelegationQueryParams) {
        return client<TData, TVariables>({
          method: "delete",
          url: `/api/services/app/UserDelegation/RemoveDelegation`,
          data,
          params,
        });
      };
    