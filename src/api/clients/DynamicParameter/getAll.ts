
import client from "../../../utils/axios-client";
import type { GetAllResponse } from "../../models/DynamicParameter/GetAll";

      /**
* @link /api/services/app/DynamicParameter/GetAll
*/
      export function getAll <TData = GetAllResponse>( ) {
        return client<TData>({
          method: "get",
          url: `/api/services/app/DynamicParameter/GetAll`,
          
        });
      };
    