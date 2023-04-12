
import client from "../../../utils/axios-client";
import type { RemoveRequest, RemoveResponse, RemoveQueryParams } from "../../models/UploadedFile/Remove";

      /**
* @link /api/services/app/UploadedFile/Delete
*/
      export function remove <TData = RemoveResponse, TVariables = RemoveRequest>( data: TVariables, params?: RemoveQueryParams) {
        return client<TData, TVariables>({
          method: "delete",
          url: `/api/services/app/UploadedFile/Delete`,
          data,
          params,
        });
      };
    