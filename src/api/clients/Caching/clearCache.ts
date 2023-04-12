
import client from "../../../utils/axios-client";
import type { ClearCacheRequest, ClearCacheResponse } from "../../models/Caching/ClearCache";

      /**
* @link /api/services/app/Caching/ClearCache
*/
      export function clearCache <TData = ClearCacheResponse, TVariables = ClearCacheRequest>( data: TVariables, ) {
        return client<TData, TVariables>({
          method: "post",
          url: `/api/services/app/Caching/ClearCache`,
          data,
          
        });
      };
    