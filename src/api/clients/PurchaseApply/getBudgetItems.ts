
import client from "../../../utils/axios-client";
import type { GetBudgetItemsResponse, GetBudgetItemsQueryParams } from "../../models/PurchaseApply/GetBudgetItems";

      /**
* @link /api/services/app/PurchaseApply/GetBudgetItems
*/
      export function getBudgetItems <TData = GetBudgetItemsResponse>( params?: GetBudgetItemsQueryParams) {
        return client<TData>({
          method: "get",
          url: `/api/services/app/PurchaseApply/GetBudgetItems`,
          params,
        });
      };
    