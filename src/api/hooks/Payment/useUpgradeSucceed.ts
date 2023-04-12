
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import client from "../../../utils/axios-client";
import type { UpgradeSucceedRequest, UpgradeSucceedResponse, UpgradeSucceedQueryParams } from "../../models/Payment/UpgradeSucceed";

        /**
* @link /api/services/app/Payment/UpgradeSucceed
*/
        export function useUpgradeSucceed <TData = UpgradeSucceedResponse, TError = unknown, TVariables = UpgradeSucceedRequest>( params?: UpgradeSucceedQueryParams, options?: {
          mutation?: UseMutationOptions<TData, TError, TVariables>
        }) {
          const { mutation: mutationOptions } = options ?? {};

          return useMutation<TData, TError, TVariables>({
            mutationFn: (data) => {
              return client<TData, TVariables>({
                method: "post",
                url: `/api/services/app/Payment/UpgradeSucceed`,
                data,
                params,
              });
            },
            ...mutationOptions
          });
        };
    