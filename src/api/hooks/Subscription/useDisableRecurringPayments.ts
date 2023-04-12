
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { DisableRecurringPaymentsRequest, DisableRecurringPaymentsResponse } from "../../models/Subscription/DisableRecurringPayments";

        /**
* @link /api/services/app/Subscription/DisableRecurringPayments
*/
        export function useDisableRecurringPayments <TData = DisableRecurringPaymentsResponse, TError = unknown, TVariables = DisableRecurringPaymentsRequest>(  options?: {
          mutation?: UseMutationOptions<TData, TError, TVariables>
        }) {
          const { mutation: mutationOptions } = options ?? {};

          return useMutation<TData, TError, TVariables>({
            mutationFn: (data) => {
              return client<TData, TVariables>({
                method: "post",
                url: `/api/services/app/Subscription/DisableRecurringPayments`,
                data,
                
              });
            },
            ...mutationOptions
          });
        };
    