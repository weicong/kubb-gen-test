
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { ConfirmPaymentRequest, ConfirmPaymentResponse, ConfirmPaymentQueryParams } from "../../models/PayPalPayment/ConfirmPayment";

        /**
* @link /api/services/app/PayPalPayment/ConfirmPayment
*/
        export function useConfirmPayment <TData = ConfirmPaymentResponse, TError = unknown, TVariables = ConfirmPaymentRequest>( params?: ConfirmPaymentQueryParams, options?: {
          mutation?: UseMutationOptions<TData, TError, TVariables>
        }) {
          const { mutation: mutationOptions } = options ?? {};

          return useMutation<TData, TError, TVariables>({
            mutationFn: (data) => {
              return client<TData, TVariables>({
                method: "post",
                url: `/api/services/app/PayPalPayment/ConfirmPayment`,
                data,
                params,
              });
            },
            ...mutationOptions
          });
        };
    