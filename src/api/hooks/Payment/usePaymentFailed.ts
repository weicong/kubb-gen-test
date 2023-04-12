
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { PaymentFailedRequest, PaymentFailedResponse, PaymentFailedQueryParams } from "../../models/Payment/PaymentFailed";

        /**
* @link /api/services/app/Payment/PaymentFailed
*/
        export function usePaymentFailed <TData = PaymentFailedResponse, TError = unknown, TVariables = PaymentFailedRequest>( params?: PaymentFailedQueryParams, options?: {
          mutation?: UseMutationOptions<TData, TError, TVariables>
        }) {
          const { mutation: mutationOptions } = options ?? {};

          return useMutation<TData, TError, TVariables>({
            mutationFn: (data) => {
              return client<TData, TVariables>({
                method: "post",
                url: `/api/services/app/Payment/PaymentFailed`,
                data,
                params,
              });
            },
            ...mutationOptions
          });
        };
    