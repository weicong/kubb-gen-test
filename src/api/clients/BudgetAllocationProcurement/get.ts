
import client from "../../../utils/axios-client";
import type { GetResponse, GetQueryParams } from "../../models/BudgetAllocationProcurement/Get";

      /**
* @link /api/services/app/BudgetAllocationProcurement/Get
*/
      export function get <TData = GetResponse>( params?: GetQueryParams) {
        return client<TData>({
          method: "get",
          url: `/api/services/app/BudgetAllocationProcurement/Get`,
          params,
        });
      };
    