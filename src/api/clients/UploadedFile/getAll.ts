
import client from "../../../utils/axios-client";
import type { GetAllResponse, GetAllQueryParams } from "../../models/UploadedFile/GetAll";

      /**
* @link /api/services/app/UploadedFile/GetAll
*/
      export function getAll <TData = GetAllResponse>( params?: GetAllQueryParams) {
        return client<TData>({
          method: "get",
          url: `/api/services/app/UploadedFile/GetAll`,
          params,
        });
      };
    