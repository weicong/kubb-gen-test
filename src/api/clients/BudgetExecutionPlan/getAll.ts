
import client from "../../../utils/axios-client";
import type { GetAllResponse, GetAllQueryParams } from "../../models/BudgetExecutionPlan/GetAll";

      /**
* @link /api/services/app/BudgetExecutionPlan/GetAll
*/
      export function getAll <TData = GetAllResponse>( params?: GetAllQueryParams) {
        return client<TData>({
          method: "get",
          url: `/api/services/app/BudgetExecutionPlan/GetAll`,
          params,
        });
      };
    