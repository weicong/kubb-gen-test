
import client from "../../../utils/axios-client";
import type { ClearAllCachesRequest, ClearAllCachesResponse } from "../../models/Caching/ClearAllCaches";

      /**
* @link /api/services/app/Caching/ClearAllCaches
*/
      export function clearAllCaches <TData = ClearAllCachesResponse, TVariables = ClearAllCachesRequest>( data: TVariables, ) {
        return client<TData, TVariables>({
          method: "post",
          url: `/api/services/app/Caching/ClearAllCaches`,
          data,
          
        });
      };
    