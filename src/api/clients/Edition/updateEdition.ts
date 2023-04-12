
import client from "../../../utils/axios-client";
import type { UpdateEditionRequest, UpdateEditionResponse } from "../../models/Edition/UpdateEdition";

      /**
* @link /api/services/app/Edition/UpdateEdition
*/
      export function updateEdition <TData = UpdateEditionResponse, TVariables = UpdateEditionRequest>( data: TVariables, ) {
        return client<TData, TVariables>({
          method: "put",
          url: `/api/services/app/Edition/UpdateEdition`,
          data,
          
        });
      };
    