
import client from "../../../utils/axios-client";
import type { FindAllowedInputTypeRequest, FindAllowedInputTypeResponse, FindAllowedInputTypeQueryParams } from "../../models/DynamicParameter/FindAllowedInputType";

      /**
* @link /api/services/app/DynamicParameter/FindAllowedInputType
*/
      export function findAllowedInputType <TData = FindAllowedInputTypeResponse, TVariables = FindAllowedInputTypeRequest>( data: TVariables, params?: FindAllowedInputTypeQueryParams) {
        return client<TData, TVariables>({
          method: "post",
          url: `/api/services/app/DynamicParameter/FindAllowedInputType`,
          data,
          params,
        });
      };
    