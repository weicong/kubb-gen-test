
import client from "../../../utils/axios-client";
import type { CreateOrUpdateListRequest, CreateOrUpdateListResponse } from "../../models/BudgetAllocationItemOrganizationUnit/CreateOrUpdateList";

      /**
* @link /api/services/app/BudgetAllocationItemOrganizationUnit/CreateOrUpdateList
*/
      export function createOrUpdateList <TData = CreateOrUpdateListResponse, TVariables = CreateOrUpdateListRequest>( data: TVariables, ) {
        return client<TData, TVariables>({
          method: "post",
          url: `/api/services/app/BudgetAllocationItemOrganizationUnit/CreateOrUpdateList`,
          data,
          
        });
      };
    