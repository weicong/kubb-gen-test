
import client from "../../../utils/axios-client";
import type { GetAllResponse, GetAllQueryParams } from "../../models/ExpenditureCatalog/GetAll";

      /**
* @link /api/services/app/ExpenditureCatalog/GetAll
*/
      export function getAll <TData = GetAllResponse>( params?: GetAllQueryParams) {
        return client<TData>({
          method: "get",
          url: `/api/services/app/ExpenditureCatalog/GetAll`,
          params,
        });
      };
    