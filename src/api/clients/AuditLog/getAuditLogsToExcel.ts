
import client from "../../../utils/axios-client";
import type { GetAuditLogsToExcelResponse, GetAuditLogsToExcelQueryParams } from "../../models/AuditLog/GetAuditLogsToExcel";

      /**
* @link /api/services/app/AuditLog/GetAuditLogsToExcel
*/
      export function getAuditLogsToExcel <TData = GetAuditLogsToExcelResponse>( params?: GetAuditLogsToExcelQueryParams) {
        return client<TData>({
          method: "get",
          url: `/api/services/app/AuditLog/GetAuditLogsToExcel`,
          params,
        });
      };
    