
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { CreatePaymentSessionRequest, CreatePaymentSessionResponse } from "../../models/StripePayment/CreatePaymentSession";

        /**
* @link /api/services/app/StripePayment/CreatePaymentSession
*/
        export function useCreatePaymentSession <TData = CreatePaymentSessionResponse, TError = unknown, TVariables = CreatePaymentSessionRequest>(  options?: {
          mutation?: UseMutationOptions<TData, TError, TVariables>
        }) {
          const { mutation: mutationOptions } = options ?? {};

          return useMutation<TData, TError, TVariables>({
            mutationFn: (data) => {
              return client<TData, TVariables>({
                method: "post",
                url: `/api/services/app/StripePayment/CreatePaymentSession`,
                data,
                
              });
            },
            ...mutationOptions
          });
        };
    