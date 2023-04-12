
import client from "../../../utils/axios-client";
import type { GetResponse, GetQueryParams } from "../../models/BudgetPlan/Get";

      /**
* @link /api/services/app/BudgetPlan/Get
*/
      export function get <TData = GetResponse>( params?: GetQueryParams) {
        return client<TData>({
          method: "get",
          url: `/api/services/app/BudgetPlan/Get`,
          params,
        });
      };
    