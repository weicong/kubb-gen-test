
import client from "../../../utils/axios-client";
import type { DeActivateRequest, DeActivateResponse } from "../../models/UserModels/DeActivate";

      /**
* @link /api/services/app/User/DeActivate
*/
      export function deActivate <TData = DeActivateResponse, TVariables = DeActivateRequest>( data: TVariables, ) {
        return client<TData, TVariables>({
          method: "post",
          url: `/api/services/app/User/DeActivate`,
          data,
          
        });
      };
    