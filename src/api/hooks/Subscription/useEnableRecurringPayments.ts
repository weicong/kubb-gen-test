
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { EnableRecurringPaymentsRequest, EnableRecurringPaymentsResponse } from "../../models/Subscription/EnableRecurringPayments";

        /**
* @link /api/services/app/Subscription/EnableRecurringPayments
*/
        export function useEnableRecurringPayments <TData = EnableRecurringPaymentsResponse, TError = unknown, TVariables = EnableRecurringPaymentsRequest>(  options?: {
          mutation?: UseMutationOptions<TData, TError, TVariables>
        }) {
          const { mutation: mutationOptions } = options ?? {};

          return useMutation<TData, TError, TVariables>({
            mutationFn: (data) => {
              return client<TData, TVariables>({
                method: "post",
                url: `/api/services/app/Subscription/EnableRecurringPayments`,
                data,
                
              });
            },
            ...mutationOptions
          });
        };
    