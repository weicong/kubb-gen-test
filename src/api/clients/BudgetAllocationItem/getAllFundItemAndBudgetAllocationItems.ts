
import client from "../../../utils/axios-client";
import type { GetAllFundItemAndBudgetAllocationItemsResponse, GetAllFundItemAndBudgetAllocationItemsQueryParams } from "../../models/BudgetAllocationItem/GetAllFundItemAndBudgetAllocationItems";

      /**
* @link /api/services/app/BudgetAllocationItem/GetAllFundItemAndBudgetAllocationItems
*/
      export function getAllFundItemAndBudgetAllocationItems <TData = GetAllFundItemAndBudgetAllocationItemsResponse>( params?: GetAllFundItemAndBudgetAllocationItemsQueryParams) {
        return client<TData>({
          method: "get",
          url: `/api/services/app/BudgetAllocationItem/GetAllFundItemAndBudgetAllocationItems`,
          params,
        });
      };
    