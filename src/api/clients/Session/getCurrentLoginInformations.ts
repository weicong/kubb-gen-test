
import client from "../../../utils/axios-client";
import type { GetCurrentLoginInformationsResponse } from "../../models/Session/GetCurrentLoginInformations";

      /**
* @link /api/services/app/Session/GetCurrentLoginInformations
*/
      export function getCurrentLoginInformations <TData = GetCurrentLoginInformationsResponse>( ) {
        return client<TData>({
          method: "get",
          url: `/api/services/app/Session/GetCurrentLoginInformations`,
          
        });
      };
    