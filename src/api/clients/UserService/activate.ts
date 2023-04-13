
import client from "../../../utils/axios-client";
import type { ActivateRequest, ActivateResponse } from "../../models/UserModels/Activate";

      /**
* @link /api/services/app/User/Activate
*/
      export function activate <TData = ActivateResponse, TVariables = ActivateRequest>( data: TVariables, ) {
        return client<TData, TVariables>({
          method: "post",
          url: `/api/services/app/User/Activate`,
          data,
          
        });
      };
    