
import client from "../../../utils/axios-client";
import type { GetResponse, GetQueryParams } from "../../models/BudgetAllocationDetail/Get";

      /**
* @link /api/services/app/BudgetAllocationDetail/Get
*/
      export function get <TData = GetResponse>( params?: GetQueryParams) {
        return client<TData>({
          method: "get",
          url: `/api/services/app/BudgetAllocationDetail/Get`,
          params,
        });
      };
    