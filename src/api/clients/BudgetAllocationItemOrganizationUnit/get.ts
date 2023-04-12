
import client from "../../../utils/axios-client";
import type { GetResponse, GetQueryParams } from "../../models/BudgetAllocationItemOrganizationUnit/Get";

      /**
* @link /api/services/app/BudgetAllocationItemOrganizationUnit/Get
*/
      export function get <TData = GetResponse>( params?: GetQueryParams) {
        return client<TData>({
          method: "get",
          url: `/api/services/app/BudgetAllocationItemOrganizationUnit/Get`,
          params,
        });
      };
    