
import client from "../../../utils/axios-client";
import type { ExtendSucceedRequest, ExtendSucceedResponse, ExtendSucceedQueryParams } from "../../models/Payment/ExtendSucceed";

      /**
* @link /api/services/app/Payment/ExtendSucceed
*/
      export function extendSucceed <TData = ExtendSucceedResponse, TVariables = ExtendSucceedRequest>( data: TVariables, params?: ExtendSucceedQueryParams) {
        return client<TData, TVariables>({
          method: "post",
          url: `/api/services/app/Payment/ExtendSucceed`,
          data,
          params,
        });
      };
    