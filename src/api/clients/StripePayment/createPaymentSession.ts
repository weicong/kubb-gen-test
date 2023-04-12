
import client from "../../../utils/axios-client";
import type { CreatePaymentSessionRequest, CreatePaymentSessionResponse } from "../../models/StripePayment/CreatePaymentSession";

      /**
* @link /api/services/app/StripePayment/CreatePaymentSession
*/
      export function createPaymentSession <TData = CreatePaymentSessionResponse, TVariables = CreatePaymentSessionRequest>( data: TVariables, ) {
        return client<TData, TVariables>({
          method: "post",
          url: `/api/services/app/StripePayment/CreatePaymentSession`,
          data,
          
        });
      };
    