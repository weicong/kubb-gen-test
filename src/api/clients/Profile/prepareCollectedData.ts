
import client from "../../../utils/axios-client";
import type { PrepareCollectedDataRequest, PrepareCollectedDataResponse } from "../../models/Profile/PrepareCollectedData";

      /**
* @link /api/services/app/Profile/PrepareCollectedData
*/
      export function prepareCollectedData <TData = PrepareCollectedDataResponse, TVariables = PrepareCollectedDataRequest>( data: TVariables, ) {
        return client<TData, TVariables>({
          method: "post",
          url: `/api/services/app/Profile/PrepareCollectedData`,
          data,
          
        });
      };
    