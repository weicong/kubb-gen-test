
import client from "../../../utils/axios-client";
import type { GetDefaultEditionNameResponse } from "../../models/CommonLookup/GetDefaultEditionName";

      /**
* @link /api/services/app/CommonLookup/GetDefaultEditionName
*/
      export function getDefaultEditionName <TData = GetDefaultEditionNameResponse>( ) {
        return client<TData>({
          method: "get",
          url: `/api/services/app/CommonLookup/GetDefaultEditionName`,
          
        });
      };
    