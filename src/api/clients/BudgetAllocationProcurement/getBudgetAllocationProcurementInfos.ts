
import client from "../../../utils/axios-client";
import type { GetBudgetAllocationProcurementInfosResponse, GetBudgetAllocationProcurementInfosQueryParams } from "../../models/BudgetAllocationProcurement/GetBudgetAllocationProcurementInfos";

      /**
* @link /api/services/app/BudgetAllocationProcurement/GetBudgetAllocationProcurementInfos
*/
      export function getBudgetAllocationProcurementInfos <TData = GetBudgetAllocationProcurementInfosResponse>( params?: GetBudgetAllocationProcurementInfosQueryParams) {
        return client<TData>({
          method: "get",
          url: `/api/services/app/BudgetAllocationProcurement/GetBudgetAllocationProcurementInfos`,
          params,
        });
      };
    