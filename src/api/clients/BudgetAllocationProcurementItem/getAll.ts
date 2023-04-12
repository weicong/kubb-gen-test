
import client from "../../../utils/axios-client";
import type { GetAllResponse, GetAllQueryParams } from "../../models/BudgetAllocationProcurementItem/GetAll";

      /**
* @summary 获取全部
* @link /api/services/app/BudgetAllocationProcurementItem/GetAll
*/
      export function getAll <TData = GetAllResponse>( params?: GetAllQueryParams) {
        return client<TData>({
          method: "get",
          url: `/api/services/app/BudgetAllocationProcurementItem/GetAll`,
          params,
        });
      };
    