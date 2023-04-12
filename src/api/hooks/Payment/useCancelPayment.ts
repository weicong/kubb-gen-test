
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { CancelPaymentRequest, CancelPaymentResponse } from "../../models/Payment/CancelPayment";

        /**
* @link /api/services/app/Payment/CancelPayment
*/
        export function useCancelPayment <TData = CancelPaymentResponse, TError = unknown, TVariables = CancelPaymentRequest>(  options?: {
          mutation?: UseMutationOptions<TData, TError, TVariables>
        }) {
          const { mutation: mutationOptions } = options ?? {};

          return useMutation<TData, TError, TVariables>({
            mutationFn: (data) => {
              return client<TData, TVariables>({
                method: "post",
                url: `/api/services/app/Payment/CancelPayment`,
                data,
                
              });
            },
            ...mutationOptions
          });
        };
    