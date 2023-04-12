
import client from "../../../utils/axios-client";
import type { FindUsersRequest, FindUsersResponse } from "../../models/CommonLookup/FindUsers";

      /**
* @link /api/services/app/CommonLookup/FindUsers
*/
      export function findUsers <TData = FindUsersResponse, TVariables = FindUsersRequest>( data: TVariables, ) {
        return client<TData, TVariables>({
          method: "post",
          url: `/api/services/app/CommonLookup/FindUsers`,
          data,
          
        });
      };
    