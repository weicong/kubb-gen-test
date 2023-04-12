
import client from "../../../utils/axios-client";
import type { GetAllAllowedInputTypeNamesResponse } from "../../models/DynamicEntityParameterDefinition/GetAllAllowedInputTypeNames";

      /**
* @link /api/services/app/DynamicEntityParameterDefinition/GetAllAllowedInputTypeNames
*/
      export function getAllAllowedInputTypeNames <TData = GetAllAllowedInputTypeNamesResponse>( ) {
        return client<TData>({
          method: "get",
          url: `/api/services/app/DynamicEntityParameterDefinition/GetAllAllowedInputTypeNames`,
          
        });
      };
    