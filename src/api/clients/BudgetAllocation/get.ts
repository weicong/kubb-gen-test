
import client from "../../../utils/axios-client";
import type { GetResponse, GetQueryParams } from "../../models/BudgetAllocation/Get";

      /**
* @link /api/services/app/BudgetAllocation/Get
*/
      export function get <TData = GetResponse>( params?: GetQueryParams) {
        return client<TData>({
          method: "get",
          url: `/api/services/app/BudgetAllocation/Get`,
          params,
        });
      };
    