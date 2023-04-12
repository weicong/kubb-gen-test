
import client from "../../../utils/axios-client";
import type { CleanValuesRequest, CleanValuesResponse } from "../../models/EntityDynamicParameterValue/CleanValues";

      /**
* @link /api/services/app/EntityDynamicParameterValue/CleanValues
*/
      export function cleanValues <TData = CleanValuesResponse, TVariables = CleanValuesRequest>( data: TVariables, ) {
        return client<TData, TVariables>({
          method: "post",
          url: `/api/services/app/EntityDynamicParameterValue/CleanValues`,
          data,
          
        });
      };
    