
import client from "../../../utils/axios-client";
import type { GetEditionsForSelectResponse } from "../../models/TenantRegistration/GetEditionsForSelect";

      /**
* @link /api/services/app/TenantRegistration/GetEditionsForSelect
*/
      export function getEditionsForSelect <TData = GetEditionsForSelectResponse>( ) {
        return client<TData>({
          method: "get",
          url: `/api/services/app/TenantRegistration/GetEditionsForSelect`,
          
        });
      };
    