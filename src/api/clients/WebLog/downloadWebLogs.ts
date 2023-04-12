
import client from "../../../utils/axios-client";
import type { DownloadWebLogsRequest, DownloadWebLogsResponse } from "../../models/WebLog/DownloadWebLogs";

      /**
* @link /api/services/app/WebLog/DownloadWebLogs
*/
      export function downloadWebLogs <TData = DownloadWebLogsResponse, TVariables = DownloadWebLogsRequest>( data: TVariables, ) {
        return client<TData, TVariables>({
          method: "post",
          url: `/api/services/app/WebLog/DownloadWebLogs`,
          data,
          
        });
      };
    