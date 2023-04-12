
import client from "../../../utils/axios-client";
import type { GetAllResponse, GetAllQueryParams } from "../../models/BudgetAllocationItemOrganizationUnit/GetAll";

      /**
* @summary 获取全部
* @link /api/services/app/BudgetAllocationItemOrganizationUnit/GetAll
*/
      export function getAll <TData = GetAllResponse>( params?: GetAllQueryParams) {
        return client<TData>({
          method: "get",
          url: `/api/services/app/BudgetAllocationItemOrganizationUnit/GetAll`,
          params,
        });
      };
    