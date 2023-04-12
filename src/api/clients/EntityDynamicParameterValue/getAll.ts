
import client from "../../../utils/axios-client";
import type { GetAllResponse, GetAllQueryParams } from "../../models/EntityDynamicParameterValue/GetAll";

      /**
* @link /api/services/app/EntityDynamicParameterValue/GetAll
*/
      export function getAll <TData = GetAllResponse>( params?: GetAllQueryParams) {
        return client<TData>({
          method: "get",
          url: `/api/services/app/EntityDynamicParameterValue/GetAll`,
          params,
        });
      };
    