
import client from "../../../utils/axios-client";
import type { RemoveRequest, RemoveResponse, RemoveQueryParams } from "../../models/EntityDynamicParameter/Remove";

      /**
* @link /api/services/app/EntityDynamicParameter/Delete
*/
      export function remove <TData = RemoveResponse, TVariables = RemoveRequest>( data: TVariables, params?: RemoveQueryParams) {
        return client<TData, TVariables>({
          method: "delete",
          url: `/api/services/app/EntityDynamicParameter/Delete`,
          data,
          params,
        });
      };
    