
import client from "../../../utils/axios-client";
import type { GetAllParametersOfAnEntityResponse, GetAllParametersOfAnEntityQueryParams } from "../../models/EntityDynamicParameter/GetAllParametersOfAnEntity";

      /**
* @link /api/services/app/EntityDynamicParameter/GetAllParametersOfAnEntity
*/
      export function getAllParametersOfAnEntity <TData = GetAllParametersOfAnEntityResponse>( params?: GetAllParametersOfAnEntityQueryParams) {
        return client<TData>({
          method: "get",
          url: `/api/services/app/EntityDynamicParameter/GetAllParametersOfAnEntity`,
          params,
        });
      };
    