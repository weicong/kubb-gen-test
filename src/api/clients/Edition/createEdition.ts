
import client from "../../../utils/axios-client";
import type { CreateEditionRequest, CreateEditionResponse } from "../../models/Edition/CreateEdition";

      /**
* @link /api/services/app/Edition/CreateEdition
*/
      export function createEdition <TData = CreateEditionResponse, TVariables = CreateEditionRequest>( data: TVariables, ) {
        return client<TData, TVariables>({
          method: "post",
          url: `/api/services/app/Edition/CreateEdition`,
          data,
          
        });
      };
    