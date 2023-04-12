
import client from "../../../utils/axios-client";
import type { GetEntityPropertyChangesResponse, GetEntityPropertyChangesQueryParams } from "../../models/AuditLog/GetEntityPropertyChanges";

      /**
* @link /api/services/app/AuditLog/GetEntityPropertyChanges
*/
      export function getEntityPropertyChanges <TData = GetEntityPropertyChangesResponse>( params?: GetEntityPropertyChangesQueryParams) {
        return client<TData>({
          method: "get",
          url: `/api/services/app/AuditLog/GetEntityPropertyChanges`,
          params,
        });
      };
    