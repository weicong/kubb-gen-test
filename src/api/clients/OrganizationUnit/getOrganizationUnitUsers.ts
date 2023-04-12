
import client from "../../../utils/axios-client";
import type { GetOrganizationUnitUsersResponse, GetOrganizationUnitUsersQueryParams } from "../../models/OrganizationUnit/GetOrganizationUnitUsers";

      /**
* @link /api/services/app/OrganizationUnit/GetOrganizationUnitUsers
*/
      export function getOrganizationUnitUsers <TData = GetOrganizationUnitUsersResponse>( params?: GetOrganizationUnitUsersQueryParams) {
        return client<TData>({
          method: "get",
          url: `/api/services/app/OrganizationUnit/GetOrganizationUnitUsers`,
          params,
        });
      };
    