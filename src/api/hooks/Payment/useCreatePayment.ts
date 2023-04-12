
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { CreatePaymentRequest, CreatePaymentResponse } from "../../models/Payment/CreatePayment";

        /**
* @link /api/services/app/Payment/CreatePayment
*/
        export function useCreatePayment <TData = CreatePaymentResponse, TError = unknown, TVariables = CreatePaymentRequest>(  options?: {
          mutation?: UseMutationOptions<TData, TError, TVariables>
        }) {
          const { mutation: mutationOptions } = options ?? {};

          return useMutation<TData, TError, TVariables>({
            mutationFn: (data) => {
              return client<TData, TVariables>({
                method: "post",
                url: `/api/services/app/Payment/CreatePayment`,
                data,
                
              });
            },
            ...mutationOptions
          });
        };
    