
import client from "../../../utils/axios-client";
import type { GetMemberActivityResponse } from "../../models/TenantDashboard/GetMemberActivity";

      /**
* @link /api/services/app/TenantDashboard/GetMemberActivity
*/
      export function getMemberActivity <TData = GetMemberActivityResponse>( ) {
        return client<TData>({
          method: "get",
          url: `/api/services/app/TenantDashboard/GetMemberActivity`,
          
        });
      };
    