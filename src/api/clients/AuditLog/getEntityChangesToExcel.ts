
import client from "../../../utils/axios-client";
import type { GetEntityChangesToExcelResponse, GetEntityChangesToExcelQueryParams } from "../../models/AuditLog/GetEntityChangesToExcel";

      /**
* @link /api/services/app/AuditLog/GetEntityChangesToExcel
*/
      export function getEntityChangesToExcel <TData = GetEntityChangesToExcelResponse>( params?: GetEntityChangesToExcelQueryParams) {
        return client<TData>({
          method: "get",
          url: `/api/services/app/AuditLog/GetEntityChangesToExcel`,
          params,
        });
      };
    