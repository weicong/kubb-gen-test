
import client from "../../../utils/axios-client";
import type { GetEntityHistoryObjectTypesResponse } from "../../models/AuditLog/GetEntityHistoryObjectTypes";

      /**
* @link /api/services/app/AuditLog/GetEntityHistoryObjectTypes
*/
      export function getEntityHistoryObjectTypes <TData = GetEntityHistoryObjectTypesResponse>( ) {
        return client<TData>({
          method: "get",
          url: `/api/services/app/AuditLog/GetEntityHistoryObjectTypes`,
          
        });
      };
    