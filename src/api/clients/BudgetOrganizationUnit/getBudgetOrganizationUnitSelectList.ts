
import client from "../../../utils/axios-client";
import type { GetBudgetOrganizationUnitSelectListResponse } from "../../models/BudgetOrganizationUnit/GetBudgetOrganizationUnitSelectList";

      /**
* @link /api/services/app/BudgetOrganizationUnit/GetBudgetOrganizationUnitSelectList
*/
      export function getBudgetOrganizationUnitSelectList <TData = GetBudgetOrganizationUnitSelectListResponse>( ) {
        return client<TData>({
          method: "get",
          url: `/api/services/app/BudgetOrganizationUnit/GetBudgetOrganizationUnitSelectList`,
          
        });
      };
    