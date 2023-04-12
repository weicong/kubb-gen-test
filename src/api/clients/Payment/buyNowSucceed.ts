
import client from "../../../utils/axios-client";
import type { BuyNowSucceedRequest, BuyNowSucceedResponse, BuyNowSucceedQueryParams } from "../../models/Payment/BuyNowSucceed";

      /**
* @link /api/services/app/Payment/BuyNowSucceed
*/
      export function buyNowSucceed <TData = BuyNowSucceedResponse, TVariables = BuyNowSucceedRequest>( data: TVariables, params?: BuyNowSucceedQueryParams) {
        return client<TData, TVariables>({
          method: "post",
          url: `/api/services/app/Payment/BuyNowSucceed`,
          data,
          params,
        });
      };
    