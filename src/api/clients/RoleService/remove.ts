
import client from "../../../utils/axios-client";
import type { RemoveRequest, RemoveResponse, RemoveQueryParams } from "../../models/RoleModels/Remove";

      /**
* @link /api/services/app/Role/Delete
*/
      export function remove <TData = RemoveResponse, TVariables = RemoveRequest>( data: TVariables, params?: RemoveQueryParams) {
        return client<TData, TVariables>({
          method: "delete",
          url: `/api/services/app/Role/Delete`,
          data,
          params,
        });
      };
    