
import client from "../../../utils/axios-client";
import type { CreatePaymentRequest, CreatePaymentResponse } from "../../models/Payment/CreatePayment";

      /**
* @link /api/services/app/Payment/CreatePayment
*/
      export function createPayment <TData = CreatePaymentResponse, TVariables = CreatePaymentRequest>( data: TVariables, ) {
        return client<TData, TVariables>({
          method: "post",
          url: `/api/services/app/Payment/CreatePayment`,
          data,
          
        });
      };
    