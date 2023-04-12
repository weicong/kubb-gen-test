
import client from "../../../utils/axios-client";
import type { GetAllOfAnEntityPropertyResponse, GetAllOfAnEntityPropertyQueryParams } from "../../models/EntityPropertyValue/GetAllOfAnEntityProperty";

      /**
* @link /api/services/app/EntityPropertyValue/GetAllOfAnEntityProperty
*/
      export function getAllOfAnEntityProperty <TData = GetAllOfAnEntityPropertyResponse>( params?: GetAllOfAnEntityPropertyQueryParams) {
        return client<TData>({
          method: "get",
          url: `/api/services/app/EntityPropertyValue/GetAllOfAnEntityProperty`,
          params,
        });
      };
    