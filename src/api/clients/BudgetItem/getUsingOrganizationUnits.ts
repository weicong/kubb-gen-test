
import client from "../../../utils/axios-client";
import type { GetUsingOrganizationUnitsResponse } from "../../models/BudgetItem/GetUsingOrganizationUnits";

      /**
* @summary 获取所有使用科室
* @link /api/services/app/BudgetItem/GetUsingOrganizationUnits
*/
      export function getUsingOrganizationUnits <TData = GetUsingOrganizationUnitsResponse>( ) {
        return client<TData>({
          method: "get",
          url: `/api/services/app/BudgetItem/GetUsingOrganizationUnits`,
          
        });
      };
    