
import client from "../../../utils/axios-client";
import type { FixRequest, FixResponse } from "../../models/BudgetAllocationItemOrganizationUnitQuarter/Fix";

      /**
* @link /api/services/app/BudgetAllocationItemOrganizationUnitQuarter/Fix
*/
      export function fix <TData = FixResponse, TVariables = FixRequest>( data: TVariables, ) {
        return client<TData, TVariables>({
          method: "post",
          url: `/api/services/app/BudgetAllocationItemOrganizationUnitQuarter/Fix`,
          data,
          
        });
      };
    