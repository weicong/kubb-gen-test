
import client from "../../../utils/axios-client";
import type { GetResponse, GetQueryParams } from "../../models/BudgetAllocationItemOrganizationUnitQuarter/Get";

      /**
* @link /api/services/app/BudgetAllocationItemOrganizationUnitQuarter/Get
*/
      export function get <TData = GetResponse>( params?: GetQueryParams) {
        return client<TData>({
          method: "get",
          url: `/api/services/app/BudgetAllocationItemOrganizationUnitQuarter/Get`,
          params,
        });
      };
    