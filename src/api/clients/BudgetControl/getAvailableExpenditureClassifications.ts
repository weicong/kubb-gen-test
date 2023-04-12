
import client from "../../../utils/axios-client";
import type { GetAvailableExpenditureClassificationsResponse } from "../../models/BudgetControl/GetAvailableExpenditureClassifications";

      /**
* @summary 获取当前科室可用的支出申请类型
* @link /api/services/app/BudgetControl/GetAvailableExpenditureClassifications
*/
      export function getAvailableExpenditureClassifications <TData = GetAvailableExpenditureClassificationsResponse>( ) {
        return client<TData>({
          method: "get",
          url: `/api/services/app/BudgetControl/GetAvailableExpenditureClassifications`,
          
        });
      };
    