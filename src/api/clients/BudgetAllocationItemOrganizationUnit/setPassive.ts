
import client from "../../../utils/axios-client";
import type { SetPassiveRequest, SetPassiveResponse } from "../../models/BudgetAllocationItemOrganizationUnit/SetPassive";

      /**
* @link /api/services/app/BudgetAllocationItemOrganizationUnit/SetPassive
*/
      export function setPassive <TData = SetPassiveResponse, TVariables = SetPassiveRequest>( data: TVariables, ) {
        return client<TData, TVariables>({
          method: "post",
          url: `/api/services/app/BudgetAllocationItemOrganizationUnit/SetPassive`,
          data,
          
        });
      };
    