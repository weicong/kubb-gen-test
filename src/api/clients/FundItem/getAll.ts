
import client from "../../../utils/axios-client";
import type { GetAllResponse, GetAllQueryParams } from "../../models/FundItem/GetAll";

      /**
* @link /api/services/app/FundItem/GetAll
*/
      export function getAll <TData = GetAllResponse>( params?: GetAllQueryParams) {
        return client<TData>({
          method: "get",
          url: `/api/services/app/FundItem/GetAll`,
          params,
        });
      };
    