
import client from "../../../utils/axios-client";
import type { GetEntityTypeChangesResponse, GetEntityTypeChangesQueryParams } from "../../models/AuditLog/GetEntityTypeChanges";

      /**
* @link /api/services/app/AuditLog/GetEntityTypeChanges
*/
      export function getEntityTypeChanges <TData = GetEntityTypeChangesResponse>( params?: GetEntityTypeChangesQueryParams) {
        return client<TData>({
          method: "get",
          url: `/api/services/app/AuditLog/GetEntityTypeChanges`,
          params,
        });
      };
    