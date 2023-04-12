
import client from "../../../utils/axios-client";
import type { GetResponse, GetQueryParams } from "../../models/BudgetItem/Get";

      /**
* @link /api/services/app/BudgetItem/Get
*/
      export function get <TData = GetResponse>( params?: GetQueryParams) {
        return client<TData>({
          method: "get",
          url: `/api/services/app/BudgetItem/Get`,
          params,
        });
      };
    