
import client from "../../../utils/axios-client";
import type { DeleteByEntityRequest, DeleteByEntityResponse, DeleteByEntityQueryParams } from "../../models/UploadedFile/DeleteByEntity";

      /**
* @link /api/services/app/UploadedFile/DeleteByEntity
*/
      export function deleteByEntity <TData = DeleteByEntityResponse, TVariables = DeleteByEntityRequest>( data: TVariables, params?: DeleteByEntityQueryParams) {
        return client<TData, TVariables>({
          method: "delete",
          url: `/api/services/app/UploadedFile/DeleteByEntity`,
          data,
          params,
        });
      };
    