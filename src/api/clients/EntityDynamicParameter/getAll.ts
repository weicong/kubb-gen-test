
import client from "../../../utils/axios-client";
import type { GetAllResponse } from "../../models/EntityDynamicParameter/GetAll";

      /**
* @link /api/services/app/EntityDynamicParameter/GetAll
*/
      export function getAll <TData = GetAllResponse>( ) {
        return client<TData>({
          method: "get",
          url: `/api/services/app/EntityDynamicParameter/GetAll`,
          
        });
      };
    