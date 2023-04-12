
import client from "../../../utils/axios-client";
import type { CheckDatabaseRequest, CheckDatabaseResponse } from "../../models/Install/CheckDatabase";

      /**
* @link /api/services/app/Install/CheckDatabase
*/
      export function checkDatabase <TData = CheckDatabaseResponse, TVariables = CheckDatabaseRequest>( data: TVariables, ) {
        return client<TData, TVariables>({
          method: "post",
          url: `/api/services/app/Install/CheckDatabase`,
          data,
          
        });
      };
    