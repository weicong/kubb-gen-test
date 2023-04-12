
import client from "../../../utils/axios-client";
import type { GetOrganizationBudgetStatisticDataResponse, GetOrganizationBudgetStatisticDataQueryParams } from "../../models/BudgetItemStatistics/GetOrganizationBudgetStatisticData";

      /**
* @link /api/services/app/BudgetItemStatistics/GetOrganizationBudgetStatisticData
*/
      export function getOrganizationBudgetStatisticData <TData = GetOrganizationBudgetStatisticDataResponse>( params?: GetOrganizationBudgetStatisticDataQueryParams) {
        return client<TData>({
          method: "get",
          url: `/api/services/app/BudgetItemStatistics/GetOrganizationBudgetStatisticData`,
          params,
        });
      };
    