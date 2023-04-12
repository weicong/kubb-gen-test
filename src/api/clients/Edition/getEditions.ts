
import client from "../../../utils/axios-client";
import type { GetEditionsResponse } from "../../models/Edition/GetEditions";

      /**
* @link /api/services/app/Edition/GetEditions
*/
      export function getEditions <TData = GetEditionsResponse>( ) {
        return client<TData>({
          method: "get",
          url: `/api/services/app/Edition/GetEditions`,
          
        });
      };
    