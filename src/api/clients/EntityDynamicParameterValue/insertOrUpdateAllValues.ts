
import client from "../../../utils/axios-client";
import type { InsertOrUpdateAllValuesRequest, InsertOrUpdateAllValuesResponse } from "../../models/EntityDynamicParameterValue/InsertOrUpdateAllValues";

      /**
* @link /api/services/app/EntityDynamicParameterValue/InsertOrUpdateAllValues
*/
      export function insertOrUpdateAllValues <TData = InsertOrUpdateAllValuesResponse, TVariables = InsertOrUpdateAllValuesRequest>( data: TVariables, ) {
        return client<TData, TVariables>({
          method: "post",
          url: `/api/services/app/EntityDynamicParameterValue/InsertOrUpdateAllValues`,
          data,
          
        });
      };
    