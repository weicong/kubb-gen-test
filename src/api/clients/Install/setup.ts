
import client from "../../../utils/axios-client";
import type { SetupRequest, SetupResponse } from "../../models/Install/Setup";

      /**
* @link /api/services/app/Install/Setup
*/
      export function setup <TData = SetupResponse, TVariables = SetupRequest>( data: TVariables, ) {
        return client<TData, TVariables>({
          method: "post",
          url: `/api/services/app/Install/Setup`,
          data,
          
        });
      };
    