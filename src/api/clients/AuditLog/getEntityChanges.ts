
import client from "../../../utils/axios-client";
import type { GetEntityChangesResponse, GetEntityChangesQueryParams } from "../../models/AuditLog/GetEntityChanges";

      /**
* @link /api/services/app/AuditLog/GetEntityChanges
*/
      export function getEntityChanges <TData = GetEntityChangesResponse>( params?: GetEntityChangesQueryParams) {
        return client<TData>({
          method: "get",
          url: `/api/services/app/AuditLog/GetEntityChanges`,
          params,
        });
      };
    