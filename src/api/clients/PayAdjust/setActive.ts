
import client from "../../../utils/axios-client";
import type { SetActiveRequest, SetActiveResponse } from "../../models/PayAdjust/SetActive";

      /**
* @summary 定稿
* @link /api/services/app/PayAdjust/SetActive
*/
      export function setActive <TData = SetActiveResponse, TVariables = SetActiveRequest>( data: TVariables, ) {
        return client<TData, TVariables>({
          method: "post",
          url: `/api/services/app/PayAdjust/SetActive`,
          data,
          
        });
      };
    