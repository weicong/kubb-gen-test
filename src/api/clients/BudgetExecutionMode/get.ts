
import client from "../../../utils/axios-client";
import type { GetResponse, GetQueryParams } from "../../models/BudgetExecutionMode/Get";

      /**
* @link /api/services/app/BudgetExecutionMode/Get
*/
      export function get <TData = GetResponse>( params?: GetQueryParams) {
        return client<TData>({
          method: "get",
          url: `/api/services/app/BudgetExecutionMode/Get`,
          params,
        });
      };
    