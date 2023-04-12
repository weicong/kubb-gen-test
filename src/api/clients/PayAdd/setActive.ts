
import client from "../../../utils/axios-client";
import type { SetActiveRequest, SetActiveResponse } from "../../models/PayAdd/SetActive";

      /**
* @summary 定稿
* @link /api/services/app/PayAdd/SetActive
*/
      export function setActive <TData = SetActiveResponse, TVariables = SetActiveRequest>( data: TVariables, ) {
        return client<TData, TVariables>({
          method: "post",
          url: `/api/services/app/PayAdd/SetActive`,
          data,
          
        });
      };
    