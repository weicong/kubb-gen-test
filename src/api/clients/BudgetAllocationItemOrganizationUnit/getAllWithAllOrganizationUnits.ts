
import client from "../../../utils/axios-client";
import type { GetAllWithAllOrganizationUnitsResponse, GetAllWithAllOrganizationUnitsQueryParams } from "../../models/BudgetAllocationItemOrganizationUnit/GetAllWithAllOrganizationUnits";

      /**
* @summary 用于财务预算分解
* @link /api/services/app/BudgetAllocationItemOrganizationUnit/GetAllWithAllOrganizationUnits
*/
      export function getAllWithAllOrganizationUnits <TData = GetAllWithAllOrganizationUnitsResponse>( params?: GetAllWithAllOrganizationUnitsQueryParams) {
        return client<TData>({
          method: "get",
          url: `/api/services/app/BudgetAllocationItemOrganizationUnit/GetAllWithAllOrganizationUnits`,
          params,
        });
      };
    