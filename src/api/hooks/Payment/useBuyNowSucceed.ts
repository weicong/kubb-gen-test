
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { BuyNowSucceedRequest, BuyNowSucceedResponse, BuyNowSucceedQueryParams } from "../../models/Payment/BuyNowSucceed";

        /**
* @link /api/services/app/Payment/BuyNowSucceed
*/
        export function useBuyNowSucceed <TData = BuyNowSucceedResponse, TError = unknown, TVariables = BuyNowSucceedRequest>( params?: BuyNowSucceedQueryParams, options?: {
          mutation?: UseMutationOptions<TData, TError, TVariables>
        }) {
          const { mutation: mutationOptions } = options ?? {};

          return useMutation<TData, TError, TVariables>({
            mutationFn: (data) => {
              return client<TData, TVariables>({
                method: "post",
                url: `/api/services/app/Payment/BuyNowSucceed`,
                data,
                params,
              });
            },
            ...mutationOptions
          });
        };
    