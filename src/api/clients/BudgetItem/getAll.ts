
import client from "../../../utils/axios-client";
import type { GetAllResponse, GetAllQueryParams } from "../../models/BudgetItem/GetAll";

      /**
* @link /api/services/app/BudgetItem/GetAll
*/
      export function getAll <TData = GetAllResponse>( params?: GetAllQueryParams) {
        return client<TData>({
          method: "get",
          url: `/api/services/app/BudgetItem/GetAll`,
          params,
        });
      };
    