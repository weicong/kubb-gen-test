
import client from "../../../utils/axios-client";
import type { GetExpenditureClassificationsForOrganizationUnitResponse } from "../../models/ExpenditureBudget/GetExpenditureClassificationsForOrganizationUnit";

      /**
* @summary 获取当前科室可用的支出申请类型
* @link /api/services/app/ExpenditureBudget/GetExpenditureClassificationsForOrganizationUnit
*/
      export function getExpenditureClassificationsForOrganizationUnit <TData = GetExpenditureClassificationsForOrganizationUnitResponse>( ) {
        return client<TData>({
          method: "get",
          url: `/api/services/app/ExpenditureBudget/GetExpenditureClassificationsForOrganizationUnit`,
          
        });
      };
    