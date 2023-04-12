
import client from "../../../utils/axios-client";
import type { MoveTenantsToAnotherEditionRequest, MoveTenantsToAnotherEditionResponse } from "../../models/Edition/MoveTenantsToAnotherEdition";

      /**
* @link /api/services/app/Edition/MoveTenantsToAnotherEdition
*/
      export function moveTenantsToAnotherEdition <TData = MoveTenantsToAnotherEditionResponse, TVariables = MoveTenantsToAnotherEditionRequest>( data: TVariables, ) {
        return client<TData, TVariables>({
          method: "post",
          url: `/api/services/app/Edition/MoveTenantsToAnotherEdition`,
          data,
          
        });
      };
    