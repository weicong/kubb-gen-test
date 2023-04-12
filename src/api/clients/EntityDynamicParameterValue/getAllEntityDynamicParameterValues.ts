
import client from "../../../utils/axios-client";
import type { GetAllEntityDynamicParameterValuesResponse, GetAllEntityDynamicParameterValuesQueryParams } from "../../models/EntityDynamicParameterValue/GetAllEntityDynamicParameterValues";

      /**
* @link /api/services/app/EntityDynamicParameterValue/GetAllEntityDynamicParameterValues
*/
      export function getAllEntityDynamicParameterValues <TData = GetAllEntityDynamicParameterValuesResponse>( params?: GetAllEntityDynamicParameterValuesQueryParams) {
        return client<TData>({
          method: "get",
          url: `/api/services/app/EntityDynamicParameterValue/GetAllEntityDynamicParameterValues`,
          params,
        });
      };
    