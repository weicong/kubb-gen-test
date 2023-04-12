
import client from "../../../utils/axios-client";
import type { GetAllCachesResponse } from "../../models/Caching/GetAllCaches";

      /**
* @link /api/services/app/Caching/GetAllCaches
*/
      export function getAllCaches <TData = GetAllCachesResponse>( ) {
        return client<TData>({
          method: "get",
          url: `/api/services/app/Caching/GetAllCaches`,
          
        });
      };
    