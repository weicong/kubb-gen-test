
import client from "../../../utils/axios-client";
import type { GetAllValuesOfDynamicParameterResponse, GetAllValuesOfDynamicParameterQueryParams } from "../../models/DynamicParameterValue/GetAllValuesOfDynamicParameter";

      /**
* @link /api/services/app/DynamicParameterValue/GetAllValuesOfDynamicParameter
*/
      export function getAllValuesOfDynamicParameter <TData = GetAllValuesOfDynamicParameterResponse>( params?: GetAllValuesOfDynamicParameterQueryParams) {
        return client<TData>({
          method: "get",
          url: `/api/services/app/DynamicParameterValue/GetAllValuesOfDynamicParameter`,
          params,
        });
      };
    