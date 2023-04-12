
import client from "../../../utils/axios-client";
import type { GetAllResponse, GetAllQueryParams } from "../../models/StandardCatalog/GetAll";

      /**
* @link /api/services/app/StandardCatalog/GetAll
*/
      export function getAll <TData = GetAllResponse>( params?: GetAllQueryParams) {
        return client<TData>({
          method: "get",
          url: `/api/services/app/StandardCatalog/GetAll`,
          params,
        });
      };
    