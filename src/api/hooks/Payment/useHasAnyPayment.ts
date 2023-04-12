
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { HasAnyPaymentRequest, HasAnyPaymentResponse } from "../../models/Payment/HasAnyPayment";

        /**
* @link /api/services/app/Payment/HasAnyPayment
*/
        export function useHasAnyPayment <TData = HasAnyPaymentResponse, TError = unknown, TVariables = HasAnyPaymentRequest>(  options?: {
          mutation?: UseMutationOptions<TData, TError, TVariables>
        }) {
          const { mutation: mutationOptions } = options ?? {};

          return useMutation<TData, TError, TVariables>({
            mutationFn: (data) => {
              return client<TData, TVariables>({
                method: "post",
                url: `/api/services/app/Payment/HasAnyPayment`,
                data,
                
              });
            },
            ...mutationOptions
          });
        };
    