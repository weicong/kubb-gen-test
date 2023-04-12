
import client from "../../../utils/axios-client";
import type { SetActiveRequest, SetActiveResponse } from "../../models/BudgetAllocationItemOrganizationUnit/SetActive";

      /**
* @link /api/services/app/BudgetAllocationItemOrganizationUnit/SetActive
*/
      export function setActive <TData = SetActiveResponse, TVariables = SetActiveRequest>( data: TVariables, ) {
        return client<TData, TVariables>({
          method: "post",
          url: `/api/services/app/BudgetAllocationItemOrganizationUnit/SetActive`,
          data,
          
        });
      };
    