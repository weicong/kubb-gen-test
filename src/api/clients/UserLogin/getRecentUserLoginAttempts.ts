
import client from "../../../utils/axios-client";
import type { GetRecentUserLoginAttemptsResponse } from "../../models/UserLogin/GetRecentUserLoginAttempts";

      /**
* @link /api/services/app/UserLogin/GetRecentUserLoginAttempts
*/
      export function getRecentUserLoginAttempts <TData = GetRecentUserLoginAttemptsResponse>( ) {
        return client<TData>({
          method: "get",
          url: `/api/services/app/UserLogin/GetRecentUserLoginAttempts`,
          
        });
      };
    