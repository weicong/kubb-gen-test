
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { UpgradeSubscriptionCostsLessThenMinAmountRequest, UpgradeSubscriptionCostsLessThenMinAmountResponse, UpgradeSubscriptionCostsLessThenMinAmountQueryParams } from "../../models/Payment/UpgradeSubscriptionCostsLessThenMinAmount";

        /**
* @link /api/services/app/Payment/UpgradeSubscriptionCostsLessThenMinAmount
*/
        export function useUpgradeSubscriptionCostsLessThenMinAmount <TData = UpgradeSubscriptionCostsLessThenMinAmountResponse, TError = unknown, TVariables = UpgradeSubscriptionCostsLessThenMinAmountRequest>( params?: UpgradeSubscriptionCostsLessThenMinAmountQueryParams, options?: {
          mutation?: UseMutationOptions<TData, TError, TVariables>
        }) {
          const { mutation: mutationOptions } = options ?? {};

          return useMutation<TData, TError, TVariables>({
            mutationFn: (data) => {
              return client<TData, TVariables>({
                method: "post",
                url: `/api/services/app/Payment/UpgradeSubscriptionCostsLessThenMinAmount`,
                data,
                params,
              });
            },
            ...mutationOptions
          });
        };
    