
import client from "../../../utils/axios-client";
import type { ReEditRequest, ReEditResponse } from "../../models/PayAdjust/ReEdit";

      /**
* @summary 重新修改
* @link /api/services/app/PayAdjust/ReEdit
*/
      export function reEdit <TData = ReEditResponse, TVariables = ReEditRequest>( data: TVariables, ) {
        return client<TData, TVariables>({
          method: "post",
          url: `/api/services/app/PayAdjust/ReEdit`,
          data,
          
        });
      };
    