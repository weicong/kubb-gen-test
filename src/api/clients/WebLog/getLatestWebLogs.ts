
import client from "../../../utils/axios-client";
import type { GetLatestWebLogsResponse } from "../../models/WebLog/GetLatestWebLogs";

      /**
* @link /api/services/app/WebLog/GetLatestWebLogs
*/
      export function getLatestWebLogs <TData = GetLatestWebLogsResponse>( ) {
        return client<TData>({
          method: "get",
          url: `/api/services/app/WebLog/GetLatestWebLogs`,
          
        });
      };
    