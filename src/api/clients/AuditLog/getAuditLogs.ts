
import client from "../../../utils/axios-client";
import type { GetAuditLogsResponse, GetAuditLogsQueryParams } from "../../models/AuditLog/GetAuditLogs";

      /**
* @link /api/services/app/AuditLog/GetAuditLogs
*/
      export function getAuditLogs <TData = GetAuditLogsResponse>( params?: GetAuditLogsQueryParams) {
        return client<TData>({
          method: "get",
          url: `/api/services/app/AuditLog/GetAuditLogs`,
          params,
        });
      };
    