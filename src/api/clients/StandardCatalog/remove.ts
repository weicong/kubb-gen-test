
import client from "../../../utils/axios-client";
import type { RemoveRequest, RemoveResponse, RemoveQueryParams } from "../../models/StandardCatalog/Remove";

      /**
* @link /api/services/app/StandardCatalog/Delete
*/
      export function remove <TData = RemoveResponse, TVariables = RemoveRequest>( data: TVariables, params?: RemoveQueryParams) {
        return client<TData, TVariables>({
          method: "delete",
          url: `/api/services/app/StandardCatalog/Delete`,
          data,
          params,
        });
      };
    