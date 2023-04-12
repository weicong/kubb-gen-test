
import client from "../../../utils/axios-client";
import type { GetResponse, GetQueryParams } from "../../models/BudgetAllocationProcurementItem/Get";

      /**
* @link /api/services/app/BudgetAllocationProcurementItem/Get
*/
      export function get <TData = GetResponse>( params?: GetQueryParams) {
        return client<TData>({
          method: "get",
          url: `/api/services/app/BudgetAllocationProcurementItem/Get`,
          params,
        });
      };
    