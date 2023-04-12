
import client from "../../../utils/axios-client";
import type { SetAllPassiveRequest, SetAllPassiveResponse } from "../../models/BudgetAllocationItemOrganizationUnit/SetAllPassive";

      /**
* @link /api/services/app/BudgetAllocationItemOrganizationUnit/SetAllPassive
*/
      export function setAllPassive <TData = SetAllPassiveResponse, TVariables = SetAllPassiveRequest>( data: TVariables, ) {
        return client<TData, TVariables>({
          method: "post",
          url: `/api/services/app/BudgetAllocationItemOrganizationUnit/SetAllPassive`,
          data,
          
        });
      };
    